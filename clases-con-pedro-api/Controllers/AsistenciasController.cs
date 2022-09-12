﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using clases_con_pedro_api.Contexts;
using clases_con_pedro_api.Models;
using static clases_con_pedro_api.Models.Asistencia;

namespace clases_con_pedro_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsistenciasController : ControllerBase
    {
        private readonly ConexionSQL _context;

        public AsistenciasController(ConexionSQL context)
        {
            _context = context;
        }

        // GET: api/Asistencias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Asistencia>>> GetAsistencia()
        {
          if (_context.Asistencia == null)
          {
              return NotFound();
          }
            return await _context.Asistencia.ToListAsync();
        }

        [HttpGet("withnames")]
        public async Task<ActionResult<IEnumerable<AsistenciaDTO>>> GetAsistenciaWithNames()
        {
            var asistenciaConNombres = (from a in _context.Asistencia
                                                join c in _context.Estudiantes on a.id_estudiante equals c.id_estudiante
                                                join b in _context.Asignatura on a.id_asignatura equals b.id_asignatura
                                                select new AsistenciaDTO(c.NombreEstudiante, b.NombreAsignatura, a.asistencia, a.fecha)).ToList();

            return asistenciaConNombres;
        }

        // GET: api/Asistencias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Asistencia>> GetAsistencia(int id)
        {
          if (_context.Asistencia == null)
          {
              return NotFound();
          }
            var asistencia = await _context.Asistencia.FindAsync(id);

            if (asistencia == null)
            {
                return NotFound();
            }

            return asistencia;
        }

        // PUT: api/Asistencias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsistencia(int id, Asistencia asistencia)
        {
            if (id != asistencia.id_asistencia)
            {
                return BadRequest();
            }

            _context.Entry(asistencia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AsistenciaExists(id))
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

        // POST: api/Asistencias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Asistencia>> PostAsistencia(Asistencia asistencia)
        {
          if (_context.Asistencia == null)
          {
              return Problem("Entity set 'ConexionSQL.Asistencia'  is null.");
          }
            _context.Asistencia.Add(asistencia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAsistencia", new { id = asistencia.id_asistencia }, asistencia);
        }

        // DELETE: api/Asistencias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsistencia(int id)
        {
            if (_context.Asistencia == null)
            {
                return NotFound();
            }
            var asistencia = await _context.Asistencia.FindAsync(id);
            if (asistencia == null)
            {
                return NotFound();
            }

            _context.Asistencia.Remove(asistencia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AsistenciaExists(int id)
        {
            return (_context.Asistencia?.Any(e => e.id_asistencia == id)).GetValueOrDefault();
        }
    }
}
