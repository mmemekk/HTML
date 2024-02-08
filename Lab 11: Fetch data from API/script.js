
async function generateChart(){
    const response = await fetch("https://restcountries.com/v3.1/all");
    const populationData = await response.json();
    
    var numberOfCountries = document.getElementById("numberOfCountries");
    var number = numberOfCountries.value;

    const showdata = populationData.slice(0,number);
    const countryname = showdata.map(showdata => showdata.name.common); //create array
    const population = showdata.map(showdata => showdata.population); //create arrat
    
    const ctx = document.getElementById('barChart');      
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: countryname,
        datasets: [{
        label: 'Total population',
        data: population,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });


}
