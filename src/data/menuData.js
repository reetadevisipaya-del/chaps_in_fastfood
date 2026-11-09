// Complete Authentic Menu & Prices from Chaps-In Fast Food (Official Menus & Zomato)
// Sector 34-C Chandigarh (Formerly Chaplin Fast Food)

export const MENU_CATEGORIES = [
  {
    "id": "all",
    "name": "All Dishes",
    "icon": "🍽️"
  },
  {
    "id": "bestsellers",
    "name": "⭐ Bestsellers",
    "icon": "🔥"
  },
  {
    "id": "combos",
    "name": "Combos For 1",
    "icon": "🍱"
  },
  {
    "id": "momos",
    "name": "Legendary Momos",
    "icon": "🥟"
  },
  {
    "id": "tandoori_snacks",
    "name": "Tikka, Chaap & Starters",
    "icon": "🍢"
  },
  {
    "id": "chinese",
    "name": "Chinese & Noodles",
    "icon": "🍜"
  },
  {
    "id": "curries",
    "name": "North Indian Curries",
    "icon": "🍛"
  },
  {
    "id": "tandoori_bread",
    "name": "Cheese Naan & Breads",
    "icon": "🫓"
  },
  {
    "id": "soups",
    "name": "Soups",
    "icon": "🍲"
  },
  {
    "id": "platters",
    "name": "Platters & Thalis",
    "icon": "🥘"
  },
  {
    "id": "beverages",
    "name": "Boba, Shakes & Drinks",
    "icon": "🧋"
  }
];

