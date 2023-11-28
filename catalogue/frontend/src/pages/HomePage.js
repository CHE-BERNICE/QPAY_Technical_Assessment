import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <header className="h-20  shadow-xl grid grid-cols-2 justify-items-center content-center p-4">
                <h1><Link to="/" className="font-semibold text-blue-500 font-serif">CATALOGUE</Link></h1>
                <Link to="/createProduct" className="text-green-400 font-serif border border-sm border-green-400 p-2">CREATE</Link>
            </header>
            <section className="pt-14 grid justify-items-center  bg-gradient-to-b from-gray-300 to-gray-600">
                <h1 className="text-center font-semibold text-3xl text-slate-700">Products</h1>
                <div className="border border-sm border-slate-300 w-1/2 my-5 pt-2">
                    {data.map((product) => (
                        <article key={product.productID} className="grid justify-items-center">
                            <Link to={`/viewProduct/${product.productID}`}>
                                <img src={product.imageUrl} alt={product.productName} className=""/>
                                <p className="text-medium text-lg my-3">Cost : {product.amount} {product.currency}</p>
                                <hr/>
                            </Link>
                        </article>
                    ))}
                    
                </div>
            </section>
        </div>
    );
}

export default HomePage;