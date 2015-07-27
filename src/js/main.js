requirejs.config({
    baseUrl: '../js/lib',
    paths: {
        //jquery: [
        //    'http://cdn.bootcss.com/jquery/2.1.4/jquery.min',
        //    'jquery/jquery'
        //],
        angular: [
            'http://cdn.bootcss.com/angular.js/1.4.3/angular.min',
            'angular/angular'
        ],
        'angular-bootstrap': [
            'http://cdn.bootcss.com/angular-ui-bootstrap/0.13.1/ui-bootstrap-tpls.min',
            'angular-bootstrap/ui-bootstrap-tpls'
        ],
        app: '../app',
        'home-index': '../app/home/index'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-bootstrap': {
            deps: ['angular'],
            exports: 'angular-bootstrap'
        }
    }
});

requirejs(['home-index'], function (angular, angularBootstrap, app) {
});