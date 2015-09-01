var App=angular.module('App',[])

App.controller('mainController', function($scope, $http){


    var hide='on';// 'hidden', not 'visible'
    var show='off'

    $scope.disp=hide
    $scope.msg=''
    $scope.col='green'
    $scope.dispdetails=hide

    $scope.get = function () {
//        $http.get('one.json').then(function(response) {
        $http.get('?num='+$scope.num).then(function(response) {
            $scope.disp=hide
	    	$scope.name=response.data.name
		    $scope.num=response.data.num
    		$scope.company=response.data.company
	    	$scope.batch=response.data.batch
	    	$scope.email=response.data.email
            $scope.dispdetails=show
            if (response.data.name==undefined) {
                $scope.msg='Sorry, we don\'t have you in our database'
                $scope.col='orange'
                $scope.disp=show
                $scope.dispdetails=hide
            }
        },function(res){
            $scope.msg='Error '+res.status+' '+res.statusText
            $scope.col='red'
            $scope.disp=show
            $scope.dispdetails=hide
        })
    }



    $scope.update = function () {
        $http.post('update').then(function(res) {
            $scope.msg='Thanks you!'
            $scope.disp=show
            $scope.col='green'
        }, function(res){
            $scope.msg='Error '+res.status+' '+res.statusText
            $scope.disp=show
            $scope.col='red'
        })
    }

    $scope.clearmsg = function () {
         $scope.msg=''
         $scope.disp=hide
         $scope.dispdetails=hide
    }

});
