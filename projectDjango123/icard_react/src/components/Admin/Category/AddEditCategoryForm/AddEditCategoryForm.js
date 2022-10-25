import React, { useCallback, useState } from "react";
import { Form, Image, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import "./AddEditCategoryForm.scss";
import { initial } from "lodash";

export function AddEditCategoryForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <Form className="add-edit-category-form">
      <Form.Input name="title" placeholder="Nombre de la categoria" />
      <Button type="button" fluid {...getRootProps()}>
        Subir imagen
        <input {...getInputProps()} />
        <Image src={previewImage} fluid />
      </Button>
      <Button type="submit" primary fluid content="Crear" />
    </Form>
  );
}
