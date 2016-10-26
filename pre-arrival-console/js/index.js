
	$(document).ready(function(){

		var firstName;
		var lastName;
		var accommodations;
		var overallExperience;
		var explainExperienceText;
		var arrivalQuestionYesNo;
		var arrivalExperience;
		var arrivalExperienceText;
		var commentArrivalExperienceText;
		var checkInExperience;
		var checkInExperienceText;
		var accommodationsExperience;
		var accommodationsExperienceText;
		var serviceExperience;
		var serviceExperienceText;
		var otherExperienceText = "something";
		var golf;
		var food;
		var beach;
		var spa;
		var fishing;
		var kayaking;
		var tennis;
		var fitness;
		var choosePathRemaining;

//ACTIVITIES ARRAY
var activitiesList = [];



//ACTIVITIES MULTISELECT
	 $("#favoriteActivities input").click(function(){
	 	 $(this).toggleClass("selected");
});


$('#golf').click(function() {
	 golf = firstName + " " + lastName + " would like to book a tee time."
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#teeTime").fadeIn("slow");
	 	 });
	 	 console.log(firstName, lastName);
	 	 returnTop();
	 });

$('#favoriteActivities button').click(function() {
	if ($("#golf").hasClass("selected")){
		golf = $("#golf").val();
		activitiesList.push(golf);
	}
	if ($("#food").hasClass("selected")){
		food = $("#food").val();
		activitiesList.push(food);
	}
	if ($("#beach").hasClass("selected")){
		beach = $("#beach").val();
		activitiesList.push(beach);
	}
	if ($("#spa").hasClass("selected")){
		spa = $("#spa").val();
		activitiesList.push(spa);
	}
	if ($("#fishing").hasClass("selected")){
		fishing = $("#fishing").val();
		activitiesList.push(fishing);
	}
	if ($("#tennis").hasClass("selected")){
		tennis = $("#tennis").val();
		activitiesList.push(tennis);
	}
	if ($("#kayaking").hasClass("selected")){
		kayaking = $("#kayaking").val();
		activitiesList.push(kayaking);
	}
	if ($("#fitness").hasClass("selected")){
		fitness = $("#fitness").val();
		activitiesList.push(fitness);
	};
		 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
		 console.log(activitiesList);
	 	 returnTop();
	 });


// Get Name

$('#provideName button').click(function() {
	 	 firstName = $("#firstName").val();
	 	 lastName = $("#lastName").val();
	 	 $("#provideName").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	 });
	 	 console.log(firstName, lastName);
	 	 returnTop();
	 });


$("#lastName").keyup(function(event){
    if(event.keyCode == 13){
        $("#nameButton").click();
    }
});


//1A OVERALL EXPERIENCE
	 $('#teeTime button').click(function() {
	 	 overallExperience = $(this).val();
	 	 console.log(overallExperience);
	 	 $("#teeTime").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();


     });


//N Path Selector
	 $('#choosePath input').click(function() {
	 	 pathSelect = $(this).val();
	 	 if (pathSelect === "Golf") {
	 	 	$(".rateStay").prop("disabled", true);
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateGolf").fadeIn("slow");
	 	 	$(".rateStay").prop("disabled", false);

	 	 	});
	 	}
	 	 if (pathSelect === "Check-In") {
	 	 		 	$(".rateStay").prop("disabled", true);
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateCheckIn").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 	});
	 	}
	 	 if (pathSelect === "Accommodation") {
	 	 		 	$(".rateStay").prop("disabled", true);
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateAccommodations").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 	});
	 	}
	 	 if (pathSelect === "Service") {
	 	 		 	$(".rateStay").prop("disabled", true);
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateService").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 	});
	 	}
 		if (pathSelect === "Continue") {
 				 	$(".rateStay").prop("disabled", true);
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#explainOtherContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 	});
	 	}
	 	console.log(pathSelect);
	 	returnTop();
     });


