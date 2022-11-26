const fs = require('fs');
const { workerData } = require('worker_threads');
var word_list;

fs.readFile('./static/word_list.txt', 'utf8', (err, data) => {
    takeData(data);
});



const takeData = (data) => {
    const dataInArray = data.split("\n");
    const objectList = {};
    for (let i = 0; i < dataInArray.length; i++) {
        objectList[i] = dataInArray[i];
    }
    let jsonList = JSON.stringify(objectList);
    fs.writeFile("./static/word_list.json", jsonList, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    })
};
