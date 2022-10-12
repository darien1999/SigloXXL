import React from "react";
import "./AdminLayout.scss";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hoooks";

export function AdminLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <p>AdminLayout</p>

      {children}
    </div>
  );
}
