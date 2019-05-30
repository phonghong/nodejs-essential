const fs = require('fs');
const path = require('path');

const readFile = async (fileName) => {
    const fileContent = new Promise((resolve, reject) => {
      let filePath = path.resolve(__dirname, fileName);
        return fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });

    return fileContent;
}

let musicResult = readFile("./reader/music.txt");
Promise.resolve(musicResult)
.then(function(value) {
  console.log(value);
});

let poemResult = readFile('./reader/poem.txt');
Promise.resolve(poemResult).then(function(value){
  console.log(value);
});
