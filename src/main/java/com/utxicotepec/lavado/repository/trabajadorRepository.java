package com.utxicotepec.lavado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utxicotepec.lavado.model.trabajador;

public interface trabajadorRepository extends JpaRepository<trabajador, Long>{

	List <trabajador> findByNombre(String nombre);
}
