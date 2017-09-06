(function() {
    var BoxController =  function(pokeService) {
        var vm = this;

        function init(idRef) {
            pokeService.getPokemon(idRef).then(function (results) {
                console.log("In pokedex controller about to return data to the client with results " + results);
                vm.pokemon  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        init("");

    };
    pokemonApp.controller('boxController', ['pokeService', BoxController]);
}());