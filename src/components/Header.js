
import { AppBar, Toolbar } from "@mui/material";
import "../App.css";
import logo from "../logo.png"


const Header = () => {
   
 
     
    return (
        <>            
  <AppBar  position="static"  sx={{ backgroundColor:'#0394fc'} }>
  <Toolbar variant="dense">
  <img src={logo} alt="logo" width= "90" padding="5"/> 
  RUNNER
  </Toolbar> 
</AppBar>
        </>
    )
}

export default Header;