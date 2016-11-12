/*
var formattedName = HTMLheaderName.replace("%data%", "Aaron Smith");
var role = "Coding ninja";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awesomeness", "programming", "teaching", "JS"];
$("#main").append(skills.length);
$("#main").append(bio.favorite_team);
$("#main").append(bio.name, bio.skills, bio.role, bio.contact_info, bio.welcome_message, bio.picture_URL);
$("#main").append(bio.city);
$("#main").append(work["current_position"]);
$("#main").append(education.name);
bio["favorite_team"] = "Mariners";
// Bracket notation
var education = {};
education["name"] = "Southern Oregon University";
education["years_attended"] = "1995 - 1999";
education["city"] = "Ashland";
// Dot notation
var work = {};
work.current_position = "Accountant";
work.employer = "Vanport";
work.years_worked = "11";
work.city = "Boring";
// JSON
var edu = {
	"schools": [
		{
			"name" : "SOU",
			"city" : "Ashland",
			"degree" : "BS",
			"major" : "Accounting"
		},
		{
			"name" : "Udacity",
			"city" : "Gresham",
			"degree" : "Nano",
			"major" : ["front_end", "full_stack"]
		}
	]
}
*/
/*
var clickLocations = [];
function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  	logClicks(x,y);
});
$("#main").append(internationalizeButton);
function inName(name) {
	var full_name = name;
	var name_array = full_name.split(" ");
	name_array[1] = name_array[1].toUpperCase();
	full_name = name_array.join(" ");
	return full_name;
}
*/

//Encapsulation - hold inside
//Adds a display property to the projects object and sets
//the display property equal to a function.
//Encapsulation holds the display function inside the
//project object.
//Object Literal Notation
//Lines 1 -75 above were notes from taking the class.

// Biographical JSON object
var bio = {
	"name": "Aaron Smith",
	"skills": ["HTML", "CSS", "Python", "JS", "Ruby"],
	"role": "Web developer",
	"contacts": {
		"email": "aerosmith3430@gmail.com",
		"mobile": "503-516-xxxx",
		"github": "http://www.github.com/aerosmith3430",
		"location": "Gresham, OR"
	},
	"biopic" : "images/fry.jpg",
	"welcomeMessage" : "Taking classes to transition into web development."
};

// Work history JSON object
var work = {
	"jobs": [
		{
			"employer": "Vanport",
			"title": "Accountant",
			"location": "Boring, OR",
			"dates": "2005-present",
			"description": "Accountant for $100M wood products business with Canadian subsidiary and Japan as main market."
		},
		{
			"employer": "Morrison Center",
			"title": "GL Accountant",
			"location": "Portland, OR",
			"dates": "1999-2005",
			"description": "Accounting assistant for non-profit children’s services agency with offices and programs throughout the Portland metro area."
		}
	]
};

// Project history JSON object
var projects = {
	"projects": [
		{
			"title": "Movie website",
			"dates": "November 2016",
			"description": "Static website listing my favorite movies generated from a Python file.",
			"image": "images/movie_website.png"
		},
		{
			"title": "Quiz",
			"dates": "October 2016",
			"description": "A fill in the blank quiz to help learn Python terminology.",
			"image": "images/quiz.png"
		},
		{
			"title": "Travel blog",
			"dates": "October 2016",
			"description": "Travel blog demostrating knowledge of HTML and CSS.",
			"image": "images/travel_blog.png"
		}
	]
};

// Education history JSON object
var education = {
	"schools": [
		{
			"name": "Southern Oregon University",
			"degree": "Bachelor's of Science",
			"dates": "1995 - 1999",
			"location": "Ashland, OR",
			"major": "Accounting"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": "October 2016-present",
			"url": "http://www.udacity.com"
		},
		{
			"title": "Skillcrush Front-End Developer Blueprint",
			"school": "Skillcrush",
			"dates": "July 2016-present",
			"url": "http://www.skillcrush.com"
		},
		{
			"title": "Learn.co Ruby programs",
			"school": "Flatiron School",
			"dates": "July 2016",
			"url": "http://www.flatiron.com"
		}
	]
};

// Holding the display function within the bio object.  
// This function takes in the values defined in the bio object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id header.
// The contacts are appended to an unordered list within the header div.
// Lastly, the display function is called to display the information on the web page.
bio.display = function() {
	var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedBioRole);
	var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedBioName);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedMobileNum = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobileNum);
	$("#footerContacts").append(formattedMobileNum);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

// Holding the display function within the work object.  
// This function takes in the values defined in the work object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id workExperience.
// Lastly, the display function is called to display the information on the web page.
work.display = function() {
	for(var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var comboEmpTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(comboEmpTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

// Holding the display function within the projects object.  
// This function takes in the values defined in the projects object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id projects.
// Lastly, the display function is called to display the information on the web page.
projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedProjTitle);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedProjDates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjDescription);
		var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
		$(".project-entry:last").append(formattedProjImage);
	}
}

projects.display();

// Holding the display function within the education object.  
// This function takes in the values defined in the education object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id education.
// Lastly, the display function is called to display the information on the web page.
education.display = function() {
	for(var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

$("#education").append(HTMLonlineClasses);

	for(var i = 0; i < education.onlineCourses.length; i++) {		
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();

// This appends a Google Map to the id mapDiv
$("#mapDiv").append(googleMap);