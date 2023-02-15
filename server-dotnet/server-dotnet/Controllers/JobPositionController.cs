using Microsoft.AspNetCore.Mvc;
using server_dotnet.Models;
using server_dotnet.Services;

namespace server_dotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobPositionController : Controller
    {
        private readonly IJobPositionService _jobPositionService;
        public JobPositionController(IJobPositionService jobPositionService)
        {
            _jobPositionService = jobPositionService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _jobPositionService.GetJobPositionList();
            return Ok(result);
        }

        //[HttpGet("{id:int}")]
        //public async Task<IActionResult> GetJobPosition(int id)
        //{
        //    var result = await _jobPositionService.GetJobPosition(id);
        //    return Ok(result);
        //}
        [HttpPost]
        public async Task<IActionResult> AddJobPosition([FromBody]JobPosition jobPosition)
        {
            var result = await _jobPositionService.CreateJobPosition(jobPosition);
            return Ok(result);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateJobPosition([FromBody]JobPosition jobPosition)
        {
            var result = await _jobPositionService.UpdateJobPosition(jobPosition);
            return Ok(result);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteJobPosition(int id)
        {
            var result = await _jobPositionService.DeleteJobPosition(id);
            return Ok(result);
        }
    }
}
