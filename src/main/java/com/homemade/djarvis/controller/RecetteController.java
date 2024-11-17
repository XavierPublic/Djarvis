package com.homemade.djarvis.controller;

import com.homemade.djarvis.entity.Recette;
import com.homemade.djarvis.service.RecetteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recettes")
public class RecetteController {
    private final RecetteService recetteService;

    public RecetteController(RecetteService recetteService) {
        this.recetteService = recetteService;
    }

    @GetMapping
    public List<Recette> getAllRecettes(){
        List<Recette> list = recetteService.findAll();
        return list;
    }

    @PostMapping
    public Recette createRecette(@RequestBody Recette recette) {
        return recetteService.save(recette);
    }
}
