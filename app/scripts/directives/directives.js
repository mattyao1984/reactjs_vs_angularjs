'use strict';
angular.module('directives', [])
.directive('fastNg', function(){
	return{
		restrict: 'E',
		scope: {
			framework: '='
		},
		link: function(scope, element, attrs) {
			var MYAPP = React.createClass({
        displayName:'MYAPP',
        render:function(){
            return React.DOM.div(null, "Rendering faster in AngularJs with ", this.props.framework);
        }
	    });

			scope.$watch('framework', function(newValue, oldValue){
        React.render(
          React.createElement(MYAPP, {framework: newValue}),
          element[0]
        );
      });
		}
	};
})
.directive('fastList', function(){
	return{
		restrict: 'E',
		scope: {
			data: '='
		},
		link: function(scope, element, attrs) {
			var MYLIST = React.createClass({
				render: function(){
					var reactData = this.props.data;

					var rows = _.map(reactData, function(datum) {
		        var clickHandler = function(ev){
	            console.log("In ReactJs");
	            console.log(ev);
	          }

	          return (
	            React.DOM.tr( {onClick:clickHandler},
	              React.DOM.td(null, datum['0']),
	              React.DOM.td(null, datum['1'])
	            )
	          );
	        });

	        return (
	          React.DOM.table(null,
	            rows
	          )
	        );
				}
			});

			scope.$watchCollection('data.react', function(newValue, oldValue){
        React.render(
            React.createElement(MYLIST, {data: newValue}),
            element[0]
        );
    	});
		}
	};
});