describe('Suite de tests pour un contrôleur', () => {
    // code qui va s'exécuter avant chaque test
    beforeEach(() => {
        angular.mock.module('tripApp')
    })
    // cas de test
    // angular.mock.inject permet d'injecter des dépendances
    // les services sont directement injectables
    it(`$controller avec modification des propriétés`, angular.mock.inject
    (($controller) => {
    const pizzaCtrl = $controller('PizzaCtrl',
    /* pas de modification des dépendances */
    {},
    /* propriétés du contrôleur à l'initialisation */
    { nomPizzeria : 'La Super Pizzéria'})
    
    expect(pizzaCtrl.nomPizzeria).toEqual('La Super Pizzéria')
    expect(pizzaCtrl.pizzas.length).toBe(2)
    }))
})