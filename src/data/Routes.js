const navbarRoutes = {
	home: "/",
	experience: "/experience",
	skills: "/skills",
	portfolio: "/portfolio",
	blog: "/blog",
	contact: "/contact",
};

export const routes = {
	home: {
		path: navbarRoutes.home,
	},
	experience: {
		path: navbarRoutes.experience,
	},
	skills: {
		path: navbarRoutes.skills,
	},
	portfolio: {
		path: navbarRoutes.portfolio,
		troyZada: {
			path: navbarRoutes.portfolio + "/troy-zada",
		},
		moodivity: {
			path: navbarRoutes.portfolio + "/moodivity",
		},
		sudokuSolver: {
			path: navbarRoutes.portfolio + "/sudoku-solver",
		},
		blackJack: {
			path: navbarRoutes.portfolio + "/blackjack",
		},
		pathfinding: {
			path: navbarRoutes.portfolio + "/pathfinding",
		},
		dss: {
			path: navbarRoutes.portfolio + "/decision-support-system",
		},
		literatureFair: {
			path: navbarRoutes.portfolio + "/literature-fair",
		},
		industry4: {
			path: navbarRoutes.portfolio + "/industry4",
		},
	},
	blog: {
		path: navbarRoutes.blog,
		creatingThisWebsite: {
			path: navbarRoutes.blog + "/creating-this-website",
		},
		firstWorkTerm: {
			path: navbarRoutes.blog + "/first-work-term",
		},
	},
	contact: {
		path: navbarRoutes.contact,
	},
};
