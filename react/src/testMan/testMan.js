import React from "react";
import ReactDOM  from "react-dom";
import './testMan.css';

import utilList from "../utils/util1"
const ListTerminal = new utilList;
const ListNav = new utilList;

let listNav = [];
let listComands = [];

function App() {
    return(
        <div>
            <nav>
                <div id="nav-id" class="nav-class">
                    <input className="inp inp2" type="text" id="share" placeholder="Insira qual RSD"></input>
                    <div className="nav-items" id='inputNav'></div>
                </div>
            </nav>
        
            <div className="page">
                <div className="terminal">
                    <body><div className="commands" id="inputComands"></div></body>
                    <input className="inp" type="text" id="inputCommand" placeholder="Insira o comando"></input>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));

ListNav.renderNav(listNav,"share","inputNav");
ListTerminal.render(listComands, "inputCommand", "inputComands");


