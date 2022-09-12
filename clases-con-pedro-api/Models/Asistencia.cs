using MessagePack;
using System.ComponentModel.DataAnnotations;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace clases_con_pedro_api.Models
{
    public class Asistencia
    {
        [Key]
        public int id_asistencia { get; set; }
        public int id_estudiante { get; set; }
        public int id_asignatura { get; set; }
        public char asistencia { get; set; }
        public string fecha { get; set; }

        public class AsistenciaDTO
        {
            public AsistenciaDTO(string nombreEstudiante, string nombreAsignatura, char asistencia, string fecha)
            {
                NombreEstudiante = nombreEstudiante;
                NombreAsignatura = nombreAsignatura;
                Asistencias = asistencia;
                Fecha = fecha;
            }

            public string NombreEstudiante { get; set; }
            public string NombreAsignatura { get; set; }
            public char Asistencias { get; set; }
            public string Fecha { get; set; }

        }
    }
}
