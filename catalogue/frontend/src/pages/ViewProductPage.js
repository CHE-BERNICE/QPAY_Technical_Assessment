import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewProductPage = () => {
    const param = useParams();
    const id = param.id;

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:5000/delProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => { setMsg(data.Message); navigate("/")})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <header className="h-20  shadow-xl grid grid-cols-2 justify-items-center content-center p-4">
                <h1><Link to="/" className="font-semibold text-blue-500 font-serif">CATALOGUE</Link></h1>
            </header>
            <section className="pt-14 grid justify-items-center  bg-gradient-to-b from-gray-300 to-gray-500">
                <div className="flex justify-center justify-items-start w-1/2 px-2">
                    <Link to="/" className="mt-1.5 mr-1"><FaArrowLeft size={25} className="bg-slate-200 rounded-full p-1"/></Link>
                    <h1 className="text-center font-semibold text-3xl text-slate-700 ml-3"> {data.productName} </h1>
                </div>
                <div className="border border-sm border-slate-300 w-1/2 my-5 pt-2">
                    <article className="grid justify-items-center">
                        {msg != null && <p className="text-semibold text-xl text-red-600 text-center">{msg}</p>}
                        <img src={data.imageUrl} alt={data.productName} className=""/>
                        <p className="text-medium text-lg justify-self-center my-3">Cost : {data.amount} {data.currency}</p>
                        <button onClick={handleDelete} className="my-3 p-3 text-white text-bold bg-red-500 justify-self-end mr-4">Delete</button>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default ViewProductPage;