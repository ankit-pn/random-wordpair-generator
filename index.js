const word_list = require("./static/word_list.json");


const randomWordPairGenerator = (number) => {
    let res = [];
    for (let i = 0; i < number; i++) {
        let len = Object.keys(word_list).length - 1;
        let rand1 = Math.floor(Math.random() * len);
        let rand2 = Math.floor(Math.random() * len);
        res.push({ "0": word_list[rand1], "1": word_list[rand2] });
    }
    return res;
}

// console.log(randomWordPairGenerator(4));

module.exports = randomWordPairGenerator;
