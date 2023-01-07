import "./navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';





const Navbar1 = ({ increment, val }) => {
  // const abc= props.val1;
  // const xyz= props.setval1;


  // console.log(`props value iss ${props.val1}`);

  return (
    <>
<div className="nav">
      <div className='navwrapper'>
        <div className="leftnav">
          <div onClick={increment}>
            <MenuIcon className="menuicon" />
          </div>
          <h2 style={{ margin: "7px" }}>React Dashboard</h2>

        </div>
        
        <div className="rightnav">
        <NavLink to='/helpcentre'><HelpCenterIcon className="helpcentreicon" /></NavLink>
        </div>
        </div>
      </div>
    </>
  )




}

export default Navbar1;