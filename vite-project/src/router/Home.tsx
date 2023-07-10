import { Routes, Route } from 'react-router-dom'
import UserComponent from '../prueba'
import App from '../App'
export const Home = () =>{
    return (
        <Routes>
              <Route path='/login' element={<div>  <UserComponent /></div>}/>
              <Route path='/' element={<div>  <App/></div>}/>
              <Route path='/*' element={<div> LE ERRASTE DE RUTA MAN</div>}/>
        </Routes>
    )
}