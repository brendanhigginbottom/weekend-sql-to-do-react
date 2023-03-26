const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('In GET Request /todo');
    let queryText = 'SELECT * FROM "weekend-to-do-app";';
    pool.query(queryText).then((results) => {
        res.send(results.rows);
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
    let queryText = 'DELETE from "database" WHERE "id" = $1;';
    pool.query(queryText, [/*Fill in with values once determined */])
    .then((results) => {
        res.sendStatus(500);
    });
});

//RESET PUT ROUTE

// router.put('/', (req,res) => {
//     //Fill in with values once determined
//     let queryText = 'UPDATE "database" SET "value" = $1 WHERE "id" > 0;';
//     pool.query(queryText, [false]).then((response) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(`Error in PUT ${error}`);
//         res.sendStatus(500);
//     });
// });

//CLEAR ALL DELETE ROUTE
// router.delete('/', (req,res) => {
//     //Fill in with values once determined
//     let queryText = 'DELETE FROM "database" WHERE "id" > 0;';
//     pool.query(queryText).then((response) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(`Error in CLEAR ALL DELETE ${error}`);
//         res.sendStatus(500);
//     });
// });

module.exports = router;
