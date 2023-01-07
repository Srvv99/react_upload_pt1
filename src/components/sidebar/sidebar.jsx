import "./sidebar.css";
import Hide1 from "./hide1";
import Sides from "./sides1";

//import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({val}) => {

  console.log(`here is ${val}`);

  if (val) {
    return <Sides/>;
} else {
    
    return <Hide1/>;
}
}
  



export default Sidebar;