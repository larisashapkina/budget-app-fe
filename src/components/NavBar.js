import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <nav>
                <h1>
                    <Link to="/transactions">Budget App</Link>
                </h1>
                <button>
                    <Link to="/transactions/new">New Transaction</Link>
                </button>
            </nav>
        </div>
    )
}

export default NavBar;