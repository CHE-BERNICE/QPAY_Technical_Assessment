import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";

export default function App() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [info, setInfo ]= useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
    cPassword: "",
    brandName: "",
    brandType: "",
    address: "",
    city: "",
    zipCode: "",
    tax: "",
    aFirstName: "",
    aLastName: "",
    aEmail: "",
    aTel: "",
  });
  const [page, setPage] = useState(0);

  const prevPage = () => {
    setPage(page-1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    switch(page){
      case 0:
        if(info.firstName === "" || info.lastName === "" || info.email === "" || info.tel === "" || info.password === "" || info.cPassword === ""){
          setError("Fill all fields");
        }else{
          if(info.password === info.cPassword){
            setError();
            setPage(page+1);
            setError();
          }else{
            setError("Password does not match!");
          }
        }
        break;
      case 1:
        if(info.brandName === "" || info.brandType === "" || info.address === "" || info.city === "" || info.zipCode === "" || info.tax === "" ){
          setError("Fill all fields");
        }else{
          setError();
          setPage(page+1);
          setError();
        }
        break;
      case 2:
        if(info.aFirstName === "" || info.aLastName === "" || info.aEmail === "" || info.aTel === "" ){
          setError("Fill all fields");
        }else{
          setError();
          setSuccess("Congratulations"); 
          console.log(info);
          setError();
        }
        break;
      default:
        break;
    };
    
  }
  return (
    <>
        {page === 0 &&
          <div className=" App grid justify-items-stretch h-full bg-no-repeat bg-cover bg-gradient-to-b from-blue-500 to-cyan-100">
            <div className='grid grid-cols-2 justify-items-end px-8 py-7'>
              <h1 className='text-white text-xl font-serif'>Create New Account</h1>
              <h3 className='text-white justify-self-center'>Contact Us</h3>
            </div>
            <form onSubmit={handleSubmit} className="grid justify-self-center w-full" >
              <div className='justify-self-center shadow-xl bg-white w-3/5 rounded-lg mb-6 pb-6'>
                  <ul className='h-16 lg:h-14 list-none grid grid-cols-3 justify-around content-stretch bg-slate-200  rounded-tr-lg'>
                      <li className='rounded-r-full text-white bg-gradient-to-l from-blue-400 to-cyan-100 pt-3.5 px-3 lg:px-8 xl:px-14'><Link to=""><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>1</span>Your Profile</Link></li>
                      <li className='rounded-r-full text-slate-400 pt-3.5 px-2 xl:px-6'><Link to=""><span className='rounded-full text-white bg-slate-400 mx-2 py-1 px-2'>2</span>Business Information</Link></li>
                      <li className='rounded-r-full text-slate-400 pt-3.5 px-2 lg:px-4'><Link to=""><span className='rounded-full text-white bg-slate-400 mx-2 py-1 px-2'>3</span>Additional Users</Link></li>
                  </ul>
                  <section className=' grid mt-6 px-10 pb-2'>
                      <span className='my-4 text-slate-300 text-center'>Step 1</span>
                      <h1 className='text-3xl text-slate-800 text-center'>Your Profile</h1>
                      <p className='text-center justify-self-center text-slate-500 w-3/5 leadimg-none'>Enter the login information for your Account. You will be able to create additional users after registering</p>
                      <div className='my-4 py-4 px-4 lg:px-24 lg:grid grid-cols-2 justify-between justify-items-start'>
                          <p className="text-md text-red-500">{error != null && error}</p>
                          <p></p>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>First Name*</label>
                            <input 
                              type='text' 
                              name='firstName'
                              value={info.firstName}
                              onChange={(e) => setInfo({...info, firstName: e.target.value})}
                              className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                              placeholder='Input Your First Name'/>
                          </div>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>Last Name*</label>
                            <input 
                              type='text' 
                              name="lastName"
                              value={info.lastName}
                              onChange={(e) => setInfo({...info, lastName: e.target.value})}
                              className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                              placeholder='Input Your Last Name'/>
                          </div>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>Email*</label>
                            <input 
                              type='email' 
                              name="email"
                              value={info.email}
                              onChange={(e) => setInfo({...info, email: e.target.value})}
                              className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                              placeholder='Input Your Email'/>
                          </div>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>Phone Number*</label>
                            <input 
                              type='text' 
                              name="tel"
                              value={info.tel}
                              onChange={(e) => setInfo({...info, tel: e.target.value})}
                              className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                              placeholder='Input Your Phone Number'/>
                          </div>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>Password*</label>
                            <input 
                              type='password' 
                              name="password"
                              value={info.password}
                              onChange={(e) => setInfo({...info, password: e.target.value})}
                              className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                              placeholder='Create Password'/>
                          </div>
                          <div className='grid justify-items-start'>
                            <label className='my-1 text-slate-500'>Confirm Password*</label>
                            <input 
                              type='password' 
                              name="cPassword"
                              value={info.cPassword}
                              onChange={(e) => setInfo({...info, cPassword: e.target.value})}
                              className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                              placeholder='Confirm Your Password'/>
                          </div>
                      </div>
                  </section>
                
              </div>
              <div className='grid grid-cols-2 justify-items-center px-8 py-3 mt-2 mb-16'>
                <button className='text-blue-500 text-md font-serif border border-blue-200 py-2 px-4'> Back to Login </button>
                <button type="submit"  className='text-white text-md font-serif bg-blue-500 justify-self-center py-2 px-4'>Next Step</button>
              </div>
            </form>
          </div>
        }
        {page === 1 && 
          <div className=" App grid h-full bg-no-repeat bg-cover bg-gradient-to-b from-blue-500 to-cyan-100">
            <div className='grid grid-cols-2 justify-items-end px-8 py-7'>
              <h1 className='text-white text-xl font-serif'>Create New Account</h1>
              <h3 className='text-white justify-self-center'>Contact Us</h3>
            </div>
            <form onSubmit={handleSubmit} className="grid justify-self-center w-full" >
              <div className='justify-self-center shadow-xl bg-white w-3/5 rounded-lg mb-6 pb-6'>
                  <ul className='h-16 lg:h-14 list-none grid grid-cols-3 justify-around content-stretch bg-slate-200  rounded-tr-lg'>
                      <li className=' text-white bg-gradient-to-l from-cyan-400 to-cyan-100 pt-3.5 px-3 lg:px-8 xl:px-14'><Link ><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>1</span>Your Profile</Link></li>
                      <li className='rounded-r-full text-white bg-gradient-to-l from-blue-400 to-cyan-400 pt-3.5 px-2 xl:px-6'><Link to=""><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>2</span>Business Information</Link></li>
                      <li className='rounded-r-full text-slate-400 pt-3.5 px-2 lg:px-4'><Link to=""><span className='rounded-full text-white bg-slate-400 mx-2 py-1 px-2'>3</span>Additional Users</Link></li>
                  </ul>
                  <section className=' grid mt-6 px-10 pb-2'>
                      <span className='my-4 text-slate-300 text-center'>Step 2</span>
                      <h1 className='text-3xl text-slate-800 text-center'>Business Information</h1>
                      <p className='text-center justify-self-center text-slate-500 w-3/5 leadimg-none'>Please enter information about your company</p>
                      
                      <div className=' my-4 pb-4 px-4 lg:px-24 '>
                          <h2 className="text-blue-400 text-md my-2 ">GENERAL INFORMATION</h2>
                          <div className="lg:grid grid-cols-2 justify-between justify-items-start">
                            <p className="text-md text-red-500">{error != null && error}</p>
                            <p></p>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Brand Name*</label>
                                <input 
                                  type='text' 
                                  name="brandName"
                                  value={info.brandName}
                                  onChange={(e) => setInfo({...info, brandName: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                                  placeholder='Input Your Brand Name'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Brand Type*</label>
                                <select 
                                  name="brandType" 
                                  value={info.brandType}
                                  onChange={(e) => setInfo({...info, brandType: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500 text-black' >
                                    <option>Select your Brand Type</option>
                                    <option value="IT">IT</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Entertainment">Entertainment</option>
                                </select>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Street Address*</label>
                                <input 
                                  type='text' 
                                  name="address"
                                  value={info.address}
                                  onChange={(e) => setInfo({...info, address: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                                  placeholder='Input Your Street Address'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>City*</label>
                                <input 
                                  type='text' 
                                  name="city"
                                  value={info.city}
                                  onChange={(e) => setInfo({...info, city: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                                  placeholder='Input Your City'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Zip Code*</label>
                                <input 
                                  type='text' 
                                  name="zipCode"
                                  value={info.zipCode}
                                  onChange={(e) => setInfo({...info, zipCode: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                                  placeholder='Input Zip Code'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Tax ID Number*</label>
                                <input 
                                  type='text' 
                                  name="tax"
                                  value={info.tax}
                                  onChange={(e) => setInfo({...info, tax: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                                  placeholder='Input Tax ID Number'/>
                            </div>
                          </div>
                      </div>
                  </section>
              </div>
              <div className='grid grid-cols-2 justify-items-center px-8 py-3 mt-2 mb-16'>
                <Link className='text-blue-500 text-md font-serif border border-blue-200 py-2 px-4'> Back to Login </Link>
                <div>
                    <Link onClick={prevPage} className='text-blue-500 text-md font-serif border border-blue-500 mr-2 py-2 px-4'> Previous Step </Link>
                    <button type="submit" className='text-white text-md font-serif bg-blue-500 justify-self-center py-2 px-4'>Next Step</button>
                </div>
              </div>
            </form>
          </div>
        }
        {page === 2 &&
          <div className=" App grid h-full bg-no-repeat bg-cover bg-gradient-to-b from-blue-500 to-cyan-100">
            <div className='grid grid-cols-2 justify-items-end px-8 py-7'>
              <h1 className='text-white text-xl font-serif'>Create New Account</h1>
              <h3 className='text-white justify-self-center'>Contact Us</h3>
            </div>
            <form onSubmit={handleSubmit} className="grid justify-self-center w-full" >
              <div className='justify-self-center shadow-xl bg-white w-3/5 rounded-lg mb-6 pb-6'>
                  <ul className='h-16 lg:h-14 list-none grid grid-cols-3 justify-around content-stretch rounded-tr-full'>
                      <li className=' text-white bg-gradient-to-l from-cyan-200 to-cyan-100 pt-3.5 px-3 lg:px-8 xl:px-14'><Link to=""><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>1</span>Your Profile</Link></li>
                      <li className=' text-white bg-gradient-to-l from-cyan-400 to-cyan-200 pt-3.5 px-2 xl:px-6'><Link to=""><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>2</span>Business Information</Link></li>
                      <li className='rounded-r-full text-white bg-gradient-to-l from-blue-400 to-cyan-400 pt-3.5 px-2 lg:px-4'><Link to=""><span className='rounded-full text-blue-500 bg-white mx-2 py-1 px-2'>3</span>Additional Users</Link></li>
                  </ul>
                  <section className=' grid mt-6 px-10 pb-2'>
                      <span className='my-4 text-slate-300 text-center'>Step 3</span>
                      <h1 className='text-3xl text-slate-800 text-center'>Additional Users</h1>
                      <p className='text-center justify-self-center text-slate-500 w-3/5 leadimg-none'>Please enter additional users in your company</p>
                      <div>
                        {success != null &&
                          <div className="grid content-center">
                          <GrStatusGood size={50} className="justify-self-center text-green-500 mb-3"/>
                          <h1 className="text-3xl  justify-self-center mb-1">Congratulations</h1>
                        </div>}
                        <div className='my-4 py-4 px-4 lg:px-24 lg:grid grid-cols-2 justify-between justify-items-start'>
                          <p className="text-md text-red-500">{error != null && error}</p>
                          <p></p>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>First Name*</label>
                                <input 
                                  type='text'
                                  name="aFirstName"
                                  value={info.aFirstName}
                                  onChange={(e) => setInfo({...info, aFirstName: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                                  placeholder='Input the First Name'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Last Name*</label>
                                <input 
                                  type='text' 
                                  name="aLastName"
                                  value={info.aLastName}
                                  onChange={(e) => setInfo({...info, aLastName: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                                  placeholder='Input the Last Name'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Email*</label>
                                <input 
                                  type='email' 
                                  name="aEmail"
                                  value={info.aEmail}
                                  onChange={(e) => setInfo({...info, aEmail: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full outline-none block border border-slate-500' 
                                  placeholder='Input the Email'/>
                            </div>
                            <div className='grid justify-items-start'>
                                <label className='my-1 text-slate-500'>Phone Number*</label>
                                <input 
                                  type='text' 
                                  name="aTel"
                                  value={info.aTel}
                                  onChange={(e) => setInfo({...info, aTel: e.target.value})}
                                  className='mb-1 px-3 py-1 w-full block outline-none border border-slate-500' 
                                  placeholder='Input the Phone Number'/>
                            </div>
                        </div>
                    </div>
                  </section>
              </div>
              <div className='grid grid-cols-2 justify-items-center px-8 py-3 mt-2 mb-16'>
                <button className='text-blue-500 text-md font-serif border border-blue-200 py-2 px-4'> Back to Login </button>
                <div>
                    <Link onClick={prevPage}  className='text-blue-500 text-md font-serif border border-blue-500 mr-2 py-2 px-4'> Previous Step </Link>
                    <button type="submit" className='text-white text-md font-serif bg-blue-500 justify-self-center py-2 px-4'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        }
        
    </>
  );
}
