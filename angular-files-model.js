/* angular-files-model v0.1.1 2014-03-14
 * https://github.com/tsaikd/angular-files-model
 * License: LGPLv3
 */
(function(){
var app = angular

.module("angular-files-model", [])

;
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
}).call(this);