$(document).ready(function () {  

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

	// When ever employee hits submit button
	
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
		monthRate: monthRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

		// 	database.ref().orderByChild("dateAdded").on("child_added", function(snapshot){
		// $("#employee-table").empty();
			
}); //end search button

database.ref().on("child_added", function(snapshot){
	$("#name").html(snapshot.val().name);
	$("#role").html(snapshot.val().role);
	$("#start-date").html(snapshot.val().startDate);
	$("#monthly-rate").html(snapshot.val().monthRate);

	 //adding user input to the table
    var tRow = $("<tr>");
		tRow.append("<td>"+ name+ "</td>");
		tRow.append("<td>"+ role + "</td>");
		tRow.append("<td>"+ startDate + "</td>");
		tRow.append("<td>"+ monthsWorked +"</td>");
		tRow.append("<td>"+ monthRate + "</td>");
		tRow.append("<td>"+ totalBilled +"</td>");
		$("#employee-table").append(tRow);
		console.log(name);

	},
	function(errorObject){
		console.log("errors handled:" + errorObject.code);
});


}); //end of document ready





// moment().format("DD/MM/YY hh:mm A")
//database.ref().orderByChild("dateAdded")



