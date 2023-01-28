let router = require("express").Router()

let {create, made, read, deletee, update, noMade} = require("../controllers/activity")

router.post("/",create)
router.patch("/:id",made)
router.get("/",read)
router.delete("/:id",deletee)
router.put("/:id",noMade)
router.patch("/update/:id",update)



module.exports = router;
