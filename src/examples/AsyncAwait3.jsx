import { useEffect, useState } from "react";

export default function AsyncAwait3() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      console.log("1) Iniciando fetch...");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log("2) Response chegou...");
      const data = await response.json();
      console.log("3) Dados convertidos em JSON");

      await new Promise((resolve) => setTimeout(resolve, 2000)); // força atraso

      setPhotos(data.slice(0, 50)); // mostra só os 50 primeiros
      setLoading(false);
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Galeria</h1>

      {loading ? (
        <p>Carregando imagens...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {photos.map((photo) => (
            <li key={photo.id} style={{ marginBottom: "1rem" }}>
              <strong>{photo.title}</strong>
              <br />
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
