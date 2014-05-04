'use strict';

app.factory('Project', function($firebase, FIREBASE_URL) {
		
		var ref = new Firebase(FIREBASE_URL + 'projects');

		var projects = $firebase(ref);

		var Project = {
			all: projects,
			create: function (project) {
				return projects.$add(project);
			},
			find: function (projectId) {
				return projects.$child(projectId);
			},
			delete: function (projectId) {
				return projects.$remove(projectId);
			},
			template: {
				title: '',
				description: '',
				focusAreas: '',
				benefits: '',
				status: ['Proposed', 'On Hold', 'Active', 'Finished', 'Canceled'],
				leader: '',
				owner: '',
				tasks: [],
				milestones: [],
				duedate: ''
			}
		};

		return Project;
	}
);