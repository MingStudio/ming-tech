(function(){
    var rootUrl = '/ming-tech/src/';

    var getCurrentModule = function(){
        var
            pageName, moduleName,
            urlParts = window.location.pathname.split('/'),
            lastItem = urlParts[urlParts.length-1];

        if(lastItem.indexOf('.') == -1){
            pageName = 'index';
            moduleName = urlParts[urlParts.length -1];
        }
        else{
            pageName = lastItem.substr(0, lastItem.indexOf('.'));
            moduleName = urlParts[urlParts.length -2];
        }

        return moduleName+ '-'+pageName;
    };

    requirejs.config({
        baseUrl: '../js',
        paths: {
            //jquery: [
            //    'http://cdn.bootcss.com/jquery/2.1.4/jquery.min',
            //    'jquery/jquery'
            //],
            angular: [
                'http://cdn.bootcss.com/angular.js/1.4.3/angular.min',
                'lib/angular/angular'
            ],
            'angular-bootstrap': [
                'http://cdn.bootcss.com/angular-ui-bootstrap/0.13.1/ui-bootstrap-tpls.min',
                'lib/angular-bootstrap/ui-bootstrap-tpls'
            ],
            app: 'app',
            'home-index': 'app/home/index',
            'angular-index':'app/angular/index'
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

    requirejs([getCurrentModule()]);
})();

