const key = "39e8d4ac83a488e474f69b5a69afa074" // copiar a key do site

function buscarCidade() {
    const dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}') // copiar link da api call
    var cidade = document.querySelector("#cidade").value;
    if (cidade == ""){
        alert("Por favor, digite o nome da cidade!");
        } else {
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`;
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                mostrarResultado(data);
                })
                .catch((error) => {
                    alert("Não foi possível encontrar essa cidade! Tente novamente.");
                    });
                    };
                    };
                    function mostrarResultado(data){
                        var main = data.main;
                        var weather = data.weather[0];
                        var city = data.name;
                        var country = data.sys.country;
                        document.querySelector("#temperatura").innerHTML= `${Math.round(main.temp - 273)}°C`;
                        document.querySelector("#descricao").innerHTML=`${weather.description} em ${city}, ${country}`;
                
    colocarDados
}

/*<script>
    function cliqueNoBotao() {
        // Obtenha a referência do input da cidade
        var inputCidade = document.querySelector('.input-cidade');

        // Obtenha o valor digitado pelo usuário
        var cidade = inputCidade.value;

        // Substitua os espaços reservados pelos valores reais
        var apiKey = '39e8d4ac83a488e474f69b5a69afa074'; // Substitua pelo seu próprio API key do OpenWeatherMap
        var url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

        // Faça a chamada à API usando fetch
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Aqui você pode manipular os dados da resposta, como exibir a temperatura, condições climáticas, etc.
                console.log(data);
            })
            .catch(error => {
                console.error('Erro ao obter dados da API:', error);
            });
    }
</script>*/

 