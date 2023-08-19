//import Link from react router dom
import RoutesIndex from './routes/RouteIndex';
import Navbar from './views/utility/Navbar';
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider> 
        <Navbar />
        <RoutesIndex />
      </AuthProvider>
    </>
  )
}

export default App
