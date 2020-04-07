const express = require('express')
const recipes = require('./data.json').recipes
const server = express();
server.listen(4000, () => console.log('listening on port 4000'))

server.get('/', (request,response) => {
    response.send(recipes)
})

server.get('/:id', (request,response) => {
    const index = recipes.findIndex(recipe => recipe.id == request.params.id)
    if (index === -1) {
        return response.send('recipe not found')
    }
    return response.send(recipes[index])
})

server.get('/:id', (request,response) => {
    const index = recipes.findIndex(recipe => recipe.id == request.params.id)
    if (index === -1) {
        return response.send('recipe not found')
    }
    return response.send(recipes[index])
})