import {Link} from "react-router-dom"

function Nav(){
    return(
        <nav>
            <Link to="/users/ronaldo">Ronaldo</Link>
            <Link to="/users/leo">Leo</Link>
            <Link to="/users/mab">Mab</Link>
        </nav>
    )
}

export default Nav