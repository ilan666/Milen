using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.DataAccess;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseAPIController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AccountController(DataContext context, IMapper mapper, ITokenService tokenService)
        {
        _tokenService = tokenService;
            _context = context;
            _mapper = mapper;
        }

        [HttpPost("register")] // api/account/register
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDto)
        {
            using var hmac = new HMACSHA512();

            if(await UserExists(registerDto.Email)) return new BadRequestResult();

            var user = _mapper.Map<User>(registerDto);

            user.PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(registerDto.Password));
            user.PasswordSalt = hmac.Key;

            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return new UserDTO
            {
                Username = user.FirstName + ' ' + user.LastName,
                Token = _tokenService.CreateToken(user)
            };
        }

        private async Task<bool> UserExists(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email.ToLower());
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await this._context
            .Users
            .SingleOrDefaultAsync(u => u.Email == loginDto.Email.ToLower());

            if (user == null) return new UnauthorizedResult();

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computeHash.Length; i++)
            {
                if(computeHash[i] != user.PasswordHash[i]) new UnauthorizedResult();
            }

            return new UserDTO
            {
                Username = user.FirstName + ' ' + user.LastName,
                Token = _tokenService.CreateToken(user)
            };
        }
    }
}