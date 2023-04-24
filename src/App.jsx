import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import './styles/App.css';
import axios from "axios";

function App() {

    const [products, setProducts] = useState([]);

    const increment = (index) => {
        let temp = [...products];
        temp[index].count = temp[index].count + 1;
        setProducts(temp);
    }

    const decrement = (index) => {
        let temp = [...products];
        if(temp[index].count>0){
            temp[index].count = temp[index].count - 1;
        }
        setProducts(temp);
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(resp => {
            let _products = resp.data.products;
            _products.forEach(product => {
                product.count = 0;
            })
            setProducts(_products)
        })
    }, [])


    return (
        <div className="App">
            <Header />
            <Products items={products} increment={increment} decrement={decrement} />
        </div>
    )
}

export default App;