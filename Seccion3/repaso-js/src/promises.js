const getHeroe = (id)=> {
    return new Promise((res, rej) =>{
        console.log(id)
        if(id > 10){
            rej(id)
        }else{
            res(id)
        }
    })
}

getHeroe(55).then( console.log ).catch( console.warn )