module.exports=class Requests{
    constructor(){
        require("dotenv/config");
        this.url=process.env.request_Url1;
        
    }
    async get(serverid,username){
        const fetch=require('node-fetch');
        
        const response = await fetch(this.url+`?username=${username}&&serverid=${serverid}`);
        const responseData = await response.json();
        
        return responseData;
    }
    async set(data){
        const response = await fetch(this.url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"    
            }
    });
        const responseData = await response.json();
        
        return responseData[0];
    }
}