var db = require("../config/connection");
var collection = require("../config/collections");
const { ObjectId } = require("bson");
var i;

module.exports = {
  addUser: (user) => {
    return new Promise(async (resolve, reject) => {
      await db.get().collection(collection.USER_COLLECTION).insertOne(user);
      resolve();
    });
  },
  fetchData: (data) => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.USER_COLLECTION)
        .find({ Blood: data })
        .toArray()
        .then((users) => {
          // console.log(users)
          resolve(users);
        });
    });
  },
  fetchUser: (data) => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ _id: ObjectId(data) })
        .then((users) => {
          // console.log(users)
          resolve(users);
        });
    });
  },
  findMemberShipNumber: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await db
          .get()
          .collection(collection.USER_COLLECTION)
          .findOne({ id: data.member });
        if (user) {
          resolve({ member: user, status: true });
        } else {
          resolve({ status: false, messge: "No member found" });
        }
      } catch {
        resolve("Member not found");
      }
    });
  },
};
