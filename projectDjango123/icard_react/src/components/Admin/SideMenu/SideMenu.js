import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hoooks";
import "./SideMenu.scss";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="side-menu-admin">
      <h1>Hola Sidemenu</h1>
      <MenuLeft pathname={pathname} />
      <div className="content"> {children} </div>
    </div>
  );
}
function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();
  return (
    <Menu fixed="left" borderless className="slide" vertical>
      {/* Pedidos */}
      <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
        <Icon name="home" /> Pedidos
      </Menu.Item>

      {/* Mesas */}
      <Menu.Item
        as={Link}
        to={"/admin/tables"}
        active={pathname === "/admin/tables"}
      >
        <Icon name="table" /> Mesas
      </Menu.Item>

      {/* Pagos */}

      <Menu.Item
        as={Link}
        to={"/admin/payment-history"}
        active={pathname === "/admin/payment-history"}
      >
        <Icon name="history" /> Historial de pagos
      </Menu.Item>

      {/* Categorias */}

      <Menu.Item
        as={Link}
        to={"/admin/categories"}
        active={pathname === "/admin/categories"}
      >
        <Icon name="folder" /> Categorias
      </Menu.Item>

      {/* Productos */}

      <Menu.Item
        as={Link}
        to={"/admin/products"}
        active={pathname === "/admin/products"}
      >
        <Icon name="cart" /> Productos
      </Menu.Item>

      {/* Usuarios */}

      {auth.me?.is_staff && (
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users"}
        >
          <Icon name="user" /> Usuarios
        </Menu.Item>
      )}
    </Menu>
  );
}
