'use strict';
var app = angular.module('BarIndex', [
    'templates',
    'ui.router',
    'BarIndex.Main',
    'BarIndex.Admin'
]);

var options = function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/admin');
};

options.$inject = ['$urlRouterProvider'];

app.config(options);