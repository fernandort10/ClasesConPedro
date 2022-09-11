using clases_con_pedro_api.Models;
using Microsoft.EntityFrameworkCore;

namespace clases_con_pedro_api.Contexts
{
    public interface IConexionSQL
    {
        DbSet<Asignatura> Asignatura { get; set; }
        DbSet<Calificaciones> Calificaciones { get; set; }
        DbSet<Estudiantes> Estudiantes { get; set; }
    }
}