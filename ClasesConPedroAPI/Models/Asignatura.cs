using System.ComponentModel.DataAnnotations;

namespace ClasesConPedroAPI.Models
{
    public class Asignatura
    {
        [Key]
        public int id_asignatura { get; set; }
        public string NombreAsignatura { get; set; }
    }
}
