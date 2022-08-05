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
                <div id="nav-id" class="nav-class">
                    <input className="inp inp2" type="text" id="share" placeholder="Agencia (Ex:1030)"></input>
                    <div className="nav-items" id='inputNav'></div>
                </div>
            </nav>
        
            <main>
                <div className="page" id="page-id">
                    <p>Sem testes realizados</p>
                </div>
            </main>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));

ListNav.renderNav(listNavi,"share","page-id","inputNav","/connection/agencia/");