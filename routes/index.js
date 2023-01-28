let router = require("express").Router()

let activity = require("./activitys")

router.use("/activity", activity)

module.exports = router;
