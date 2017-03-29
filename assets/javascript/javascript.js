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


// initialize variables 
var name = ""; 
var startDate; 
var monthRate; 
var role;
var totalBilled;
var monthsWorked;

// When ever employee hits submit button
$("#search-button").on("click", function(event){
	
	// get employee input values
	name = $("#name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	monthRate =  parseInt($("#monthly-rate").val().trim());

	// console.log user values 
	console.log(name + " " + startDate + " " + monthRate);

	// adding user input to database
	database.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthRate: monthRate
	});

	database.ref().on("value", function(snapshot){
		$("#name").html(snapshot.val().name);
		$("#role").html(snapshot.val().role);
		$("#start-date").html(snapshot.val().startDate);
		$("#monthly-rate").html(snapshot.val().monthRate);
	},
	function(errorObject){
		console.log("errors handled:" + errorObject.code);
	});
})

