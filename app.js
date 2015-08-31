var App=angular.module('App',[])

App.controller('mainController', function($scope, $http){


    var hide='display:none'
    var show=''

    $scope.disp=hide
    $scope.msg=''
    $scope.col='green'

    $scope.get = function () {
        $http.get('?num='+$scope.num).then(function(response) {
            $scope.disp=hide
	    	$scope.name=response.data.name
		    $scope.num=response.data.num
    		$scope.company=response.data.company
	    	$scope.batch=response.data.batch
	    	$scope.email=response.data.email
            if (response.data.name==undefined) {
                $scope.msg='Sorry, we don\'t have you in our database'
                $scope.disp=show
                $scope.col='orange'
            }
        },function(res){
            $scope.msg='Error '+res.status+' '+res.statusText
            $scope.disp=show
            $scope.col='red'
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
    }

});
