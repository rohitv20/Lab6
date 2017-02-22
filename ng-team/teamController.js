  /* global alert, angular, Firebase */
  angular
    .module('ngTeam')
    .controller('teamController', function ($scope, $timeout) {

      'use strict';
      $scope.myData = new Firebase("https://cse110project-bbdf8.firebaseio.com/");
      $scope.teammate = {};
      $scope.teammatesData = {};
      $scope.myTeammateData = new Firebase("https://cse110project-bbdf8.firebaseio.com/teammates");
      $scope.myTeammateData.on('value', function (dataSnapshot)
                              {
                                $timeout(function () {
                                    $scope.teammatesData = dataSnapshot.val();
                                });
      });
      $scope.saveMember = function() {
        var teammateRef, entryKey;
        
        teammateRef = $scope.myData.child("teammates");
        
        entryKey = $scope.teammate.name;
        teammateRef.child(entryKey).set($scope.teammate);  
          
        alert('You have saved: ' + $scope.teammate.name);
          
        $scope.myData.push($scope.teammate);
          
        $scope.teammate.name = "";
        $scope.teammate.full_name = "";
        $scope.teammate.age = 0;
      };
    });
           