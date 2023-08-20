/* eslint-disable react/prop-types */
import reactLogo from '../../assets/react.svg'
import { Link } from "react-router-dom";
import { AuthData } from '../../context/AuthContext';
import { nav } from '../../routes/navigation';

export default function Navbar() {
  const {user} = AuthData()
  
  const MenuItem = ({path, name}) => {
    return(
      <li className="nav-item">
          <Link to={path} className="nav-link active" aria-current="page">{name}</Link>
      </li>
    )
  }

  async function logout() {
    localStorage.removeItem('user')
    window.location.href = "/";
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container">
      <Link to="#" className="navbar-brand">
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {
            nav.map((route, index) => {
              if (!user && !route.isPrivate) {
                return <MenuItem key={index} path={route.path} name={route.name}></MenuItem> 
              }else if (user && route.isPrivate && route.isMenu && (route.isAdmin || route.isUser) && user.is_admin) {
                 return <MenuItem key={index} path={route.path} name={route.name}> </MenuItem> 
              } else if (user && route.isPrivate && route.isMenu && route.isUser && !user.is_admin) {
                 return <MenuItem key={index} path={route.path} name={route.name}> </MenuItem> 
              } else {
                return false
              }
            })
          }

          {user ? <li className="nav-item"><button onClick={logout} className="btn btn-danger" aria-current="page">Logout</button></li> : ''}
        </ul>
      </div>
    </div>
  </nav>
  )
}
