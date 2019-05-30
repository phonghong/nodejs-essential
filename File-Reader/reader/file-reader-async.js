// Dependencies
var fs = require('fs');

// App object
var contents = {};

// Get all the contents
contents.allContents = async function(file){
    // Read the text file containing the jokes
  fs.readFile(__dirname+file, 'utf8', function(err, data){
    if (err) {
      return err;
    }
    
    return data;
  });
}

// Export the library
module.exports = contents;