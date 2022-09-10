using ClasesConPedroAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClasesConPedroAPI.Contexts
{
    public class ConexionSQL : DbContext, IConexionSQL
    {
        public ConexionSQL(DbContextOptions<ConexionSQL> options) : base(options)
        {

        }

        public DbSet<Estudiantes> Estudiantes { get; set; }
        public DbSet<Calificaciones> Calificaciones { get; set; }
        public DbSet<Asignatura> Asignatura { get; set; }
    }
}
