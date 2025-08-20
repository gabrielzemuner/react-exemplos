import { useEffect, useState } from "react";

export default function AsyncAwait2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      console.log("1) Iniciando requisição...");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("2) Response bruta:", response);

      const data = await response.json();
      console.log("3) Dados convertidos em JSON:", data);

      setUsers(data);
      console.log("4) Dados salvos no estado!");
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
