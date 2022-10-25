import React from "react";
import {
  HeaderPage,
  TableCategoryAdmin,
  AddEditCategoryForm,
} from "../../components/Admin";
import { useCategory } from "../../hoooks";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { ModalBasic } from "../../components/Common";

export function CategoriesAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const { loading, categories, getCategories } = useCategory();

  useEffect(() => getCategories(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addCategory = () => {
    setTitleModal("Nueva Categoria");
    setContentModal(
      <AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  return (
    <>
      <HeaderPage
        title="Categorias"
        btnTitle="Nueva categoria"
        btnClick={addCategory}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableCategoryAdmin categories={categories} />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
