package com.homemade.djarvis.service;

import com.homemade.djarvis.entity.Recette;
import com.homemade.djarvis.repository.RecetteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecetteService {
    private final RecetteRepository recetteRepository;

    public RecetteService(RecetteRepository recetteRepository) {
        this.recetteRepository = recetteRepository;
    }

    public List<Recette> findAll(){
        return recetteRepository.findAll();
    }

    public Recette save(Recette recette) {
        return recetteRepository.save(recette);
    }
}
