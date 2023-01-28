const mongoose = require("mongoose")
const schema = new mongoose.Schema(
    {
        name: {type: String, required: true },
        description: {type: String, required: true },
        made: {type: Boolean, required: true}
    }
)
const Activity = mongoose.model("activitys", schema)
module.exports = Activity