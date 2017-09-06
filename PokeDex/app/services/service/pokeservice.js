(function() {

    var PokeService =  function(pokeDal) {
        
    	this.getPokemon = function(idRef) {
            return pokeDal.getPokemon(idRef);
        };
    };

    pokemonApp.service('pokeService', ['pokeDal', PokeService]);
}());