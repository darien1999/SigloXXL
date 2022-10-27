<<<<<<< HEAD
import React from 'react'
import { Table, Button, Icon} from "semantic-ui-react"
import { map } from "lodash";
import "./TableTablesAdmin.scss";

export  function TableTablesAdmin(props) {
    const { tables } = props;
  return (
    <Table className="table-tables-admin" >
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Mesa Numero</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {map(tables, (table, index) => (
                <Table.Row key={index}>
                    <Table.Cell>{table.number}</Table.Cell>

                    <Actions table={table} />
                </Table.Row>

            ))}
        </Table.Body>
    </Table>
  )
}

function Actions(props) {
    const {tables} = props;

    return (
        <Table.Cell textAlign="right">
            <Button icon onClick= {() => console.log("Editar mesa")}>
                <Icon name="pencil" />
            </Button>

            <Button icon negative onClick= {() => console.log("Eliminar mesa")}>
                <Icon name="close" />
            </Button>
        
        </Table.Cell>
    );
=======
import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableTablesAdmin.scss";

export function TableTablesAdmin(props) {
  const { tables, updateTable, deleteTable } = props;
  return (
    <Table className="table-tables-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Mesa numero</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(tables, (table, index) => (
          <Table.Row key={index}>
            <Table.Cell>{table.number}</Table.Cell>
            <Actions
              table={table}
              updateTable={updateTable}
              deleteTable={deleteTable}
            />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
function Actions(props) {
  const { table, updateTable, deleteTable } = props;

  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => updateTable(table)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => deleteTable(table)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
>>>>>>> e8e937d549a8352ff804c42be4bfbc0405803091
}
