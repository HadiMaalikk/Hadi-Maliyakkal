/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
		keyframes: {
			float1: {
				'0%, 100%': { transform: 'translateY(0px)'},
				'50%': {transform: 'translateY(-10px)'},
			},
			float2: {
				'0%, 100%' : { transform : 'translateY(-5px)'},
				'50%': {transform: 'translateY(0px)'},
			},
			move: {
				'0%' : {transform : 'translateX(200px)'},
				'100%' : {transform : 'translateY(200px)'}
			},
		},
		animation: {
			float1: 'float1 3s ease-in-out infinite',
			float2: 'float2 3s ease-in-out infinite',
			move: 'move 5s linear infinite',
		},
  		fontFamily: {
  			century: [
  				'Century Gothic',
  				'sans-serif'
  			],
  		roboto: [
  				'Roboto',
  				'sans-serif'
  			],
		inter: [
			'Inter',
			'sans-serif'
		],
		labelle: [
			'"La Belle Aurore"',
			'cursive'
		]
  		}
  	}
  },
  plugins: [],
};
