let respuesta;
$(document).ready(function () {
    console.log("ready")
    ObtenerData();
    function ObtenerData() {
        const request = new XMLHttpRequest();
        let value;
        request.open("GET", 'Data/Data.json', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({
            value: value
        }));
        request.onload = function () {
            const superHeroes = request.response;
          };
        fetch('Data/Data.json', {
            mode: 'no-cors',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
            .then(response => {
                respuesta = response;
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.json();
            })
            .then(data => {
                // Hacer algo con los datos JSON
            })
            .catch(error => console.error('Error:', error));


    }
})