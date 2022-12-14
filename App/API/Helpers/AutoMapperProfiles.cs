using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RegisterDTO, User>()
            .ForMember(
                dest => dest.Email,
                opt => {
                    opt.MapFrom(src => src.Email.ToLower());
                }
            );
        }
    }
}