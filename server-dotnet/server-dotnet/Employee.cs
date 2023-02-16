namespace server_dotnet
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Nik { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public int JobPositionId { get; set; }
    }
}
