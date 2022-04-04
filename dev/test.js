const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(124325, "NSDTKL3JK45K234J4", "342TRC3443DD23");
bitcoin.createNewBlock(567567, "SDDTKL3JK45K234J4", "DFGTRC3443DD23");
bitcoin.createNewBlock(124325, "FGGHKL3JK45K234J4", "3HFGSC3443DD23");

console.log(bitcoin);