using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace clases_con_pedro_api.Models
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
        public CalificacionesDTO(int id_calificaciones, string nombreEstudiante, string nombreAsignatura, int calificacion)
        {
            Id_calificaciones = id_calificaciones;
            NombreEstudiante = nombreEstudiante;
            NombreAsignatura = nombreAsignatura;
            Calificacion = calificacion;
        }
        public int Id_calificaciones { get; set; }
        public string NombreEstudiante { get; set; }
        public string NombreAsignatura { get; set; }
        public int Calificacion { get; set; }

    }
}
