$(document).ready(function () {
    
    for (let i = 1; i<152; i++) {
        $.ajax({
            type: "GET",
            url: "http://pokeapi.co/api/v2/pokemon/" + i,
            dataType: "json",
            crossDomain: true,
            success: function (response) {
                $("#pokemonElegido").append('<option>' + response.name + '</option>');
              
            }
        });
    }

    
    $("#buscar").click(function (e) { 
        e.preventDefault();
        var pokemon = $('#pokemonElegido').val();
        console.log(pokemon);
        $('#imagenPokemon').empty();
        $('#infoPokemon').empty();
        $.ajax({
            type: "GET",
            url: "http://pokeapi.co/api/v2/pokemon/" + pokemon,
            dataType: "json",
            success: function (response) {
                $('#imagenPokemon').append('<img src="' + response.sprites.other.dream_world.front_default + '" alt="">');
                $('#infoPokemon').append('<h3> ' + response.name.toUpperCase() +'</h3>')
                
            }
        });

        
    });




});