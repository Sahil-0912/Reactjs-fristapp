function ProductCard(props) {
    return (
        <>
            <div className="card my-5 p-2 shadow">
                <img src={props.image} className='w-100' />
                <div className="card-body">
                    <h4>Title:{props.title}</h4>
                    <span>Price:{props.price}</span>
                    <p>Decription{props.description}</p>
                    <h5>Category{props.category}</h5>
                </div>
            </div>
        </>
    )
}

export default ProductCard