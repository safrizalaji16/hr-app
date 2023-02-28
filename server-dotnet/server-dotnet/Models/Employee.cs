using System;
using System.Collections.Generic;

namespace server_dotnet.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Nik { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int Jobpositionid { get; set; }

    public virtual JobPosition Jobposition { get; set; } = null!;
}
