using Microsoft.EntityFrameworkCore;
using server_dotnet.Models;

namespace server_dotnet.Data
{
    public class ServerDBContext : DbContext
    {
        public ServerDBContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}
