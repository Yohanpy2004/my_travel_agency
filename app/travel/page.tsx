"use client";

import Link from "next/link";
import styles from "../../styles/TravelList.module.css";

const mockData = [
  {
    id: "1",
    agencyName: "Agence Royale",
    departure: "Douala",
    arrival: "Yaoundé",
  },
  {
    id: "2",
    agencyName: "Voyages Express",
    departure: "Bafoussam",
    arrival: "Bamenda",
  },
];

const TravelList = () => {
  return (
    <div className={styles.listContainer}>
      <h1>Liste des voyages</h1>
      {mockData.map((travel) => (
        <div key={travel.id} className={styles.card}>
          <h2>{travel.agencyName}</h2>
          <p><strong>Départ :</strong> {travel.departure}</p>
          <p><strong>Arrivée :</strong> {travel.arrival}</p>
          <Link href={`/travel/${travel.id}`}>
            <button className={styles.detailsButton}>Voir Plus</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
