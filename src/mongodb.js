class MongoConnection{
    constructor(){
        this.mongoose=require("mongoose");
        this.usersMoodSchema = new this.mongoose.Schema({
            username: {type: String},
            mood: {type: String},
            serverid: {type: String},
            _id: {type: Number}
          }, {collection: 'mood'});
        this.url=process.env.request_Url;
    }
    openConnection(){  
        let veri1=true;
        const User = this.mongoose.model('mood',this.usersMoodSchema);
        let mongoConn=this.mongoose;
        mongoConn.connect(this.url, { useNewUrlParser: true })
        .then((sc) => {
            console.log('MongoDB Connected...');
            User.find({mood: "ok"},function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                else if(data.length == 0) {
                    console.log("No record found");
                    console.log(data);
                    return;
                }
                else{
                    console.log(data[0]);
                }
                try {
                    
                    mongoConn.disconnect();
                    console.log("MongoDB Connection Closed.");
                    
                }
                catch(err1) {
                    console.log(err1);
                }
            });          
        })
        .catch((err)=> console.log(err));
        
    }
   

    get(serverid,username){
    
    }
    
    set(data){

    }
}

module.exports=MongoConnection;