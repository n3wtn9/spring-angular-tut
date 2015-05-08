/**
 *
 * Created by newton on 5/8/15.
 */
angular.module('hello', [])
    .controller('home', function($scope) {
     $scope.greeting = {id: 'xxx', content: 'Hello World!'}
    })
