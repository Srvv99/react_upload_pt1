import Navbar1 from "./navbar/navbar1";
import Sidebar from "./sidebar/sidebar";
import Widgetinfo from "./widget info/widgetinfo";
import Helpcentre from "./widget info/help_centre";
import { useState } from "react";
import "./wholecontainer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Analytics from "./widget info/analytics";


const Container = () => {


  const [val, setval] = useState("true");

  const increment = () => {

    setval(!val);
  }

  console.log(`vals izz ${val}`);



  return (
    <>
      <BrowserRouter>
        
          <Navbar1 increment={increment} val={val} />


          <div className="container">

            <Sidebar val={val} />
            <div className="mainwidgetwrapper">

              <Routes>
                <Route path='/' element={<Widgetinfo />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/helpcentre' element={<Helpcentre />} />
              </Routes>

            </div>


            </div>

         

        
      </BrowserRouter>
    </>
  );



}

export default Container;
