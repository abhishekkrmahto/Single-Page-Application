import React, { useState } from 'react'

const Mobiles = () => {
    const mobiles = [
        {name:"Iphone 11",img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQvxyBVTM-SQ-eb7jPSwa3rTG_6SRfZfXQBDwHeq1NDjAr8UM",price:32000},
        {name:"Iphone 12",img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTG0VQPNw5il4mhtn9ojHS9sTeCaRZ2gEGbASG99p2j13EQOQF_-jbF016-iPpMxlCpmNEMem_JftE3M9JS_UwYmtnBsXAueg",price:43000},
        {name:"Iphone 13",img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSnF5oM10JVWuWlzgcYiwXcSIHBoukLWb33e0pQzD7RT42tpscuacnkLR6UuWGhDtN9RMPOYqIMZxKiCww46bkFkQKt7S-",price:56000},
        {name:"Iphone 14",img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvjvesNGq7zyoxZ8337j0kntiGVFqkruGeayFcCLN4Q2g3_StNkRIpI0NdbnoKSFIWps1bdQKRgkKe9qg1pywTNCS2jegGu0YqrYi2iVEW",price:62000},
        {name:"Iphone 15",img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKj8NxFZGTq2Duw3kub7bAM6b-7zsd_1oF5GkGsknP4ex-A8Dk",price:68000},
        {name:"Iphone 16",img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQMoLDh4QWHftruisGgeH4FGIFktFwHryBWlKcQ3nNc7QmiAOJfhFBJFCdvuf4CXUJ1QXGQp9N53rv9egWeGGQSiw9q8U5G1NmFgikNf0G-gfYvmqIIAE_P1o",price:77000},
    ]

    const [foundMobile, setFoundMobile] = useState(null)
    const [mobileCount, setMobileCount] = useState(1);

const selectedPhoneHandler=(e)=>{
    e.preventDefault();
    const mobileName = e.target.value;
    const mobile = mobiles.find(m => mobileName === m.name);
    setFoundMobile(mobile);
}    



  return ( 
    
    <div className='justify-self-center mt-9'>

      <div className="container border-2 p-10 rounded-3xl ">
        <h1 className='font-bold'>MOBILE SHOP PAGE</h1>
        <div className="selection mt-10">
            <label htmlFor="">SELECT PHONE: </label>
            <select name="" id="" onChange={(e)=>{selectedPhoneHandler(e)}}>
                <option className='text-black' value="none">--Select--</option>
                {mobiles.map((mobile,index)=>{
                    return (<option key={index} value={mobile.name} className='text-black'>{mobile.name}</option>)
                })}
            </select>
            <br /><br />
            <label htmlFor="">TOTAL QNTY : </label>
            <input className='border rounded-l-xl p-2' type="number" min={1} placeholder='Enter quantity' value={mobileCount} onChange={(e)=>{setMobileCount(e.target.value)}}/>
            <br />
        </div>
      </div>

      {foundMobile==null?null:<div className="detail-container border-2 p-10 rounded-3xl mt-5">
        <img className='p-2 border justify-self-center w-[150px] max-w[200px] h-[200px] max-h[200px] rounded-2xl' src={foundMobile.img} alt="" />
        <h2>Name:{foundMobile.name}</h2>
        <h2>Price:{foundMobile.price}</h2>
        <h2>Total Amount: {foundMobile.price*mobileCount}</h2>
      </div>}
    </div>
  )
}

export default Mobiles
