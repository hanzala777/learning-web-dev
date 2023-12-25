const express = require('express');
const bodyParser = require('body-parser');
const { parse } = require('path');

const app = express();

app.use(bodyParser.json());
const port = 3000;

let todos = [];

function findIndex(arr, id){
    for (let i = 0; i < arr.length; i++){
        if(arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr, index){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if (i !== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1){
        res.status(404).send();
    } else {
        res.json(todos[todoIndex]);
    }
});

var ctr = 1;
app.post('/todos', (req, res) => {
    const newTodo = {
        id: ctr,
        title: req.body.title,
        description: req.body.description
    };
    ctr += 1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) =>{
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    } else {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        req.json(todos[todoIndex]);
    }
});

app.delete('/todos', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.body.id));
    if(todoIndex === -1){
        res.status(404).send();
    } else {
        todos = removeAtIndex(todos, todoIndex);
        res.status(201).send();
    }
});

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);