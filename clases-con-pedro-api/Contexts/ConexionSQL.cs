using Microsoft.EntityFrameworkCore;
using clases_con_pedro_api.Models;
using System.Security.Cryptography.Xml;

namespace clases_con_pedro_api.Contexts
{
    
        public class ConexionSQL : DbContext, IConexionSQL
        {
            public ConexionSQL(DbContextOptions<ConexionSQL> options) : base(options)
            {

            }

            public DbSet<Estudiantes> Estudiantes { get; set; }
            public DbSet<Calificaciones> Calificaciones { get; set; }
            public DbSet<Asignatura> Asignatura { get; set; }
            public DbSet<Asistencia> Asistencia { get; set; }
        }
    
}
