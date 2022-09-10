using ClasesConPedroAPI.Models;

namespace ClasesConPedroAPI.Servicios
{
    public class CalificacionesServices : ICalificacionesServices
    {
        private readonly IConexionSQL dbcontext;
        public CalificacionesServices(IConexionSQL dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        public IEnumerable<CalificacionesDTO> GetCalificacionesWithNames()
        {
            var balance = (from a in dbcontext.Calificaciones
                           join c in dbcontext.Estudiantes on a.id_estudiante equals c.id_estudiante
                           join b in dbcontext.Asignatura on a.id_asignatura equals b.id_asignatura
                           select new CalificacionesDTO(c.NombreEstudiante, b.NombreAsignatura, a.calificacion)).ToList();

            return balance;
        }
    }

}

