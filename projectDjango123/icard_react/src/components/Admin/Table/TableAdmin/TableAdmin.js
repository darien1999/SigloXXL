import React, {useState, useEffect } from 'react'
import { size } from "lodash";
import classNames from "classnames";
import { Link } from "react-router-dom"
import { getOrdersByTableApi } from "../../../../api/orders"
import { ORDER_STATUS } from "../../../../utils/constants"
import { Label, Button, Icon, Checkbox } from "semantic-ui-react";
import { ReactComponent as IcTable} from "../../../../assets/table.svg"
import "./TableAdmin.scss"

export function TableAdmin(props) {
  const { table } = props;
  const [orders, setOrders] = useState([])
  const [tableBusy, setTableBusy] = useState(false)
  console.log(orders);

  useEffect(() => {
    (async () => {
      console.log(table.id);
      const response = await getOrdersByTableApi
      (table.id, ORDER_STATUS.PENDING
        );
      
        setOrders(response);
    })()
  }, []);

  useEffect(() => {
    (async () => {
      console.log(table.id);
      const response = await getOrdersByTableApi(table.id, ORDER_STATUS.DELIVERED
        );
      

      if(size(response) > 0) setTableBusy(response);
        else setTableBusy(false)
        
    })()
  }, []);
  

  return (
    <Link className="table-admin" to={`/admin/table/${table.id}`}>
      {size(orders) > 0 ? (
        <Label circular color="red">
          {size(orders)}
        </Label>
      ) : null}
      <IcTable className={classNames({
        pending: size(orders) > 0,
        busy: tableBusy,
      })} />
      <p>Mesa {table.number}</p>
    </Link>
  )
}
