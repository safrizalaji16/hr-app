using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_dotnet.Models;

namespace server_dotnet.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly HrDotnetDbContext _context;
        public UserController(HrDotnetDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> Register(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
