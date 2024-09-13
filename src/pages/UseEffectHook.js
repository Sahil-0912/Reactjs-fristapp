import React, { useState } from "react"
import { useEffect } from "react"


const UseEffectHook = () => {
    const [products, setproduct] = useState([])
    async function showapi() {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.table(data)
        setproduct(data)
    }
    useEffect(() => {
        // console.log("hello");     
        showapi()
    }, [])
    return (
        <>
            <div className="table-responsive container">
                <table className="table table-hover table-stripped table-success">
                    <thead className="table-dark text-uppercase">
                        <tr>
                            <th>sr.no</th>
                            <th>title</th>
                            <th>price</th>
                            <th>category</th>
                            <th>rating</th>
                            <th>count</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.rating.rate}</td>
                                        <td>{product.rating.count}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UseEffectHook