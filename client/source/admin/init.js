'use strict';
var module = angular.module('BarIndex.Admin',[]);

var options = function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateProvider: ['$templateCache', function($templateCache){
                return $templateCache.get('admin/index.html');
            }]
        })
};

options.$inject = ['$stateProvider'];

module.config(options);