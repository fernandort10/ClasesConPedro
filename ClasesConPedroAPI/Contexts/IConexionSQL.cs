using ClasesConPedroAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClasesConPedroAPI.Contexts
{
    public interface IConexionSQL
    {
        DbSet<Asignatura> Asignatura { get; set; }
        DbSet<Calificaciones> Calificaciones { get; set; }
        DbSet<Estudiantes> Estudiantes { get; set; }
    }
}