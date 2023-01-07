import "./sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';


//import MenuIcon from '@mui/icons-material/Menu';

const Sides = () => {

  return (
    <>
      <div className="sidebar">
        <div className='sidebarmenu'>

          <h3 className="sidebartitle">Dashboard1</h3>

          <div className="sidebarlist">
            <ul className="sidebarlist">
              <li><NavLink className="sidebarlistitem" to='/'><HomeIcon/>Home</NavLink></li>
              <li> <NavLink className="sidebarlistitem" to='/analytics'><AnalyticsIcon/>Analytics</NavLink></li>
            </ul>

          </div>


        </div>


        <div className='sidebarmenu'>

          <h3 className="sidebartitle">Dashboard2</h3>

          <ul className="sidebarlist">

            <li className='sidebarlistitem'>Home</li>
            <li className='sidebarlistitem'>Analytics</li>
            <li className='sidebarlistitem'>Sales</li>

          </ul>


        </div>


        <div className='sidebarmenu'>

          <h3 className="sidebartitle">Dashboard3</h3>

          <ul className="sidebarlist">

            <li className='sidebarlistitem'>Home</li>
            <li className='sidebarlistitem'>Analytics</li>
            <li className='sidebarlistitem'>Sales</li>

          </ul>


        </div>


        <div className='sidebarmenu'>

          <h3 className="sidebartitle">Dashboard3</h3>

          <ul className="sidebarlist">

            <li className='sidebarlistitem'>Home</li>
            <li className='sidebarlistitem'>Analytics</li>
            <li className='sidebarlistitem'>Sales</li>

          </ul>


        </div>

        <div className='sidebarmenu'>

          <h3 className="sidebartitle">Dashboard3</h3>

          <ul className="sidebarlist">

            <li className='sidebarlistitem'>Home</li>
            <li className='sidebarlistitem'>Analytics</li>
            <li className='sidebarlistitem'>Sales</li>

          </ul>


        </div>
        
</div>
        








      






    </>


  )
}


export default Sides;