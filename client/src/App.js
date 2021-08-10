import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes/routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import 'materialize-css'
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";




function App() {
  const {token, login, logOut, userId, userRole, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated, userRole)

    if(!ready){
        return <Loader/>
    }
  return (
      <AuthContext.Provider value={{
          token, logOut, login, userId, isAuthenticated, userRole
      }}>
          <BrowserRouter>
              { isAuthenticated && <Layout/>}
              <div className='container'>
                  {routes}
              </div>
              {/*{ isAuthenticated && <Footer/>}*/}


          </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
