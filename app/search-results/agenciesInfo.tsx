"use client";

import React from "react";
import AgencyCard from "./AgencyCard"; // Assurez-vous que le chemin d'importation est correct
import styles from "../../styles/AgencyList.module.css"; // Optionnel pour styliser la liste

const agenciesInfo = [
  {
    image: "/1.png",
    name: "Agence Royale",
    manager: "Jean Dupont",
    employees: 25,
    headquarters: "Douala, Cameroun",
    email: "contact@agenceroyale.com",
    phone: "+237 6 70 00 00 00",
  },
  {
    image: "/2.png",
    name: "Express Voyage",
    manager: "Lucien Etoundi",
    employees: 20,
    headquarters: "Yaoundé, Cameroun",
    email: "contact@expressvoyage.com",
    phone: "+237 6 71 22 22 22",
  },
  // Ajoutez les autres agences...
];

const AgencyList = () => {
  return (
    <div className={styles.agencyList}>
      {agenciesInfo.map((agency, index) => (
        <AgencyCard key={index} agencyInfo={agency} />  {/* Passez l'objet 'agency' à AgencyCard */}
      ))}
    </div>
  );
};

export default AgencyList;
