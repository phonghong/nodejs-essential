let contentReader = require('./reader/file-reader');

// App object
let app = {};

// Function that prints both poem and music
app.printContent = function(){
    // Print poem
    setTimeout(function() {
      let poem = contentReader.allContents('/poem.txt');
      console.log(poem);
    }, 2000);

    // Print music
    let allMusic = contentReader.allContents('/music.txt');
    console.log(allMusic);
};

app.printContent();
