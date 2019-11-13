module.exports=class Mood{
    constructor()
    {
        let Requests=require("./requests");
        this.request=new Requests();
    }
    getMood(msg){
        const commands=this.wordParser(msg);
        let inputUsername; 
        // !getMood
        // if username is specified, gets inputUsername
        if(commands[1]===undefined) inputUsername=msg.member.user.username;
        else inputUsername=commands[1];

        this.request.get(msg.guild.id,inputUsername)
            .then(data => {
                msg.reply(`${inputUsername}'s Mood : ${(data[0].mood)}`);
            })
            .catch(err => {
                msg.reply(`${inputUsername}'s Mood does not defined`);
            });
        
        
    }
    setMood(){
        const commands=this.wordParser(msg);
        // console.log(commands[1]); //  get username
        if(commands[1]===undefined){
            msg.reply("Please, use !setMood <username> <your-mood>");
        }
        else{
            this.request.get(msg.guild.id,inputControl?msg.member.user.username:commands[1])
            .then(data => {
                msg.reply(`${commands[1]}'s Mood : ${(data[0].mood)}`);
            })
            .catch(err => {
                msg.reply(`${commands[1]}'s Mood is not defined`);
            });
        }
    }
    auth(){

        return true;
    }
    wordParser(msg){
        let cmd; 
        let args;
        let allArgs="";
        if (msg.toString().substring(0, 1) == '!') {
            args = msg.toString().substring(1).split(' ');
            cmd = args[0].toLowerCase();
            [args[0],...args] = args;
        
            for(let i=0;i<=args.length-1;i++){
                allArgs+=args[i]+" ";
            }
        args = args[0];
        }
        
        return [cmd,args,allArgs];

    }



}