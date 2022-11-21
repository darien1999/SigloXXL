import React, {useEffect} from 'react';
import { useCategory} from "../../hoooks"

export function Categories() {
  const {loading, categories, getCategories} = useCategory();

  useEffect(() => getCategories(), []);
  

  return (
    <div>
        <h3>Categorias</h3>
        {loading ? <p> Cargando</p> : <h1>Lista de categorias</h1> }
    </div>
  )
}
