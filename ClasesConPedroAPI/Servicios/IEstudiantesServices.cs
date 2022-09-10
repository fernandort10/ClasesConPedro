using ClasesConPedroAPI.Models;

namespace ClasesConPedroAPI.Servicios
{
    public interface IEstudiantesServices
    {
        IEnumerable<Estudiantes> GetAllEstudiantes();
    }
}