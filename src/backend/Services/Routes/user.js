const express = require('express');
const userControlle = require('../Controller/userControlle');
const router = express.Router();
// router.put('/check',userControlle.updateUser)
router.put('/:id',userControlle.updateUser)
// router.put("/",(req,res)=>{
//     res.send("Put Home")
// })
module.exports = router
