﻿using Microsoft.AspNetCore.Mvc;
using server_dotnet.Models;
using server_dotnet.Services;

namespace server_dotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _employeeService.GetEmployeeList();
            return Ok(result);
        }

        //[HttpGet("{id:int}")]
        //public async Task<IActionResult> GetEmployee(int id)
        //{
        //    var result = await _employeeService.GetEmployee(id);
        //    return Ok(result);
        //}
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody]Employee employee)
        {
            var result = await _employeeService.CreateEmployee(employee);
            return Ok(result);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateEmployee([FromBody]Employee employee)
        {
            var result = await _employeeService.UpdateEmployee(employee);
            return Ok(result);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var result = await _employeeService.DeleteEmployee(id);
            return Ok(result);
        }
    }
}
