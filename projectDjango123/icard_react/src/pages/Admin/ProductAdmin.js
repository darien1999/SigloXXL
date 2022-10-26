import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableProductAdmin } from "../../components/Admin";
import { useProduct } from "../../hoooks";

export function ProductAdmin() {
  const { loading, products, getProducts } = useProduct();

  useEffect(() => getProducts(), []);

  return (
    <>
      <HeaderPage title="Productos" btnTitle="Nuevo producto" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableProductAdmin products={products} />
      )}
    </>
  );
}
