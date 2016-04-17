angular.module('app')
	.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, 
    transclude: true, 
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

angular.module('app').controller('myCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);







// angular.module('app')
// 	.directive('modalDialog', function(){

// 		return {
// 			resttrict: 'E',
// 			scope: {
// 				show: '='
// 			},
// 			replace: true,
// 			transclude: true,
// 			link: function(scope, element, attrs){
// 				scope.dialogStyle = {};
// 				if (attrs.width){
// 					scope.dialogStyle.width = attrs.width;
// 				}
// 				if (attrs.height){
// 					scope.dialogStyle.height = attrs.height;
// 				}
// 				scope.hideModal = function(){
// 					scope.show = false;
// 				};
// 			},
// 			tempalte: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
// 		};


// 	});


// angular.module('app').controller('myCtrl', function($scope){

// 	$scope.modalShow = false;
// 	$scope.toggleModal = function(){
// 		$scope.modalShow = !$scope.modalShow;
// 	};

// });



// templateUrl: 'tile.html',
// 				link: function(scope, element, attrs){
// 					element.on('click', function(){
// 						scope.$apply(function(){
// 							scope.color = "white";
// 						});
// 				});
// 				element.bind('mouseover', function(){
// 					element.css('cursor', 'pointer');
// 				});
// 			}


	// element.bind('mouseover', function(){
	// 					element.css('cursor', 'pointer');
	// 					element.css('background-color', 'white');
	// 					scope.$apply(function(){
	// 						scope.color = "white";
	// 				});
	// 			});


