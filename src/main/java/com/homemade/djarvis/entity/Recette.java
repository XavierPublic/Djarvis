package com.homemade.djarvis.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "recettes")
public class Recette {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private String ingredients;
    private String instructions;
}
