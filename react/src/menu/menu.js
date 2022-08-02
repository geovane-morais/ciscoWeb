import React from "react";
import ReactDOM  from "react-dom";
import Item from "./item.js"
import './menu.css';

function App() {
    return(
        <div className="page">
            <div className="menu">
                <Item func="Teste Automatizado de Links" page="testAuto"/>
                <Item func="Modo Manual de Teste" page="testMan"/>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));