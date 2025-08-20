import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export default function AsyncAwait4() {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPics() {
      console.log("1) Iniciando fetch de imagens...");
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
      console.log("2) Response:", res);
      const data = await res.json();
      console.log("3) JSON:", data);
      setPics(data);
      setLoading(false);
      console.log("4) Estado atualizado com imagens!");
    }
    fetchPics();
  }, []);

  return (
    <div>
      <h1>Galeria Lorem Picsum</h1>
      {loading ? (
        <p>Carregando imagens...</p>
        // <Skeleton />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pics.map((pic) => (
            <li key={pic.id} style={{ marginBottom: "1rem" }}>
              <strong>{pic.author}</strong>
              <br />
              <img
                src={`${pic.download_url}?w=200&h=200`}
                alt={pic.author}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
