"use strict";

(function () {

    pokemonApp.service("pokeDal", ["dal", PokeDal]);

    function PokeDal (dal) {

        this.getPokemon = function (idRef) {
            return dal.http.GET("http://pokeapi.co/api/v2/pokemon/" + idRef);
        };

        this.savePokemon = function (pokemonToSave) {
            return dal.http.POST("http://pokeapi.co/api/v2/pokemon/", pokemonToSave);
        };

        this.updatePokemon = function (pokemonToUpdate) {
            return dal.http.PUT("http://pokeapi.co/api/v2/pokemon/", pokemonToUpdate);
        };

        this.deletePokemon = function (pokemonToDelete) {
            return dal.http.DELETE("http://pokeapi.co/api/v2/pokemon/", pokemonToDelete);
        };

    }
}());
