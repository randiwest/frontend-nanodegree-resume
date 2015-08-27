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
			"images": ["https://images.unsplash.com/photo-1438480478735-3234e63615bb?q=80&fm=jpg&s=8fddc1c4c240e145cf6b65a21ae92087"]
		},
		{
		"title": "Development Gantt Chart",
		"dates": "Spring/Summer 2015",
		"description": "Gantt chart from within Salesforce for Development",
		"images": ["https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&fm=jpg&s=f9871beffe0d05c626a91cb5dce35a81",
		"https://images.unsplash.com/photo-1438368915865-a852ef86fc42?q=80&fm=jpg&s=15e4744077e36852ba57f46f4660dc7a"]
		}
	]
}

var bio = {
	"name": "Randi West",
	"role": "Customer Information Manager",
	"welcomeMessage": "Hello!!",
	"contacts": {
		"mobile": "778-908-1270",
		"email": "randiwest@digitalshift.ca",
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

var formattedName = HTMLheaderName.replace("%data%", "Randi West");
$("#header").append(formattedName)

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = 
		HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
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