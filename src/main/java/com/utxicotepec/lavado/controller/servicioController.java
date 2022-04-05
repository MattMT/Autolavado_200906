package com.utxicotepec.lavado.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.utxicotepec.lavado.model.servicio;
import com.utxicotepec.lavado.repository.servicioRepository;

@RestController
@RequestMapping("/api")
public class servicioController {
	@Autowired
	servicioRepository repServicios;
	
	@GetMapping("/servicios")
	public ResponseEntity<List<servicio>> getAllServicios (@RequestParam(required = false) String nombre) {
		try {
			List<servicio> servicio=new ArrayList<servicio>();
			if(nombre==null)
				repServicios.findAll().forEach(servicio::add);
			else
				repServicios.findByNombre(nombre).forEach(servicio::add);
			if(servicio.isEmpty()) {
				return new ResponseEntity<> (HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(servicio, HttpStatus.OK);
			
		}catch(Exception e) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
	
	
	@GetMapping("/servicios/{idservicios}")
	public ResponseEntity<servicio> getServiciosById(@PathVariable("idservicios") long idservicio){
		Optional<servicio> servicioData = repServicios.findById(idservicio);
		if (servicioData.isPresent()) {
			return new ResponseEntity<>(servicioData.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/servicios")
	public ResponseEntity<servicio> createServicio(@RequestBody servicio servicio){
		try {
			servicio _servicio = repServicios
					.save(new servicio(
							servicio.getIdservicio(),
							servicio.getNombre(),
							servicio.getCosto(),
							servicio.getFecha_registro(),
							servicio.getStatus()
							));
			return new ResponseEntity<>( _servicio, HttpStatus.CREATED);
		}catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@DeleteMapping("/servicios/{idservicio}")
	public ResponseEntity<HttpStatus> deleteServicio(@PathVariable("idservicio") long idservicio){
		try {
			repServicios.deleteById(idservicio);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PutMapping("/servicios/{idservicio}")
	public ResponseEntity<servicio> updateServicio(@PathVariable("idservicio") long idservicio, @RequestBody servicio servicio){
	Optional<servicio> servicioData = repServicios.findById(idservicio);
	if (servicioData.isPresent()) {
		servicio _servicio = servicioData.get();
		_servicio.setNombre(servicio.getNombre());
		_servicio.setCosto(servicio.getCosto());
		_servicio.setFecha_registro(servicio.getFecha_registro());
		_servicio.setStatus(servicio.getStatus());
		return new ResponseEntity<>(repServicios.save(_servicio), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
