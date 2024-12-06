"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from "../../../styles/ChooseSeats.module.css";

// Interface pour un siège
interface Seat {
  id: number;
  isAvailable: boolean;
}

// Interface pour un voyage
interface Travel {
  id: string;
  name: string;
  totalSeats: number;
  reservedSeats: number[]; // Les sièges réservés spécifiques au voyage
}

const ChooseSeat = () => {
  const { id } = useParams(); // Récupérer l'id de l'agence depuis l'URL
  const router = useRouter();

  // Exemple de données de voyages avec sièges réservés dynamiques
  const travels: Travel[] = [
    {
      id: '0',
      name: "Agence Royale",
      totalSeats: 50,
      reservedSeats: [1, 4, 6, 15], // Sièges réservés pour ce voyage
    },
    {
      id: '1',
      name: 'Express Voyage',
      totalSeats: 40, // 40 places dans ce voyage
      reservedSeats: [2, 5, 10], // Sièges réservés pour ce voyage
    },
    {
      id: '2',
      name: 'Agence Royale',
      totalSeats: 30,
      reservedSeats: [1, 4, 6, 15, 17 , 18 , 19], // Sièges réservés pour ce voyage
    },
    {
      id: '3',
      name: 'Fodem Voyage',
      totalSeats: 30,
      reservedSeats: [1, 4, 6, 15], // Sièges réservés pour ce voyage
    },
    {
      id: '4',
      name: 'General Express',
      totalSeats: 30,
      reservedSeats: [1, 4, 6, 15, 16 , 20 , 22 , 24], // Sièges réservés pour ce voyage
    },
    {
      id: '5',
      name: 'Voyage 2',
      totalSeats: 30,
      reservedSeats: [1, 4, 6, 15], // Sièges réservés pour ce voyage
    },
    // Ajoutez d'autres voyages ici
  ];

  // Trouver le voyage actuel en fonction de l'id
  const currentTravel = travels.find((travel) => travel.id === id);
  if (!currentTravel) {
    return <div>Voyage non trouvé</div>;
  }

  const { totalSeats, reservedSeats } = currentTravel;

  // Initialiser les sièges avec un certain nombre de places disponibles
  const initialSeats: Seat[] = Array.from({ length: totalSeats }, (_, index) => ({
    id: index + 1,
    isAvailable: !reservedSeats.includes(index + 1), // Si le siège est réservé, il n'est pas disponible
  }));

  const [seats, setSeats] = useState<Seat[]>(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]); // Liste des sièges sélectionnés
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // Message de confirmation

  // Gérer le clic sur un siège
  const handleSeatClick = (seat: Seat) => {
    if (seat.isAvailable && !selectedSeats.some(s => s.id === seat.id)) {
      setSelectedSeats([...selectedSeats, seat]); // Ajouter à la liste des sièges sélectionnés
    } else if (selectedSeats.some(s => s.id === seat.id)) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id)); // Supprimer de la liste des sièges sélectionnés
    }
  };

  // Gérer la réservation
  const handleReservation = () => {
    if (selectedSeats.length === 0) {
      return;
    }

    // Marquer les sièges sélectionnés comme réservés
    setSeats(prevSeats =>
      prevSeats.map(seat =>
        selectedSeats.some(s => s.id === seat.id) ? { ...seat, isAvailable: false } : seat
      )
    );

    // Afficher un message de confirmation sous forme de popup
    setConfirmationMessage(`Vous avez réservé ${selectedSeats.length} place(s)`);
    setSelectedSeats([]); // Réinitialiser les sièges sélectionnés après réservation

    // Afficher la popup de confirmation
    setTimeout(() => {
      setConfirmationMessage(null);
    }, 3000); // Masquer la popup après 3 secondes
  };

  // Fonction pour afficher le plan du bus sous forme de rangées
  const renderBusPlan = () => {
    const rows = Math.ceil(totalSeats / 6); // Disposition des sièges en 6 colonnes
    const seatRows = [];

    for (let i = 0; i < rows; i++) {
      const rowSeats = [];
      for (let j = 0; j < 6; j++) {
        const seatIndex = i * 6 + j;
        if (seatIndex < totalSeats) {
          const seat = seats[seatIndex];
          rowSeats.push(
            <button
              key={seat.id}
              className={`${styles.seat} ${seat.isAvailable ? styles.available : styles.unavailable}`}
              onClick={() => handleSeatClick(seat)}
              disabled={!seat.isAvailable}
            >
             {seat.id}
            </button>
          );
        }
      }
      seatRows.push(
        <div key={i} className={styles.row}>
          {rowSeats}
        </div>
      );
    }
    return seatRows;
  };

  return (
    <div className={styles.container}>
      <h1>Choisissez vos places pour {currentTravel.name}</h1>
      <p>Sélectionnez des sièges disponibles pour votre voyage.</p>
      
      <div className={styles.seatsContainer}>
        {renderBusPlan()}
      </div>

      {selectedSeats.length > 0 && (
        <div className={styles.selectedSeats}>
          <p>Vous avez sélectionné {selectedSeats.length} siège(s).</p>
        </div>
      )}

      <button 
        className={styles.reserveButton}
        onClick={handleReservation}
        disabled={selectedSeats.length === 0}
      >
        Réserver ces places
      </button>

      {/* Popup de confirmation */}
      {confirmationMessage && (
        <div className={styles.confirmationPopup}>
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};

export default ChooseSeat;
