angular-files-model [![GitHub version](https://badge.fury.io/gh/tsaikd%2Fangular-files-model.png)](http://badge.fury.io/gh/tsaikd%2Fangular-files-model)
===================
[![Dependency Status](https://david-dm.org/tsaikd/angular-files-model.png)](https://david-dm.org/tsaikd/angular-files-model)
[![devDependency Status](https://david-dm.org/tsaikd/angular-files-model/dev-status.png)](https://david-dm.org/tsaikd/angular-files-model#info=devDependencies)
[![Build Status](https://travis-ci.org/tsaikd/angular-files-model.png)](https://travis-ci.org/tsaikd/angular-files-model)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

AngularJS directive that allows input element's of type file to be handled in models inside a controller's scope

fork from https://github.com/ghostbar/angular-file-model

## Usage

Include `angular-files-model.min.js` in your application.

```html
<script src="angular-files-model.min.js"></script>
```

Add the `angular-files-model` module to your application's dependencies.

```js
angular.module("myApp", ["angular-files-model"]);
```

Ready to use in your controllers:

`file.html`:

```html
<input type="file" ng-files-model="fileModel">
<button ng-click="upload()">Upload</button>
```

`controller.js:`

```js
var DemoCtrl = [
	'$scope', 
	function ($scope) {
		$scope.upload = function () {
			$scope.fileModel // This is where the file is linked to.
		};
	}
];
```

## Notes

If use in angular ui bootstrap modal, you need to handle the scope problem with a parent scope variable.

`file.html`:

```html
<input type="file" ng-files-model="wrap.fileModel">
<button ng-click="upload()">Upload</button>
```

`controller.js:`

```js
var DemoCtrl = [
	'$scope', 
	function ($scope) {
		$scope.wrap = {};
		$scope.upload = function () {
			$scope.wrap.fileModel // This is where the file is linked to.
		};
	}
];
```

If you use this module you can give it a thumbs up at http://ngmodules.org/modules/angular-files-model
