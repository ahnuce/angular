// MODULE first step.
//only variable in global name space
//you can attach it to any object in the DOM => usually put in the html tag to display view in the html so now your app can have all the properties on an angular module
var myApp = angular.module('myApp', []);

// CONTROLLERS
//$scope got injected into the controller so now you are able to use the service by just putting the onject in as a parameter
myApp.controller('mainController', ['$scope', function ($scope) {
  console.log($scope)
}]);


//example of dependency injection
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
