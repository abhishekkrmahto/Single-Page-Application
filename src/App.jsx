import React from "react";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Mobiles from "./components/mobiles/Mobiles";
import StudentList from "./components/studentList/StudentList";

const App = () => {
  return (
    <div className="bg-zinc-800 w-screen h-screen">


      <nav className="flex justify-center gap-10">
        <Link className="p-4 bg-teal-700 rounded-2xl mt-4 cursor-pointer font-bold" to="/home">Home</Link>
        <Link className="p-4 bg-teal-700 rounded-2xl mt-4 cursor-pointer font-bold" to="/about">About</Link>
        <Link className="p-4 bg-teal-700 rounded-2xl mt-4 cursor-pointer font-bold" to="/contact">Contact</Link>
        <Link className="p-4 bg-teal-700 rounded-2xl mt-4 cursor-pointer font-bold" to="/mobiles">Mobiles</Link>
        <Link className="p-4 bg-teal-700 rounded-2xl mt-4 cursor-pointer font-bold" to="/studentList">StudentList</Link>
      </nav>

        <Routes>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/mobiles" element={<Mobiles></Mobiles>}></Route>
          <Route path="/StudentList" element={<StudentList></StudentList>}></Route>
        </Routes>

    </div>
  );
};

export default App;