//2B RATE GOLF EXPERIENCE
	 $('#rateGolf input').click(function() {
	 	 arrivalExperience = $(this).val();
	 	 console.log(arrivalExperience);
	 	 if (arrivalExperience <= 3) {
	 	 $("#rateGolf").fadeOut("slow", function(){
	 	 $("#explainGolfContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateGolf").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#golf-button").addClass("disabled");
     returnTop();
     });
//2C EXPLAIN GOLF EXPERIENCE

	 	 $('#explainGolfContainer button').click(function() {
	 	 arrivalExperienceText = $("#explainGolfContainer textarea").val();
	 	 console.log(arrivalExperienceText);
	 	 $("#explainGolfContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 $("#golf-button").addClass("disabled");
	 	 returnTop();
	 });


//3A CHECKIN EXPERIENCE
	 $('#rateCheckIn input').click(function() {
	 	 checkInExperience = $(this).val();
	 	 console.log(checkInExperience);
	 	 if (checkInExperience <= 3) {
	 	 $("#rateCheckIn").fadeOut("slow", function(){
	 	 $("#explainCheckInContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateCheckIn").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#check-in-button").addClass("disabled");
     returnTop();
     });

//3B

	 	 $('#explainCheckInContainer button').click(function() {
	 	 checkInExperienceText = $("#explainCheckInContainer textarea").val();
	 	 console.log(checkInExperienceText);
	 	 $("#explainCheckInContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//4A ACOMMODATIONS EXPERIENCE
	 $('#rateAccommodations input').click(function() {
	 	 accommodationsExperience = $(this).val();
	 	 console.log(accommodationsExperience);
	 	 if (accommodationsExperience <= 3) {
	 	 $("#rateAccommodations").fadeOut("slow", function(){
	 	 $("#explainAccommodationsContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateAccommodations").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#accommodation-button").addClass("disabled");
     returnTop();
     });

//4B ACCOMMODATIONS EXPLAIN

	 	 $('#explainAccommodationsContainer button').click(function() {
	 	 accommodationsExperienceText = $("#explainAccommodationsContainer textarea").val();
	 	 console.log(accommodationsExperienceText);
	 	 $("#explainAccommodationsContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//5A SERVICE EXPERIENCE
	 $('#rateService input').click(function() {
	 	 serviceExperience = $(this).val();
	 	 console.log(serviceExperience);
	 	 if (serviceExperience <= 3) {
	 	 $("#rateService").fadeOut("slow", function(){
	 	 $("#explainServiceContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateService").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#service-button").addClass("disabled");
     returnTop();
     });

//5B SERVICE EXPLAIN

	 	 $('#explainServiceContainer button').click(function() {
	 	 serviceExperienceText = $("#explainServiceContainer textarea").val();
	 	 console.log(serviceExperienceText);
	 	 $("#explainServiceContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//6 OTHER
		 $('#explainOtherContainer button').click(function() {
	 	 otherExperienceText = $("#explainOtherContainer textarea").val();
	 	 console.log(otherExperienceText);
	 	 $("#explainOtherContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 $("#other-button").addClass("disabled");
	 	 returnTop();
	 	});




		var totalAnswered;
		var newValue;
		var totalValue;

//submit survey function
	 	$('#complete-button').click(function() {
	 		//submit all values to Google
	 	otherExperienceText = $("#explainOtherContainer textarea").val();
	 	 console.log(otherExperienceText);
	 		postContactToGoogle();
	 		$("#sd-logo").fadeOut(1500);
	 		 $('#bgimage').fadeIn(2000);



			//create array that contains all variables with number;

	 		var totalValue = [overallExperience, arrivalExperience, checkInExperience, accommodationsExperience,
			serviceExperience];
			//eliminate undefined variables from function by
			//cycling through totalValue and pushing only variables
			//with value to newArray.  Then parse the variables values
			//so they are numeric, not string, values.
			var newArray = new Array();
	 		for (i = 0; i < totalValue.length; i++){
	 		if (totalValue[i]){
        	newArray.push(parseInt(totalValue[i]));
    };
  };

//now that the variables have numerical values
//cycle through each and add values to together.
//newValue now equals sum of all values.

console.log(newArray);
newValue = 0;
$.each(newArray,function() {
    newValue += this;
	console.log(newValue);
});

//Establish overall score by dividing the sum of all numeric values
//by the total number of values in newArray

	finalValue = newValue / newArray.length;
	console.log(finalValue);

//define ranking of average value and provide approriate messaging

if (finalValue < 2.3){
		console.log("they had a bad experience");
		 $("#explainOtherContainer").fadeOut(1000, function(){
	 	 setTimeout(badExperience, 2000);
	 	 });
	 	 returnTop();
}
else if (finalValue >= 2.3 && finalValue <= 3.2){
	console.log("they had an ok experience");
		$("#explainOtherContainer").fadeOut(1000, function(){
	 	 setTimeout(okExperience, 2000);
	 	 });
	 	 returnTop();

}

else {
	console.log("they had a great experience");
	$("#explainOtherContainer").fadeOut(1000, function(){
	setTimeout(greatExperience, 2000);
	});
	returnTop();
}
	 	});

	 	 });


	  function postContactToGoogle() {
          $.ajax({
              url: "https://docs.google.com/forms/d/1LhYEyMKY2nRqJNqwr0vDwnIJjrayOe69MOs-TttwFPE/formResponse",
              data: {
              "entry.428533182": overallExperience,
              "entry.1447387079": explainExperienceText,
              "entry.660795754": arrivalExperience,
              "entry.1659805839": golf,
              "entry.1043167667": food,
              "entry.1443328567": beach,
              "entry.2132321252": spa,
              "entry.1041476142": fishing,
              "entry.387432865": tennis,
              "entry.1969578007": fitness,
              "entry.1484677548": kayaking,
              "entry.1973419171": arrivalQuestionYesNo,
              "entry.1952859007":arrivalExperience,
              "entry.2066698541":arrivalExperienceText,
              "entry.332010930":checkInExperience,
              "entry.1865974282":checkInExperienceText,
              "entry.175538394":accommodationsExperience,
              "entry.1199835736":accommodationsExperienceText,
              "entry.698190917":serviceExperience,
              "entry.443065806":serviceExperienceText,
              "entry.1564517891":otherExperienceText,
              "entry.562344336":lastName,
              "entry.38889136":firstName

          		},
              type: "POST",
              dataType: "xml",
          });
    }

//functions for each experience

var badExperience = function(){
	$("#badTimeText").fadeIn(2000);
};

var okExperience = function(){
	$("#okTimeText").fadeIn(2000);
};


var greatExperience = function(){
	$("#greatTimeText").fadeIn(2000);
};


//scroll back to top on submit
var returnTop =  function(){
    $("body").animate({
        scrollTop: $("body").offset().top
    }, 800);
    };
});

