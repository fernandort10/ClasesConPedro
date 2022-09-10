using ClasesConPedroAPI.Models;

namespace ClasesConPedroAPI.Servicios
{
    public interface ICalificacionesServices
    {
        IEnumerable<CalificacionesDTO> GetCalificacionesWithNames();
    }
}