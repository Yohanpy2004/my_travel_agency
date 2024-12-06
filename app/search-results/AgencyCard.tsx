"use client";

import React from "react";
import styles from "../../styles/AgencyCard.module.css";

const AgencyCard = () => {
  const agencyInfo = {
    image: "/2.png",
    name: "Agence Royale",
    manager: "Jean Dupont",
    employees: 25,
    headquarters: "Douala, Cameroun",
    email: "contact@agenceroyale.com",
    phone: "+237 6 70 00 00 00",
  };

  return (
    <div className={styles.agencyCard}>
      <img src={agencyInfo.image} alt="Logo de l'agence" className={styles.agencyImage} />
      <div className={styles.agencyDetails}>
        <h2>{agencyInfo.name}</h2>
        <p><strong>Responsable :</strong> {agencyInfo.manager}</p>
        <p><strong>Employés :</strong> {agencyInfo.employees}</p>
        <p><strong>Siège :</strong> {agencyInfo.headquarters}</p>
        <p><strong>Email :</strong> {agencyInfo.email}</p>
        <p><strong>Téléphone :</strong> {agencyInfo.phone}</p>
      </div>
    </div>
  );
};

export default AgencyCard;