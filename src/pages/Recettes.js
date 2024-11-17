import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assure-toi d'installer axios pour les requêtes API

const Recettes = () => {
    const [recettes, setRecettes] = useState([]);
    const [newRecette, setNewRecette] = useState({ titre: '', description: '' });

    // Charger les recettes depuis l'API au chargement du composant
    useEffect(() => {
        axios.get('/api/recettes')
            .then(response => setRecettes(response.data))
            .catch(error => console.error('Erreur lors de la récupération des recettes:', error));
    }, []);

    // Ajouter une nouvelle recette
    const handleAddRecette = () => {
        axios.post('/api/recettes', newRecette)
            .then(response => {
                setRecettes([...recettes, response.data]);
                setNewRecette({ titre: '', description: '' }); // Réinitialiser les champs
            })
            .catch(error => console.error('Erreur lors de l’ajout de la recette:', error));
    };

    // Supprimer une recette
    const handleDeleteRecette = (id) => {
        axios.delete(`/api/recettes/${id}`)
            .then(() => {
                setRecettes(recettes.filter(recette => recette.id !== id));
            })
            .catch(error => console.error('Erreur lors de la suppression de la recette:', error));
    };

    return (
        <div className="recettes">
            <h2>Mes Recettes</h2>

            <div>
                <input
                    type="text"
                    value={newRecette.titre}
                    onChange={(e) => setNewRecette({ ...newRecette, titre: e.target.value })}
                    placeholder="Titre de la recette"
                />
                <textarea
                    value={newRecette.description}
                    onChange={(e) => setNewRecette({ ...newRecette, description: e.target.value })}
                    placeholder="Description de la recette"
                />
                <button onClick={handleAddRecette}>Ajouter</button>
            </div>

            <ul>
                {recettes.map((recette) => (
                    <li key={recette.id}>
                        <h3>{recette.titre}</h3>
                        <p>{recette.description}</p>
                        <button onClick={() => handleDeleteRecette(recette.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recettes;
