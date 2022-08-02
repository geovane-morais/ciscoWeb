import React from "react";
import ReactDOM  from "react-dom";
import './testAuto.css';

import listNav from "../utils/util1";
const ListNav = new listNav;


let listNavi = [];
let listComands = [];

function App() {
    return(
        <div>
            <nav>
                <div id="nav-id" class="nav-class">
                    <input className="inp inp2" type="text" id="share" placeholder="Insira Agencia(Ex:1030)"></input>
                    <div className="nav-items" id='inputNav'></div>
                </div>
            </nav>
        
            <div className="page" id="page-id">
            </div>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));

ListNav.renderNav(listNavi,"share","inputNav",'/connection/agencia/');

//connectServer({},url,'GET');

//TestAuto.render([],"page-id");