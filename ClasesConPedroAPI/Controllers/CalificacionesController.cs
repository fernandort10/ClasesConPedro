using ClasesConPedroAPI.Models;
using ClasesConPedroAPI.Servicios;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClasesConPedroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalificacionesController : ControllerBase
    {
        private readonly ICalificacionesServices calificaciones;

        public CalificacionesController(ICalificacionesServices calificaciones)
        {
            
            this.calificaciones = calificaciones;
        }

        // GET: api/<CalificacionesController>
       

        [HttpGet]
        public IEnumerable<CalificacionesDTO> GetWithNames()
        {
            return calificaciones.GetCalificacionesWithNames();

        }

        // GET api/<CalificacionesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CalificacionesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CalificacionesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CalificacionesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
