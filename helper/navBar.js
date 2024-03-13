import { NavLink } from "react-router-dom";
import { Navbar} from "reactstrap";

//Having created a navbar already, just modifying it because of current missing features
//For now /login won't work
//Will need have a way to switch navbar depending on if user is signed in
const navBar=()=>{
    return(
        <div>
            <Navbar expand="md">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
            </Navbar>
        </div>
    )
}

export default navBar;