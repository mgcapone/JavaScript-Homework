// from data.js
var tableData = data;

// YOUR CODE HERE!

// target the table body section of the html file
tbody = d3.select("tbody");


// create function to grab the data from the data.js file
function getData(data){
    data.forEach(function(ufoSighting){ //loop through each instance of the data
        var newRow = tbody.append("tr");// make a new "tr" element in the html file and append it to the table
        Object.entries(ufoSighting).forEach(function([key,value]){ // use Object to generate key and value in each row
            var newData = tbody.append("td"); // take new data instance and generate "td" element in the html file

            newData.text(value); // make the data into text
        });
    });
}
// Check to see if the data comes through
getData(tableData); 
// It does

// Select the button from the html document

var button = d3.select("#filter-btn");

button.on("click", function(){
    d3.event.preventDefault();

    var userElement = d3.select("#datetime");
    var userEntry = userElement.property("value");
    console.log(userEntry);

    let filteredData = tableData;

    var filtered = filteredData.filter(tbody => tbody.datetime === userEntry);

    createTable(filtered);
});