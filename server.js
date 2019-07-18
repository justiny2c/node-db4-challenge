const express = require('express');

const RecipeRouter = require('./recipes/recipe_router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;