import React from "react";
import { useAuth } from "../../hoooks";

export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home Admin</h1>
      <button onClick={logout}>Cerrar Session</button>
    </div>
  );
}
