import { useState } from "react"

const Counter = () => {
    const [count, setcount] = useState(0);

    const inc = () => {
        setcount(count + 1)
    }

    const dec = () => {
        // setcount(count - 1)

        return count>0? setcount(count-1):count
    }

    return (
        <>
            <div className="col-4 mx-auto my-5 p-5 shadow text-center counter">
                <h1>Counter {count}</h1>
            <button onClick={inc} className="btn btn-dark mx-4">+</button>
            <button onClick={dec} className="btn btn-dark">-</button>

            </div>
        </>
    )
}

export default Counter