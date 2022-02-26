const e = require('express');
var express = require('express');
const usersHelper = require('../helpers/users-helper');
const getAge = require("findage");
var router = express.Router();
const bcrypt = require ('bcrypt')
const users = []

/* GET home page. */
router.get('/', function (req, res, next) {
  
  let grups = [
    { grupe: 'A+ve' }, { grupe: 'A-ve' }, { grupe: 'B+ve' }, { grupe: 'B-ve' },
    { grupe: 'AB+ve' }, { grupe: 'AB-ve' }, { grupe: 'O+ve' }, { grupe: 'O-ve' }
  ]
  res.render('../views/user/blood', { grups });
});



router.get('/donate', function (req, res) {
  res.render('user/donate-form')
})

router.post('/donate-blood', function (req, res) {
 

  if(req.body.Blood==='1'){
    let err=1
    res.render('user/donate-form',{err})

  }else{
    
    usersHelper.addUser(req.body).then(()=> {
    
    res.redirect('/')
  })

  }



})

router.get('/blood-grupe/:id', async (req, res) => {
  let blood = req.params.id
  let users = await usersHelper.fetchData(blood)
  res.render('user/blood-home', { users,blood })

})

router.get('/blood-profile/:id', async (req, res) => {
  let usId = req.params.id
  let donar = await usersHelper.fetchUser(usId) 
  res.render('user/donar-profile', { donar })

})
router.get('/members',async(req,res)=>{
  let users = await usersHelper.fetchData('O+ve')
  res.json(users)
})
router.post('/check-member',async(req,res)=>{
  let member=await usersHelper.findMemberShipNumber(req.body)
  res.json(member)

})
module.exports = router;
