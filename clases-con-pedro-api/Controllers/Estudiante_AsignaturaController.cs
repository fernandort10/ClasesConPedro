using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using clases_con_pedro_api.Contexts;
using clases_con_pedro_api.Models;

namespace clases_con_pedro_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Estudiante_AsignaturaController : ControllerBase
    {
        private readonly ConexionSQL _context;

        public Estudiante_AsignaturaController(ConexionSQL context)
        {
            _context = context;
        }

        // GET: api/Estudiante_Asignatura
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estudiante_Asignatura>>> GetEstudiante_Asignatura()
        {
          if (_context.Estudiante_Asignatura == null)
          {
              return NotFound();
          }
            return await _context.Estudiante_Asignatura.ToListAsync();
        }

        // GET: api/Estudiante_Asignatura/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante_Asignatura>> GetEstudiante_Asignatura(int id)
        {
          if (_context.Estudiante_Asignatura == null)
          {
              return NotFound();
          }
            var estudiante_Asignatura = await _context.Estudiante_Asignatura.FindAsync(id);

            if (estudiante_Asignatura == null)
            {
                return NotFound();
            }

            return estudiante_Asignatura;
        }

        // PUT: api/Estudiante_Asignatura/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudiante_Asignatura(int id, Estudiante_Asignatura estudiante_Asignatura)
        {
            if (id != estudiante_Asignatura.id_estudianteAsignatura)
            {
                return BadRequest();
            }

            _context.Entry(estudiante_Asignatura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Estudiante_AsignaturaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Estudiante_Asignatura
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Estudiante_Asignatura>> PostEstudiante_Asignatura(Estudiante_Asignatura estudiante_Asignatura)
        {
          if (_context.Estudiante_Asignatura == null)
          {
              return Problem("Entity set 'ConexionSQL.Estudiante_Asignatura'  is null.");
          }
            _context.Estudiante_Asignatura.Add(estudiante_Asignatura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstudiante_Asignatura", new { id = estudiante_Asignatura.id_estudianteAsignatura }, estudiante_Asignatura);
        }

        // DELETE: api/Estudiante_Asignatura/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudiante_Asignatura(int id)
        {
            if (_context.Estudiante_Asignatura == null)
            {
                return NotFound();
            }
            var estudiante_Asignatura = await _context.Estudiante_Asignatura.FindAsync(id);
            if (estudiante_Asignatura == null)
            {
                return NotFound();
            }

            _context.Estudiante_Asignatura.Remove(estudiante_Asignatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Estudiante_AsignaturaExists(int id)
        {
            return (_context.Estudiante_Asignatura?.Any(e => e.id_estudianteAsignatura == id)).GetValueOrDefault();
        }
    }
}
