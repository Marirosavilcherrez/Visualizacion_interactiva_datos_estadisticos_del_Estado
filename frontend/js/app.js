function consultar() {
    // Realizar una solicitud GET para obtener los datos desde tu servidor
    fetch("http://localhost:3000/data")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            // Extraer los datos relevantes (por ejemplo, provincias y transacciones)
            const provincias = data.data.map((entry) => entry.Provincia);
            const transacciones = data.data.map((entry) => parseInt(entry["SUM(TRANSACCIONES)"]));

           // Crear un gráfico de barras con Chart.js
            const getGrafic = document.getElementById('grafico').getContext('2d');
            const myChart = new Chart(getGrafic, {
                type: 'bar',
                data: {
                    labels: provincias,
                    datasets: [{
                        label: 'Transacciones',
                        data: transacciones,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
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
        })
        .catch((error) => {
            console.error("Hubo un error:", error);
        });
}
