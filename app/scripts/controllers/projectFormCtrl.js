'use strict';

app.controller('projectFormCtrl', function ($scope, $location, Project){

	$scope.project = angular.copy(Project.template);
	$scope.status = angular.copy($scope.project.status);

	$scope.submitProject = function() {
		Project.create($scope.project).then(function (ref) {
			console.log('Project created: ' + ref.name());
			$location.path('/');
		});
		$scope.project = Project.template; //reset form data
	};

	$scope.deleteProject = function(x) {
		Project.delete(x);
		console.log('Post deleted succesfully!');
	};

	$scope.resetForm = function() {
		$scope.project = angular.copy(Project.template);
	};
});
