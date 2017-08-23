

export default function CarrouselCtrl($scope,$interval) {
    $scope.images = [
        { 'name': 'New York', 'url': 'img/nyc.jpg' },
        { 'name': 'Paris', 'url': 'img/paris.jpg' },
        { 'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg' },
        { 'name': 'Rome', 'url': 'img/rome.jpg' },
        { 'name': 'Tokyo', 'url': 'img/tokyo.jpg' }
    ];
    // TODO ajouter une variable 'currentId' au scope indiquant l'index de l'image courante 
    $scope.currentId = 0;
    // TODO ajouter un fonction next()
    
    $scope.next = () =>{
        if ($scope.currentId<4) {
        $scope.currentId = $scope.currentId +1;
        }else{
        $scope.currentId = 0;
        }

    }
    $interval( () => $scope.next(),1000)
    // TODO ajouter un fonction previous()
        $scope.previous = () =>{
        if ($scope.currentId>0) {
        $scope.currentId = $scope.currentId -1;
        }else{
        $scope.currentId = 4;
        }
    }
}