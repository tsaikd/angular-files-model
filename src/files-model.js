app

.directive("ngFilesModel", ["$parse", function($parse) {
	return {
		restrict: "A",
		link: function(scope, elem, attrs) {
			elem.bind("change", function(evt) {
				scope.$apply(function() {
					var ngModelGet = $parse(attrs["ngFilesModel"]);
					var ngModelSet = ngModelGet.assign;
					ngModelSet(scope, evt.target.files);
				});
			});
			scope.$watch(attrs["ngFilesModel"], function(file) {
				// File input element accepts a filename, which may only be programatically set to the empty string.
				if (!file) {
					elem.val("");
				}
			});
		}
	};
}])

;