

//Panem
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});



//Mockingjays
$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});



//Muttations
$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});


//Avoxes
$(document).ready(function(){
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});





//Kommentarer
var config = {
    apiKey: "AIzaSyBA0Oaq2YDSU8FNBUG9wyz4LpoAOTuoWgk",
    authDomain: "kommentarer-cda00.firebaseapp.com",
    databaseURL: "https://kommentarer-cda00.firebaseio.com",
    projectId: "kommentarer-cda00",
    storageBucket: "",
    messagingSenderId: "32840765749"
  };
  firebase.initializeApp(config);




var app = angular.module("app", ["firebase"]);


app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer){
	$scope.kommentarer = kommentarer;


	$scope.kommentar = {
		text: "",
		skribent: ""

	}

	$scope.addComment = function(){
		$scope.kommentarer.$add($scope.kommentar);

		$scope.kommentar = {
			text: "",
			skribent: ""
		}

	}
});


