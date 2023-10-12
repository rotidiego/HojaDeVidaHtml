let Experiencia;
let Repositorios;
let Estudios;
$(document).ready(function () {
    console.log("ready")
    ObtenerData();
    function ObtenerData() {
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
                Experiencia = data['Experiencia'];
                Repositorios = data['Repositorios'];
                Estudios = data['Estudios'];

                CargarRepos();
                CargarExperiencia();
            })
            .catch(error => console.error('Error:', error));


    }
    function CargarRepos() {
        let htmlRepos = '';
        for (let i = 0; i < Repositorios['length']; i++) {
            htmlRepos += '<div class="col-lg">'
            htmlRepos += '<a href="' + Repositorios[i]['Url'] + '">'
            htmlRepos += '<div class="cardPersonalizado card" style="width: 18rem;">'
            htmlRepos += '<img class="card-img-top" src="' + Repositorios[i]['Img'] + '"'
            htmlRepos += ' alt="Card image cap">'
            htmlRepos += '<div class="card-body"><h5>' + Repositorios[i]['Nombre'] + '</h5>'
            htmlRepos += '<p class="card-text">' + Repositorios[i]['Descripcion'] + '</p>'
            htmlRepos += '</div>'
            htmlRepos += '</div>'
            htmlRepos += '</a>'
            htmlRepos += '</div>';
        }
        $('#Repos').html(htmlRepos);
    }
    function CargarExperiencia() {
        let htmlExp = '';
        let htmlList = '<div class="card"><ul class="list-group list-group-flush">'
        for (let i = 0; i < Experiencia['length']; i++) {
            htmlList += '<li class="list-group-item" onclick="CambiarExperiencia(' + i + ')" style="cursor:pointer;">' + Experiencia[i]['Empresa'] + ' - ' + Experiencia[i]['FechaInicio'] + '</li>';
            htmlExp += '<div class="Experiencia" id="Exp' + i + '" hidden>'
            htmlExp += '<div class="row">'
            htmlExp += '<div class="col-lg-5">'
            htmlExp += '<img class="img-fluid"'
            htmlExp += 'src="' + Experiencia[i]['Img'] + '"'
            htmlExp += 'alt="Foto ' + Experiencia[i]['Empresa'] + '">'
            htmlExp += '</div>'
            htmlExp += '<div class="col">'
            htmlExp += '<div class="ExperienciaInfo">'
            htmlExp += '<h2>' + Experiencia[i]['Empresa'] + '</h2>'
            htmlExp += '<h5><strong>' + Experiencia[i]['Cargo'] + '</strong></h5>'
            htmlExp += '<h6>' + Experiencia[i]['FechaInicio'] + ' - ' + Experiencia[i]['FechaFin'] + '</h6>'
            htmlExp += '<br>'
            htmlExp += '<p>' + Experiencia[i]['Responsabilidades'] + '</p>'
            htmlExp += '</div>'
            htmlExp += '</div>'
            htmlExp += '</div>'
            htmlExp += '</div>'
        }
        htmlList += '</ul></div>'
        $('#ExperienciaLista').html(htmlList);
        $('#ExperienciaDetalle').html(htmlExp);
        CambiarExperiencia(0)
    }
})
function CambiarExperiencia(n) {
    for (let i = 0; i < Experiencia['length']; i++) {
        if (i == Number(n)) {
            document.getElementById('Exp' + i).hidden=false;
        } else {
            document.getElementById('Exp' + i).hidden=true;
        }

    }
}