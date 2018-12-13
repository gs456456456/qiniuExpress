const responseFormat = (parms,status) =>{
    let response = null;
    switch(status){
        case 0:
        response = {result:parms,reCode:0,retMsg:'SUCCESS'}
        break
        case 1:
        response = {result:null,reCode:1,retMsg:JSON.stringify(parms)}
        break
        default:
        response = {result:parms,reCode:0,retMsg:'SUCCESS'}
        break
    }
    return response
}

module.exports={
    responseFormat:responseFormat
}  