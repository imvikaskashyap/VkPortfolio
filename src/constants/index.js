import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	chakra,
	expressjs,
	nuk9,
	bootstrap,
	mysql,
	cpd,
	tfm,
	busyToddler,
	spotify,
	ecom,
	textify,
	ivideo,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	{
		name: "Chakra UI",
		icon: chakra,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},

	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Express js",
		icon: expressjs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	// {
	// 	title: "Freelancer Developer",
	// 	// company_name: "Starbucks",
	// 	icon: freelance,
	// 	iconBg: "#383E56",
	// 	date: "Nov 2022 - present",
	// 	// points: [
	// 	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	// 	// ],
	// },
	// {
	// 	// title: "And also Looking for a New Role!",
	// 	company_name: "Nuk 9 Auditors",
	// 	icon: jobSearch,
	// 	iconBg: "#E6DEDD",
	// 	// date: "Jan 2021 - Feb 2022",
	// 	// points: [
	// 	// 	"Developing and maintaining web applications using React.js and other related technologies.",
	// 	// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 	// 	"Implementing responsive design and ensuring cross-browser compatibility.",
	// 	// 	"Participating in code reviews and providing constructive feedback to other developers.",
	// 	// ],
	// },
	{
		title: "Web Developer",
		company_name: "NUK 9 Information Security Auditors LLP",
		icon: nuk9,
		iconBg: "#383E56",
		// date: "2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
		// image1: bootstrap,
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Career and Skills",
		description:
			"Web-based platform that allows an admin panel and one user panel. The admin panel enables easy approval or rejection of user IDs and courses, along with the ability to block user accounts. Users have their own interactive dashboard, where they can buy courses, manage CPD activities, and track course history.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "material-ui",
				color: "pink-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "node js",
				color: "blue-text-gradient",
			},
		],
		image: cpd,
		source_code_link: "https://github.com/imvikaskashyap/CPD",
		live_link: "https://cpd-lime.vercel.app/",
	},
	{
		name: "The Fuel Media",
		description:
			"At The Fuel Media,this is a dynamic 360° digital marketing agency focused on diversifying global brands. With a strong focus on maximizing outcomes for your social media channels, they aim to redefine perceptions of online marketing and foster mutually beneficial relationships with their clients.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
		],
		image: tfm,
		source_code_link: "https://github.com/imvikaskashyap/TFM",
		live_link: "https://tfm-lilac.vercel.app/",
	},
	{
		name: "iVideo",
		description:
			"Introducing a user-friendly website that offers seamless authentication, video streaming, and uploading capabilities. With this platform, users can easily authenticate their accounts, granting them access to a vast library of captivating videos. Additionally, users have the freedom to upload their own videos.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "chakra ui",
				color: "green-text-gradient",
			},
		],
		image: ivideo,
		source_code_link: "https://github.com/imvikaskashyap/iVideo",
		live_link: "https://i-video-three.vercel.app/",
	},
	{
		name: "Ecommecrce Website",
		description:
			"Welcome to our innovative ecommerce website, where users can enjoy a seamless shopping experience from start to finish. With robust authentication features, users can securely create and manage their accounts. Browse through our extensive product catalog, explore a wide range of items, and easily add them to your cart. Our intuitive checkout process ensures a hassle-free transaction, allowing you to complete your purchase with confidence.",
		tags: [
			{
				name: "javascript",
				color: "blue-text-gradient",
			},
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "DOM",
				color: "blue-text-gradient",
			},
		],
		image: ecom,
		source_code_link: "https://github.com/imvikaskashyap/Ecom_front-end",
		live_link: "https://ecom-front-end.vercel.app/login.html",
	},
	{
		name: "The Busy Toddler's Club",
		description:
			"A platform for reserving and checking out various fun-filled items for children. With just a few clicks, you can easily browse and book a wide range of playing items to keep your little ones entertained. Allowing you to select desired items and proceed checkout. If you have any questions or need assistance, our Contact Us page enables direct communication with the owner. Rest assured, the owner will promptly receive email notifications on their Gmail account.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "json",
				color: "green-text-gradient",
			},
		],
		image: busyToddler,
		source_code_link: "https://github.com/imvikaskashyap/Busy-toddler-club",
		live_link: "https://busy-toddler-2.vercel.app/",
	},
	{
		name: "Textify",
		description:
			"Our versatile web app empowers users to manipulate text with ease and change theme to dark and light. Simply copy and paste your text into the app and seamlessly convert it to uppercase or lowercase. Need to remove extra spaces? Our app has got you covered. It also provides convenient word and letter counting. With a preview feature, you can instantly visualize the changes before applying. Enhance your text editing experience with our user-friendly web app.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
		],
		image: textify,
		source_code_link: "https://github.com/imvikaskashyap/TextifyByReact",
		live_link: "https://textifybyvk.netlify.app/",
	},
	{
		name: "Spotify Clone",
		description:
			"Welcome to our music streaming website, where you can immerse yourself in your favorite tunes with ease. Enjoy a seamless listening experience as you navigate through a vast collection of songs. With convenient controls, you can effortlessly change to the previous or next track, or let the website automatically transition to the next song for a continuous music flow. Want to repeat your favorite track? Our looping song functionality allows you to indulge in endless playback. Tune in, relax, and let the music take you on a captivating journey through our user-friendly website.",
		tags: [
			{
				name: "javascript",
				color: "blue-text-gradient",
			},
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
			{
				name: "DOM",
				color: "blue-text-gradient",
			},
		],
		image: spotify,
		source_code_link: "https://github.com/imvikaskashyap/TextifyByReact",
		live_link: "https://musicwebappbyvk.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
