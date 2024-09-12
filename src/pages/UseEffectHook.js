import React from "react"
import { useEffect } from "react"
import ProductCard from "../layout/Productcard"
import productData from "../layout/ProductData"

const UseEffectHook = () => {
    async function showapi() {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.table(data)
    }
    useEffect(() => {
        // console.log("hello");     
        showapi()
    })
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {productData.map((element, index) => (
                        <div className="col-lg-3" key={index}>
                            <ProductCard
                                title={element.title}
                                price={element.price}
                                description={element.description}
                                category={element.category}
                                image={element.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UseEffectHook