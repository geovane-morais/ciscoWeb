import React from 'react';
import './menu.css';

function Item(props){  
    function redirectPage(){
        console.log("Ir para: ",document.URL,props.page);
        window.location.href = props.page;
    }
    return (
        <div className="box" click={redirectPage}>
            <div className="boxContent">
                <p onClick={redirectPage}>{props.func}</p>
            </div>
        </div>
    );
}

export default Item;