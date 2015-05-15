var app = angular.module('reddit');

app.service('FireBaseService', function($http, $q){
	this.getPosts = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://devmtn.firebaseio.com/posts.json'
		}).then(function(result){
			deferred.resolve(result.data)
		})
		return deferred.promise
	}
})
