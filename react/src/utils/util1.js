import React from "react";
import  ReactDOM from "react-dom";
import connectServer from "./util2";

function arrayListNav(x){
    return(
        <div>
            {x.map(function (x){
                return(<p id={x}>{x}</p>);
            })}
        </div>
    );
}

function arrayListAuto(x){
    return(
        <div>
            {x.map(function (x){
                return(<p id={x}>{x}</p>);
            })}
        </div>
    );
}

export default class listNav{
    render(arrayEntrada,idInput,idDivOutput){
        document.getElementById(idInput).addEventListener('keypress',(e) => {
            if (e.key === "Enter"){
                arrayEntrada.push(document.getElementById(idInput).value);
                document.getElementById(idInput).value = null;
                ReactDOM.render(arrayListNav(arrayEntrada), document.getElementById(idDivOutput));
            }
        });
    }
    renderNav(arrayEntrada,idInput,idDivOutput,url){ 
        document.getElementById(idInput).addEventListener('keypress',(e) => {
            if (e.key === "Enter"){
                if(document.getElementById(idInput).value.length == 9){
                    connectServer({},url+document.getElementById(idInput).value,'GET');

                    arrayEntrada.push(document.getElementById(idInput).value);
                    document.getElementById(idInput).value = null;
                    ReactDOM.render(arrayListNav(arrayEntrada), document.getElementById(idDivOutput));
                }else{
                    document.getElementById(idInput).value = null;
                    alert("Erro na inserção");
                }
            }
        });
    }
}