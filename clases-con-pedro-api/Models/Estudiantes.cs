using System.ComponentModel.DataAnnotations;

namespace clases_con_pedro_api.Models
{
    public class Estudiantes
    {
        [Key]
        public int id_estudiante { get; set; }
        public string NombreEstudiante { get; set; }
    }
}
