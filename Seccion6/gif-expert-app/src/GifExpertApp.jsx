import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newVal) => {    
        if(categories.includes(newVal)) return;

        setCategories(val=> [newVal, ...val]);
    }

    return(
        <>
            <h1 className="mb-4">
                GifExpertAppp
            </h1>

            <AddCategory 
                onNewValue={ onAddCategory }
            />
            
            { 
                categories.map(category => 
                (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )) 
            }
        </>   
    )
}