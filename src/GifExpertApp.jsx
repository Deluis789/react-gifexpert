import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball z']);

    const onAddCategory = (onNewCategory) => {
        console.log(onNewCategory);

        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories]);
    }
    return (
        <>
            {/* titulo */}
            <h1 > GifExpertApp</h1 >
            {/* input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {/* Listado de Gif */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

