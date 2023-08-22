const sqlite3=require("sqlite3").verbose();
const db=new sqlite3.Database("./data.db",sqlite3.OPEN_READWRITE,(err)=>{
    if(err){
        return console.err(err.message);
    }
})

module.exports=db;