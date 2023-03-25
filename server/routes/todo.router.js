const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('In GET Request /todo');
    //Fill in once query logic is determined
    let queryText = '';

    pool.query(queryText).then((result) => {
        console.log(`Testing for result: ${result}`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
    console.log(`/todo POST Request made: ${req.body}`);
    //Fill in once query logic is determined
    let queryText = '';
    pool.query(queryText, [/*Fill in with values once determined */])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    });
});

// PUT
router.put('/:id', (req, res) => {
    console.log(`PUT Request made for /todo ${req.params}`);
    //Fill in once query logic is determined
    let queryText = '';
    pool.query(queryText, [/*Fill in with values once determined */])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    console.log(`DELETE Request made for /todo ${req.params.id}`);
    const deleteIndex = Number(req.params.id);
    //Fill in with database name
    let queryText = 'DELETE from "database" WHERE "id" = $1';
    pool.query(queryT)
})

module.exports = router;
