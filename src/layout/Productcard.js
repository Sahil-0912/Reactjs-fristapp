function ProductCard(props) {
    return (
        <>
             <div className="card  p-2 h-75 product-data shadow">
                    <img src={props.image} className="w-100 h-50"/>
                    <div class="card-body">
                        <h4 className="text-uppercase">category: {props.category}</h4>
                        <ul>
                            <li>Title:{props.title}</li>
                            <li>Price:{props.price}/-</li>
                            <li>ratings:{props.rating.rate}, {props.rating.count} <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default ProductCard