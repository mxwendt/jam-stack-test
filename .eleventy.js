module.exports = function (config) {

	// define a shortcode for a contact form
	config.addShortcode('contact', (label, placeholder, buttonLabel) => {
		return `
			<form action="/kontakt/contact-thanks.html">
				<label for="phone">${label}</label>
				<input type="text" id="phone" placeholder="${placeholder}">
				<button>${buttonLabel}</button>
			</form>
		`;
	});

	// define a shortcode for an responsive image tag
	config.addShortcode('responsiveImage', (src) => {
		return `
			<img src="${src}" srcset="${src} 1x, ${src}@2x 2x">
		`;
	});

	config.addPassthroughCopy("admin");
	config.addPassthroughCopy("static/uploads");

	// return the 11ty configuration
	return {
		dir: {
			input: 'src',
				includes: '_includes',
				data: '_data',
				output: 'www'
		},
		pathPrefix: '/',
		passthroughFileCopy: true,
		templateFormats: [
			'md',
			'njk',
			'css'
		]
	};
};