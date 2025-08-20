import { useEffect, useState } from "react";

export default function AsyncAwait1() {
  const [name, setName] = useState("");

  /*
  useEffect(() => {
    fetch('https://api.agify.io?name=Gabriel')
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []);
  */

  useEffect(() => {
    async function fetchName() {
      const res = await fetch("https://api.agify.io?name=Gabriel");
      const data = await res.json();
      setName(data.name);
    }

    fetchName();
  }, []);

  return <h1>{!name ? "Carregando..." : <>Nome: {name}</>}</h1>;
}
