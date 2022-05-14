var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope, $filter) {
   
    $scope.todoList = []; // Stores Task

    $scope.todoAdd = function() {
    	//put the Task into list
        $scope.todoList.push({todoText:$scope.todoInput, done:false}); 
        $scope.todoInput = ""; //reset the input text field
        $scope.CurrentDate = new Date();
        $scope.HHmmss = $filter('date')(new Date(), 'HH:mm:ss');
    };

    //For Removing Task From List 
    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});




