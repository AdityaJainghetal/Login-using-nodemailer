const express=require("express")
const router=express.Router()
const costumerController=require("../Controller/customerController")
router.post("/register",costumerController.CustomerRegi)
router.post("/login",costumerController.Customerlogin)
router.post('/userauthenticate',costumerController.userAuthenticate)


module.exports=router