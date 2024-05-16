const express = require('express')
const router = express.Router()
const {db,validator} = require('../models/categoriesModels')

router.get('/',async (req,res)=>{
    const categories =await db.find()
    if(!categories) res.status(404).send('The genre you are searching is not found!')
    res.send(categories)
})

router.post('/',async (req,res)=>{
    const {error} = validator(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const category = new db({
        name : req.body.name
    })
    const result = await category.save()
    if(result)res.send(`DB updated with the category : ${category.name}`)
})
router.put('/:id',async (req,res)=>{
    const {error} = validator(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const category = await db.findByIdAndUpdate(req.params.id , {name : req.body.name}, {new:true})
    if(!category) res.status(404).send('The genre you are searching is not found!')
    res.send(`The category is updated: ${category}`);

})

router.delete('/:id',async (req,res)=>{
    const category = await db.findByIdAndDelete(req.params.id)
    if(!category) res.status(404).send('The genre you are searching is not found!')
    res.json({ message: 'The category is removed', category });

})

router.get('/:id',async (req,res)=>{
    const category = await db.findById(req.params.id)
    if(!category) res.status(404).send('The genre you are searching is not found!')
    res.send(category)
})

module.exports = router