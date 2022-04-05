package com.utxicotepec.lavado.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class frontController {
	@GetMapping(path= {"/","/login"})
	public String login() {
		return "index";
	}
	@GetMapping(path= {"/home"})
	public String bienvenida() {
		return "menu";
	}
}
