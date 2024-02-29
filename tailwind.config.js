/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			screens:{
				lg: "1124px",
				xl: "1124px",
				"2xl": "1124px",
			}
		},
		extend: {
			fontFamily: {
				gemunu: ["Gemunu Libre", "sans-serif"],
				"open-sans": ["Open Sans", "sans-serif"],
			},
			colors: {
				"movie-red": "#BC1A45",
				"movie-melon": "#FFD369",
				"movie-grey": "#DDDDDD",
				"movie-white": "#F7F7F7",
			},
		},
	},
	plugins: [],
};
