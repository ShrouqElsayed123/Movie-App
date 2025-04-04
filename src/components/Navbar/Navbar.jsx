import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <>
      <div className="container ">
      <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-light">Movie App</a>
            <div className="d-flex gap-3" >
              <NavLink to="/" className={function ({isActive}){
                return isActive ?"nav-link text-info text-decoration-underline":"nav-link text-light"
              }} >Home</NavLink>
              <NavLink to="favorite" className={function ({isActive}){
                return isActive ?"nav-link text-info text-decoration-underline":"nav-link text-light"
              }}>Favorite</NavLink>
            </div>
          </div>
        </nav>

      </div>
      
      </>
    );
  }
  