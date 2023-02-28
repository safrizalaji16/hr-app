using System;
using System.Collections.Generic;

namespace server_dotnet.Models;

public partial class JobTitle
{
    public int Id { get; set; }

    public string Code { get; set; } = null!;

    public string Name { get; set; } = null!;

    public virtual ICollection<JobPosition> JobPositions { get; } = new List<JobPosition>();
}
