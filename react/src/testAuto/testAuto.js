import React from "react";
import ReactDOM  from "react-dom";
import './testAuto.css';

import listNav from "../utils/util1";
const ListNav = new listNav;


let listNavi = [];
//listNavi = [{agencia,MPLS,INET-1,INET-2}]

function App() {
    return(
        <div>
            <nav>
                <div id="nav-id" className="nav-class">
                    <input className="tipFont fontTam1 inp inp2" type="text" id="share" placeholder="Agencia (Ex:1030)"></input>
                    <div id='inputNav'></div>
                </div>
            </nav>
        
            <main>
                <div className="page" id="page-id">
                    <p className="fontTam3 nav2">Sem testes realizados</p>
                </div>
            </main>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));

ListNav.renderNav(listNavi,"share","page-id","inputNav","/connection/agencia/");