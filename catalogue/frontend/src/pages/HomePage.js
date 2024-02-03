import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0);
    //const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    let [num, setNum] = useState(1);
    const pg = [
        {pge: num},
        {pge: num +1},
        {pge: num+2}
    ];
    useEffect(() => {
        fetch(`http://localhost:5000/products/${pageNo}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.rows);
            setPages(data.pages);
        })
        .catch(err => console.log(err))
    }, [pageNo]);
    

    const Prev = () => {
        num > 1 && setNum(--num);
    };

    const Next = () => {
        num < pages-2 && setNum(++num);
    }; 

    return (
        <div>
            <header className="h-20  shadow-xl grid grid-cols-2 justify-items-center content-center p-4">
                <h1><Link to="/" className="font-semibold text-blue-500 font-serif">CATALOGUE</Link></h1>
                <Link to="/createProduct" className="text-green-400 font-serif border border-sm border-green-400 p-2">CREATE</Link>
            </header>
            <section className="pt-14 grid justify-items-center  bg-gradient-to-b from-gray-300 to-gray-600">
                <h1 className="text-center font-semibold text-3xl text-slate-700">Products</h1>
                <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 border border-sm border-slate-300 w-10/12 xs:w-11/12 sm:w-4/5 my-5 pt-2">
                    {products.map((product) => (
                        <article key={product.productID} className="grid justify-items-center">
                            <Link to={`/viewProduct/${product.productID}`}>
                                <img src={product.imageUrl} alt={product.productName} className=""/>
                                <p className="text-medium text-lg my-3">Cost : {product.amount} {product.currency}</p>
                                <hr/>
                            </Link>
                        </article>
                    ))}
                    
                </div>
                <div className="grid grid-cols-5 gap-0 place-content-center my-4 mb-8">
                    <FaArrowLeft onClick={Prev} size={35} className="hover:bg-cyan-500 bg-cyan-300 hover:text-white text-black rounded-l-lg border border-slate-100 h-12 p-2"/>
                    {
                        pg.map((p, i) => 
                            <button key={i} onClick={() => setPageNo(p.pge)} className={`font-bold text-lg hover:bg-cyan-500 bg-cyan-300 hover:text-white text-black border border-slate-100 p-2 ${pageNo === p.pge & 'bg-cyan-600 text-white'}`}>{p.pge}</button>
                        )
                    }
                    <FaArrowRight onClick={Next} size={35} className="hover:bg-cyan-500 bg-cyan-300 hover:text-white text-black rounded-r-lg border border-slate-100 h-12 p-2"/>
                </div>
            </section>
        </div>
    );
}

export default HomePage;