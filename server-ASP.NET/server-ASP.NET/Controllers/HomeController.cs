using Microsoft.AspNetCore.Mvc;
using server_ASP.NET.Models;
using System.Diagnostics;

namespace server_ASP.NET.Controllers
{
    public class HomeController : Controller
    {
      public string Index()
        {
            return "Hello World";
        }


    }
}