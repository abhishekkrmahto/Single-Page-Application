import { useState } from "react";

const ControlledUI = () => {
    const [name, setName] = useState(null);
    const [id, setId] = useState(null);
    const [showAndHide, setShowAndHide] = useState("hidden");

    const showData = (e)=>{
        e.preventDefault();
        if(showAndHide == "hidden" && name!=null && id!=null){
            setShowAndHide("none")
        }else{
            setShowAndHide("hidden")
        }
    }
  return (
    <div>
      <form action="" className='flex justify-self-center mt-10 rounded-2xl border p-10 w-fit flex-col justify-center items-center'>
        <div className="inputs">
            <input value={name} onChange={(e=>{setName(e.target.value)})} className='border-2 outline-0 p-2 ml-2 rounded-2xl font-black text-center' type="text" placeholder='Enter Name' />
            <input value={id} onChange={(e)=>{setId(e.target.value)}} className='border-2 outline-0 p-2 ml-2 rounded-2xl font-black text-center' type="text" placeholder='Enter Id' />
        </div>
        <div className="btn mt-7">
            <button onClick={(e)=>{showData(e)}} className='p-3 rounded-2xl bg-teal-800'>{showAndHide ==="none"?"hide":"show"}</button>
        </div>
      </form>
      <div className={showAndHide}>
        <div className="flex justify-self-center mt-10 rounded-2xl border p-10 w-[500px] flex-col ">
        <h1 className='font-black'>Name: {name}</h1>
        <h1 className='font-black'>Id: {id}</h1>
      </div>
      </div>
    </div>
  )
}

export default ControlledUI
