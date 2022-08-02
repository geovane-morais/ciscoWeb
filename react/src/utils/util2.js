export default function connectServer (data={},url='',metho="POST"){ 
    const objEmpty = (Object.keys(data)==0)
    let config = {};
    if (objEmpty){
        config = {
            method: metho,
            headers: {"Content-Type": "application/json"}
        }
    }else{
        config = {
            method: metho,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    }

    console.log(config.url);

    fetch(url,config)
    .then(function (data) {
        if(data.ok) return data.json();
    })
    .then((res) =>{
        console.log("RES:",res);
    })
    .catch(err =>{console.log("err:",err)});
}