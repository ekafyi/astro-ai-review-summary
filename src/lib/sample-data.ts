export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
}

export interface Review {
	id: number;
	productId: string;
	review: string;
	authorName: string;
	date: string;
	stars: number;
}

export const SAMPLE_PRODUCTS: Product[] = [
	{
		id: "mower",
		name: "Mower3000",
		description:
			"The Mower3000 is a cutting-edge robotic lawn mower designed for the modern homeowner. With its advanced navigation system, it effortlessly handles complex yard layouts and slopes up to 20 degrees. The whisper-quiet operation ensures your outdoor peace remains undisturbed, while the precision cutting system delivers a professional-quality lawn finish. Smart home integration allows for easy scheduling and control via your smartphone. Perfect for yards up to 1/2 acre, this energy-efficient mower reduces your carbon footprint while keeping your lawn perfectly manicured.",
		price: 123,
	},
	{
		id: "ecobright",
		name: "EcoBright",
		description:
			"The EcoBright Smart LED bulb combines energy efficiency with smart technology for the ultimate in home lighting control. With 800 lumens of adjustable brightness and customizable color temperatures, create the perfect ambiance for any occasion. The energy-efficient design uses 85% less power than traditional bulbs while lasting up to 20,000 hours. Seamlessly integrates with popular smart home systems for voice control and automation. The durable construction ensures reliable performance in both indoor and covered outdoor settings.",
		price: 321,
	},
	{
		id: "ecosmart",
		name: "EcoSmart",
		description:
			"The EcoSmart ECO 11 Tankless Water Heater delivers endless hot water on demand while reducing energy consumption by up to 50% compared to traditional tank heaters. Its compact, wall-mounted design saves valuable space while providing a continuous supply of hot water for your entire home. The advanced self-modulating technology adjusts power output to maintain precise water temperature. With a 99.8% energy efficiency rating, this eco-friendly solution is perfect for households looking to reduce their environmental impact and energy bills. The digital temperature control allows for easy adjustment in 1-degree increments.",
		price: 400,
	},
];

