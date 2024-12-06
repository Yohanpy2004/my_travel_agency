"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../../../styles/TravelDetails.module.css";

interface Travel {
  id: string;
  agencyName: string;
  departure: string;
  arrival: string;
  departureTime: string;
  departureDate: string;
  price: number;
  description?: string;
  image?: string;
  busDetails?: {
    rating: number;
    seats: number;
    stops: string[];
    licensePlate: string;
    busType: string;
    busImage?: string;
  };
  driverDetails?: {
    driverImage?: string;
    idNumber: string;
    experienceYears: number;
  };
}

const mockData: Travel[] = [
  {
    id: "0",
    agencyName: "Agence Royale",
    departure: "Douala",
    arrival: "Yaoundé",
    departureTime: "08:00",
    departureDate: "2024-11-20",
    price: 15000,
    description: "Voyage confortable avec des arrêts à plusieurs villes.",
    image: "/1.jpg",
    busDetails: {
      rating: 4.5,
      seats: 50,
      stops: ["Edéa", "Eséka"],
      licensePlate: "LT-1234-XY",
      busType: "VIP Bus",
      busImage: "/1.jpg",
    },
    driverDetails: {
      driverImage: "/1.jpg",
      idNumber: "CNI-123456789",
      name: "Isaac Tchoffo",
      experienceYears: 15,
    },
  },
  // Ajoutez d'autres voyages ici...
];

const TravelDetails = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState<Travel | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const travelDetails = mockData.find((item) => item.id === id);
    setTravel(travelDetails || null);
  }, [id]);

  const handleBookClick = () => {
    router.push(`/choose-seats/${id}`);
  };

  if (!travel) {
    return (
      <div className={styles.loading}>
        <p>Chargement des détails ou agence introuvable...</p>
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      {/* Première carte */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {travel.image && (
            <img
              src={travel.image}
              alt={`Image de ${travel.agencyName}`}
              className={styles.image}
            />
          )}
        </div>
        <div className={styles.content}>
          <h2 className={styles.agencyName}>{travel.agencyName}</h2>
          <p><strong>Départ :</strong> {travel.departure}</p>
          <p><strong>Arrivée :</strong> {travel.arrival}</p>
          <p><strong>Heure de départ :</strong> {travel.departureTime}</p>
          <p><strong>Date de départ :</strong> {travel.departureDate}</p>
          <p><strong>Prix :</strong> {travel.price} FCFA</p>
          <p><strong>Description :</strong> {travel.description}</p>

          <div className={styles.buttons}>
            <button className={styles.bookButton} onClick={handleBookClick}>
              Réserver / Choisir mes places
            </button>
          </div>
        </div>
      </div>

      {/* Deuxième carte : Informations supplémentaires */}
      <div className={styles.extraCard}>
        {/* Informations sur le bus */}
        <div className={styles.infoCard}>
          {travel.busDetails?.busImage && (
            <img
              src={travel.busDetails.busImage}
              alt="Bus"
              className={styles.busImage}
            />
          )}
          <p><strong>Rating :</strong> {"⭐".repeat(Math.round(travel.busDetails?.rating || 0))}</p>
          <p><strong>Places :</strong> {travel.busDetails?.seats}</p>
          <p><strong>Arrêts :</strong> {travel.busDetails?.stops.join(", ")}</p>
          <p><strong>Plaque d'immatriculation :</strong> {travel.busDetails?.licensePlate}</p>
          <p><strong>Type :</strong> {travel.busDetails?.busType}</p>
        </div>

        {/* Informations sur le chauffeur */}
        <div className={styles.infoCard}>
          {travel.driverDetails?.driverImage && (
            <img
              src={travel.driverDetails.driverImage}
              alt="Chauffeur"
              className={styles.driverImage}
            />
          )}
          <p><strong>Carte d'identité :</strong> {travel.driverDetails?.idNumber}</p>
          <p><strong>Nom :</strong> {travel.driverDetails?.name}</p>
          <p><strong>Expérience :</strong> {travel.driverDetails?.experienceYears} ans</p>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
