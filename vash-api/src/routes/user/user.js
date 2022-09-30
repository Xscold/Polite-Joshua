const express = require("express")
const router = express.Router()
const USER_CONTROLLER = require("../../controller/user/user")

router.post("/create-user", USER_CONTROLLER.ADD_USER)

module.exports = router