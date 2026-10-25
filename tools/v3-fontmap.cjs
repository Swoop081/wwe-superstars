// Which Google Font each wrestler's name uses. Explicit picks first (matched to the character),
// everyone else gets a leftover font from a men's or women's pool. "Family:700" pins a weight.
// Run `node tools/v3-fit-fonts.cjs` afterwards to measure name widths and write v3/data/fonts.js.
const EXPLICIT = {
  // legends & icons
  'Stone Cold Steve Austin': 'Rubik Distressed', 'The Rock': 'Holtwood One SC', "The Rock '98": 'Holtwood One SC',
  'John Cena': 'Black Ops One', 'The Undertaker': 'UnifrakturCook:700', 'Kane': 'Butcherman', 'Mankind': 'Eater',
  'Cactus Jack': 'Rubik Burned', 'Dude Love': 'Fontdiner Swanky', 'Triple H': 'Goldman:700', 'Triple H DX': 'Sedgwick Ave Display',
  'King of Kings': 'Cinzel Decorative:900', 'Shawn Michaels': 'Shrikhand', 'Shawn Michaels DX': 'Rubik Spray Paint',
  'Roman Reigns': 'Anton', 'Roman Reigns (Shield)': 'Allerta Stencil', 'Seth Rollins': 'Tourney:900', 'Seth Rollins (Shield)': 'Stardos Stencil:700',
  'Dean Ambrose': 'Rubik Scribble', 'Dean Ambrose (Shield)': 'Saira Stencil One', 'Brock Lesnar': 'Black Han Sans', 'CM Punk': 'Rock Salt',
  'Cody Rhodes': 'Alfa Slab One', 'Dusty Rhodes': 'Sancreek', 'Ric Flair': 'Playfair Display:900', 'AJ Styles': 'Exo 2:900',
  'Randy Orton': 'New Rocker', 'Edge': 'Staatliches', 'Chris Jericho': 'Monoton', 'Kurt Angle': 'Graduate', 'Eddie Guerrero': 'Lilita One',
  'Rey Mysterio': 'Boogaloo', 'La Parka': 'Nosifer', 'Rey Fenix': 'Tilt Warp', 'Penta': 'Metal Mania', 'El Hijo del Vikingo': 'Uncial Antiqua',
  'Dragon Lee': 'Rampart One', 'Ultimo Dragon': 'Train One', 'Jushin Thunder Liger': 'Reggae One', 'Tajiri': 'RocknRoll One',
  'Shinsuke Nakamura': 'Mochiy Pop One', 'Sami Zayn': 'Bangers', 'Gunther': 'League Gothic', 'Goldberg': 'Bebas Neue',
  'Hulk Hogan': 'Luckiest Guy', 'Hollywood Hogan': 'Rubik Glitch', 'Hacksaw Jim Duggan': 'Rye', 'JBL': 'Ranchers', 'Jeff Jarrett': 'Smokum',
  'El Grande Americano': 'Ewert', 'British Bulldog': 'Bevan', 'Booker T': 'Bungee', 'King Booker': 'Limelight', 'Jey Uso': 'Titan One',
  'Jimmy Uso': 'Gorditas', 'Andre the Giant': 'Rammetto One', 'Batista': 'Squada One', 'Big E': 'Francois One', 'Big Poppa Pump': 'Bowlby One',
  'Scott Steiner': 'Archivo Black', 'Rick Steiner': 'Fjalla One', 'Diesel': 'Russo One', 'Bobby Lashley': 'Oswald:700', 'Braun Strowman': 'Teko:700',
  'Bret Hart': 'Pathway Gothic One', 'Bron Breakker': 'Big Shoulders Display:900', 'Bronson Reed': 'Antonio:700', 'Chad Gable': 'Saira Extra Condensed:800',
  'Chainsaw Charlie': 'Rubik Wet Paint', 'Damian Priest': 'MedievalSharp', 'Danhausen': 'Mystery Quest', 'Demolition Ax': 'Wallpoet',
  'Demolition Crush': 'Bungee Shade', 'Demolition Smash': 'Plaster', 'Demon Balor': 'Creepster', 'Finn Bálor': 'Chakra Petch:700',
  'Dominik Mysterio': 'Chicle', 'Drew McIntyre': 'Grenze Gotisch:900', "Drew McIntyre '09": 'Aldrich', 'Earthquake': 'Fugaz One',
  'Eric Bischoff': 'Marcellus SC', 'Faarooq': 'Oi', 'Fit Finlay': 'Sarpanch:900', 'Gangrel': 'Henny Penny', 'Goldust': 'Abril Fatface',
  'Jake Roberts': 'Special Elite', 'Jeff Hardy': 'Knewave', 'Kamala': 'Jolly Lodger', 'Ken Shamrock': 'Racing Sans One', 'Kevin Nash': 'Chewy',
  'King Kong Bundy': 'Slackey', 'Kofi Kingston': 'Spicy Rice', 'Xavier Woods': 'Modak', 'LA Knight': 'Permanent Marker', 'Lex Luger': 'Stint Ultra Condensed',
  'Logan Paul': 'Rubik 80s Fade', 'Mabel': 'Original Surfer', 'Macho Man Randy Savage': 'Sigmar One', 'Mr Perfect': 'Cormorant Unicase:700',
  'Rick Rude': 'Kaushan Script', 'Rowdy Roddy Piper': 'Londrina Solid:900', 'Razor Ramon': 'Gemunu Libre:800', 'Scott Hall': 'Vast Shadow',
  'Sting': 'Fruktur', 'Shane McMahon': 'Krona One', 'Vince McMahon': 'Diplomata', 'Vader': 'Iceland', 'Yokozuna': 'Dela Gothic One',
  'Umaga': 'Rubik Mono One', 'Jacob Fatu': 'Lemon', 'Terry Funk': 'Frijole', 'Tazz': 'Wendy One', 'The Godfather': 'Almendra Display',
  'The Miz': 'Fascinate', 'Ultimate Warrior': 'Faster One', 'William Regal': 'IM Fell English SC', 'Wade Barrett': 'Rubik Dirt',
  'Austin Theory': 'Syncopate:700', 'Angelo Dawkins': 'Kanit:900', 'Montez Ford': 'Michroma', 'Big Cass': 'Climate Crisis',
  'Baron Corbin': 'Jersey 10', 'Big Boss Man': 'Quantico:700', 'Billy Gunn': 'Chango', 'Grayson Waller': 'Margarine', 'JD McDonagh': 'Oxanium:800',
  'Je\'Von Evans': 'Coiny', 'Joe Hendry': 'Paytone One', 'Johnny Gargano': 'Carter One', 'Kama Mustafa': 'Kavoon', 'Axiom': 'Nova Square',
  'Carmelo Hayes': 'Tilt Neon', 'Ethan Page': 'Bungee Inline', 'Kevin Owens': 'Kablammo', 'Drew': 'Aldrich',
  // women
  'Rhea Ripley': 'Pirata One', 'Becky Lynch': 'Passion One:900', 'Charlotte Flair': 'Cinzel:900', 'Bianca Belair': 'Righteous', 'IYO SKY': 'Zen Dots',
  'Asuka': 'Potta One', 'Kairi Sane': 'Stick', 'Giulia': 'Cormorant SC:700', 'Michin': 'Rubik Pixels', 'AJ Lee': 'Gloria Hallelujah',
  'Alexa Bliss': 'Fascinate Inline', 'Brie Bella': 'Satisfy', 'Nikki Bella': 'Great Vibes', 'Candice LeRae': 'Shadows Into Light', 'Candice Michelle': 'Yellowtail',
  'Carmella': 'Lobster', 'Chelsea Green': 'Bungee Spice', 'Chyna': 'Ultra', 'Cora Jade': 'Rubik Bubbles', 'Jacy Jayne': 'Rubik Marker Hatch',
  'Jade Cargill': 'Tilt Prism', 'Jazz': 'Sonsie One', 'Blake Monroe': 'Pacifico', 'Sasha Banks': 'Bungee Hairline', 'Trish Stratus': 'Poiret One',
  'Lita': 'Metal Mania', 'Sable': 'Marck Script', 'Sensational Sherri': 'Limelight', 'Stephanie McMahon': 'Cinzel', 'Toni Storm': 'Monoton',
  'Nia Jax': 'Rammetto One', 'Naomi': 'Spicy Rice', 'Liv Morgan': 'Permanent Marker', 'Maryse': 'Playfair Display SC:900', 'Bull Nakano': 'Yuji Boku',
  'Tiffany Stratton': 'Lobster Two:700', 'Zelina Vega': 'Pirata One', 'Lyra Valkyria': 'Uncial Antiqua', "Lyra Valkyria '26": 'Almendra SC',
  'Paige': 'Eater', 'Paige NXT': 'Creepster', 'Mickie James': 'Boogaloo', 'Michelle McCool': 'Great Vibes', 'Torrie Wilson': 'Yellowtail',
  'Stacy Keibler': 'Satisfy', 'Victoria': 'New Rocker', 'Raquel Rodriguez': 'Alfa Slab One', 'Roxanne Perez': 'Rubik Gemstones',
};
// Variants that should share their base wrestler's font (not in EXPLICIT because the base is).
const MALE_POOL = ['Anybody:800', 'Bowlby One SC', 'Changa One', 'Concert One', 'Days One', 'Lalezar', 'Patua One', 'Rowdies:700', 'Secular One', 'Shojumaru', 'Stalinist One', 'Suez One', 'Viga', 'Yatra One', 'Yanone Kaffeesatz:700', 'Anton SC', 'Chonburi', 'Dosis:800', 'Goblin One', 'Jockey One', 'League Spartan:900', 'Fugaz One', 'Bungee Outline', 'Rubik Beastly', 'Black Ops One', 'Orbitron:900', 'Audiowide', 'Press Start 2P', 'Silkscreen:700', 'VT323', 'Major Mono Display', 'Share Tech Mono', 'Jura:700', 'Rajdhani:700', 'Barlow Condensed:800', 'Kumar One', 'Gugi', 'Mouse Memoirs', 'Fredericka the Great', 'Caveat Brush', 'Covered By Your Grace', 'Homemade Apple', 'Gochi Hand', 'Schoolbell', 'Architects Daughter', 'Wendy One', 'Baloo 2:800', 'Nerko One', 'Bigelow Rules', 'Megrim', 'Unkempt:700', 'Cabin Sketch:700', 'Chelsea Market', 'Sirin Stencil', 'Metamorphous', 'Bungee Spice', 'Kenia', 'Ranchers', 'Bahiana', 'Atomic Age', 'Fontdiner Swanky', 'Smokum', 'Rye', 'Emblema One', 'Gravitas One', 'Flamenco', 'Piedra', 'Revalia', 'Warnes', 'Wellfleet', 'Galada', 'Skranji:700', 'Ruslan Display', 'Bangers', 'Sarina', 'Ceviche One', 'Trade Winds', 'Ravi Prakash', 'Montaga', 'Sail', 'Spirax', 'Vampiro One', 'Texturina:900', 'Trochut:700', 'Sunshiney'];
const FEMALE_POOL = ['Great Vibes', 'Satisfy', 'Yellowtail', 'Pacifico', 'Lobster', 'Kaushan Script', 'Marck Script', 'Courgette', 'Sacramento', 'Allura', 'Alex Brush', 'Dancing Script:700', 'Parisienne', 'Tangerine:700', 'Pinyon Script', 'Italianno', 'Rochester', 'Playball', 'Norican', 'Damion', 'Leckerli One', 'Cookie', 'Kristi', 'Merienda:700', 'Oleo Script:700', 'Berkshire Swash', 'Cherry Swash:700', 'Fondamento', 'Lovers Quarrel', 'Rouge Script', 'Style Script', 'Bonbon', 'Calligraffitti', 'Mansalva', 'Reenie Beanie', 'Sue Ellen Francisco', 'Waiting for the Sunrise', 'Nothing You Could Do', 'Mr Dafoe', 'Molle', 'Lily Script One', 'Grand Hotel', 'Euphoria Script', 'Oregano', 'Vibur', 'Lemonada:700', 'Yesteryear', 'Bilbo Swash Caps', 'Dynalight', 'Sofia', 'Arizonia', 'Meddon', 'Qwigley', 'Ruthie', 'Miss Fajardose', 'Monsieur La Doulaise', 'League Script', 'Rancho', 'Redressed', 'Kranky', 'Chewy', 'Sniglet:800', 'Fredoka:700', 'Baloo 2:800', 'Gochi Hand', 'Itim', 'Mali:700', 'Gaegu:700', 'Hi Melody', 'Poor Story', 'Single Day', 'Sunflower:700', 'Yeon Sung', 'Cute Font', 'Dokdo', 'East Sea Dokdo', 'Gamja Flower', 'Nanum Pen Script', 'Nanum Brush Script', 'Kirang Haerang', 'Bagel Fat One', 'Jua', 'Do Hyeon'];
module.exports = { EXPLICIT, MALE_POOL, FEMALE_POOL };
