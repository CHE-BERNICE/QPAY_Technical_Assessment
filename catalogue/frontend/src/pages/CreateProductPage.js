import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const CreateProductPage = () => {
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [file, setFile] = useState();
    const [inputErr, setInputErr] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(productName === "" || amount === "" || currency === "" || file === null) {
            setInputErr("Please fill all fields!");
        } else {
            setInputErr();
            const formData = new FormData();
            formData.append('imageUrl', file)
            let productData = {
                productName: productName,
                amount: Number(amount),
                currency: currency
            }
            axios.post("http://localhost:5000/postProducts", productData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData
            })
            .then(res => console.log(res))
            .catch((err) => console.log(err))
        }
    }

    return (
        <div>
            <header className="h-20  shadow-xl grid grid-cols-2 justify-items-center content-center p-4">
                <h1><Link to="/" className="font-semibold text-blue-500 font-serif">CATALOGUE</Link></h1>
            </header>
            <section className="pt-14 grid justify-items-center  bg-gradient-to-b from-gray-300 to-gray-500">
                <div className="flex justify-center justify-items-start w-1/2 px-2">
                    <Link to="/" className="mt-1.5 mr-1"><FaArrowLeft size={25} className="bg-slate-200 rounded-full p-1"/></Link>
                    <h1 className="text-center font-semibold text-3xl text-slate-700 ml-3"> Create Product</h1>
                </div>
                <form encType="multipart/form-data" onSubmit={handleSubmit} className="border border-sm flex flex-col items-center border-slate-300 w-3/4 md:w-1/2 my-5 pt-2">
                    <div className="my-3 w-3/4">
                        <p className="text-red-600">{inputErr != null && inputErr}</p>
                        <label>Product Name</label><br />
                        <input 
                            type="text" 
                            name="productName"
                            value={ productName }
                            onChange={(e) => {setProductName(e.target.value)}}
                            className="outline-none border border-sm p-2 mt-1 w-full" 
                            placeholder="Input Product Name"
                        />
                    </div>
                    <div className="my-3 w-3/4">
                        <label>Amount</label><br />
                        <input 
                            type="text" 
                            name="amount"
                            value={ amount }
                            onChange={(e) => {setAmount(e.target.value)}}
                            className="outline-none border border-sm p-2 mt-1 w-full" 
                            placeholder="Input Amount"/>
                    </div>
                    <div className="my-3 w-3/4">
                        <label>Currency</label><br />
                        <input 
                            type="text"
                            name="currency"
                            value={ currency }
                            onChange={(e) => {setCurrency(e.target.value)}} 
                            className="outline-none border border-sm p-2 mt-1 w-full" 
                            placeholder="Input Currency"/>
                    </div>
                    <div className="my-3 w-3/4">
                        <label>Product Image</label><br />
                        <input 
                            type="file" 
                            name="imageUrl"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="outline-none border border-sm mt-1 w-full" />
                    </div>
                    <button type="submit" className="my-3 p-3 text-white text-bold bg-blue-600">Create</button>
                </form>
            </section>
        </div>
    );
}

export default CreateProductPage;