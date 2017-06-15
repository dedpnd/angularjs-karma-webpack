import angular from 'angular';

let app = angular.module("myApp", []);;

app.service('Calc', function() {
    this.sum = (a, b) => a + b;
});