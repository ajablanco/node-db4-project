const express = require('express');
const Recipes = require('./recipes-model.js')
const router = require('express').Router();


router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json({recipes})
    })
    .catch(err => {
        res.status(500).json({message: "nope"})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})


module.exports = router; 