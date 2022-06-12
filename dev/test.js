const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// bitcoin.createNewBlock(124325, "NSDTKL3JK45K234J4", "342TRC3443DD23");

// bitcoin.createNewTransaction(100, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")

// bitcoin.createNewBlock(124234, "SJD0934JRSD09SDSD", "SD934JHSD2N3SDS")

// bitcoin.createNewTransaction(50, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")
// bitcoin.createNewTransaction(300, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")
// bitcoin.createNewTransaction(2000, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")

// bitcoin.createNewBlock(374243, "JSDJ98235J2398", "KJSDKLF3985NSK3");

// console.log(bitcoin);

// // Test for hashBlock method
// const previousBlockHash = "NSDTKL3JK45K234J4";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "SAFEER3JK45K234J4",
//         recipient: "SHAMIL3JK45K234J4"
//     },
//     {
//         amount: 20,
//         sender: "AHMED3JK45K234J4",
//         recipient: "SHAMIL3JK45K234J4"
//     },
//     {
//         amount: 200,
//         sender: "KHANA3JK45K234J4",
//         recipient: "TALHA3JK45K234J4"
//     }
// ]

// const nonce = 100;
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData))
const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1655023361776,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1655023382664,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1655023443057,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9f3dbf00ea2b11eca5ad23eda0269b1a",
                    "transactionId": "abb434d0ea2b11eca5ad23eda0269b1a"
                },
                {
                    "amount": 10,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "c6b5cfa0ea2b11eca5ad23eda0269b1a"
                },
                {
                    "amount": 20,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "caf61160ea2b11eca5ad23eda0269b1a"
                },
                {
                    "amount": 30,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "cc031490ea2b11eca5ad23eda0269b1a"
                }
            ],
            "nonce": 26502,
            "hash": "00001ae75fe33d5d41143372f6d57eaa3ea6d793736d1e938aa8575a9076b61f",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1655023974482,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9f3dbf00ea2b11eca5ad23eda0269b1a",
                    "transactionId": "cfb0b340ea2b11eca5ad23eda0269b1a"
                },
                {
                    "amount": 40,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "0252a000ea2d11eca5ad23eda0269b1a"
                },
                {
                    "amount": 50,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "04548a80ea2d11eca5ad23eda0269b1a"
                },
                {
                    "amount": 60,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "053bb630ea2d11eca5ad23eda0269b1a"
                },
                {
                    "amount": 70,
                    "sender": "ANADORSESPOAS334RF1",
                    "recipient": "JKSWFO65EPWKF83FSKSP",
                    "transactionId": "067065a0ea2d11eca5ad23eda0269b1a"
                }
            ],
            "nonce": 118017,
            "hash": "00002b5941a70ab9c202db165801e05876f29e3e8e40c4b124284c7c201de3aa",
            "previousBlockHash": "00001ae75fe33d5d41143372f6d57eaa3ea6d793736d1e938aa8575a9076b61f"
        },
        {
            "index": 5,
            "timestamp": 1655023986065,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9f3dbf00ea2b11eca5ad23eda0269b1a",
                    "transactionId": "0c71b850ea2d11eca5ad23eda0269b1a"
                }
            ],
            "nonce": 29517,
            "hash": "000055d7c5666c69b8c68724ba3bab4feffbaf39490a3e288a81d968f803e6bc",
            "previousBlockHash": "00002b5941a70ab9c202db165801e05876f29e3e8e40c4b124284c7c201de3aa"
        },
        {
            "index": 6,
            "timestamp": 1655023997272,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9f3dbf00ea2b11eca5ad23eda0269b1a",
                    "transactionId": "1358fe30ea2d11eca5ad23eda0269b1a"
                }
            ],
            "nonce": 90731,
            "hash": "00001cfa93877c3acd0ec403603bba74155be335d51fbeb4ff8c81115c056357",
            "previousBlockHash": "000055d7c5666c69b8c68724ba3bab4feffbaf39490a3e288a81d968f803e6bc"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "9f3dbf00ea2b11eca5ad23eda0269b1a",
            "transactionId": "1a070ba0ea2d11eca5ad23eda0269b1a"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}
console.log('Valid: ',bitcoin.chainIsValid(bc1.chain))