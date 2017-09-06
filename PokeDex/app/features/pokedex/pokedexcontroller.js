(function() {
    var PokedexController =  function(pokeService) {
        var vm = this;

        vm.reverse =false;

        vm.doSort = function() {
            vm.sortby = 'name';
            vm.reverse= !vm.reverse
        };

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

        vm.getData = function(idRef) {
            pokeService.getPokemon(idRef).then(function (results) {
                console.log("In pokedex controller about to return data to the client with results " + results);
                vm.details  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };

    };
    pokemonApp.controller('pokedexController', ['pokeService', PokedexController]);
}());