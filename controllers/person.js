
const Model = require('../models/model')

const create_post = async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try{
        const data_to_save = await data.save()
        res.status(200).json(data_to_save)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const get_all = async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const get_id = async (req, res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.send(data)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const update_post = async (req, res) => {
    try{
        const id = req.params.id
        const updated_data = req.body
        const options = { new: true }

        const result = await Model.findByIdAndUpdate(
            id, updated_data, options
        )

        res.send(result)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
}

const delete_post = async (req, res) => {
    try{
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        
        res.send(`document with ${data.name} has been deleted...`)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    get_all,
    create_post,
    get_id,
    update_post,
    delete_post,
}