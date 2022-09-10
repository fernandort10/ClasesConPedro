using ClasesConPedroAPI.Models;

namespace ClasesConPedroAPI.Servicios
{
    public class EstudiantesServices : IEstudiantesServices
    {
        private readonly IConexionSQL dbcontext;
        public EstudiantesServices(IConexionSQL dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        public IEnumerable<Estudiantes> GetAllEstudiantes()
        {
            return dbcontext.Estudiantes.ToList();
        }

    }
}
