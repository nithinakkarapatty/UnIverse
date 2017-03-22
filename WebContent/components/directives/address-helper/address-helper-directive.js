(function() {
    'use strict';

    angular
        .module('ui')
        .directive('addressHelper', addressHelper);

    function addressHelper() { 
    	return {
    		restrict: 'E',
    		template: '<b>name is {{text}}</b> </br>'+
    		'Testing the @ attribute : <input type="text" ng-model="text"></input></br> <hr>'+
    		'Testing the = attribute :<input type="text" ng-model="twoway"></input>',
    		controller: addressHelperBindController,
    		controllerAs: 'vm',
    		scope:{
    			text:'@',
    			twoway: '='
    		}    	   		
    	}
    }
    
    function addressHelperBindController($scope){
    	var vm = this;    	    	
    }
    
    angular
    .module('ui')
    .controller('addressHelperParentController', addressHelperParentController);
    
    function addressHelperParentController($scope){
    	var ahpc = this;
    	ahpc.inputText = "UnIverse is bright";
    }
    
})();
