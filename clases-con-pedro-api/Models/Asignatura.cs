using System.ComponentModel.DataAnnotations;

namespace clases_con_pedro_api.Models
{
    public class Asignatura
    {
        [Key]
        public int id_asignatura { get; set; }
        public string NombreAsignatura { get; set; }
    }
}
