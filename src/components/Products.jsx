function Products({ items,increment,decrement }) {
    console.log(items)
    return (
        <div className="products">
            {items.map((item,index) => {
                return (
                    <div className="product">
                        <div>
                            <img src={item.thumbnail} />
                        </div>
                        <div className="details">
                            <div>{item.title}</div>
                            <div>{item.count}</div>
                            <div>
                                <button onClick={()=>increment(index)}>+</button>
                                <button onClick={()=>decrement(index)}>-</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;