  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYxbNaRv0I_mVKKshJqtZw40_PXanVXlQ",
    authDomain: "employeetime-969c9.firebaseapp.com",
    databaseURL: "https://employeetime-969c9.firebaseio.com",
    storageBucket: "employeetime-969c9.appspot.com",
    messagingSenderId: "922747148509"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
var database = firebase.database();

var name startDate monthRate;

// When ever employee hits submit button
$("#submit").on("click", function(){
	// get employee input values
	name = $("#").val().trim();
	startDate = $("#").val().trim();
	monthRate =  parseInt($("#").val().trim());

	// console.log user values 
	
})