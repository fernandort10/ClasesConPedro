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
    public class CalificacionesController : ControllerBase
    {
        private readonly ConexionSQL _context;

        public CalificacionesController(ConexionSQL context)
        {
            _context = context;
        }

        // GET: api/Calificaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calificaciones>>> GetCalificaciones()
        {
          if (_context.Calificaciones == null)
          {
              return NotFound();
          }
            return await _context.Calificaciones.ToListAsync();
        }
        [HttpGet("withnames")]
        public async Task<ActionResult<IEnumerable<CalificacionesDTO>>> GetCalificacionesWithNames()
        {
            var estudiantesConCalificaciones = (from a in _context.Calificaciones
                                                join c in _context.Estudiantes on a.id_estudiante equals c.id_estudiante
                                                join b in _context.Asignatura on a.id_asignatura equals b.id_asignatura
                                                select new CalificacionesDTO(a.id_calificaciones, c.NombreEstudiante, b.NombreAsignatura, a.calificacion)).ToList();

            return estudiantesConCalificaciones;
        }

        // GET: api/Calificaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Calificaciones>> GetCalificaciones(int id)
        {
          if (_context.Calificaciones == null)
          {
              return NotFound();
          }
            var calificaciones = await _context.Calificaciones.FindAsync(id);

            if (calificaciones == null)
            {
                return NotFound();
            }

            return calificaciones;
        }

        // PUT: api/Calificaciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalificaciones(int id, Calificaciones calificaciones)
        {
            if (id != calificaciones.id_calificaciones)
            {
                return BadRequest();
            }

            _context.Entry(calificaciones).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalificacionesExists(id))
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

        // POST: api/Calificaciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Calificaciones>> PostCalificaciones(Calificaciones calificaciones)
        {
          if (_context.Calificaciones == null)
          {
              return Problem("Entity set 'ConexionSQL.Calificaciones'  is null.");
          }
            _context.Calificaciones.Add(calificaciones);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCalificaciones", new { id = calificaciones.id_calificaciones }, calificaciones);
        }

        // DELETE: api/Calificaciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCalificaciones(int id)
        {
            if (_context.Calificaciones == null)
            {
                return NotFound();
            }
            var calificaciones = await _context.Calificaciones.FindAsync(id);
            if (calificaciones == null)
            {
                return NotFound();
            }

            _context.Calificaciones.Remove(calificaciones);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CalificacionesExists(int id)
        {
            return (_context.Calificaciones?.Any(e => e.id_calificaciones == id)).GetValueOrDefault();
        }
    }
}
