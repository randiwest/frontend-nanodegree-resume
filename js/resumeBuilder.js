/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	'name': 'Jane Developer',
	'role': 'Jack of All Trades',
	'welcomeMessage': 'Marfa biodiesel hoodie blog pour-over, mumblecore food.',
	'biopic': 'http://static1.squarespace.com/static/551d64a8e4b0eeef9d4c5e6e/' +
	'551d87c7e4b088e1f80a36d5/55477e9de4b0ebc5baf7ab02/1430749054959/carla.png',
	'contacts': {
		'mobile': '778-778-7788',
		'email': 'jane@example.com',
		'github': 'janedeveloper',
		'twitter': '@JaneDeveloper',
		'location': 'Vancouver'
	},
	'skills': ['Efficient','Resourceful','Intelligent','Organized','Clever'],
	'display': function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcomeMessage = 
		HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);

		$('#header').prepend(formattedRole).prepend(formattedName)
			.append(formattedBioPic)
			.append(formattedWelcomeMessage);

		$('#topContacts').append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGithub)
			.append(formattedTwitter);

		$('#footerContacts').append(formattedMobile)
			.append(formattedEmail)
			.append(formattedGithub)
			.append(formattedTwitter);

		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (var skill in bio.skills) {
				var formattedSkill = 
				HTMLskills.replace('%data%', bio.skills[skill]);
				$('#skills').append(formattedSkill);
			}
		}
	}
};


var work = {
	'jobs':[
				{
			'employer': 'Pied Piper',
			'title': 'Platform Developer',
			'location': 'Palo Alto, California',
			'dates': 'April 2014 - Present',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.'
		},
		{
			'employer': 'Pearson Specter Litt',
			'title': 'Lawyer',
			'location': 'New York City, New York',
			'dates': 'June 2011  - March 2014',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.'
		},
		{
			'employer': 'Cardiff Electric',
			'title': 'Software Developer',
			'location': 'Dallas, Texas',
			'dates': 'June 1983 - January 1984',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.'
		}
	],
	'display': function() {
		for (var job in work.jobs) {
			var formattedEmployer = 
			HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = 
			HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedEmployerLocation = 
			HTMLworkLocation.replace('%data%',work.jobs[job].location);
			var formattedEmployerDates = 
			HTMLworkDates.replace('%data%',work.jobs[job].dates);
			var formattedEmployeeDescription = 
			HTMLworkDescription.replace('%data%',work.jobs[job].description);

			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(formattedEmployerTitle)
				.append(formattedEmployerLocation)
				.append(formattedEmployerDates)
				.append(formattedEmployeeDescription);

		}
	}
};

var projects = {
	'project': [
		{
			'title': 'Middle-Out Compression Algorithm',
			'dates': '2014 - 2015',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.',
			'images': ['https://upload.wikimedia.org/wikipedia/en/thumb/3/33/'+
			'Silicon_valley_title.png/250px-Silicon_valley_title.png']
		},
		{
			'title': 'Hiding Fraud',
			'dates': '2011 - 2014',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.',
			'images': ['https://upload.wikimedia.org/wikipedia/en/9/9a/' +
			'Suits_intertitle.png']
		},
		{
			'title': 'The Giant',
			'dates': '1983 - 1984',
			'description': 'Marfa biodiesel hoodie blog pour-over, mumblecore' +
			'sriracha. Fixie forage biodiesel food truck, polaroid XOXO ' +
			'sriracha freegan VHS try-hard fanny pack. Photo booth Wes ' +
			'Anderson taxidermy gastropub messenger bag, authentic whatever ' +
			'ugh Brooklyn keffiyeh hoodie meh meggings retro jean shorts. ' +
			'Disrupt synth selfies typewriter Marfa next level. Fap seitan ' +
			'fingerstache flexitarian master cleanse. XOXO synth occupy VHS ' +
			'farm-to-table Echo Park. Artisan ugh readymade next level.',
			'images': ['http://www.open-apple.net/wp-content/uploads/2014/09/' +
			'IMG_3652.jpg']
		}
	],
	'display': function() {
		for (var project in projects.project) {
			var formattedProjectTitle = 
			HTMLprojectTitle.replace('%data%',projects.project[project].title);
			var formattedProjectDates = 
			HTMLprojectDates.replace('%data%',projects.project[project].dates);
			var formattedProjectDescription = 
			HTMLprojectDescription.replace('%data%',projects.project[project].description);

			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(formattedProjectTitle)
				.append(formattedProjectDates)
				.append(formattedProjectDescription);

			if (projects.project[project].images.length > 0) {
				for (var image in projects.project[project].images) {
					var formattedImage = 
					HTMLprojectImage.replace('%data%',projects.project[project].images[image]);
					$('.project-entry:last').append(formattedImage);
				}
			}
		}
	}
};

var education = {
	'school': [
		{
			'name': 'Stanford',
			'location': 'Stanford, California',
			'degree': 'Masters',
			'majors': ['Computer Science'],
			'dates': '2013',
			'url': 'http://www.stanford.edu/'
		},
		{
			'name': 'Harvard',
			'location': 'Cambridge, Massachusetts',
			'degree': 'Fake Degree',
			'majors': ['Law'],
			'dates': '2011',
			'url': 'https://www.harvard.edu/'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Developer',
			'school': 'Udacity',
			'dates': 'Summer 2015',
			'url': 'https://www.udacity.com/',
		}
	],
	'display': function() {
		for (var school in education.school) {
			var formattedSchoolName = 
			HTMLschoolName.replace('%data%',education.school[school].name);
			var formattedSchoolDegree = 
			HTMLschoolDegree.replace('%data%',education.school[school].degree);
			var formattedSchoolDates = 
			HTMLschoolDates.replace('%data%',education.school[school].dates);
			var formattedSchoolLocation = 
			HTMLschoolLocation.replace('%data%',education.school[school].location);
			var formattedSchoolMajor = 
			HTMLschoolMajor.replace('%data%',education.school[school].majors);

			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(formattedSchoolName)
				.append(formattedSchoolDegree)
				.append(formattedSchoolDates)
				.append(formattedSchoolLocation)
				.append(formattedSchoolMajor);

		}
		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);
			for (var course in education.onlineCourses) {
				var formattedOnlineTitle = 
				HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title);
				var formattedOnlineSchool = 
				HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school);
				var formattedOnlineDates = 
				HTMLonlineDates.replace('%data%',education.onlineCourses[course].dates);
				var formattedOnlineURL = 
				HTMLonlineURL.replace('%data%',education.onlineCourses[course].url);

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedOnlineTitle)
					.append(formattedOnlineSchool)
					.append(formattedOnlineDates)
					.append(formattedOnlineURL);

			}
		}
	}
};

$('#main').append(internationalizeButton);

function inName(iname) {
	var array = iname.trim().split(' ');
	var firstName = array[0];
	var lastName = array[1];

	var finalName = firstName.slice(0,1).toUpperCase() + 
	firstName.slice(1).toLowerCase() + ' ' + lastName.toUpperCase();

	return finalName;
}

inName(bio.name);
bio.display();
work.display();
projects.display();
education.display();

//map section

$('#mapDiv').append(googleMap);