const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//fetch the json data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});

function optionChanged(selectValue) {
    demo(selectValue);
    bar(selectValue);
    bubble(selectValue);
    gauge(selectValue)
}

// Display the default plots
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(data);

        // An array of id names
        let names = data.names;

        // Iterate through the names Array
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Assign the first name to name variable
        let name = names[0];

        // Call the functions to make the demographic panel, bar chart, and bubble chart
        demo(name);
        bar(name);
        bubble(name);
        gauge(name);
    });
}

function demo(selectValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(data);

        // An array of metadata objects
        let metadata = data.metadata;
        let resultArray = metadata.filter((meta) => meta.id == selectValue);
      
        // Assign the first object to obj variable
        let result = resultArray[0]
        
        // Clear the child elements in div with id sample-metadata
        d3.select("#sample-metadata").html("");
  
        let entries = Object.entries(result);
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        // Log the entries Array
        console.log(entries);
    });
  }

  function bar(selectValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(data);

        // An array of sample objects
        let samples = data.samples;

        // Filter data where id = selected value 
        let resultArray = samples.filter((sample) => sample.id === selectValue);

        // Assign the first object to result variable
        let result = resultArray[0];
        
        // Trace for the data 
        let trace = [{
            // Slice the top 10 otus
            x: result.sample_values.slice(0,10).reverse(),
            y: result.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: result.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "ocean blue"
            },
            orientation: "h"
        }];
        
        // Use Plotly to plot the data 
        Plotly.newPlot("bar", trace);
    });
  }

  function bubble(selectValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter((sampleObj) => sampleObj.id === selectValue);
    
        // Assign the first object to result variable
        let result = resultArray[0];
        
        // Trace for the data 
        let trace = [{
            x: result.otu_ids,
            y: result.sample_values,
            text: result.otu_labels,
            mode: "markers",
            marker: {
                size: result.sample_values,
                color: result.otu_ids,
                colorscale: "Earth"
            }
        }];
    
        // Apply the layout
        let layout = {
            xaxis: {title: "OTU ID"}
        };
    
        // Use Plotly to plot the data in a bubble chart
        Plotly.newPlot("bubble", trace, layout);
    });
}

function gauge(selectValue) {
    // Fetch the JSON data and console log it 
    d3.json(url).then((data) => {
        // An array of metadata objects
        let metadata = data.metadata;
        let resultArray = metadata.filter((meta) => meta.id == selectValue);
      
        // Assign the first object to result variable
        let result = resultArray[0]

        // Trace for the data 
        let trace = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: result.wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 24}},
            type: "indicator", 
            mode: "gauge+number",
            gauge: {
                axis: {range: [null, 10]}, 
                bar: {color: "ocean blue"},
                steps: [
                    { range: [0, 1], color: "rgb(233,245,248)" },
                    { range: [1, 2], color: "rgb(218,237,244)" },
                    { range: [2, 3], color: "rgb(203,230,239)" },
                    { range: [3, 4], color: "rgb(188,223,235)" },
                    { range: [4, 5], color: "rgb(173,216,230)" },
                    { range: [5, 6], color: "rgb(158,209,225)" },
                    { range: [6, 7], color: "rgb(143,202,221)" },
                    { range: [7, 8], color: "rgb(128,195,216)" },
                    { range: [8, 9], color: "rgb(113,187,212)" },
                    { range: [9, 10], color: "rgb(98,180,207)" }
                ]
            }
        }];

         // Use Plotly to plot the data 
         Plotly.newPlot("gauge", trace);
    });
}

  init();