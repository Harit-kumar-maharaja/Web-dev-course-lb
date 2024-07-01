const data = [
    {
        id:1,
        name:'Manali',
        info:"Manali, a stunning hill station in Himachal Pradesh's Kullu Valley, is renowned for its breathtaking natural beauty, adventure activities, and cultural heritage. Nestled at an altitude of 2,050 meters, Manali offers panoramic views of snow-capped mountains, lush green valleys, and the Beas River. Key attractions include the adventure hub of Solang Valley, the snow-laden Rohtang Pass, and the relaxing Vashisht Hot Springs. Adventure seekers can enjoy paragliding, skiing, river rafting, and trekking. Culturally, Manali boasts the ancient Hadimba Temple, Manu Temple, and vibrant Tibetan Monasteries, while the charming Old Manali area offers a glimpse of traditional Himachali life.",
        image:"https://t4.ftcdn.net/jpg/01/71/19/19/360_F_171191968_h1yWvnUTa0MM6iIBnGdAHZeUAJEh9dBh.jpg",
        price:'35,000'
    },
    {
        id:2,
        name:'Rishikesh',
        info:"Rishikesh, nestled in the foothills of the Himalayas in northern India, is a serene town known as the Yoga Capital of the World. It attracts global tourists with its blend of spiritual tranquility and adventure. The town is a major Hindu pilgrimage site, home to numerous ashrams and temples, including Parmarth Niketan and Neelkanth Mahadev Temple. Visitors can witness the mesmerizing Ganga Aarti at Triveni Ghat. Adventure seekers flock to Rishikesh for white-water rafting, trekking, bungee jumping, and zip-lining. Iconic landmarks like Laxman Jhula, Ram Jhula, and the Beatles Ashram add cultural charm. The town also offers vegetarian cuisine and vibrant local markets, promising an enriching experience for all.",
        image:"https://images.unsplash.com/photo-1607406374368-809f8ec7f118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlzaGlrZXNoJTJDJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        price:'35,000'
    },
    
    {
        id:3,
        name:'Leh Ladhak',
        info:"Leh-Ladakh, a captivating region in northern India, is renowned for its stark natural beauty, rich cultural heritage, and thrilling adventure opportunities. Nestled in the Himalayas, this region features rugged mountains, serene lakes, and vast, arid landscapes. The town of Leh serves as the perfect base for exploring ancient Buddhist monasteries such as Hemis, Thiksey, and Diskit, which offer deep insights into the region's spiritual heritage. The ethereal Pangong Lake, with its shifting colors, and the tranquil Tso Moriri Lake are iconic attractions for nature lovers.",
        image:"https://images.unsplash.com/photo-1593118845043-359e5f628214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVoJTIwbGFkYWtofGVufDB8fDB8fHww",
        price:'35,000'
    },
    {
        id:4,
        name:'Jammu and Kashmir',
        info:"Jammu and Kashmir, known as Paradise on Earth, is a captivating region in northern India celebrated for its stunning natural beauty, rich cultural heritage, and diverse attractions. The Kashmir Valley enchants with snow-capped mountains, lush meadows, and pristine lakes, offering destinations like Srinagar, famous for its serene Dal Lake and Mughal Gardens, and Gulmarg, a premier skiing destination with vibrant flower meadows. Adventure enthusiasts flock to Pahalgam and Sonmarg for trekking, river rafting, and paragliding. Jammu, the winter capital, is a significant pilgrimage site, home to the revered Vaishno Devi Shrine and Raghunath Temple. The region's cultural richness is reflected in its traditional crafts, vibrant festivals, and delectable cuisine. Tourists can enjoy Shikara rides on Dal Lake, explore historic Mughal architecture, and shop in local bazaars for Pashmina shawls and intricate handicrafts. With its blend of natural splendor, adventure, spirituality, and culture, Jammu and Kashmir offers an unforgettable experience for every traveler.",
        image:"https://images.unsplash.com/photo-1584732200355-486a95263014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFtbXUlMjBrYXNobWlyfGVufDB8fDB8fHww",
        price:'35,000'
    },
    {
        id:5,
        name:'Ooty',
        info:"Ooty, also known as Udhagamandalam, is a picturesque hill station in the Nilgiri Hills of Tamil Nadu, India. Renowned for its stunning landscapes, pleasant climate, and lush greenery, Ooty is a popular destination for nature lovers and honeymooners. Key attractions include the Ooty Botanical Gardens, which showcase a diverse collection of plants and flowers, and the serene Ooty Lake, perfect for boating and picnics. The Nilgiri Mountain Railway, a UNESCO World Heritage site, offers a scenic train ride through breathtaking valleys and tea plantations.",
        image:"https://images.unsplash.com/photo-1580979222901-12a0e56abf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b290eXxlbnwwfHwwfHx8MA%3D%3D",
        price:'35,000'
    },
    {
        id:6,
        name:'kanyakumari',
        info:"Kanyakumari, located at the southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean meet, is a culturally rich and historically significant destination. Renowned for its spectacular sunrise and sunset views over the ocean, Kanyakumari offers breathtaking natural beauty with its pristine beaches and rocky shores. The iconic Vivekananda Rock Memorial, situated on a small island off the coast, commemorates Swami Vivekananda's meditative sojourn here. Nearby, the Thiruvalluvar Statue, a towering 133-feet tall stone sculpture, symbolizes the Tamil poet and philosopher Thiruvalluvar. Kanyakumari is also known for its religious significance, with the Kumari Amman Temple dedicated to the goddess Kanyakumari attracting pilgrims and tourists alike. The Gandhi Memorial Mandapam, built in honor of Mahatma Gandhi, houses his ashes and provides insights into his life and philosophy. ",
        image:"https://images.unsplash.com/photo-1527705381526-469031509a9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D",
        price:'35,000'
    },
    {
        id:7,
        name:'Jaipur',
        info:"Jaipur, the vibrant capital of Rajasthan in India, is famously known as the Pink City due to the terracotta-pink hue of its historic buildings. Steeped in rich history and royal heritage, Jaipur is a delight for tourists with its majestic forts, palaces, vibrant bazaars, and cultural treasures. The city's crown jewel is the UNESCO World Heritage site, the Amer Fort, a magnificent hilltop fort with intricate architecture, stunning palaces, and sweeping views of Maota Lake. The City Palace complex, blending Rajput, Mughal, and European architectural styles, houses museums displaying royal artifacts and textiles. Jaipur's Hawa Mahal, or Palace of Winds, is an iconic pink sandstone structure with intricately carved windows, offering a glimpse into the royal women's lives. The Jantar Mantar, an astronomical observatory built in the 18th century, showcases advanced ancient Indian astronomy.",
        image:"https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
        price:'35,000'
    },
]

export default data;