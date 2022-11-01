const router = require("express").Router();
const { loginModerator } = require("../controllers/moderator.controller");
const { logoutUser } = require("../controllers/common.controller");
const moderatorAuth = require('../middleware/adminAuth')

router.get("/logout", logoutUser);
router.post("/login", loginModerator);

module.exports = router;
