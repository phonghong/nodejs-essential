// Dependencies
var fs = require('fs');

// App object
var contents = {};

// Get all the contents
contents.allContents = function(file){

    // Read the text file containing the jokes
    var fileContents = fs.readFileSync(__dirname+file, 'utf8');

    // Turn the string into an array 
    var arrayOfContent = fileContents.split(/\r?\n/);
    
    // console.log(fileContents);

    // Return the array
    return arrayOfContent;

};

// Export the library
module.exports = contents;