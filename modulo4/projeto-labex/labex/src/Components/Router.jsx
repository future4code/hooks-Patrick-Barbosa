import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Trip from '../Pages/GetTrip'
import Error from '../Pages/Error'
import Subscribe from '../Pages/ApplyToTrips'

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="GetTrip" element={<Trip/>} />
                    <Route path="*" element={<Error/>} />
                    <Route path="ApplyToTrips" element={<Subscribe/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router