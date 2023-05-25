import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory) => { // nnewCategory es el valor que se recibe de AddCategory.jsx

        const newCategoryMin = newCategory.toLowerCase();


        if (categories.some(category => category.toLowerCase() === newCategoryMin)) return; // el some es para que no se repitan las categorias
        // if (categories.includes(newCategoryMin)) return; // el includes es para que no se repitan las categorias
        setCategories([newCategory, ...categories])
    }


    return (
        <>

            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            < AddCategory

                onNewCategory={event => onAddCategory(event)} // El evento que se recibe aqui viene de AddCategory.jsx y es enviado al componente padre (GifExpertApp.jsx).
            />
            {/* Listado de gif */}

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} // envio la categoria al componente GifGrid.jsx a través de la prop category
                    />
                ))
            }


            {/* Gif Item */}
        </>
    )
}
export default GifExpertApp