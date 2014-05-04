'use strict';

app.directive('showoptions', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm) {
			
			// Show Editing and Canceling options when hovering
			iElm.bind('mouseover', function() {
				iElm.children('td:last-child').children('ul').removeClass('invisible');
			});
			iElm.bind('mouseleave', function() {
				iElm.children('td:last-child').children('ul').addClass('invisible');
			});

			// Style status depending on string
			var i = $scope.project.status;

			switch(i) {
				case 'Active':
				iElm.children('td.status').addClass('text-success');
				break;

				case 'Canceled':
				iElm.children('td.status').addClass('text-danger');
				break;

				case 'On Hold':
				iElm.children('td.status').addClass('text-warning');
				break;
			}
		}
	};
});