using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DataAccess;

namespace API.Controllers
{
    public class UserController : BaseAPIController
    {
    private readonly DataContext _context;
        public UserController(DataContext context)
        {
      _context = context;
            
        }
    }
}