var app = angular.module('reddit');
// debugger;
app.controller('PostsController', function($scope, FireBaseService){
	$scope.getPosts = function(){
	FireBaseService.getPosts(function(posts){
		debugger;
		$scope.posts = posts;
		return posts;
	})
	FireBaseService.getPosts();
}
})


  // $scope.getSongData = function(){
  // itunesService.getSongData($scope.artist).then(function(songs){
  //   console.log(songs);
  //   var formattedSongs = songs.map(changeFormat);
  //   $scope.songData = formattedSongs
  // })
