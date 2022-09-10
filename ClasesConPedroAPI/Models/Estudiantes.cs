using System.ComponentModel.DataAnnotations;

namespace ClasesConPedroAPI.Models
{
    public class Estudiantes
    {
        [Key]
        public int  id_estudiante { get; set; }
        public string NombreEstudiante { get; set; }
    }
}
