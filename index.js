if (window.CSS && CSS.registerProperty) {
	CSS.registerProperty({
		name: '--color-one',
		syntax: '<color>',
		initialValue: 'red',
		inherits: false
	});

	CSS.registerProperty({
		name: '--color-two',
		syntax: '<color>',
		initialValue: 'green',
		inherits: false
	})
}