import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm() {
  return (
    <form className="login-form-admin">
      <Form.Input name="email" placeholder="Correo electronico" primary fluid />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        primary
        fluid
      />
      <Button type="submit" content="Iniciar sesion" primary fluid />
    </form>
  );
}
