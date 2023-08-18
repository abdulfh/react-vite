//import Link from react router dom
import Routes from './routes';
import Navbar from './views/utility/Navbar';
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider> 
        <Navbar />
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
