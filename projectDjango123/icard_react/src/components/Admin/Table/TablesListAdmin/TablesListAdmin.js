import React from "react";
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import { map, size } from "lodash";
import { TableAdmin } from "../";
import { ReactComponent as IcTable} from "../../../../assets/table.svg"
import "./TablesListAdmin.scss";

export function TablesListAdmin(props) {
  const { tables } = props;


  return (
    <div className="tables-list-admin">
          <Button primary icon className="tables-list-admin__reaload"onClick={() => console.log('onRefetchReload')}>
            <Icon name="refresh" />
          </Button>
          <div className="tables-list-admin__reaload-toggle">
              <span>Reload automatico</span>
              <Checkbox toggle onChange={(_, data) => console.log(data.checked)} />
          </div>

        {map(tables, (table) => (
          <TableAdmin key={table.numer} table={table}/>
        ))}
    </div>
  )
}
