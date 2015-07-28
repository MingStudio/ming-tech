(function () {
    var getCurrentModule = function () {
        var
            pageName, moduleName,
            urlParts = window.location.pathname.split('/'),
            lastItem = urlParts[urlParts.length - 1];

        if (lastItem.indexOf('.') == -1) {
            pageName = 'index';
            moduleName = urlParts[urlParts.length - 1];
        }
        else {
            pageName = lastItem.substr(0, lastItem.indexOf('.'));
            moduleName = urlParts[urlParts.length - 2];
        }

        return moduleName.toLowerCase() + '-' + pageName.toLowerCase();
    };

    requirejs.config({
        baseUrl: '../js/app',
        paths: {
            //jquery: [
            //    'http://cdn.bootcss.com/jquery/2.1.4/jquery.min',
            //    'jquery/jquery'
            //],
            angular: [
                'http://cdn.bootcss.com/angular.js/1.4.3/angular.min',
                '../lib/angular/angular'
            ],
            'angular-bootstrap': [
                'http://cdn.bootcss.com/angular-ui-bootstrap/0.13.1/ui-bootstrap-tpls.min',
                '../lib/angular-bootstrap/ui-bootstrap-tpls'
            ]
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

    requirejs(['angular',getCurrentModule()], function(angular, app){
        // Start angular by manual
        angular.bootstrap(document, [app.name]);
    });
})();

