using ClasesConPedroAPI.Models;
using ClasesConPedroAPI.Servicios;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClasesConPedroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudiantesController : ControllerBase
    {
        private readonly IEstudiantesServices estudiantes;

        public EstudiantesController(IEstudiantesServices estudiantes)
        {
            this.estudiantes = estudiantes;
        }



        // GET: api/<EstudiantesController>
        [HttpGet]
        public IEnumerable<Estudiantes> GetAllEstudiantes()
        {
            return estudiantes.GetAllEstudiantes();
        }

        // GET api/<EstudiantesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EstudiantesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EstudiantesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EstudiantesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


    }
}
