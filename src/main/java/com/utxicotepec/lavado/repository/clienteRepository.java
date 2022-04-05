package com.utxicotepec.lavado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utxicotepec.lavado.model.cliente;

public interface clienteRepository extends JpaRepository< cliente, Long>{

	List <cliente> findByNombre(String nombre);
}
