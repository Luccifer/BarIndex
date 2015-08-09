'use strict';
var app = angular.module('BarIndex', [
    'templates',
    'ui.router',
    'restangular',
    'Common.User',
    'Common.Bar',
    'Common.Door',
    'BarIndex.Main',
    'BarIndex.Admin'
]);

var options = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};

options.$inject = ['$urlRouterProvider'];

app.config(options);