export const SAMPLE_REVIEWS: Review[] = [
	{
		id: 1,
		productId: "mower",
		review:
			"Absolutely love the Mower3000! Installation was a breeze, thanks to the clear instructions and videos. It navigates my complex yard with ease, even the steep parts. Plus, it's so quiet, I barely notice it's working. Truly a game-changer for lawn care.",
		authorName: "Jake P.",
		date: "2024-02-15",
		stars: 5,
	},
	{
		id: 2,
		productId: "mower",
		review:
			"The Mower3000 has been a solid addition to my garden tools. It handles the lawn autonomously, freeing up my weekends. The app control is intuitive, though I wish the Bluetooth range was better. Overall, a reliable lawn mower that does its job well.",
		authorName: "Marianne L.",
		date: "2024-01-28",
		stars: 4,
	},
	{
		id: 3,
		productId: "mower",
		review:
			"Mower3000 promises a lot but delivers just enough. It's great on flat surfaces but struggles a bit on my sloped edges. The noise level is as advertised—very quiet. The boundary wire setup took some time, but it's working fine. A decent purchase.",
		authorName: "Chris T.",
		date: "2024-02-10",
		stars: 3,
	},
	{
		id: 4,
		productId: "mower",
		review:
			"I had high hopes for the Mower3000, but it's been a mixed bag. The setup was more complicated than expected, and it occasionally misses spots on the lawn. It's quiet and the safety features are reassuring, but I expected more precision for the price.",
		authorName: "Alexa R.",
		date: "2023-12-20",
		stars: 3,
	},
	{
		id: 5,
		productId: "mower",
		review:
			"The Mower3000's streak-free technology is not as flawless as advertised. My lawn looks mostly good, but there are areas where it seems to have missed or cut unevenly. The app and setup are user-friendly, but I'm a bit disappointed in the overall performance.",
		authorName: "Derek S.",
		date: "2024-01-05",
		stars: 3,
	},
	{
		id: 6,
		productId: "mower",
		review:
			"Not impressed with the Mower3000. It's supposed to navigate narrow spaces, yet it's gotten stuck multiple times in areas of my yard that aren't that complicated. The noise level is fine, but what's the use if it can't do its primary job right?",
		authorName: "Patricia N.",
		date: "2024-02-03",
		stars: 2,
	},
	{
		id: 7,
		productId: "mower",
		review:
			"Disappointed with the Mower3000. It struggles with slopes and often leaves uneven cuts. The boundary wire installation was a hassle, and the Bluetooth connectivity is hit or miss. Expected more from such an expensive gadget.",
		authorName: "Ron J.",
		date: "2023-11-15",
		stars: 2,
	},
	{
		id: 8,
		productId: "mower",
		review:
			"Frustrated with the Mower3000. It frequently loses its boundary wire signal and ends up mowing outside its zone, causing a mess. The concept is great, but the execution is lacking. Plus, customer service hasn't been very helpful in resolving my issues.",
		authorName: "Simone K.",
		date: "2024-01-22",
		stars: 1,
	},
	{
		id: 9,
		productId: "mower",
		review:
			"The Mower3000 is decent. It mows the lawn autonomously, which is convenient. However, the setup took some effort, and the app could be more stable. It's nice to have, but I'm not sure it's worth the investment for smaller yards.",
		authorName: "Gary W.",
		date: "2024-02-05",
		stars: 3,
	},
	{
		id: 10,
		productId: "mower",
		review:
			"Overall, the Mower3000 is a good buy. It handles most of my lawn well, including the slope. The silent operation is a huge plus. Just wish the battery life was longer, as it doesn't always finish in one go. Still, it's much better than manual mowing.",
		authorName: "Bethany E.",
		date: "2024-01-19",
		stars: 4,
	},
	{
		id: 11,
		productId: "ecobright",
		review:
			"The EcoBright 360 didn't live up to its promise of lasting 20,000 hours. Mine burnt out in less than 6 months with moderate use. Disappointed.",
		authorName: "Jenna M.",
		date: "2024-01-15",
		stars: 2,
	},
	{
		id: 12,
		productId: "ecobright",
		review:
			"While the energy savings are noticeable, the light emitted is a bit too harsh for my living room. Not quite the warm glow I was hoping for.",
		authorName: "Gregory F.",
		date: "2024-01-20",
		stars: 3,
	},
	{
		id: 13,
		productId: "ecobright",
		review:
			"Decent bulb for the price, but the smart features are a bit clunky to use. Sometimes it doesn't respond to the app as quickly as I'd like.",
		authorName: "Samantha K.",
		date: "2024-02-05",
		stars: 3,
	},
	{
		id: 14,
		productId: "ecobright",
		review:
			"The app setup was a breeze, and I love being able to control the lighting from anywhere in the house. However, the bulb does not always connect to WiFi on the first try.",
		authorName: "Alex P.",
		date: "2024-02-10",
		stars: 4,
	},
	{
		id: 15,
		productId: "ecobright",
		review:
			"This bulb is great for its price point. Energy-efficient and mostly reliable. Just wish the brightness was a tad higher for outdoor use.",
		authorName: "Michelle T.",
		date: "2024-02-12",
		stars: 3,
	},
	{
		id: 16,
		productId: "ecobright",
		review:
			"The connectivity with my smart home devices is hit or miss, which is frustrating. I expected better integration for a 'smart' bulb.",
		authorName: "Leonard W.",
		date: "2024-02-14",
		stars: 2,
	},
	{
		id: 17,
		productId: "ecobright",
		review:
			"Fantastic product! The EcoBright 360 has completely transformed the ambiance of my home. The scheduling feature is perfect for my routine.",
		authorName: "Isabella R.",
		date: "2024-02-15",
		stars: 5,
	},
	{
		id: 18,
		productId: "ecobright",
		review:
			"Very disappointed. The bulb flickers occasionally, and resetting it doesn't seem to fix the issue. Not what I expected for the price.",
		authorName: "Derek S.",
		date: "2024-02-16",
		stars: 1,
	},
	{
		id: 19,
		productId: "ecobright",
		review:
			"I'm impressed with the energy efficiency and how easy it was to install and use. A great addition to my smart home setup.",
		authorName: "Nora Q.",
		date: "2024-02-17",
		stars: 4,
	},
	{
		id: 20,
		productId: "ecobright",
		review:
			"Light quality is superb, and the dimming feature works like a charm. Makes for a cozy atmosphere in the evenings. A bit pricey, but worth it.",
		authorName: "Carlos D.",
		date: "2024-02-18",
		stars: 4,
	},
	{
		id: 21,
		productId: "ecosmart",
		review:
			"Absolutely love the EcoSmart ECO 11! It was surprisingly easy to install and it's been a game changer for our utility bills. The compact size is perfect for our small home, and we've enjoyed endless hot water without any issues. Highly recommend for anyone looking to save on energy costs.",
		authorName: "Jessica M.",
		date: "2024-01-15",
		stars: 5,
	},
	{
		id: 22,
		productId: "ecosmart",
		review:
			"The EcoSmart tankless water heater is fantastic. I noticed a significant decrease in my electric bill, and it's great not having to wait for water to heat up. The temperature control is precise and easy to adjust. Great product for the environmentally conscious homeowner.",
		authorName: "Brian K.",
		date: "2024-02-01",
		stars: 5,
	},
	{
		id: 23,
		productId: "ecosmart",
		review:
			"I was a bit skeptical about switching to a tankless water heater, but the EcoSmart ECO 11 has exceeded my expectations. Installation was straightforward, and the performance has been flawless. It's efficient, saves space, and provides hot water on demand. What more could you ask for?",
		authorName: "Samantha L.",
		date: "2023-12-20",
		stars: 5,
	},
	{
		id: 24,
		productId: "ecosmart",
		review:
			"This water heater is a solid choice. It heats water quickly and is much more efficient than our old tank model. We've seen a drop in our electricity use, and I appreciate the modern, compact design. It fits perfectly in our utility closet.",
		authorName: "Derek H.",
		date: "2024-01-28",
		stars: 4,
	},
	{
		id: 25,
		productId: "ecosmart",
		review:
			"I've had the EcoSmart ECO 11 for a few months now, and it's been pretty good. The installation process was a bit of a hassle, but once set up, it's been working well. The temperature consistency is better than I expected, though I wish it were a little faster in heating up.",
		authorName: "Clara N.",
		date: "2023-11-05",
		stars: 4,
	},
	{
		id: 26,
		productId: "ecosmart",
		review:
			"The EcoSmart ECO 11 is a decent upgrade from a traditional water heater. The energy savings are noticeable, and it's convenient to have hot water on demand. However, the initial cost and installation might be a deterrent for some. Overall, a good investment if you're planning to stay in your home for a while.",
		authorName: "Alex F.",
		date: "2024-02-10",
		stars: 4,
	},
	{
		id: 27,
		productId: "ecosmart",
		review:
			"I was excited about the energy efficiency of the EcoSmart ECO 11, and it hasn't disappointed. It does take a bit of getting used to, especially figuring out the right temperature settings, but once you do, it's great. Saves space and money in the long run.",
		authorName: "Nina P.",
		date: "2023-12-01",
		stars: 4,
	},
	{
		id: 28,
		productId: "ecosmart",
		review:
			"The EcoSmart ECO 11 is a game changer. My water heating bills have plummeted, and the space savings is a huge plus. It's incredibly efficient, and I've had no issues with water temperature. Definitely one of the best home improvements I've made.",
		authorName: "Mark S.",
		date: "2024-01-10",
		stars: 5,
	},
	{
		id: 29,
		productId: "ecosmart",
		review:
			"I'm thrilled with my purchase of the EcoSmart ECO 11. It's environmentally friendly, which is very important to me, and the performance has been outstanding. Hot water is always available when I need it, and the unit itself is sleek and unobtrusive.",
		authorName: "Lori D.",
		date: "2023-11-15",
		stars: 5,
	},
	{
		id: 30,
		productId: "ecosmart",
		review:
			"The EcoSmart ECO 11 tankless water heater is incredible. Installation was easier than anticipated, and the impact on our energy bill was noticeable right away. The consistent hot water supply is exactly what our large family needed. Highly recommend this to anyone looking to make the switch to tankless.",
		authorName: "Tom G.",
		date: "2024-02-05",
		stars: 5,
	},
];
