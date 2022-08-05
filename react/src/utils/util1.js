import React from "react";
import  ReactDOM from "react-dom";
import connectServer from "./util2";

/*x = {
    
}*/

function arrayListRender(x){
    return(
        <div>
            {x.map(function (x){
                return(<p id={x}>{x}</p>);
            })}
        </div>
    );
}

function ListAuto(x){
    return(
        <div>
            <p>AGENCIA: {x.agencia}</p><br/>
            <p>Link MPLS</p>
            <div className="terminal">
                <p className="commands" id={x.MPLS}>{x.MPLS}</p>
            </div>
            <p>Link INET-1</p>
            <div className="terminal">
                <p className="commands" id={x.INET1}>{x.INET1}</p>
            </div>
            <p>Link INET-2</p>
            <div className="terminal">
                <p className="commands" id={x.INET}>{x.INET2}</p>
            </div>
        </div>
    );
}

export default class listNav{
    render(arrayEntrada,idInput,idDivOutput){
        document.getElementById(idInput).addEventListener('keypress',(keyBoad) => {
            if (keyBoad.key === "Enter"){
                const inputShare = document.getElementById(idInput).value;
                arrayEntrada.push(inputShare);
                document.getElementById(idInput).value = "";
                ReactDOM.render(arrayListRender=(arrayEntrada), document.getElementById(idDivOutput));
            }
        });
    }

    renderNav(arrayEntrada,idInput,idDivOutput,idNavOutput,url){ 
        document.getElementById(idInput).addEventListener('keypress',(e) => {
            if (e.key === "Enter"){
                const agencia = document.getElementById(idInput);
                
                connectServer({},url+agencia.value,'GET')
                .then((res)=>{
                    console.log("Resposta \n",res);
                    alert("Teste completo AG" + res.agencia)

                    arrayEntrada.push(res);
                    ReactDOM.render(arrayListRender(
                        arrayEntrada.map(function(x){
                            return x.agencia;
                        })
                    ), document.getElementById(idNavOutput));

                    document.getElementById(res.agencia).onclick = () => {
                        console.log("Entrou no botão:",res.agencia);
                        ReactDOM.render(ListAuto(res), document.getElementById(idDivOutput));
                    };
                }).catch((err) =>{
                    alert("Problema de comunicação com o servidor");
                });
                alert("Aguardando teste AG" + agencia.value);
                
                agencia.value = ""; 
            }
        });
    }
}