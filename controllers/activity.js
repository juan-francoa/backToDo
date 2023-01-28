const Activity = require("../models/Activity")

const controller = {
    create: async (req, res)=>{
        let obj = req.body
        obj.made = false
        try{
            let neww = await Activity.create(obj)
            res.status(201).json({
                id: neww._id,
                success: true,
                message: "la actividad se creo"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }, 
    made: async (req, res)=>{
        let id = req.params.id
        try{
            let neww = await Activity.findOneAndUpdate({_id:id},{made:true}, {new:true})
                res.status(201).json({
                id: neww._id,
                success: true,
                message: "la actividad se realizo"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async(req, res)=>{
        try{
            let neww = await Activity.find()
                res.status(201).json({
                activitys: neww,
                success: true,
                message: "actividades encontradas"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    deletee: async(req, res)=>{
        let id = req.params.id
        try{
            let neww = await Activity.findOneAndDelete({_id:id})
                res.status(201).json({
                activitys: neww._id,
                success: true,
                message: "actividad eliminada"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    noMade:async (req, res)=>{
        let id = req.params.id
        try{
            let neww = await Activity.findOneAndUpdate({_id:id},{made:false}, {new:true})
                res.status(201).json({
                id: neww._id,
                success: true,
                message: "la actividad no se realizo"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async (req, res)=>{
        let id = req.params.id
        try{
            let neww = await Activity.findOneAndUpdate({_id:id},req.body, {new:true})
                res.status(201).json({
                id: neww._id,
                success: true,
                message: "la actividad se modifico"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}
module.exports = controller