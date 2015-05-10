/**
 *
 * Created by newton on 5/8/15.
 */
angular.module('hello', [])
    .controller('home', function($scope, $http) {
        $http.get('/resource/').success(function(data) {
            $scope.greeting = data;
        })
    })
