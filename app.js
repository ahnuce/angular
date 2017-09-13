var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

      $routeProvider

      .when('/', {
        templateUrl:'pages/main.html',
        controller: 'mainController'
      })

      .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
      })

});

myApp.service('nameService', function(){
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function(){
     return self.name.length;
    };
    
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){

    $scope.name = nameService.name;
    
     $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    
    $scope.num = $routeParams.num;
}]);





// MODULE first step.
//only variable in global name space
//you can attach it to any object in the DOM => usually put in the html tag to display view in the html so now your app can have all the properties on an angular module
// var myApp = angular.module('myApp', []);

// CONTROLLERS
//$scope got injected into the controller so now you are able to use the service by just putting the onject in as a parameter
//the first $scope here is the object that angularjs has created for us to use with built in properties and the second one is the dependency injection
// myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http', function ($scope, $timeout, $filter) {
//
//   $scope.name = 'Anusone';
//   $timeout(function(){
//     $scope.name = 'Everybody';
//   }, 3000);
//   $scope.handle = '';
//   $scope.lowercasehandle = function(){
//     return $filter('lowercase')($scope.handle);
//   };
//
//   $scope.characters = 5;
//   $scope.rules = [
//     { rulename: "No more than fives letters"},
//     { rulename: "Only cool names"},
//     { rulename: "Only letters"}
//   ];
//using rules api with rules above
  // $http.get('')
  //     .success(function(result){
  //
  //         $scope.rules = result;
  //
  //     })
  //
  //     .error(function(data, status){
  //       console.log(data);
  //
  //     });
// }]);
//
// $scope is the glue that binds the code in the controller to the view
//
// example of dependency injection
// var Person = function(firstname, lastname){
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
//
// function logPerson(person){
//   console.log(person);
// }
//
// var john = new Person('John', 'Doe');
// logPerson(john);
//
//
// directives give directions or instructions for what happens to the dom
