using System;
using System.Collections.Generic;

namespace server_dotnet.Models;

public partial class JobPosition
{
    public int Id { get; set; }

    public string Code { get; set; } = null!;

    public string Name { get; set; } = null!;

    public int Jobtitleid { get; set; }

    public virtual ICollection<Employee> Employees { get; } = new List<Employee>();

    public virtual JobTitle Jobtitle { get; set; } = null!;
}
