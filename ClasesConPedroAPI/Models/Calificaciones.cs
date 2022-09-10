using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ClasesConPedroAPI.Models
{
    public class Calificaciones
    {
        [Key]
        public int id_calificaciones { get; set; }
        public int id_estudiante { get; set; }
        public int id_asignatura { get; set; }
        public int calificacion { get; set; }
    }

    public class CalificacionesDTO
    {
        public CalificacionesDTO(string nombreEstudiante, string nombreAsignatura, int calificacion)
        {
            NombreEstudiante = nombreEstudiante;
            NombreAsignatura = nombreAsignatura;
            Calificacion = calificacion;
        }

        public string NombreEstudiante { get; set; }
        public string NombreAsignatura { get; set; }
        public int Calificacion { get; set; }

    }
}
