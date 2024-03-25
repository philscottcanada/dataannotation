const fs = require('fs');
const input_file = './coding_qual_input.txt';

//1. Read the text file synchronously
//2. Split linie by line and read into an Object
const data = fs.readFileSync(input_file, 'utf8');
const lines = data.split('\n');
const dataObject = {};

lines.forEach(line => {
    const [key, value] = line.trim().split(' ');
    dataObject[key] = value;
});

function createPyramidArray(arr) {
    let pyramid = [];
    let level = 0;
    let objPos = 0;
    
    while (objPos < arr.length) {
        pyramid[level]=[];
        for (i=0; i<=level; i++){ 
           pyramid[level].push(arr[objPos]);
           objPos++; 
        }
        level++;
    }
    return pyramid;
}

//sorts the object into an array
const sortedObj = Object.entries(dataObject).sort(function(a, b){return b-a}); 

// Get the array into a pyramid structure
const pyramidArray = createPyramidArray(sortedObj);

// // Output the pyramid array
pyramidArray.map(level =>{
    console.log(level[level.length-1][1])
})
