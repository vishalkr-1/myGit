const express=require('express');
const {softDelete, restoreUser} = require('../controller/deleteController');
const { getActiveUsers } = require('../controller/deleteController');
const deleteSoftRouter1=express.Router()
const getActiveUsersRouter=express.Router()
const restoreUserRouter=express.Router()
deleteSoftRouter1.get(`/delete/:id`,softDelete);
getActiveUsersRouter.get(`/active`,getActiveUsers);
restoreUserRouter.post('/restore/:id',restoreUser)




module.exports={
    deleteSoftRouter1,
    getActiveUsersRouter,
    restoreUserRouter
}