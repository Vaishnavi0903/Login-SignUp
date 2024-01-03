import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
            <h1>Home Page</h1>
            <h3>Hello {location.state.id} and welcome to the home</h3>

        </div>
    )
}

export default Home