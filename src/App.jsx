//import Link from react router dom
import { Link } from "react-router-dom";
import Routes from './routes';
import reactLogo from './assets/react.svg'


function App() {
  return (
    <>
     <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="#" className="navbar-brand">
              <img src={reactLogo} className="logo" alt="Vite logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/cars" className="nav-link active" aria-current="page">Cars</Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link active" aria-current="page">Orders</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes />
    </>
  )
}

export default App
