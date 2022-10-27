import React, { useEffect } from 'react';
import { Loader } from "semantic-ui-react";
import {HeaderPage, TableTablesAdmin} from "../../components/Admin";
import { useTable } from "../../hoooks";

export function TablesAdmin() {
  const { loading, tables, getTables } = useTable();

  useEffect(() => getTables(), []);
  

  return (
    <div>
        <h1> <HeaderPage title="Mesas" btnTitle="Crear nueva mesa"/></h1>

        {loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ) : (
          <TableTablesAdmin tables={tables} />
        )}
    </div>
  )
}
