let express = require('express');
let router = express.Router();

let activity = require("./activitys")

router.use("/activity", activity)

module.exports = router;
