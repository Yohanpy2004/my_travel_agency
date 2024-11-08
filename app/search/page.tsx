// app/pages/search.tsx
"use client"
import { useState } from 'react';
import styles from '../../styles/SearchPage.module.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]); // Liste des résultats de recherche (agences de voyages et voyages)

  const handleSearch = () => {
    // Logique de recherche (cela peut être remplacé par une API ou une base de données)
    // Exemple de résultats fictifs
    const agencies = [
      { name: 'Tropical Travels', location: 'Hawaii' },
      { name: 'Explorer Journeys', location: 'Paris' },
    ];

    const trips = [
      { name: 'Beach Getaway', destination: 'Hawaii' },
      { name: 'City Tour', destination: 'Paris' },
    ];

    // Filtrage des résultats (pour l'exemple)
    const filteredAgencies = agencies.filter(agency =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredTrips = trips.filter(trip =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults([...filteredAgencies, ...filteredTrips]);
  };

  return (
    <div className={styles.searchPage}>
      <h1>Search for Travel Agencies and Trips</h1>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for agencies or trips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      
      <div className={styles.results}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              <h3>{result.name}</h3>
              <p>{result.location || result.destination}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
