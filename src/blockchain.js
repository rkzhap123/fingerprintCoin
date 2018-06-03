const CryptoJS = require('crypto-js');


class Block{
    constructor(index, hash, previousHash, timestamp, data){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}

const genesisBlock = new Block(
    0,
    '32DFE409BA1BDD04780115509897B4FF389B579AE4B364EB27EEF89EEFD39D18',
    null,
    new Date().getTime().now/1000,
    "This is the GenesisBlock!",
);

let blockchain = [genesisBlock];

const getLastBlock = () =>{
    return blockchain(blockchain.length-1);
}

const getTimeStamp = ()=>{
    return new Date().getTime.now/1000
}

const createHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index+previousHash+timestamp+data).toString();
}

const createNewBlock = data =>{
    const previousBlock = getLastBlock();
    const newBlockIndex = previousBlock.index +1;
    const newTimestamp = getTimeStamp();
    const newHash = createHash(
        newBlockIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data)
    const newBlock = new Block(
        newBlockIndex,
        newHash,
        previousBlock.hash,
        newTimestamp,
        data        
    )
}