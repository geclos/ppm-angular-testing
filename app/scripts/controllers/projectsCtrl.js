'use strict';

app.controller('projectsCtrl', function ($scope, $location, Project) {

	$scope.projects = Project.all;

	$scope.deleteProject = function(x) {
		Project.delete(x).then(function() {
			console.log('Post deleted succesfully!');
		});
	};

	$scope.seeProject = function(x) {
		console.log(x);
	};
});