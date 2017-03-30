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
	//var totalBilled;
	var monthsWorked;
	var newMonth;

// When ever employee hits submit button
	$("#search-button").on("click", function(event){
	
	event.preventDefault();
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
	console.log(snapshot.val());
	// $("#name").html(snapshot.val().name);
	// $("#role").html(snapshot.val().role);
	// $("#start-date").html(snapshot.val().startDate);
	// $("#monthly-rate").html(snapshot.val().monthRate);

	calcMonths(snapshot.val().startDate);

	var totalBilled = newMonth * snapshot.val().monthRate;
	console.log(totalBilled);

	//calcBill(snapshot.val().monthRate, snapshot.val().newMonth);
	 //adding user input to the table
	  var tRow = $("<tr>");
		tRow.append("<td>"+ snapshot.val().name + "</td>");
		tRow.append("<td>"+ snapshot.val().role + "</td>");
		tRow.append("<td>"+ snapshot.val().startDate + "</td>");
		tRow.append("<td>"+ newMonth +"</td>");
		tRow.append("<td>"+ snapshot.val().monthRate + "</td>");
		tRow.append("<td>"+ totalBilled +"</td>");
		$("#employee-table").append(tRow);
		console.log(name);


		
	},
	function(errorObject){
		console.log("errors handled:" + errorObject.code);
});

function calcMonths(sd){

	//take sd and format it in unix time THENNNNN do diff opp  THHEENNNN to months
	 var unixStart = moment(sd).format('X');

	 console.log(unixStart);


	var convertStart = moment(new Date(sd));
	console.log(convertStart + "CONVERT START");
	console.log(moment().diff(moment(convertStart), "months"));
    newMonth = moment().diff(moment(convertStart), "months");
	// monthsWorked = moment(startDate , "month").fromNow()
};




}); //end of document ready





// moment().format("DD/MM/YY hh:mm A")
//database.ref().orderByChild("dateAdded")



