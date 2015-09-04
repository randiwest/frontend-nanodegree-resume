/*
This is empty on purpose! Your code to build the resume will go here.
 */


var work = {
	"jobs": [
		{
			"employer": "Polygon Homes",
			"title": "Customer Information Manager",
			"location": "Vancouver",
			"dates": "March 2012 - Present",
			"description": "Manage Salesforce"
		},
		{
			"employer": "Polygon Homes",
			"title": "Sales Administrator",
			"location": "Vancouver",
			"dates": "June 2008 - March 2012",
			"description": "Manage Sales Administration"
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Pricing Maps",
			"dates": "In progress",
			"description": "Electronic pricing maps to improve sales pricing experiences",
			"images": ["images/subway-small.jpg"]
		},
		{
			"title": "Development Gantt Chart",
			"dates": "Spring/Summer 2015",
			"description": "Gantt chart from within Salesforce for Development",
			"images": ["images/notebook-small.jpg",
			"images/table-small.jpg"]
		}
	]
}

var bio = {
	"name": "Randi West",
	"role": "Customer Information Manager/Salesforce System Administrator",
	"welcomeMessage": "Hello!!",
	"image": "https://media.licdn.com/media/p/7/005/0b5/02b/18b7e62.jpg",
	"contacts": {
		"mobile": "778-778-7788",
		"email": "randiwest@example.com",
		"github": "randiwest",
		"twitter": "@WestRandi",
		"location": "Vancouver"
	},
	"skills": ["Efficient","Resourceful","Intelligent","Organized"]
}

var education = {
	"school": [
		{
			"name": "UBC",
			"location": "Vancouver",
			"degree": "Diploma",
			"majors": ["Urban Land Economics"],
			"dates": "2009-2012",
			"url": "https://www.ubc.ca/"
		},
		{
			"name": "Pacific Institute of Culinary Arts",
			"location": "Vancouver",
			"degree": "Diploma",
			"majors": ["Culinary Arts"],
			"dates": "2005",
			"url": "https://www.picachef.com/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Developer",
			"school": "Udacity",
			"dates": "Summer 2015",
			"url": "https://www.udacity.com/"
		}
	]
}

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioImage = HTMLbioPic.replace("%data%", bio.image);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName)
		.append(formattedBioImage)
		.append(formattedWelcomeMessage);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

	$("#topContacts").append(formattedMobile)
		.append(formattedEmail)
		.append(formattedGithub)
		.append(formattedTwitter);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	
		

	
}

displayBio();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = 
		HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = 
		HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedEmployerLocation = 
		HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedEmployerLocation);

		var formattedEmployerDates = 
		HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedEmployerDates);

		var formattedEmployeeDescription = 
		HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployeeDescription);
	};
}

displayWork();

$("#main").append(internationalizeButton);

function inName(iname) {
	var array = iname.trim().split(" ");
	var firstName = array[0];
	var lastName = array[1];

	var finalName = firstName.slice(0,1).toUpperCase() + 
	firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();

	return finalName;
}

inName(bio.name);

function displayProjects() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectStart = 
		HTMLprojectTitle.replace("%data%",projects.project[project].title);
		$(".project-entry:last").append(formattedProjectStart);

		var formattedProjectDates = 
		HTMLprojectDates.replace("%data%",projects.project[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = 
		HTMLprojectDescription.replace("%data%",projects.project[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.project[project].images.length > 0) {
			for (image in projects.project[project].images) {
				var formattedImage = 
				HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
				$(".project-entry:last").append(formattedImage);			
			}	
		}
	}
}

displayProjects();

//map section

$("#mapDiv").append(googleMap);