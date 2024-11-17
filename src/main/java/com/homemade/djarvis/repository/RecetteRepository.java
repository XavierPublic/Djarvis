package com.homemade.djarvis.repository;

import com.homemade.djarvis.entity.Recette;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecetteRepository extends JpaRepository<Recette, Long> {
}
