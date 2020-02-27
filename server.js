const express = require('express');

const server = express();
const db = require('./data/db-config');

server.get('/', (req, res) => {
    db('users').select('*')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err: 'we messed up. we wish we were better'});
        })
})

module.exports = server