export const MENU_ITEMS = [
  {
    "id": "combo-paneer-chilli-noodles",
    "name": "Paneer Chilli + Noodles Combo",
    "category": "combos",
    "price": 260,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1420,
    "description": "Crispy wok-tossed Paneer Chilli paired with classic Veg Hakka Chowmein noodles. High-protein, satisfying single meal.",
    "image": "./images/dishes/paneer-chilli-dry.jpg",
    "tags": [
      "Value Combo",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "combo-paneer-chilli-rice",
    "name": "Paneer Chilli + Fried Rice Combo",
    "category": "combos",
    "price": 260,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 890,
    "description": "Hot sizzling Paneer Chilli paired with aromatic garlic vegetable fried rice.",
    "image": "./images/dishes/paneer-fried-rice.jpg",
    "tags": [
      "Combo For 1"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "combo-veg-manchurian-noodles",
    "name": "Veg Manchurian + Noodles Combo",
    "category": "combos",
    "price": 240,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 1120,
    "description": "Savory vegetable Manchurian balls in rich dark soy gravy accompanied by steaming hot wok chowmein.",
    "image": "./images/dishes/veg-manchurian-dry.jpg",
    "tags": [
      "Top Value",
      "Bestseller"
    ],
    "spiceLevel": "Mild-Medium"
  },
  {
    "id": "combo-veg-manchurian-rice",
    "name": "Veg Manchurian + Fried Rice Combo",
    "category": "combos",
    "price": 240,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Juicy vegetable Manchurian gravy served with classic vegetable fried rice.",
    "image": "./images/dishes/veg-fried-rice.jpg",
    "tags": [
      "Combo For 1"
    ],
    "spiceLevel": "Mild-Medium"
  },
  {
    "id": "combo-chilli-chicken-noodles",
    "name": "Chilli Chicken + Noodles Combo",
    "category": "combos",
    "price": 290,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1840,
    "description": "Spicy wok chicken chunks with capsicum and onions served alongside hot street-style egg/veg noodles.",
    "image": "./images/dishes/chilli-chicken.jpg",
    "tags": [
      "Bestseller",
      "High Protein"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "combo-chilli-chicken-rice",
    "name": "Chilli Chicken + Fried Rice Combo",
    "category": "combos",
    "price": 290,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 930,
    "description": "Tender boneless chilli chicken gravy paired with fragrant egg/chicken fried rice.",
    "image": "./images/dishes/chicken-fried-rice.jpg",
    "tags": [
      "Value Meal"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "combo-chaap-gravy-rumali",
    "name": "Chaap Gravy + 2 Rumali Roti Combo",
    "category": "combos",
    "price": 180,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 710,
    "description": "Tandoori soya chaap pieces cooked in spiced tomato-onion curry, served with 2 freshly rolled thin Rumali rotis.",
    "image": "./images/dishes/kadhai-soya-chaap.jpg",
    "tags": [
      "Punjabi Feast",
      "Pocket Friendly"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "combo-dal-makhani-butter-roti",
    "name": "Dal Makhani + 3 Butter Roti Combo",
    "category": "combos",
    "price": 160,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2200,
    "description": "Legendary slow-cooked black lentils simmered with white butter, served with 3 hot tandoori butter rotis.",
    "image": "./images/dishes/dal-makhani.jpg",
    "tags": [
      "All Time Hit",
      "₹160 Only"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "combo-kadhai-paneer-butter-roti",
    "name": "Kadhai Paneer + 3 Butter Roti Combo",
    "category": "combos",
    "price": 180,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1340,
    "description": "Cottage cheese cubes tossed with capsicum, onion and crushed coriander in a kadhai gravy + 3 tandoori butter rotis.",
    "image": "./images/dishes/kadhai-paneer.jpg",
    "tags": [
      "Comfort Meal"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-atta-steamed-momos",
    "name": "Paneer Atta (Wheat) Steamed Momos (8 pcs)",
    "category": "momos",
    "price": 290,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 420,
    "description": "Healthy 100% whole wheat outer wrapper stuffed with spiced paneer filling. Guilt-free and steamed fresh.",
    "image": "./images/dishes/paneer-atta-steamed-momos.jpg",
    "tags": [
      "Whole Wheat",
      "Healthy Choice"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-atta-tandoori-momos",
    "name": "Paneer Atta (Wheat) Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "rating": 4.9,
    "reviewsCount": 560,
    "description": "Whole wheat paneer momos marinated in Punjabi tandoori spices and charred over live charcoal.",
    "image": "./images/dishes/paneer-atta-tandoori-momos.jpg",
    "tags": [
      "Wheat Tandoori",
      "Chef Special"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-atta-kurkure-momos",
    "name": "Paneer Atta (Wheat) Kurkure Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 890,
    "description": "Whole wheat paneer momos dipped in seasoned crumb batter and fried ultra-crispy.",
    "image": "./images/dishes/paneer-atta-kurkure-momos.jpg",
    "tags": [
      "Healthy & Crunchy",
      "Bestseller"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-atta-fried-momos",
    "name": "Paneer Atta (Wheat) Fried Momos (8 pcs)",
    "category": "momos",
    "price": 330,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 310,
    "description": "Crispy fried whole wheat momos filled with fresh soft paneer and seasoned herbs.",
    "image": "./images/dishes/paneer-fried-momos.jpg",
    "tags": [
      "Wheat Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-momos-steamed",
    "name": "Veg Steamed Momos (8 pcs)",
    "category": "momos",
    "price": 280,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 850,
    "description": "Finely shredded cabbage, carrots, onion and green herbs wrapped in thin dumpling skin, served with spicy red chutney & mayo.",
    "image": "./images/dishes/veg-momos-steamed.jpg",
    "tags": [
      "Classic"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-fried-momos",
    "name": "Veg Fried Momos (8 pcs)",
    "category": "momos",
    "price": 330,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 780,
    "description": "Crispy golden fried vegetable dumplings with crunchy shell and tender vegetable filling.",
    "image": "./images/dishes/veg-fried-momos.jpg",
    "tags": [
      "Crispy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-kurkure-momos",
    "name": "Veg Kurkure Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1980,
    "description": "Signature Chaps-In specialty! Vegetable momos double-coated in crunchy spiced crust, fried to golden perfection.",
    "image": "./images/dishes/veg-kurkure-momos.jpg",
    "tags": [
      "Bestseller",
      "Crunchy"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "afghani-veg-momos",
    "name": "Veg Afghani Momos (Creamy Gravy) (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 1450,
    "description": "Tandoor charred veg momos drowned in rich, velvety cashew, cream, and mild black pepper gravy.",
    "image": "./images/dishes/afghani-veg-momos.jpg",
    "tags": [
      "Rich Gravy",
      "Mild Spice"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-tandoori-momos",
    "name": "Veg Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 920,
    "description": "Smoky tandoor-roasted vegetable dumplings brushed with butter, chaat masala, and spicy red marinade.",
    "image": "./images/dishes/veg-tandoori-momos.jpg",
    "tags": [
      "Clay Tandoor",
      "Smoky"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "veg-malai-tandoori-momos",
    "name": "Veg Malai Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 680,
    "description": "Milder version roasted in clay oven, topped with fresh dairy cream, crushed cashews, and herbs.",
    "image": "./images/dishes/veg-malai-tandoori-momos.jpg",
    "tags": [
      "Creamy Tandoori"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-peri-peri-creamy-momos",
    "name": "Veg Peri Peri Creamy Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 540,
    "description": "Zesty African bird's eye chilli seasoning blended with rich dairy cream over steaming hot momos.",
    "image": "./images/dishes/veg-creamy-peri-peri-momos.jpg",
    "tags": [
      "Peri Peri Zest"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "veg-honey-chilli-momos",
    "name": "Veg Honey Chilli Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 760,
    "description": "Crispy fried veg momos wok-tossed in sweet and spicy honey chilli garlic glaze with toasted sesame seeds.",
    "image": "./images/dishes/veg-honey-chilli-momos.jpg",
    "tags": [
      "Sweet & Spicy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-momos-platter",
    "name": "Veg Momos Platter (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1650,
    "description": "The ultimate tasting feast: 2 Steamed + 2 Kurkure + 2 Malai + 2 Tandoori veg momos with all dips.",
    "image": "./images/dishes/veg-momos-platter.jpg",
    "tags": [
      "Ultimate Feast",
      "Bestseller"
    ],
    "spiceLevel": "Mixed"
  },
  {
    "id": "paneer-steamed-momos",
    "name": "Paneer Steamed Momos (8 pcs)",
    "category": "momos",
    "price": 290,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 990,
    "description": "Packed with soft grated fresh cottage cheese, coriander, and fine herbs. Melt-in-mouth texture.",
    "image": "./images/dishes/paneer-steamed-momos.jpg",
    "tags": [
      "Fresh Paneer"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-fried-momos",
    "name": "Paneer Fried Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 620,
    "description": "Crisp outside, warm and cheesy inside. Served piping hot with fiery momo dip.",
    "image": "./images/dishes/paneer-fried-momos.jpg",
    "tags": [
      "Crispy Delight"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-kurkure-momos",
    "name": "Paneer Kurkure Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 3400,
    "description": "Chandigarh's #1 viral dish! Crumb-coated ultra-crispy outer layer encasing moist, flavorful paneer.",
    "image": "./images/dishes/paneer-kurkure-momos.jpg",
    "tags": [
      "#1 Viral Dish",
      "Must Try"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-afghani-momos",
    "name": "Paneer Afghani (Creamy Gravy) Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2100,
    "description": "Charred paneer momos drenched in thick white cream, butter, and cashew paste. Truly heavenly.",
    "image": "./images/dishes/paneer-afghani-momos.jpg",
    "tags": [
      "Rich & Creamy",
      "Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-tandoori-momos",
    "name": "Paneer Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Red tandoori marinated paneer momos cooked on skewers over burning coal.",
    "image": "./images/dishes/paneer-tandoori-momos.jpg",
    "tags": [
      "Charred Smoky"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-malai-tandoori-momos",
    "name": "Paneer Malai Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 840,
    "description": "Delicate paneer momos tossed in malai cream sauce with black pepper and cardamom.",
    "image": "./images/dishes/paneer-malai-tandoori-momos.jpg",
    "tags": [
      "Malai Sauce"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-peri-peri-momos",
    "name": "Paneer Peri Peri Creamy Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 790,
    "description": "Spicy Peri Peri herbs swirled with rich dairy cream over soft hot paneer momos.",
    "image": "./images/dishes/paneer-peri-peri-momos.jpg",
    "tags": [
      "Fiery Cream"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-honey-chilli-momos",
    "name": "Paneer Honey Chilli Momos (8 pcs)",
    "category": "momos",
    "price": 270,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 510,
    "description": "Crunchy paneer dumplings tossed in sweet honey, garlic, and hot red chilli sauce.",
    "image": "./images/dishes/veg-honey-chilli-momos.jpg",
    "tags": [
      "Chef Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-momos-platter",
    "name": "Paneer Momos Platter (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1890,
    "description": "A decadent combination: 2 Steamed + 2 Kurkure + 2 Malai + 2 Tandoori paneer momos with mint & garlic dips.",
    "image": "./images/dishes/paneer-momos-platter.jpg",
    "tags": [
      "Platter",
      "Bestseller"
    ],
    "spiceLevel": "Mixed"
  },
  {
    "id": "chicken-steamed-momos",
    "name": "Chicken Steamed Momos (8 pcs)",
    "category": "momos",
    "price": 290,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1200,
    "description": "Juicy minced chicken seasoned with ginger, onion, and Himalayan spices inside gossamer-thin dough.",
    "image": "./images/dishes/chicken-steamed-momos.jpg",
    "tags": [
      "Juicy Chicken"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-fried-momos",
    "name": "Chicken Fried Momos (8 pcs)",
    "category": "momos",
    "price": 350,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 840,
    "description": "Crispy fried chicken momos bursting with steaming hot chicken juices.",
    "image": "./images/dishes/chicken-fried-momos.jpg",
    "tags": [
      "Crispy Chicken"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-kurkure-momos",
    "name": "Chicken Kurkure Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2900,
    "description": "Signature crispy flake-crusted momos loaded with tender chicken filling. Addictive crunch!",
    "image": "./images/dishes/chicken-kurkure-momos.jpg",
    "tags": [
      "Top Bestseller",
      "Extreme Crunch"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "afghani-chicken-momo",
    "name": "Chicken Afghani (Creamy Gravy) Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1750,
    "description": "Tandoori chicken momos steeped in creamy Afghani sauce, garnished with coriander and butter.",
    "image": "./images/dishes/afghani-chicken-momo.jpg",
    "tags": [
      "Royal Gravy",
      "Must Try"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-tandoori-momos",
    "name": "Chicken Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1320,
    "description": "Authentic charcoal grilled chicken dumplings coated with spiced yoghurt tandoori masala.",
    "image": "./images/dishes/chicken-tandoori-momos.jpg",
    "tags": [
      "Tandoori Grilled"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-malai-tandoori-momos",
    "name": "Chicken Malai Tandoori Momos (8 pcs)",
    "category": "momos",
    "price": 270,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 690,
    "description": "Mild, fragrant chicken dumplings broiled in clay oven and enriched with fresh malai.",
    "image": "./images/dishes/chicken-malai-tikka.jpg",
    "tags": [
      "Malai Cream"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-peri-peri-momos",
    "name": "Chicken Peri Peri Creamy Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 910,
    "description": "Spicy peri peri sauce infused with rich cream over hot succulent chicken momos.",
    "image": "./images/dishes/chicken-peri-peri-momos.jpg",
    "tags": [
      "Fiery Cream"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-honey-chilli-momos",
    "name": "Chicken Honey Chilli Momos (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 880,
    "description": "Crispy fried chicken momos glazed in honey chilli sauce with spring onions and sesame.",
    "image": "./images/dishes/chicken-honey-chilli-momos.jpg",
    "tags": [
      "Indo-Chinese"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-momos-platter",
    "name": "Chicken Momos Platter (8 pcs)",
    "category": "momos",
    "price": 380,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2150,
    "description": "Platter of 2 Steamed + 2 Kurkure + 2 Malai + 2 Tandoori chicken momos.",
    "image": "./images/dishes/chicken-momos-platter.jpg",
    "tags": [
      "Non-Veg Feast",
      "Bestseller"
    ],
    "spiceLevel": "Mixed"
  },
  {
    "id": "veg-spring-roll",
    "name": "Veg Spring Roll",
    "category": "tandoori_snacks",
    "price": 360,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Golden fried crispy wrappers bursting with julienned vegetables and Chinese seasoning.",
    "image": "./images/dishes/veg-spring-roll.jpg",
    "tags": [
      "Crispy",
      "Popular Starter"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-spring-roll",
    "name": "Paneer Spring Roll",
    "category": "tandoori_snacks",
    "price": 320,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 750,
    "description": "Flaky rolls loaded with tender cottage cheese chunks, cabbage, carrots, and peppers.",
    "image": "./images/dishes/paneer-spring-roll.jpg",
    "tags": [
      "Paneer Loaded"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "crunchy-veg-spring-roll",
    "name": "Crunchy Veg Spring Roll",
    "category": "tandoori_snacks",
    "price": 320,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 520,
    "description": "Extra crispy crust packed with stir fried veggies in spicy chilli garlic sauce.",
    "image": "./images/dishes/crunchy-veg-spring-roll.jpg",
    "tags": [
      "Extra Crunchy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-spring-roll",
    "name": "Chicken Spring Roll",
    "category": "tandoori_snacks",
    "price": 320,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 940,
    "description": "Shredded chicken cooked in Asian garlic soy seasoning rolled in a crispy wafer sheet.",
    "image": "./images/dishes/chicken-spring-roll.jpg",
    "tags": [
      "Bestseller Starter"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "cigar-roll",
    "name": "Cigar Roll (5 pcs)",
    "category": "tandoori_snacks",
    "price": 170,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 380,
    "description": "Crispy slender cigar rolls stuffed with spiced vegetables and cheese, served with sweet chilli dip.",
    "image": "./images/dishes/crunchy-veg-spring-roll.jpg",
    "tags": [
      "Party Snack"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-tikka",
    "name": "Paneer Tikka (8 pcs)",
    "category": "tandoori_snacks",
    "price": 480,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1620,
    "description": "Jumbo cubes of fresh Malai paneer skewered with onions and bell peppers, roasted in charcoal tandoor.",
    "image": "./images/dishes/paneer-tikka.jpg",
    "tags": [
      "Tandoor Star",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-malai-tikka",
    "name": "Paneer Malai Tikka (8 pcs)",
    "category": "tandoori_snacks",
    "price": 480,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1280,
    "description": "Melt-in-mouth cottage cheese marinated in heavy cream, cashew cream, green cardamom, and mild cheese.",
    "image": "./images/dishes/paneer-malai-tikka.jpg",
    "tags": [
      "Melt In Mouth"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-achari-tikka",
    "name": "Paneer Achari Tikka (8 pcs)",
    "category": "tandoori_snacks",
    "price": 480,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 710,
    "description": "Paneer cubes infused with tangy Punjabi mango pickle spices, mustard oil, and roasted kalonji.",
    "image": "./images/dishes/paneer-achari-tikka.jpg",
    "tags": [
      "Tangy & Spicy"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-fingers",
    "name": "Paneer Fingers",
    "category": "tandoori_snacks",
    "price": 200,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 460,
    "description": "Fresh paneer cutlets coated in seasoned batter and fried crispy. Perfect tea-time or party starter.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Crispy Snack"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "mushroom-duplex",
    "name": "Mushroom Duplex",
    "category": "tandoori_snacks",
    "price": 200,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 890,
    "description": "Button mushrooms stuffed with spiced cheese & spinach, batter dipped and deep fried to golden crunch.",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Chef Special",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "crispy-corns",
    "name": "Crispy Corns",
    "category": "tandoori_snacks",
    "price": 200,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 580,
    "description": "Sweet American golden corn kernels tossed with spices, chopped spring onion, and lime juice.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Bar Favourite"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "french-fries-salted",
    "name": "French Fries Salted",
    "category": "tandoori_snacks",
    "price": 120,
    "isVeg": true,
    "rating": 4.6,
    "reviewsCount": 430,
    "description": "Classic golden potato fries lightly salted and served piping hot with ketchup.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Kids Favourite"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "peri-peri-fries",
    "name": "Peri Peri Fries",
    "category": "tandoori_snacks",
    "price": 150,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Crispy hot potato fries tossed in fiery African peri peri spice mix.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Spicy Fries"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "malai-soya-chaap-tikka",
    "name": "Malai Soya Chaap Tikka",
    "category": "tandoori_snacks",
    "price": 250,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1980,
    "description": "Tender soya chaap roasted in clay tandoor and tossed in thick cream, melted butter, and fragrant herbs.",
    "image": "./images/dishes/malai-chaap-tikka.jpg",
    "tags": [
      "#1 Chaap",
      "Bestseller"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Full Portion",
        "price": 250
      },
      {
        "name": "Half Portion (Printed Card)",
        "price": 150
      }
    ]
  },
  {
    "id": "afghani-soya-chaap-tikka",
    "name": "Afghani Soya Chaap Tikka",
    "category": "tandoori_snacks",
    "price": 250,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1140,
    "description": "Cashew and yoghurt marinated chaap roasted over glowing embers with mild aromatic spices.",
    "image": "./images/dishes/afghani-chaap-tikka.jpg",
    "tags": [
      "Royal Taste"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Full Portion",
        "price": 250
      },
      {
        "name": "Half Portion",
        "price": 150
      }
    ]
  },
  {
    "id": "masala-soya-chaap-tikka",
    "name": "Masala Soya Chaap Tikka",
    "category": "tandoori_snacks",
    "price": 250,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 960,
    "description": "Spicy roasted soya chaap coated in tangy tandoori masala and lemon-butter onion salad.",
    "image": "./images/dishes/masala-chaap-tikka.jpg",
    "tags": [
      "Spicy Tikka"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 250
      },
      {
        "name": "Half Portion",
        "price": 150
      }
    ]
  },
  {
    "id": "achari-soya-chaap-tikka",
    "name": "Achari Soya Chaap Tikka",
    "category": "tandoori_snacks",
    "price": 250,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 780,
    "description": "Soya chaap loaded with authentic pickle seasoning, mustard seed, and charred to perfection.",
    "image": "./images/dishes/achari-chaap-tikka.jpg",
    "tags": [
      "Tangy Twist"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 250
      },
      {
        "name": "Half Portion",
        "price": 150
      }
    ]
  },
  {
    "id": "tandoori-chicken",
    "name": "Tandoori Chicken",
    "category": "tandoori_snacks",
    "price": 360,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2800,
    "description": "Whole bone-in chicken marinated in hung curd, Kashmiri deghi mirch, and roasted in tandoor.",
    "image": "./images/dishes/tandoori-chicken.jpg",
    "tags": [
      "Legendary",
      "Bestseller"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full (App Special)",
        "price": 360
      },
      {
        "name": "Half Portion",
        "price": 200
      }
    ]
  },
  {
    "id": "chicken-tikka",
    "name": "Chicken Tikka (8 pcs)",
    "category": "tandoori_snacks",
    "price": 460,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1890,
    "description": "Succulent boneless chicken thigh pieces skewered and tandoor-roasted with aromatic spices.",
    "image": "./images/dishes/chicken-tikka.jpg",
    "tags": [
      "Boneless",
      "Bestseller"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-malai-tikka",
    "name": "Chicken Malai Tikka (8 pcs)",
    "category": "tandoori_snacks",
    "price": 490,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1540,
    "description": "Juicy chicken chunks marinated in cream, cheese, and crushed peppercorns. Velvety smooth.",
    "image": "./images/dishes/chicken-malai-tikka.jpg",
    "tags": [
      "Rich & Velvety"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "afghani-chicken",
    "name": "Afghani Chicken",
    "category": "tandoori_snacks",
    "price": 420,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1320,
    "description": "Bone-in chicken steeped in royal cashew-cream marinade and roasted over glowing charcoal.",
    "image": "./images/dishes/afghani-chicken.jpg",
    "tags": [
      "Mughlai Style"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Full Portion",
        "price": 420
      },
      {
        "name": "Half Portion",
        "price": 250
      }
    ]
  },
  {
    "id": "veg-manchurian-gravy",
    "name": "Veg Manchurian (Gravy, 10 pcs)",
    "category": "chinese",
    "price": 400,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.8,
    "reviewsCount": 1410,
    "description": "Minced vegetable rounds simmered in savory dark soy, garlic, and scallion sauce.",
    "image": "./images/dishes/veg-manchurian-dry.jpg",
    "tags": [
      "Gravy Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-manchurian-dry",
    "name": "Veg Manchurian Dry (10 pcs)",
    "category": "chinese",
    "price": 400,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 980,
    "description": "Crispy fried vegetable balls tossed dry with chopped garlic, capsicum, green chillies, and spring onion.",
    "image": "./images/dishes/veg-manchurian-dry.jpg",
    "tags": [
      "Dry Starter"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-chilli-gravy",
    "name": "Paneer Chilli (Gravy, 10 pcs)",
    "category": "chinese",
    "price": 590,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Soft paneer cubes in thick spiced chilli soya gravy with diced onions and green capsicums.",
    "image": "./images/dishes/paneer-chilli-dry.jpg",
    "tags": [
      "Rich Gravy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-chilli-dry",
    "name": "Paneer Chilli Dry (10 pcs)",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2400,
    "description": "Batter-fried fresh cottage cheese cubes wok-tossed with ginger, garlic, red peppers, and soy sauce.",
    "image": "./images/dishes/paneer-chilli-dry.jpg",
    "tags": [
      "Bestseller",
      "Tricity Favourite"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "mushroom-chilli",
    "name": "Mushroom Chilli (Gravy)",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 620,
    "description": "Button mushrooms cooked in rich chilli garlic gravy with bell peppers.",
    "image": "./images/dishes/mushroom-chilli-dry.jpg",
    "tags": [
      "Mushroom Special"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "mushroom-chilli-dry",
    "name": "Mushroom Chilli Dry",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 840,
    "description": "Crispy coated mushrooms tossed with crushed black pepper, chillies, and soy.",
    "image": "./images/dishes/mushroom-chilli-dry.jpg",
    "tags": [
      "Dry Starter"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-manchurian",
    "name": "Paneer Manchurian (10 pcs)",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 760,
    "description": "Crispy fried paneer balls cooked in tangy Manchurian sauce with aromatic garlic.",
    "image": "./images/dishes/paneer-manchurian.jpg",
    "tags": [
      "Indo-Chinese"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "mushroom-manchurian",
    "name": "Mushroom Manchurian",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 490,
    "description": "Juicy mushrooms sautéed in dark ginger-garlic Manchurian sauce.",
    "image": "./images/dishes/paneer-manchurian.jpg",
    "tags": [
      "Mushroom"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-garlic-sauce",
    "name": "Paneer Garlic Sauce (10 pcs)",
    "category": "chinese",
    "price": 550,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 680,
    "description": "Paneer chunks in chef's signature roasted garlic and green chilli sauce.",
    "image": "./images/dishes/paneer-garlic-sauce.jpg",
    "tags": [
      "Garlic Special"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "mixed-veg-hot-garlic",
    "name": "Mixed Veg Hot Garlic Sauce",
    "category": "chinese",
    "price": 450,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 520,
    "description": "Garden fresh broccoli, baby corn, carrots, and mushrooms in spicy red garlic sauce.",
    "image": "./images/dishes/mixed-veg-hot-garlic.jpg",
    "tags": [
      "Veggie Loaded"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "honey-chilli-cauliflower",
    "name": "Honey Chilli Cauliflower",
    "category": "chinese",
    "price": 440,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 920,
    "description": "Batter-fried crispy cauliflower florets glazed with pure honey, red chillies, and sesame.",
    "image": "./images/dishes/honey-chilli-cauliflower.jpg",
    "tags": [
      "Crispy Gobhi"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "honey-chilli-potato",
    "name": "Honey Chilli Potato",
    "category": "chinese",
    "price": 440,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2750,
    "description": "Crunchy potato fingers tossed in sticky honey chilli sauce, garnished with toasted white sesame.",
    "image": "./images/dishes/honey-chilli-potato.jpg",
    "tags": [
      "Top Favourite",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "vegetable-sweet-and-sour",
    "name": "Vegetable Sweet & Sour",
    "category": "chinese",
    "price": 300,
    "isVeg": true,
    "rating": 4.6,
    "reviewsCount": 380,
    "description": "Assorted vegetables with pineapple and bell peppers in a tangy Cantonese sweet & sour gravy.",
    "image": "./images/dishes/mixed-veg-hot-garlic.jpg",
    "tags": [
      "Tangy Sweet"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chilli-chicken",
    "name": "Chilli Chicken (Boneless, 8 pcs)",
    "category": "chinese",
    "price": 560,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 3100,
    "description": "Iconic Indo-Chinese dish: crisp-fried chicken chunks tossed in spicy soy-chilli gravy with fresh peppers.",
    "image": "./images/dishes/chilli-chicken.jpg",
    "tags": [
      "#1 Non-Veg Chinese",
      "Bestseller"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Boneless (8 pcs - App Special)",
        "price": 560
      },
      {
        "name": "With Bone (Full)",
        "price": 600
      },
      {
        "name": "With Bone (Half)",
        "price": 350
      }
    ]
  },
  {
    "id": "chicken-manchurian",
    "name": "Chicken Manchurian (8 pcs)",
    "category": "chinese",
    "price": 560,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1420,
    "description": "Succulent chicken meatballs or chunks in glossy garlic-infused dark soy sauce.",
    "image": "./images/dishes/chicken-manchurian.jpg",
    "tags": [
      "Chinese Classic"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "honey-chilli-chicken-dry",
    "name": "Honey Chilli Chicken Dry (8 pcs)",
    "category": "chinese",
    "price": 560,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1980,
    "description": "Crispy chicken cubes tossed with natural honey, roasted sesame seeds, and crushed red chillies.",
    "image": "./images/dishes/honey-chilli-chicken-dry.jpg",
    "tags": [
      "Crispy Sweet-Spicy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-garlic-sauce",
    "name": "Chicken Garlic Sauce (8 pcs)",
    "category": "chinese",
    "price": 560,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 860,
    "description": "Chicken pieces simmered in spicy, aromatic hot garlic sauce with scallions.",
    "image": "./images/dishes/chilli-chicken.jpg",
    "tags": [
      "Hot Garlic"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "ginger-chicken",
    "name": "Ginger Chicken (8 pcs)",
    "category": "chinese",
    "price": 560,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 790,
    "description": "Tender chicken simmered in fragrant fresh ginger slivers, mild soy, and scallions.",
    "image": "./images/dishes/ginger-chicken.jpg",
    "tags": [
      "Ginger Infused"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-sweet-and-sour",
    "name": "Chicken Sweet & Sour",
    "category": "chinese",
    "price": 350,
    "isVeg": false,
    "rating": 4.7,
    "reviewsCount": 520,
    "description": "Crispy chicken chunks with diced pineapple and capsicums in tangy red sweet & sour sauce.",
    "image": "./images/dishes/chilli-chicken.jpg",
    "tags": [
      "Sweet & Tangy"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Half Portion",
        "price": 350
      },
      {
        "name": "Full Portion",
        "price": 600
      }
    ]
  },
  {
    "id": "veg-chowmein",
    "name": "Veg Chowmein",
    "category": "chinese",
    "price": 190,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 3800,
    "description": "The street-style classic that made Chaplin famous! Fresh noodles wok-tossed with cabbage, carrots, onion, and secret spice mix.",
    "image": "./images/dishes/veg-chowmein.jpg",
    "tags": [
      "Chaplin Legend",
      "50% Off Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-garlic-chowmein",
    "name": "Veg Garlic Chowmein",
    "category": "chinese",
    "price": 320,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1120,
    "description": "Chowmein infused with lots of golden toasted garlic and fresh scallions.",
    "image": "./images/dishes/veg-garlic-chowmein.jpg",
    "tags": [
      "Garlic Flavour"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-chowmein",
    "name": "Paneer Chowmein",
    "category": "chinese",
    "price": 380,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2200,
    "description": "Street-style chowmein loaded with generous cubes of fresh soft paneer and crunchy vegetables.",
    "image": "./images/dishes/paneer-chowmein.jpg",
    "tags": [
      "Paneer Loaded",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-special-chowmein",
    "name": "Veg Special Chowmein (Chaplin Special)",
    "category": "chinese",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1450,
    "description": "Chef's deluxe mix with mushrooms, paneer cubes, baby corn, and extra toppings.",
    "image": "./images/dishes/veg-special-chowmein.jpg",
    "tags": [
      "Deluxe Noodles"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-hakka-noodles",
    "name": "Veg Hakka Noodles",
    "category": "chinese",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1390,
    "description": "Authentic Indo-Chinese thin noodles tossed lightly with capsicum, beans, sprouts, and white pepper.",
    "image": "./images/dishes/veg-hakka-noodles.jpg",
    "tags": [
      "Hakka Style"
    ],
    "spiceLevel": "Mild-Medium"
  },
  {
    "id": "egg-chowmein",
    "name": "Egg Chowmein",
    "category": "chinese",
    "price": 320,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1050,
    "description": "Wok-fried noodles scrambled with fluffy farm-fresh eggs, onions, and spicy Chinese sauces.",
    "image": "./images/dishes/egg-chowmein.jpg",
    "tags": [
      "High Protein"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-chowmein",
    "name": "Chicken Chowmein",
    "category": "chinese",
    "price": 350,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2600,
    "description": "Wok-tossed noodles packed with tender shredded chicken chunks and crunchy garden vegetables.",
    "image": "./images/dishes/chicken-chowmein.jpg",
    "tags": [
      "Chicken Classic",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-garlic-chowmein",
    "name": "Chicken Garlic Chowmein",
    "category": "chinese",
    "price": 380,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 980,
    "description": "Spicy chicken noodles bursting with roasted minced garlic and red chilli oil.",
    "image": "./images/dishes/chicken-garlic-chowmein.jpg",
    "tags": [
      "Garlic Punch"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-special-chowmein",
    "name": "Chicken Special Chowmein (Chaplin Special)",
    "category": "chinese",
    "price": 390,
    "isVeg": false,
    "rating": 4.9,
    "reviewsCount": 1720,
    "description": "Loaded with shredded chicken, scrambled eggs, button mushrooms, and exotic Asian herbs.",
    "image": "./images/dishes/chicken-special-chowmein.jpg",
    "tags": [
      "All-in-One Feast"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-hakka-noodles",
    "name": "Chicken Hakka Noodles",
    "category": "chinese",
    "price": 390,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1240,
    "description": "Traditional Calcutta-style Hakka noodles tossed with sliced chicken breast, julienne veggies, and white pepper.",
    "image": "./images/dishes/chicken-hakka-noodles.jpg",
    "tags": [
      "Hakka Style"
    ],
    "spiceLevel": "Mild-Medium"
  },
  {
    "id": "veg-fried-rice",
    "name": "Veg Fried Rice",
    "category": "chinese",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1530,
    "description": "Aromatic basmati rice tossed in blazing wok with diced carrots, beans, onions, and light soya sauce.",
    "image": "./images/dishes/veg-fried-rice.jpg",
    "tags": [
      "Wok Tossed"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-garlic-fried-rice",
    "name": "Veg Garlic Fried Rice (Chilly Garlic Rice)",
    "category": "chinese",
    "price": 390,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 890,
    "description": "Fragrant rice stir-fried with generous browned garlic, red chilli flakes, and spring onions.",
    "image": "./images/dishes/veg-garlic-fried-rice.jpg",
    "tags": [
      "Chilli Garlic"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-fried-rice",
    "name": "Paneer Fried Rice",
    "category": "chinese",
    "price": 450,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1680,
    "description": "Wok-fried rice abundantly tossed with golden paneer cubes and crunchy vegetables.",
    "image": "./images/dishes/paneer-fried-rice.jpg",
    "tags": [
      "Paneer Loaded"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-special-fried-rice",
    "name": "Veg Special Fried Rice (Chaplin Special)",
    "category": "chinese",
    "price": 245,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1890,
    "description": "Deluxe rice tossed with mushrooms, paneer, and baby corn. 50% off promotional special!",
    "image": "./images/dishes/veg-special-fried-rice.jpg",
    "tags": [
      "50% Off",
      "Special Treat"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "egg-fried-rice",
    "name": "Egg Fried Rice",
    "category": "chinese",
    "price": 400,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1150,
    "description": "Fluffy basmati rice tossed with beaten egg ribbons, spring onions, and oriental seasoning.",
    "image": "./images/dishes/egg-fried-rice.jpg",
    "tags": [
      "Classic"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-fried-rice",
    "name": "Chicken Fried Rice",
    "category": "chinese",
    "price": 430,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2100,
    "description": "Wok-charred rice loaded with diced chicken chunks and colourful vegetables.",
    "image": "./images/dishes/chicken-fried-rice.jpg",
    "tags": [
      "Chicken Fried Rice",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-garlic-fried-rice",
    "name": "Chicken Garlic Fried Rice",
    "category": "chinese",
    "price": 440,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 920,
    "description": "Spicy chicken fried rice elevated with pungent browned garlic and roasted chillies.",
    "image": "./images/dishes/chicken-garlic-fried-rice.jpg",
    "tags": [
      "Garlic Twist"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-special-fried-rice",
    "name": "Chicken Special Fried Rice",
    "category": "chinese",
    "price": 450,
    "isVeg": false,
    "rating": 4.9,
    "reviewsCount": 1470,
    "description": "Chef's master fried rice loaded with chicken, eggs, and sliced mushrooms.",
    "image": "./images/dishes/chicken-special-fried-rice.jpg",
    "tags": [
      "House Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-chopsuey",
    "name": "Veg Chopsuey",
    "category": "chinese",
    "price": 240,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Crispy fried noodles topped with mixed vegetables in sweet and tangy Cantonese gravy.",
    "image": "./images/dishes/veg-chopsuey.jpg",
    "tags": [
      "Crispy Noodle Base"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-chinese-chopsuey",
    "name": "Veg Chinese Chopsuey",
    "category": "chinese",
    "price": 260,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 780,
    "description": "Crispy noodles crowned with fresh vegetable medley in savory white garlic glaze.",
    "image": "./images/dishes/veg-chinese-chopsuey.jpg",
    "tags": [
      "White Gravy"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-american-chopsuey",
    "name": "Chicken American Chopsuey",
    "category": "chinese",
    "price": 320,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1120,
    "description": "Crunchy fried noodles bed smothered with shredded chicken, sunny egg, and tangy sweet-sour sauce.",
    "image": "./images/dishes/veg-chopsuey.jpg",
    "tags": [
      "American Classic",
      "Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chopsuey-non-veg",
    "name": "Chopsuey (Non-Veg)",
    "category": "chinese",
    "price": 250,
    "isVeg": false,
    "rating": 4.7,
    "reviewsCount": 420,
    "description": "Crispy noodles served with chicken slices and fresh vegetables in tangy red sauce.",
    "image": "./images/dishes/veg-chopsuey.jpg",
    "tags": [
      "Non-Veg"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-manchow-soup",
    "name": "Veg Manchow Soup",
    "category": "soups",
    "price": 200,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1540,
    "description": "Spicy and thick Indo-Chinese soup loaded with chopped vegetables, coriander, and crispy fried noodles.",
    "image": "./images/dishes/veg-manchow-soup.jpg",
    "tags": [
      "#1 Soup",
      "Crispy Noodles"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "veg-hot-sour-soup",
    "name": "Veg Hot & Sour Soup",
    "category": "soups",
    "price": 200,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 880,
    "description": "Classic hot and tangy broth flavored with white vinegar, black pepper, and fresh diced vegetables.",
    "image": "./images/dishes/veg-hot-sour-soup.jpg",
    "tags": [
      "Tangy & Spicy"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "veg-talumein-soup",
    "name": "Veg Talumein Soup",
    "category": "soups",
    "price": 200,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 510,
    "description": "Comforting noodle soup with cabbage, carrots, mushrooms, and warm seasoned clear broth.",
    "image": "./images/dishes/veg-talumein-soup.jpg",
    "tags": [
      "Noodle Soup"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-sweet-corn-soup",
    "name": "Veg Sweet Corn Soup",
    "category": "soups",
    "price": 200,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 920,
    "description": "Creamy golden sweet corn soup with velvety smooth texture and mild garden vegetables.",
    "image": "./images/dishes/veg-sweet-corn-soup.jpg",
    "tags": [
      "Mild & Sweet"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-manchow-soup",
    "name": "Chicken Manchow Soup",
    "category": "soups",
    "price": 240,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1680,
    "description": "Hearty chicken and egg drop soup with spicy dark soy and crunchy fried noodles on top.",
    "image": "./images/dishes/chicken-manchow-soup.jpg",
    "tags": [
      "Chicken Soup",
      "Bestseller"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-hot-sour-soup",
    "name": "Chicken Hot & Sour Soup",
    "category": "soups",
    "price": 240,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Spicy chicken broth laced with red chillies, vinegar, egg drop, and shredded chicken.",
    "image": "./images/dishes/chicken-hot-sour-soup.jpg",
    "tags": [
      "Spicy Broth"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chicken-talumein-soup",
    "name": "Chicken Talumein Soup",
    "category": "soups",
    "price": 240,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 640,
    "description": "Warm chicken and noodle soup in wholesome aromatic clear broth.",
    "image": "./images/dishes/chicken-talumein-soup.jpg",
    "tags": [
      "Noodle Soup"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-sweet-corn-soup",
    "name": "Chicken Sweet Corn Soup",
    "category": "soups",
    "price": 240,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 990,
    "description": "Classic creamy sweet corn soup enriched with shredded chicken and egg strands.",
    "image": "./images/dishes/chicken-sweet-corn-soup.jpg",
    "tags": [
      "Comforting"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "duplex-platter",
    "name": "Duplex Platter",
    "category": "platters",
    "price": 260,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1350,
    "description": "Super value snack party: Mushroom Duplex (6 pcs) + Paneer Fingers (6 pcs) + Spring Rolls (5 pcs).",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Party Feast",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "tandoori-platter",
    "name": "Tandoori Platter",
    "category": "platters",
    "price": 280,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1980,
    "description": "Malai Chaap + Masala Chaap + Paneer Tikka + 2 Mushroom Duplex + 2 Paneer Fingers with mint dip & salad.",
    "image": "./images/dishes/paneer-tikka.jpg",
    "tags": [
      "Tandoori Feast",
      "Top Platter"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chinese-platter",
    "name": "Chinese Platter",
    "category": "platters",
    "price": 250,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2200,
    "description": "Veg Noodles + 2 pcs Paneer Chilli Dry + 2 pcs Veg Manchurian Gravy + 2 Veg Steamed Momos + 1 Cigar Roll.",
    "image": "./images/dishes/veg-chowmein.jpg",
    "tags": [
      "All-in-One Chinese"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "veg-thali",
    "name": "Veg Thali",
    "category": "platters",
    "price": 180,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1140,
    "description": "Dal Makhani, Shahi Paneer, Steamed Rice, 3 Butter Rotis, and Fresh Salad.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Complete Meal"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-thali-raita",
    "name": "Veg Thali with Raita",
    "category": "platters",
    "price": 200,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 960,
    "description": "Dal Makhani, Paneer dish, Rice, 3 Butter Rotis, Fresh Bundi Raita, and Salad.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "With Raita"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "simple-veg-thali",
    "name": "Simple Veg Thali",
    "category": "platters",
    "price": 140,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 820,
    "description": "Yellow Dal / Dal Fry, Mix Vegetable, 3 Rotis, and Salad. Pocket friendly homely comfort.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Homely & Affordable"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "non-veg-thali",
    "name": "Non Veg Thali",
    "category": "platters",
    "price": 250,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1830,
    "description": "Rich Chicken Curry, Dal Makhani, Jeera Rice, 3 Butter Rotis, and Fresh Salad.",
    "image": "./images/dishes/chicken-curry.jpg",
    "tags": [
      "Royal Non-Veg"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "dal-makhani",
    "name": "Dal Makhani (Serves 3)",
    "category": "curries",
    "price": 320,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 4200,
    "description": "Slow-simmered black urad lentils & kidney beans finished with country cream and dollops of white butter.",
    "image": "./images/dishes/dal-makhani.jpg",
    "tags": [
      "Punjabi Heritage",
      "Top Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "dal-tadka",
    "name": "Dal Tadka (Serves 3)",
    "category": "curries",
    "price": 320,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 840,
    "description": "Yellow lentils tempered with ghee, cumin seeds, garlic, dried red chillies, and fresh coriander.",
    "image": "./images/dishes/yellow-dal.jpg",
    "tags": [
      "Ghee Tadka"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "yellow-dal",
    "name": "Yellow Dal (Serves 3)",
    "category": "curries",
    "price": 320,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Homestyle moong & arhar dal gently seasoned with turmeric, ginger, and cumin.",
    "image": "./images/dishes/yellow-dal.jpg",
    "tags": [
      "Homestyle"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "dal-fry",
    "name": "Dal Fry",
    "category": "curries",
    "price": 220,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 520,
    "description": "Spiced lentils fried with tomatoes, onions, and garam masala.",
    "image": "./images/dishes/yellow-dal.jpg",
    "tags": [
      "Classic"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "shahi-paneer",
    "name": "Shahi Paneer (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 3100,
    "description": "Melt-in-mouth cottage cheese cooked in creamy tomato, cashew nut, and melon seed gravy with hint of saffron.",
    "image": "./images/dishes/shahi-paneer.jpg",
    "tags": [
      "Royal Makhani",
      "Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "kadhai-paneer",
    "name": "Kadhai Paneer (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2800,
    "description": "Paneer cubes wok-cooked with thick bell peppers, onions, and freshly pounded coriander & red chillies.",
    "image": "./images/dishes/kadhai-paneer.jpg",
    "tags": [
      "Kadhai Masala"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-tikka-butter-masala",
    "name": "Paneer Tikka Butter Masala (Serves 3)",
    "category": "curries",
    "price": 550,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2200,
    "description": "Smoky tandoori paneer tikka chunks steeped in velvety butter masala gravy.",
    "image": "./images/dishes/paneer-tikka-butter-masala.jpg",
    "tags": [
      "Tandoor in Gravy"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "paneer-do-pyaza",
    "name": "Paneer Do Pyaza (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Rich onion-based curry prepared with twice the onions — caramelized and crunchy petal style.",
    "image": "./images/dishes/paneer-do-pyaza.jpg",
    "tags": [
      "Onion Special"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "masala-paneer",
    "name": "Masala Paneer (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 950,
    "description": "Thick, rustic tomato-onion masala infused with whole cloves, cinnamon, and soft paneer.",
    "image": "./images/dishes/masala-paneer.jpg",
    "tags": [
      "Spiced Masala"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-khurchan",
    "name": "Paneer Khurchan",
    "category": "curries",
    "price": 480,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 810,
    "description": "Semi-dry tawa-scraped paneer strips tossed with capsicum, tomatoes, and aromatic whole spices.",
    "image": "./images/dishes/paneer-khurchan.jpg",
    "tags": [
      "Chef Secret"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "paneer-makhani",
    "name": "Paneer Makhani",
    "category": "curries",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1200,
    "description": "Luscious tomato and butter gravy cooked gently with sweet spices and soft cottage cheese.",
    "image": "./images/dishes/shahi-paneer.jpg",
    "tags": [
      "Butter Gravy"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "paneer-bhurji",
    "name": "Paneer Bhurji",
    "category": "curries",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 990,
    "description": "Crumbled fresh paneer tempered with ginger, green chillies, onions, tomatoes, and coriander.",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Scrambled Delight"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "mattar-paneer",
    "name": "Mattar Paneer",
    "category": "curries",
    "price": 380,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 780,
    "description": "Sweet tender green peas and paneer cubes in homestyle Punjabi onion-tomato gravy.",
    "image": "./images/dishes/kadhai-paneer.jpg",
    "tags": [
      "Homely Classic"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "palak-paneer",
    "name": "Palak Paneer",
    "category": "curries",
    "price": 350,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Blanched spinach puree tempered with garlic and ginger, gently simmered with cottage cheese.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Spinach Special"
    ],
    "spiceLevel": "Mild-Medium"
  },
  {
    "id": "cheese-tomato",
    "name": "Cheese Tomato (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1650,
    "description": "Classic Punjabi delicacy: rich sweet-tangy tomato gravy studded with thick fried paneer blocks.",
    "image": "./images/dishes/shahi-paneer.jpg",
    "tags": [
      "Old Chaplin Star"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "mushroom-masala",
    "name": "Mushroom Masala (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1220,
    "description": "Plump button mushrooms cooked in thick roasted brown onion and tomato masala gravy.",
    "image": "./images/dishes/mushroom-masala.jpg",
    "tags": [
      "Mushroom Lovers"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "mushroom-corn",
    "name": "Mushroom Corn (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 760,
    "description": "Tender mushrooms and sweet yellow corn in creamy spiced masala gravy.",
    "image": "./images/dishes/mushroom-corn.jpg",
    "tags": [
      "Sweet & Savory"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "mushroom-do-pyaza",
    "name": "Mushroom Do Pyaza (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 680,
    "description": "Fresh mushrooms cooked with two styles of onion in rich spiced gravy.",
    "image": "./images/dishes/mushroom-do-pyaza.jpg",
    "tags": [
      "Double Onion"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "mushroom-makhani",
    "name": "Mushroom Makhani (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 710,
    "description": "Button mushrooms simmered in silky smooth butter-cream makhani gravy.",
    "image": "./images/dishes/mushroom-makhani.jpg",
    "tags": [
      "Makhani Gravy"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "mushroom-mattar",
    "name": "Mushroom Mattar",
    "category": "curries",
    "price": 380,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 590,
    "description": "Mushroom slices and green peas in spiced brown gravy.",
    "image": "./images/dishes/mushroom-masala.jpg",
    "tags": [
      "Mushroom Peas"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "mixed-veg",
    "name": "Mixed Veg (Serves 3)",
    "category": "curries",
    "price": 450,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 880,
    "description": "Seasonal medley of carrots, green beans, cauliflower, green peas, and paneer cooked dry-style.",
    "image": "./images/dishes/mixed-veg.jpg",
    "tags": [
      "Garden Fresh"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "malai-kofta",
    "name": "Malai Kofta (Serves 3)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2350,
    "description": "Golden fried paneer and potato dumplings filled with dry fruits, soaked in decadent cashew gravy.",
    "image": "./images/dishes/malai-kofta.jpg",
    "tags": [
      "Royal Feast",
      "Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chana-masala",
    "name": "Chana Masala",
    "category": "curries",
    "price": 330,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 920,
    "description": "Authentic Amritsari spiced chickpeas stewed with pomegranate seeds and dry mango.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Amritsari Style"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "chana-pindi",
    "name": "Chana Pindi",
    "category": "curries",
    "price": 300,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 750,
    "description": "Rawalpindi style dark dry chickpeas cooked with special roasted spices and carom seeds.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Pindi Special"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "dum-aloo",
    "name": "Dum Aloo",
    "category": "curries",
    "price": 350,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 610,
    "description": "Baby potatoes slow cooked on dum in rich spiced Kashmiri style fennel gravy.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Dum Cooked"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "butter-chicken",
    "name": "Butter Chicken",
    "category": "curries",
    "price": 620,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 4500,
    "description": "Tender tandoor-roasted chicken simmered in rich creamy tomato, butter, and fenugreek gravy. Legendary taste!",
    "image": "./images/dishes/chicken-curry.jpg",
    "tags": [
      "#1 Punjabi Chicken",
      "Must Try"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Full Portion",
        "price": 620
      },
      {
        "name": "Half Portion",
        "price": 350
      },
      {
        "name": "Boneless (Full)",
        "price": 650
      },
      {
        "name": "Boneless (Half)",
        "price": 400
      }
    ]
  },
  {
    "id": "masala-chicken",
    "name": "Masala Chicken",
    "category": "curries",
    "price": 560,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1680,
    "description": "Spiced roasted chicken cooked in thick bhuna masala gravy with onions, green chillies, and ginger.",
    "image": "./images/dishes/masala-chicken.jpg",
    "tags": [
      "Bhuna Masala"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 560
      },
      {
        "name": "Half (Card Price)",
        "price": 350
      }
    ]
  },
  {
    "id": "tawa-chicken",
    "name": "Tawa Chicken",
    "category": "curries",
    "price": 620,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1340,
    "description": "Spicy road-side style chicken cooked on large iron griddle with tomatoes and freshly ground spices.",
    "image": "./images/dishes/masala-chicken.jpg",
    "tags": [
      "Tawa Special"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 620
      },
      {
        "name": "Half Portion",
        "price": 350
      }
    ]
  },
  {
    "id": "kadhai-chicken",
    "name": "Kadhai Chicken",
    "category": "curries",
    "price": 600,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2100,
    "description": "Chicken pieces tossed in wok with bell peppers, onions, crushed coriander, and dried red chillies.",
    "image": "./images/dishes/kadhai-chicken.jpg",
    "tags": [
      "Kadhai Flavour"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 600
      },
      {
        "name": "Half (Card Price)",
        "price": 350
      }
    ]
  },
  {
    "id": "ghar-ka-chicken",
    "name": "Ghar Ka Chicken",
    "category": "curries",
    "price": 560,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1450,
    "description": "Light, comforting home-style chicken curry with ginger, garlic, and whole spices.",
    "image": "./images/dishes/ghar-ka-chicken.jpg",
    "tags": [
      "Homestyle Comfort"
    ],
    "spiceLevel": "Medium",
    "variants": [
      {
        "name": "Full Portion",
        "price": 560
      },
      {
        "name": "Half Portion",
        "price": 350
      }
    ]
  },
  {
    "id": "chicken-curry",
    "name": "Chicken Curry",
    "category": "curries",
    "price": 600,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1980,
    "description": "Rich Punjabi chicken curry cooked in onion-tomato gravy with aromatic garam masala.",
    "image": "./images/dishes/chicken-curry.jpg",
    "tags": [
      "Tari Wala Chicken"
    ],
    "spiceLevel": "Medium",
    "variants": [
      {
        "name": "Full Portion",
        "price": 600
      },
      {
        "name": "Half Portion",
        "price": 350
      }
    ]
  },
  {
    "id": "chicken-tikka-butter-masala",
    "name": "Chicken Tikka Butter Masala",
    "category": "curries",
    "price": 600,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2700,
    "description": "Charcoal grilled boneless chicken tikka cooked in rich buttery makhani gravy.",
    "image": "./images/dishes/chicken-tikka-butter-masala.jpg",
    "tags": [
      "Boneless Treat",
      "Bestseller"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "chicken-biryani",
    "name": "Chicken Biryani",
    "category": "curries",
    "price": 280,
    "isVeg": false,
    "rating": 4.8,
    "reviewsCount": 1420,
    "description": "Fragrant basmati rice layered with spiced chicken, caramelized onions, mint, and saffron.",
    "image": "./images/dishes/chicken-fried-rice.jpg",
    "tags": [
      "Dum Biryani"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "egg-curry",
    "name": "Egg Curry",
    "category": "curries",
    "price": 300,
    "isVeg": false,
    "rating": 4.7,
    "reviewsCount": 890,
    "description": "Hard-boiled eggs browned in ghee and simmered in spicy Punjabi onion-tomato gravy.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Egg Lovers"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "kadhai-soya-chaap",
    "name": "Kadhai Soya Chaap (Gravy)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1540,
    "description": "Soya chaap tossed with crunchy capsicums, onions, and freshly ground kadhai spices in thick gravy.",
    "image": "./images/dishes/kadhai-soya-chaap.jpg",
    "tags": [
      "Kadhai Chaap"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 530
      },
      {
        "name": "Half (Card Price)",
        "price": 200
      }
    ]
  },
  {
    "id": "shahi-soya-chaap",
    "name": "Shahi Soya Chaap (Gravy)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1220,
    "description": "Royal preparation of tender chaap in velvety cashew and dairy cream gravy.",
    "image": "./images/dishes/shahi-soya-chaap.jpg",
    "tags": [
      "Royal Gravy"
    ],
    "spiceLevel": "Mild",
    "variants": [
      {
        "name": "Full Portion",
        "price": 530
      },
      {
        "name": "Half Portion",
        "price": 200
      }
    ]
  },
  {
    "id": "soya-chaap-tikka-butter-masala",
    "name": "Soya Chaap Tikka Butter Masala (Gravy)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2400,
    "description": "Tandoori roasted chaap chunks in rich tomato butter masala sauce.",
    "image": "./images/dishes/soya-chaap-tikka-butter-masala.jpg",
    "tags": [
      "Butter Masala",
      "Bestseller"
    ],
    "spiceLevel": "Medium",
    "variants": [
      {
        "name": "Full Portion",
        "price": 530
      },
      {
        "name": "Half Portion",
        "price": 200
      }
    ]
  },
  {
    "id": "tawa-chaap",
    "name": "Tawa Chaap",
    "category": "curries",
    "price": 380,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Sizzling griddle chaap cooked with onions, tomatoes, and spicy Punjabi masala.",
    "image": "./images/dishes/kadhai-soya-chaap.jpg",
    "tags": [
      "Tawa Special"
    ],
    "spiceLevel": "Hot",
    "variants": [
      {
        "name": "Full Portion",
        "price": 380
      },
      {
        "name": "Half Portion",
        "price": 200
      }
    ]
  },
  {
    "id": "butter-soya-chaap",
    "name": "Butter Soya Chaap (Gravy)",
    "category": "curries",
    "price": 530,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1890,
    "description": "Soya chaap cooked in ultra-rich red makhani gravy with butter swirl.",
    "image": "./images/dishes/butter-soya-chaap.jpg",
    "tags": [
      "Makhani Gravy"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "cheese-naan-gravy",
    "name": "Cheese Naan with Gravy",
    "category": "tandoori_bread",
    "price": 220,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 3900,
    "description": "Legendary Sector 34 favourite! Stuffed with 100% real mozzarella cheese, baked in clay oven, served with rich Makhani gravy.",
    "image": "./images/hero_cheesenaan.jpg",
    "tags": [
      "#1 Cheese Pull",
      "Sector 34 Icon"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "chicken-naan-gravy",
    "name": "Chicken Naan with Gravy",
    "category": "tandoori_bread",
    "price": 280,
    "isVeg": false,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1950,
    "description": "Tandoori naan stuffed with spicy minced chicken, served with decadent chicken curry gravy.",
    "image": "./images/dishes/butter-naan.jpg",
    "tags": [
      "Stuffed Chicken Naan"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "onion-naan-gravy",
    "name": "Onion Naan with Gravy",
    "category": "tandoori_bread",
    "price": 220,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1120,
    "description": "Crispy tandoori naan stuffed with spiced onions and coriander, served with aromatic Dal Makhani gravy.",
    "image": "./images/dishes/butter-naan.jpg",
    "tags": [
      "Stuffed Naan"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "plain-naan",
    "name": "Plain Naan",
    "category": "tandoori_bread",
    "price": 80,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 980,
    "description": "Soft, pillowy leavened bread freshly baked on the inner walls of charcoal tandoor.",
    "image": "./images/dishes/plain-naan.jpg",
    "tags": [
      "Tandoor Fresh"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "butter-naan",
    "name": "Butter Naan",
    "category": "tandoori_bread",
    "price": 90,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 4100,
    "description": "Fluffy tandoori naan brushed generously with melted Amul butter.",
    "image": "./images/dishes/butter-naan.jpg",
    "tags": [
      "Most Ordered"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "garlic-naan",
    "name": "Garlic Naan",
    "category": "tandoori_bread",
    "price": 95,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2900,
    "description": "Topped with freshly minced garlic and chopped coriander, baked crisp and buttered.",
    "image": "./images/dishes/butter-naan.jpg",
    "tags": [
      "Garlic Topped",
      "Bestseller"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "lachha-paratha",
    "name": "Lachha Paratha (Butter Lachha Parantha)",
    "category": "tandoori_bread",
    "price": 70,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1480,
    "description": "Multi-layered flaky whole wheat paratha baked in clay tandoor with pure ghee.",
    "image": "./images/dishes/lachha-paratha.jpg",
    "tags": [
      "Flaky Layers"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "garlic-parantha",
    "name": "Garlic Parantha",
    "category": "tandoori_bread",
    "price": 80,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 790,
    "description": "Flaky layered paratha embedded with toasted garlic and coriander.",
    "image": "./images/dishes/lachha-paratha.jpg",
    "tags": [
      "Garlic Paratha"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "mirchi-parantha",
    "name": "Mirchi Parantha",
    "category": "tandoori_bread",
    "price": 80,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Layered tandoori paratha infused with fiery green and red chilli powder.",
    "image": "./images/dishes/lachha-paratha.jpg",
    "tags": [
      "Spicy Paratha"
    ],
    "spiceLevel": "Hot"
  },
  {
    "id": "missi-roti",
    "name": "Missi Roti",
    "category": "tandoori_bread",
    "price": 80,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Gram flour (besan) and whole wheat bread seasoned with ajwain, onions, and fenugreek.",
    "image": "./images/dishes/missi-roti.jpg",
    "tags": [
      "Traditional Punjabi"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "tandoori-butter-roti",
    "name": "Tandoori Butter Roti",
    "category": "tandoori_bread",
    "price": 50,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 3200,
    "description": "Whole wheat roti baked crisp in tandoor and brushed with butter.",
    "image": "./images/dishes/tandoori-butter-roti.jpg",
    "tags": [
      "Daily Essential"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "tandoori-roti",
    "name": "Tandoori Roti",
    "category": "tandoori_bread",
    "price": 40,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 1800,
    "description": "Classic oil-free whole wheat roti baked in charcoal oven.",
    "image": "./images/dishes/tandoori-roti.jpg",
    "tags": [
      "Healthy & Crisp"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "rumali-roti",
    "name": "Rumali Roti",
    "category": "tandoori_bread",
    "price": 60,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1450,
    "description": "Paper-thin, soft handkerchief bread hand-stretched and tossed over dome tawa.",
    "image": "./images/dishes/plain-naan.jpg",
    "tags": [
      "Soft & Thin"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "steamed-rice",
    "name": "Steamed / Plain Rice",
    "category": "curries",
    "price": 150,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 820,
    "description": "Fluffy, long grain aromatic basmati steamed rice.",
    "image": "./images/dishes/steamed-rice.jpg",
    "tags": [
      "Basmati Rice"
    ],
    "spiceLevel": "None"
  },
  {
    "id": "jeera-rice",
    "name": "Jeera / Zeera Rice",
    "category": "curries",
    "price": 180,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1200,
    "description": "Aromatic basmati rice tempered with cumin seeds and desi ghee.",
    "image": "./images/dishes/jeera-rice.jpg",
    "tags": [
      "Jeera Tadka"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "veg-biryani",
    "name": "Veg Biryani",
    "category": "curries",
    "price": 250,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Layered basmati rice with mixed vegetables, paneer cubes, saffron, and biryani spices.",
    "image": "./images/dishes/paneer-fried-rice.jpg",
    "tags": [
      "Dum Biryani"
    ],
    "spiceLevel": "Medium"
  },
  {
    "id": "raita",
    "name": "Boondi Raita",
    "category": "curries",
    "price": 100,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 740,
    "description": "Chilled whipped yoghurt with spiced boondi, roasted cumin, and black salt.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Cooling Side"
    ],
    "spiceLevel": "Mild"
  },
  {
    "id": "schezwan-sauce-extra",
    "name": "Schezwan Sauce (Accompaniment)",
    "category": "chinese",
    "price": 20,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 950,
    "description": "Chaps-In famous homemade fiery red Schezwan dip made with garlic and roasted chillies.",
    "image": "./images/dishes/honey-chilli-potato.jpg",
    "tags": [
      "Fiery Dip"
    ],
    "spiceLevel": "Extra Hot"
  },
  {
    "id": "mango-boba-tea",
    "name": "Mango Boba Tea (500 ml)",
    "category": "beverages",
    "price": 140,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1890,
    "description": "Alphonso mango milk tea with chewy black tapioca pearls and salted cheese foam top. 50% promotional special!",
    "image": "./images/dishes/mango-boba-tea.jpg",
    "tags": [
      "Trending Boba",
      "50% Off"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "choco-signature-boba",
    "name": "Choco Signature Boba (500 ml)",
    "category": "beverages",
    "price": 279,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1420,
    "description": "Rich dark Belgian chocolate milkshake loaded with chewy boba pearls and whipped cream.",
    "image": "./images/dishes/choco-signature-boba.jpg",
    "tags": [
      "Dark Choco",
      "Bestseller"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "oreo-cloud-boba",
    "name": "Oreo Cloud Boba (500 ml)",
    "category": "beverages",
    "price": 140,
    "isVeg": true,
    "rating": 4.9,
    "reviewsCount": 1650,
    "description": "Thick Oreo cookies & cream smoothie layered with tapioca pearls and cloud foam. 50% promotional special!",
    "image": "./images/dishes/oreo-cloud-boba.jpg",
    "tags": [
      "Oreo Cloud",
      "50% Off"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "blueberry-boba-tea",
    "name": "Blueberry Boba Tea (500 ml)",
    "category": "beverages",
    "price": 279,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 980,
    "description": "Real wild blueberry fruit puree blended with creamy milk tea and brown sugar boba.",
    "image": "./images/dishes/blueberry-boba-tea.jpg",
    "tags": [
      "Wild Berry"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "lemon-ice-tea",
    "name": "Lemon Ice Tea",
    "category": "beverages",
    "price": 145,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 890,
    "description": "Brewed black tea infused with fresh lemon juice, crushed mint, and crystal ice cubes.",
    "image": "./images/dishes/lemon-ice-tea.jpg",
    "tags": [
      "Refreshing"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "peach-ice-tea",
    "name": "Peach Ice Tea",
    "category": "beverages",
    "price": 145,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 780,
    "description": "Sweet orchard peach nectar brewed with premium iced tea and mint leaves.",
    "image": "./images/dishes/lemon-ice-tea.jpg",
    "tags": [
      "Fruity"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "blue-ocean-soda",
    "name": "Blue Ocean Soda",
    "category": "beverages",
    "price": 160,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1350,
    "description": "Vibrant blue Curacao mocktail with sparkling soda, lime juice, and green apple slice.",
    "image": "./images/dishes/blue-ocean-soda.jpg",
    "tags": [
      "Signature Mocktail",
      "Bestseller"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "lemon-soda",
    "name": "Lemon Soda",
    "category": "beverages",
    "price": 145,
    "isVeg": true,
    "rating": 4.7,
    "reviewsCount": 650,
    "description": "Freshly squeezed lemon with sparkling soda — choose sweet, salted, or mixed.",
    "image": "./images/dishes/blue-ocean-soda.jpg",
    "tags": [
      "Chilled Soda"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "fruit-beer",
    "name": "Fruit Beer (Non-Alcoholic)",
    "category": "beverages",
    "price": 135,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 2200,
    "description": "Chandigarh's nostalgic favourite! Chilled, fizzy, zero-alcohol spiced fruit beer with frothy head.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Tricity Classic",
      "0.0% Alcohol"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "cold-chocolate",
    "name": "Cold Chocolate",
    "category": "beverages",
    "price": 170,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 620,
    "description": "Rich blended chocolate shake with cocoa powder and ice cream.",
    "image": "./images/dishes/choco-signature-boba.jpg",
    "tags": [
      "Chocolate Lovers"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "chocolate-shake",
    "name": "Chocolate Shake",
    "category": "beverages",
    "price": 170,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 880,
    "description": "Thick creamy chocolate milkshake topped with chocolate drizzle.",
    "image": "./images/dishes/choco-signature-boba.jpg",
    "tags": [
      "Thick Shake"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "kesar-badam-shake",
    "name": "Kesar Badam Shake",
    "category": "beverages",
    "price": 140,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 710,
    "description": "Traditional royal saffron and almond flavored creamy milk beverage.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Royal Taste"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "blueberry-shake",
    "name": "Blueberry Shake",
    "category": "beverages",
    "price": 170,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 640,
    "description": "Real blueberries churned into thick ice cream milkshake.",
    "image": "./images/dishes/blueberry-boba-tea.jpg",
    "tags": [
      "Berry Delight"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "strawberry-shake",
    "name": "Strawberry Shake",
    "category": "beverages",
    "price": 170,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 590,
    "description": "Pink strawberry milkshake with crushed strawberry compote.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Fruity Shake"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "butterscotch-shake",
    "name": "Butterscotch Shake",
    "category": "beverages",
    "price": 170,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 730,
    "description": "Caramel and butterscotch praline milkshake with crunchy bits.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "Butterscotch Crunch"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "mint-mojito",
    "name": "Mint Mojito",
    "category": "beverages",
    "price": 160,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 1100,
    "description": "Muddled fresh mint leaves, lime wedges, simple syrup, and fizzy soda over crushed ice.",
    "image": "./images/dishes/watermelon-mojito.jpg",
    "tags": [
      "Classic Cooler"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "watermelon-mojito",
    "name": "Watermelon Mojito",
    "category": "beverages",
    "price": 160,
    "isVeg": true,
    "isBestseller": true,
    "rating": 4.9,
    "reviewsCount": 1480,
    "description": "Juicy fresh watermelon juice, garden mint, lime, and sparkling soda.",
    "image": "./images/dishes/watermelon-mojito.jpg",
    "tags": [
      "Summer Special"
    ],
    "spiceLevel": "Sweet"
  },
  {
    "id": "green-apple-mojito",
    "name": "Green Apple Mojito",
    "category": "beverages",
    "price": 160,
    "isVeg": true,
    "rating": 4.8,
    "reviewsCount": 840,
    "description": "Crisp green apple syrup with fresh mint, lime, and effervescent bubbles.",
    "image": "./images/dishes/watermelon-mojito.jpg",
    "tags": [
      "Crisp & Tart"
    ],
    "spiceLevel": "Sweet"
  }
];

export const DELIVERY_ZONES = [
  {
    "id": "chandigarh",
    "name": "Chandigarh (Sector 1 - 63)",
    "minFreeOrder": 500,
    "deliveryFee": 40,
    "eta": "25-35 mins"
  },
  {
    "id": "mohali",
    "name": "Mohali (Phase 1 - 11, Sectors)",
    "minFreeOrder": 700,
    "deliveryFee": 60,
    "eta": "35-45 mins"
  },
  {
    "id": "panchkula",
    "name": "Panchkula (Sectors 1 - 25)",
    "minFreeOrder": 600,
    "deliveryFee": 50,
    "eta": "30-40 mins"
  },
  {
    "id": "pickup",
    "name": "Self Pickup (Booth 49, Sector 34-C)",
    "minFreeOrder": 0,
    "deliveryFee": 0,
    "eta": "15 mins ready"
  }
];

export const PAYMENT_MODES = [
  {
    "id": "upi_delivery",
    "label": "UPI on Delivery (GPay / PhonePe / Paytm)",
    "icon": "📱",
    "desc": "Scan delivery partner QR upon arrival"
  },
  {
    "id": "cod",
    "label": "Cash on Delivery (COD)",
    "icon": "💵",
    "desc": "Pay cash directly when order reaches your door"
  },
  {
    "id": "upi_instant",
    "label": "Pay Now via UPI QR",
    "icon": "⚡",
    "desc": "Instant QR code will be generated to pay right away"
  }
];

export const OUTLET_INFO = {
  "name": "Chaps-In Fast Food",
  "formerName": "Chaplin Fast Food (Est. 1994)",
  "whatsappNumber": "918699822549",
  "displayPhone": "+91 86998 22549",
  "altPhone": "+91 86999 64454",
  "landline": "0172-5007759",
  "hours": "11:30 AM – 11:00 PM (All 7 Days)",
  "zomatoUrl": "https://zomato.onelink.me/xqzv/grkmtcli",
  "instagramUrl": "https://www.instagram.com/chaps_in_fastfood?exln=dzA0dXJtaDRvYXR1",
  "mapsUrl": "https://www.google.com/maps/place/Chaps-In+Fast+Food/@30.7067492,76.7678315,13z/data=!4m9!1m2!2m1!1schaps+in+fast+food!3m5!1s0x390fec4d314e2e9f:0x5937865d89cbcd9a!8m2!3d30.7182389!4d76.7665822",
  "branches": [
    {
      "name": "Chaps-In Fast Food (Main Outlet)",
      "address": "Booth No. 49, Sector 34-C, Chandigarh, 160022 (Near Uttam Sweets)",
      "phone": "+91 86998 22549",
      "isPrimary": true
    },
    {
      "name": "Chaps-In Bites",
      "address": "Booth No. 160-161, Sector 34-C, Chandigarh, 160022",
      "phone": "+91 86999 64454",
      "isPrimary": false
    },
    {
      "name": "Chaps-In Panchkula",
      "address": "Shop No. 189, Sector 16, Panchkula, Haryana",
      "phone": "+91 86998 22549",
      "isPrimary": false
    }
  ]
};
