// Biographical JSON object
var bio = {
	'name': 'Aaron Smith',
	'skills': ['HTML', 'CSS', 'Python', 'JS', 'Ruby'],
	'role': 'Web developer',
	'contacts': {
		'email': 'aerosmith3430@gmail.com',
		'mobile': '503-516-xxxx',
		'github': 'http://www.github.com/aerosmith3430',
		'location': 'Gresham, OR'
	},
	'biopic' : 'images/fry.jpg',
	'welcomeMessage' : 'Taking classes to transition into web development.'
};

// Work history JSON object
var work = {
	'jobs': [
		{
			'employer': 'Vanport',
			'url': 'http://www.vanport-international.com/en/',
			'title': 'Accountant',
			'location': 'Boring, OR',
			'dates': '2005-present',
			'description': 'Accountant for $100M wood products business with Canadian subsidiary and Japan as main market.'
		},
		{
			'employer': 'Morrison Center',
			'url': 'https://www.morrisonkids.org/',
			'title': 'GL Accountant',
			'location': 'Portland, OR',
			'dates': '1999-2005',
			'description': 'Accounting assistant for non-profit children’s services agency with offices and programs throughout the Portland metro area.'
		}
	]
};

// Project history JSON object
var projects = {
	'projects': [
		{
			'title': 'Movie website',
			'dates': 'November 2016',
			'description': 'Static website listing my favorite movies generated from a Python file.',
			'images': ['images/movie_website.png']
		},
		{
			'title': 'Quiz',
			'dates': 'October 2016',
			'description': 'A fill in the blank quiz to help learn Python terminology.',
			'images': ['images/quiz.png']
		},
		{
			'title': 'Travel blog',
			'dates': 'October 2016',
			'description': 'Travel blog demostrating knowledge of HTML and CSS.',
			'images': ['images/travel_blog.png']
		}
	]
};

// Education history JSON object
var education = {
	'schools': [
		{
			'name': 'Southern Oregon University',
			'degree': 'Bachelor of Science',
			'dates': '1995 - 1999',
			'location': 'Ashland, OR',
			'major': 'Accounting',
			'url': 'http://www.sou.edu'
		}
	],
	'onlineCourses': [
		{
			'title': 'Intro to Programming Nanodegree',
			'school': 'Udacity',
			'dates': 'October 2016-present',
			'url': 'http://www.udacity.com'
		},
		{
			'title': 'Skillcrush Front-End Developer Blueprint',
			'school': 'Skillcrush',
			'dates': 'July 2016-present',
			'url': 'http://www.skillcrush.com'
		},
		{
			'title': 'Learn.co Ruby programs',
			'school': 'Flatiron School',
			'dates': 'July 2016',
			'url': 'http://www.flatiron.com'
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
	var formattedBioRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioName = HTMLheaderName.replace('%data%', bio.name);	
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedMobileNum = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').prepend(formattedBioName, formattedBioRole);
	$('#header').append(formattedBioPic, formattedWelcomeMessage);
	$('#topContacts').append(formattedLocation, formattedMobileNum, formattedEmail, formattedGithub);
	$('#footerContacts').append(formattedLocation, formattedMobileNum, formattedEmail, formattedGithub);
	
	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
};

// Holding the display function within the work object.  
// This function takes in the values defined in the work object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id workExperience.
// Lastly, the display function is called to display the information on the web page.
work.display = function() {
	for(var i = 0; i < work.jobs.length; i++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace('#', work.jobs[i].url);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var comboEmpTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$('.work-entry:last').append(comboEmpTitle, formattedDates, formattedLocation, formattedDescription);
	}
};

// Holding the display function within the projects object.  
// This function takes in the values defined in the projects object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id projects.
// Lastly, the display function is called to display the information on the web page.
projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		var formattedProjImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
		$('.project-entry:last').append(formattedProjTitle, formattedProjDates, formattedProjDescription, formattedProjImage);
	}
};

// Holding the display function within the education object.  
// This function takes in the values defined in the education object, replaces the placeholder 
// data in the helper.js file and saves it to a variable.
// The variables are then appended to the div with the id education.
// Lastly, the display function is called to display the information on the web page.
education.display = function() {
	for(var i = 0; i < education.schools.length; i++) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
		$('.education-entry:last').append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
	}

	$('#education').append(HTMLonlineClasses);

	for(i = 0; i < education.onlineCourses.length; i++) {		
		$('#education').append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', education.onlineCourses[i].url);
		$('.education-entry:last').append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
	}
};

bio.display();
work.display();
projects.display();
education.display();

// This appends a Google Map to the id mapDiv
$('#mapDiv').append(googleMap);