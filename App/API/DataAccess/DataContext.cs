using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DataAccess
{
  public class DataContext : DbContext
  {
    public DbSet<User>? Users { get; set; }
    public DataContext(DbContextOptions options): base (options)
    {
    }
  }
}