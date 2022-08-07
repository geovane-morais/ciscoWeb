import React from "react";
import  ReactDOM from "react-dom";
import connectServer from "./util2";


function arrayListRender(x){
    return(
        <div>
            {x.map(function (x){
                return(<p id={x}>{x}</p>);
            })}
        </div>
    );
}

function arrayListNavRender(x){
    return(
        <div>
            {x.map(function (x){
                const y = "exit-"+x;
                return(
                    <div className="tipFont display-flex-row">
                        <p className="nav-item" id={x}>{x}</p>
                        <p className="nav-item-exit" id={y}>X</p>
                    </div>
                );
            })}
        </div>
    );
}

function ListAuto(x){
    const copy = "copy"+x.agencia;
    return(
        <div className="fontTam2 page">
            <p className="fontTam3 nav2" id={copy}>AGENCIA: {x.agencia}</p><br/>
            
            <p>Link MPLS</p>
            <div className="terminal tipFont fontTam1">
                {x.MPLS.map(function (x){
                    return(<p className="commands" id={x}>{x}</p>);
                 })}
            </div>
    
            <p>Link INET-1</p>
            <div className="terminal tipFont fontTam1">
                {x.INET1.map(function (x){
                    return(<p className="commands" id={x}>{x}</p>);
                })}
            </div>
        
            <p>Link INET-2</p>
            <div className="terminal tipFont fontTam1">
                {x.INET2.map(function (x){
                    return(<p className="commands" id={x}>{x}</p>);
                })}
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
                    console.log("Connect Server:", arrayEntrada)
                    ReactDOM.render(arrayListNavRender(
                        arrayEntrada.map(function(x){
                            return x.agencia;
                        })
                    ), document.getElementById(idNavOutput));


                    document.getElementById(res.agencia).onclick = () => {
                        console.log("Entrou no botão:",res.agencia);
                        ReactDOM.render(ListAuto(res), document.getElementById(idDivOutput));
                    };

                    document.getElementById(`exit-${res.agencia}`).onclick = () => {
                        console.log("Entrou no botão excluir:",res.agencia);
                        arrayEntrada.splice(arrayEntrada.findIndex(i => i.agencia == res.agencia) ,1);
                        console.log("arrayEntrada:",arrayEntrada)
                        ReactDOM.render(arrayListNavRender(
                            arrayEntrada.map(function(x){
                                return x.agencia;
                            })
                        ), document.getElementById(idNavOutput));
                    }
                }).catch((err) =>{
                    alert("Problema de comunicação com o servidor");
                });
                alert("Aguardando teste AG" + agencia.value);
                
                agencia.value = ""; 
            }
        });
    }
}