import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage:React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae beatae laudantium perspiciatis eaque quis fugiat distinctio non excepturi numquam.</p>
            <button className="btn" onClick={() => navigate.push('/')}>Обратно к списку дел</button>
        </>
 )
}