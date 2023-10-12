let Experiencia;
let Repositorios;
let Estudios;
$(document).ready(function () {
    console.log("ready")
    Repositorios = [
        {
            "Nombre": "Frecuencia y Entropia de Videos",
            "Descrpicion": "",
            "Url": "",
            "Img": "https://cdn-icons-png.flaticon.com/512/20/20513.png"
        },
        {
            "Nombre": "Calculadora de tasas de intereses",
            "Descrpicion": "",
            "Url": "",
            "Img": "https://cdn-icons-png.flaticon.com/512/3625/3625050.png"
        },
        {
            "Nombre": "Netflix v1",
            "Descrpicion": "",
            "Url": "",
            "Img": "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
        },
        {
            "Nombre": "Netflix v2",
            "Descrpicion": "",
            "Url": "",
            "Img": "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
        }
    ];
    Experiencia = [
        {
            "Empresa": "Intergrupo",
            "Cargo": "Aprendiz",
            "FechaInicio": "29/11/2022",
            "FechaFin": "28/05/2022",
            "Img": "https://www.revistacloudcomputing.com/wp-content/uploads/2020/11/softwareone-intergrupo.jpg",
            "Responsabilidades": ""
        },
        {
            "Empresa": "SoftwareOne Intergrupo",
            "Cargo": "Ingeniero de Desarrollo",
            "FechaInicio": "06/06/2022",
            "FechaFin": "Actualidad",
            "Img": ""
        }
    ];
    CargarRepos();
    CargarExperiencia();
    //   ObtenerData();
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
        let htmlList = '<ul class="list-group list-group-flush">'
        let aux = '';
        for (let i = 0; i < Experiencia['length']; i++) {
            aux = i == 0 ? 'style="display: none;' : '';
            htmlList += '<li class="list-group-item" onclick="CambiarExperiencia(' + i + ')" style="cursor:pointer;">' + Experiencia[i]['Empresa'] + ' - ' + Experiencia[i]['FechaInicio'] + '</li>';
            htmlExp += '<div class="Experiencia" id="Exp' + i + '" '+aux+'>'
            htmlExp += '<div class="row">'
            htmlExp += '<div class="col-lg-5">'
            htmlExp += '<img class="img-fluid"'
            htmlExp += 'src="' + Experiencia[i]['Img'] + '"'
            htmlExp += 'alt="Foto ' + Experiencia[i]['Empresa'] + '">'
            htmlExp += '</div>'
            htmlExp += '<div class="col-6">'
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
        htmlList += '</ul>'
        $('#ExperienciaLista').html(htmlList);
        $('#ExperienciaDetalle').html(htmlExp);
    }
})
function CambiarExperiencia(n) {
    for (let i = 0; i < Experiencia['length']; i++) {
        if (i == Number(n)) {
            $('#Exp' + i).show();
        } else {
            $('#Exp' + i).hide();
        }

    }
}