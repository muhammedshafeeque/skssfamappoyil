var db = require('../config/connection')
var collection = require('../config/collections')
const { ObjectId } = require('bson')
var i


module.exports = {
    addUser: (user, callback) => {
        db.get().collection('user').insertOne(user).then((data) => {
            callback(data.ops[0]._id)
        })
    },
    fetchData: (data) => {
        
        return new Promise(async(resolve,reject)=>{

            await db.get().collection(collection.USER_COLLECTION).find({Blood:data}).toArray().then((users)=>{
               // console.log(users)
                resolve(users)
            })
            
            

        })
        
    },
    fetchUser: (data) => {
        
        return new Promise(async(resolve,reject)=>{

            await db.get().collection(collection.USER_COLLECTION).findOne({_id:ObjectId(data)}).then((users)=>{
               // console.log(users)
                resolve(users)
            })
            
            

        })
        
    }


}