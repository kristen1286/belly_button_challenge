# belly_button_challenge (module 14 repo challenge)


<p align="center">
<img src="Images/bacteria.jpg" alt="bacteria >
</p>
  
---
## Table of Contents
- [Background](#background)
- [Part 1: Bar Chart](#bar)
- [Part 2: Bubble Chart](#bubble)
- [Part 3: Demographic Information](#demographic)
- [Part 4: Gauge Chart](#gauge)

---
## Background <a name="background"></a>

Build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

---
## Part 1: Bar Chart <a name="bar"></a>

  1. Use the D3 library to read in {samples.json} from the URL {https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.}
  2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      -  Use sample_values as the values for the bar chart.
      -  Use otu_ids as the labels for the bar chart.
      -  Use otu_labels as the hovertext for the chart.
     
<p align="center">
<img src="Images/hw01.png" alt="bar_chart="500" >
</p>

---
## Part 2: Bubble Chart <a name="bubble"></a>
1. Create a bubble chart that displays each sample. 
      -  Use otu_ids for the x values.
      -  Use sample_values for the y values.
      -  Use sample_values for the marker size.
      -  Use otu_ids for the marker colors.
      -  Use otu_labels for the text values.

<p align="center">
<img src="Images/bubble_chart.png" alt="bubble_chart" >
</p>

---
## Part 3: Demographic Information <a name="demographic"></a>      
1. Display the sample metadata, i.e., an individual's demographic information.
2. Display each key-value pair from the metadata JSON object somewhere on the page.
3. Display each key-value pair from the metadata JSON object somewhere on the page.

  <p align="center">
<img src="Images/hw03.png" alt="demographic_chart" >
</p>

---
## Part 4: Gauge Chart <a name="gauge"></a>   

1. Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.
2. You will need to modify the example gauge code to account for values ranging from 0 through 9.
3. Update the chart whenever a new sample is selected.

<p align="center">
<img src="Images/gauge.png" alt="gauge_chart" >
</p>
