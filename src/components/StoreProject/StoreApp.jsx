import React, { useEffect, useState } from 'react'
import StoreHeader from './componets/StoreHeader/StoreHeader'
import axios from 'axios'

const StoreApp = () => {
    const [productArray, setProductArray] = useState([])

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(res=>{
        setProductArray(res.data)
      }).catch(e=>{
        console.log('Error is going while data fetching')
      })
    }, [])
    
  return (
    <div className='border-2 w-full min-h-[630px] mt-4 justify-self-center'>
      <div className="nav">
        <StoreHeader></StoreHeader>
      </div>
      <div className="content">
        <div className="boxes flex gap-3 overflow-scroll flex-wrap justify-center">
            {productArray.map((product)=>{
                return(<div key={product.id} className="box border p-7 min-w-[300px] max-w-[300px] rounded-2xl flex flex-col items-center justify-center">
                <img className='w-[200px] max-w-[200px] max-h-[200px]' src={product.image} alt="" />
                <div className="details flex flex-col mt-3 font-black tracking-wider min-h-[00px]">
                    <h1>{product.title}</h1>
                    <h1>${product.price}</h1>
                    <h1>{product.category}</h1>
                </div>
                <div className="buttons flex justify-center items-center">
                    <button className='w-[200px] border p-2 mt-4 rounded-2xl font-black bg-teal-900'>BUY</button>
                </div>
            </div>)
            })}
        </div>
      </div>
    </div>
  )
}

export default StoreApp
