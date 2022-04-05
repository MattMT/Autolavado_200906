package com.utxicotepec.lavado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utxicotepec.lavado.model.servicio;

public interface servicioRepository extends JpaRepository<servicio, Long>{

	 List <servicio> findByNombre(String nombre);
}
