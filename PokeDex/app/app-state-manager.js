"use strict";

(function () {

    pokemonApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokedex");

        $stateProvider.state("pokedex", {
            url: "/pokedex",
            templateUrl: "app/features/pokedex/pokedex.html"
        }).state("battle", {
                url: "/battle",
                templateUrl: "app/features/battle/battle.html"
        }).state("box", {
            url: "/mypokemon",
            templateUrl: "app/features/box/box.html"
        })
    });
}());