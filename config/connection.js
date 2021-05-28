const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=function(done){
    const url='mongodb+srv://muthu:9656757977@cluster0.ivzwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const dbname='skssf'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}