"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../../styles/ResultsTable.module.css";

interface Travel {
  agencyName: string;
  departure: string;
  arrival: string;
  departureTime: string;
  departureDate: string;
  price: number; // Changer en number pour faciliter le tri
}

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const type = searchParams.get("type");

  const [results, setResults] = useState<Travel[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<keyof Travel | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");


const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

const paginatedResults = results.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const totalPages = Math.ceil(results.length / itemsPerPage);

const handlePageChange = (page: number) => {
  setCurrentPage(page);
};


  useEffect(() => {
    if (!query || !type) return;

    const fetchResults = async () => {
      setLoading(true);
      const mockResults: Travel[] = type === "destination"
        ? [
            {
              agencyName: "Agence Royale",
              departure: "Douala",
              arrival: query!,
              departureTime: "08:00",
              departureDate: "2024-11-20",
              price: 15000,
            },
            {
              agencyName: "Express Voyage",
              departure: "Yaoundé",
              arrival: query!,
              departureTime: "10:00",
              departureDate: "2024-11-21",
              price: 20000,
            },
            {
                agencyName: "Agence Royale",
                departure: "Dschang",
                arrival: query!,
                departureTime: "18:00",
                departureDate: "2024-11-20",
                price: 8000,
              },
              {
                agencyName: "Fodem Voyage",
                departure: "Bafoussam",
                arrival: query!,
                departureTime: "13:00",
                departureDate: "2024-11-21",
                price: 10000,
              },
              {
                agencyName: "General Express",
                departure: "Douala",
                arrival: query!,
                departureTime: "06:00",
                departureDate: "2024-11-22",
                price: 12000,
              },
              {
                agencyName: "Finex Voyage",
                departure: "Yaoundé",
                arrival: query!,
                departureTime: "09:30",
                departureDate: "2024-11-20",
                price: 18000,
              },
              {
                agencyName: "Buca Voyage",
                departure: "Ebolowa",
                arrival: query!,
                departureTime: "12:00",
                departureDate: "2024-11-21",
                price: 9000,
              },
              {
                agencyName: "Musango Express",
                departure: "Buea",
                arrival: query!,
                departureTime: "15:00",
                departureDate: "2024-11-20",
                price: 16000,
              },
              {
                agencyName: "Central Voyage",
                departure: "Kribi",
                arrival: query!,
                departureTime: "11:00",
                departureDate: "2024-11-23",
                price: 14000,
              },
              {
                agencyName: "Amour Mezam",
                departure: "Bamenda",
                arrival: query!,
                departureTime: "14:00",
                departureDate: "2024-11-21",
                price: 17000,
              },
              {
                agencyName: "Buca Voyage",
                departure: "Ngaoundéré",
                arrival: query!,
                departureTime: "07:00",
                departureDate: "2024-11-22",
                price: 19000,
              },
              {
                agencyName: "General Express",
                departure: "Maroua",
                arrival: query!,
                departureTime: "16:00",
                departureDate: "2024-11-23",
                price: 22000,
              },
              {
                agencyName: "Musango Express",
                departure: "Garoua",
                arrival: query!,
                departureTime: "10:00",
                departureDate: "2024-11-24",
                price: 18000,
              },
              {
                agencyName: "Amour Mezam",
                departure: "Limbe",
                arrival: query!,
                departureTime: "05:30",
                departureDate: "2024-11-20",
                price: 10000,
              },
          ]
        : 
          [
            {
              agencyName: query!,
              departure: "Douala",
              arrival: "Bertoua",
              departureTime: "08:00",
              departureDate: "2024-11-20",
              price: 15000,
            },
            {
              agencyName: query!,
              departure: "Yaoundé",
              arrival: "Maroua",
              departureTime: "10:00",
              departureDate: "2024-11-21",
              price: 20000,
            },
            {
                agencyName: query!,
                departure: "Dschang",
                arrival: "Bafoussam",
                departureTime: "18:00",
                departureDate: "2024-11-20",
                price: 8000,
              },
              {
                agencyName: query!,
                departure: "Bafoussam",
                arrival: "Batouri",
                departureTime: "13:00",
                departureDate: "2024-11-21",
                price: 10000,
              },
              {
                agencyName: query!,
                departure: "Douala",
                arrival: "Bafang",
                departureTime: "06:00",
                departureDate: "2024-11-22",
                price: 12000,
              },
              {
                agencyName:query!,
                departure: "Yaoundé",
                arrival: "Bagangté",
                departureTime: "09:30",
                departureDate: "2024-11-20",
                price: 18000,
              },
              {
                agencyName: query!,
                departure: "Ebolowa",
                arrival: "Batcha",
                departureTime: "12:00",
                departureDate: "2024-11-21",
                price: 9000,
              },
              {
                agencyName: query!,
                departure: "Buea",
                arrival: "Sangmelima",
                departureTime: "15:00",
                departureDate: "2024-11-20",
                price: 16000,
              },
              {
                agencyName: query!,
                departure: "Kribi",
                arrival: "Batcha",
                departureTime: "11:00",
                departureDate: "2024-11-23",
                price: 14000,
              },
              {
                agencyName: query!,
                departure: "Bamenda",
                arrival: "Toboro",
                departureTime: "14:00",
                departureDate: "2024-11-21",
                price: 17000,
              },
              {
                agencyName: query!,
                departure: "Ngaoundéré",
                arrival: "Fotonou",
                departureTime: "07:00",
                departureDate: "2024-11-22",
                price: 19000,
              },
              {
                agencyName: query!,
                departure: "Maroua",
                arrival: "Limbe",
                departureTime: "16:00",
                departureDate: "2024-11-23",
                price: 22000,
              },
              {
                agencyName: query!,
                departure: "Garoua",
                arrival: "Newbel",
                departureTime: "10:00",
                departureDate: "2024-11-24",
                price: 18000,
              },
              {
                agencyName: query!,
                departure: "Limbe",
                arrival:"wum",
                departureTime: "05:30",
                departureDate: "2024-11-20",
                price: 10000,
              },
        ];

      setResults(mockResults);
      setLoading(false);
    };

    fetchResults();
  }, [query, type]);

  const handleSort = (field: keyof Travel) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...results].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });

    setResults(sorted);
  };

  if (loading) return <div className={styles.loading}>Chargement...</div>;

  return (
    <div>
      {/*  <h1>Résultats pour "{query}"</h1>
       <h1>Résultats pour "{query}"</h1>
       <h1>Résultats pour "{query}"</h1>*/}
    <table className={styles.resultsTable}>
      
      <thead>
        <tr>
          <th onClick={() => handleSort("agencyName")}>Agence</th>
          <th onClick={() => handleSort("departure")}>Départ</th>
          <th onClick={() => handleSort("arrival")}>Arrivée</th>
          <th onClick={() => handleSort("departureTime")}>Heure</th>
          <th onClick={() => handleSort("departureDate")}>Date</th>
          <th onClick={() => handleSort("price")}>Tarif</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody>
        {paginatedResults.map((travel, index) => (
          <tr key={index}>
            <td>{travel.agencyName}</td>
            <td>{travel.departure}</td>
            <td>{travel.arrival}</td>
            <td>{travel.departureTime}</td>
            <td>{travel.departureDate}</td>
            <td>{travel.price.toLocaleString()} FCFA</td>
            <td>
              <a href={`/details/${travel.agencyName}`} className={styles.detailsLink}>
                Voir plus
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? styles.active : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
  
  );
};

export default SearchResults;
