import React, {useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const SettingsScreen = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    let thisRoute = location.pathname;
    const [screen, setScreen ] = useState()

    useEffect(()=>{
        setScreen(thisRoute)
    },[])

    switch (key) {
        case value:
        return(
            <>

            </>
        )
            break;

        default:
            return(
                <>

                </>
            )
            break;
    }

}

export default SettingsScreen;