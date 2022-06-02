const express = require('express')
const bodyParser = require('body-parser')
const Blockchain = require("./blockchain")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const bitcoin = new Blockchain();

//  Get entire Blockchain
app.get('/blockchain', function (req, res) {
    res.json(bitcoin)
})

// Create new transaction
app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({note:`Transaction will be added in block ${blockIndex}.`})
})

// mine new block
app.get('/mine', function (req, res) {

    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index']+1
    }

    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData)

    const newBlock = bitcoin.createNewBlock();
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})