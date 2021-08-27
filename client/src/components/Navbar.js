import {NavLink} from 'react-router-dom';
export function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg  navbar-light bg-light" id="mynavbar" stle={{height:'20vh'}}>
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">Sujith</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
              </li>        
              <li class="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/income-expense">income/expense</NavLink>
              </li>
              <li class="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/history">History</NavLink>
              </li>
              <li class="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/addtransaction">AddTransaction</NavLink>
              </li>
            </ul>
           
          </div>
        </div>
    </nav>
    )
}

