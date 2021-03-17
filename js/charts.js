
const trafficCanvas = document.getElementById('traffic-chart').getContext('2d')

let weeklyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

    let monthlyTrafficData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July",
        "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
        data: [3345, 3000, 1023, 5006, 3793, 2750, 2832, 8457, 4553, 1223,
        2500, 7823],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };

        let hourlyTrafficData = {
            labels: ["12 a.m to 6 a.m", "6 a.m to 12 p.m","12 p.m to 6 p.m,","6 p.m to 12 a.m"],
            datasets: [{
            data: [33, 55, 45, 60,],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
            }]
            };
         
            const dailyTrafficData = {
                labels: ["S", "M", "T", "W", "T", "F", "S"],
                datasets: [{
                label: '# of Hits',
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: '#7477BF',
                borderWidth: 1,
                }]
                };

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        };
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: weeklyTrafficData,
            options: trafficOptions
            });

            const dailyCanvas = document.getElementById("daily-chart");
            const dailyData = {
                labels: ["S", "M", "T", "W", "T", "F", "S"],
                datasets: [{
                label: '# of Hits',
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: '#7477BF',
                borderWidth: 1
                }]
                };
                const dailyOptions = {
                scales: {
                yAxes: [{
                ticks: {
                beginAtZero:true
                }
                }]
                },
                legend : {
                display: false
                }}
                let dailyChart = new Chart(dailyCanvas, {
                type: 'bar',
                data: dailyData,
                options: dailyOptions
                });

                const mobileCanvas = document.getElementById("mobile");
                const mobileData = {
                labels: ["Desktop", "Tablet", "Phones"],
                datasets: [{
                label: '# of Users',
                data: [2000, 550, 500],
                borderWidth: 0,
                backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
                ]
                }]
                };
                const mobileOptions = {
                legend: {
                position: 'right',
                labels: {
                boxWidth: 20,
                fontStyle: 'bold'
                }
                }}
                let mobileChart = new Chart(mobileCanvas, {
                    type: 'doughnut',
                    data: mobileData,
                    options: mobileOptions
                    });

// update charts
const trafficBtn = document.getElementById("trafficNav")

trafficBtn.addEventListener('click', (button => {
 if (button.target.textContent === "Daily") {
       let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: dailyTrafficData,
            options: trafficOptions
            });
 }
else if (button.target.textContent === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: weeklyTrafficData,
        options: trafficOptions
        });
    }
else if (button.target.textContent === "Monthly"){
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: monthlyTrafficData,
        options: trafficOptions
        });
        
    }
else if (button.target.textContent === "Hourly"){
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: hourlyTrafficData,
        options: trafficOptions
        });
}
}));


// daily.addEventListener('click', (e) =>{
//     addData(trafficChart, dailyTraffic.labels, dailyTraffic.datasets[0].data);
//     });