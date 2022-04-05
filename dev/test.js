const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(124325, "NSDTKL3JK45K234J4", "342TRC3443DD23");

bitcoin.createNewTransaction(100, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")

bitcoin.createNewBlock(124234, "SJD0934JRSD09SDSD", "SD934JHSD2N3SDS")

bitcoin.createNewTransaction(50, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")
bitcoin.createNewTransaction(300, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")
bitcoin.createNewTransaction(2000, "SAFEER3JK45K234J4", "SHAMIL3JK45K234J4")

bitcoin.createNewBlock(374243, "JSDJ98235J2398", "KJSDKLF3985NSK3");

console.log(bitcoin);

// Test for hashBlock method
const previousBlockHash = "NSDTKL3JK45K234J4";
const currentBlockData = [
    {
        amount: 10,
        sender: "SAFEER3JK45K234J4",
        recipient: "SHAMIL3JK45K234J4"
    },
    {
        amount: 20,
        sender: "AHMED3JK45K234J4",
        recipient: "SHAMIL3JK45K234J4"
    },
    {
        amount: 200,
        sender: "KHANA3JK45K234J4",
        recipient: "TALHA3JK45K234J4"
    }
]
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));