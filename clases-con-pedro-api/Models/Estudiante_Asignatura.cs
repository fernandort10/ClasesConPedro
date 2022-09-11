using System.ComponentModel.DataAnnotations;

namespace clases_con_pedro_api.Models
{
    public class Estudiante_Asignatura
    {
        [Key]
        public int id_estudianteAsignatura { get; set; }
        public int id_estudiante { get; set; }
        public int id_asignatura { get; set; }
    }
}
