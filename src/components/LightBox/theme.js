// ==============================
// THEME
// ==============================

const theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10,
	},
	zIndex: 2001,
/*}	height: '100%',
    width: '100%',
	position: 'fixed',
*/	
};

// header
theme.header = {
	height: 40,
};
theme.close = {
	fill: 'white',
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em',
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5,
	},
};

// SideBar by sanjeevan
theme.sidebar = {
	color: 'white',
background: 'white',
	height: 40,
	gutter: {
		horizontal: 50,
		vertical: 50,
	},
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2,
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120,
};


export default theme;
