const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done){
    const url='mongodb+srv://muthu:9656757977@cluster0.ivzwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   //const url='mongodb://localhost:27017'
    const dbname='skssf'
    

    mongoClient.connect(url,{useUnifiedTopology: true },(err,data)=>{
        if(err) return done(err)
        
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}