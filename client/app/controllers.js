"use strict";

var app = angular.module("myApp", []);



app.controller("videoCtrl",function($scope,$http){


//Funtion for auth user based on scope username
  $scope.authUser= function(){
     //call function for encrypt data 
    $scope.user.password=md5($scope.user.password);
     $http.post("/user/auth",$scope.user).then(function(response){
        console.log(response);
        $scope.response=response.data;
        $scope.sessionId=response.data.sessionId;
        //Initialize again the variable for clear data in the index
        $scope.user.username="";
        $scope.user.password="";

            //based on sessionId call the function for get videos
     $http.get("/videos?sessionId="+$scope.response.sessionId).then(function(res){
          	$scope.videos=res.data;
              //loop for videos data object
             
          	angular.forEach(res.data, function(object) {
            //loop for videos data as name, descript url and ratings
          
        		     angular.forEach(object, function(video) {
                  //loop for ratings object
        				     angular.forEach(video, function(rating) {
         
        				     var sum=0;
            				 for(var i=0; i < rating.length;i++){
             				 sum = sum + rating[i];
                    }
                    
            				  	
        					   var average = sum/rating.length;
                      
                    
                     $scope.average=average;
                     average=Math.round(average);
                     switch(average){
                      case 1:
                        $scope.width=20;
                        break;
                        case 2:
                        $scope.width=40;
                        break;
                        case 3:
                        $scope.width=60;
                        break;
                        case 4:
                        $scope.width=80;
                        break;
                        case 5:
                        $scope.width=100;
                        break;
                        default:
                        $scope.width=0

                     }
        				  });

        		  });
          });
      });
  		
  });

  };


  //logout function
  $scope.logout = function(){
      
      $http.get("/user/logout?sessionId="+$scope.response.sessionId).then(function(res){
        $scope.msn=res.data;
        $scope.videos="";
        $scope.response.sessionId="";
        $scope.singleVideo="";
      });
  };
  //get one video
  $scope.getOne = function(id){
        $http.get("/video?sessionId="+$scope.response.sessionId + "&videoId="+id).then(function(res){
            
            $scope.singleVideo=res.data;
        });
  };
  
  $scope.backVideo= function(){
    $scope.singleVideo="";
  };

  $scope.rateVideo = function(videoId,rating){
    var inRating={"videoId":videoId,"rating":rating};
    $http.post("/video/ratings?sessionId="+$scope.response.sessionId,inRating).then(function(res){
        
    });
  }
});
