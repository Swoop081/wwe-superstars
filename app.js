const APP_VERSION='0.7.70';
const BASE=[
{name:'Roman Reigns',cha:97,str:94,stk:88,tec:72,agi:68,iq:91,finisher:'SPEAR'},{name:'Cody Rhodes',cha:97,str:68,stk:94,tec:88,agi:72,iq:91,finisher:'CROSS RHODES'},{name:'Rhea Ripley',cha:91,str:94,stk:88,tec:72,agi:68,iq:97,finisher:'RIPTIDE'},{name:'CM Punk',cha:91,str:68,stk:88,tec:94,agi:72,iq:97,finisher:'GO TO SLEEP'},{name:'IYO SKY',cha:88,str:68,stk:72,tec:91,agi:94,iq:97,finisher:'OVER THE MOONSAULT'},{name:'Seth Rollins',cha:97,str:68,stk:88,tec:91,agi:94,iq:72,finisher:'CURB STOMP'},{name:'Becky Lynch',cha:97,str:68,stk:91,tec:94,agi:72,iq:88,finisher:'MANHANDLE SLAM'},{name:'Randy Orton',cha:88,str:72,stk:91,tec:94,agi:68,iq:97,finisher:'RKO'},{name:'Bianca Belair',cha:91,str:94,stk:88,tec:68,agi:97,iq:72,finisher:'K.O.D.'},{name:'Gunther',cha:72,str:94,stk:97,tec:88,agi:68,iq:91,finisher:'POWERBOMB'},{name:'Sami Zayn',cha:97,str:68,stk:72,tec:88,agi:91,iq:94,finisher:'HELLUVA KICK'},{name:'Charlotte Flair',cha:94,str:72,stk:88,tec:97,agi:91,iq:68,finisher:'FIGURE EIGHT'},
{name:'Tiffany Stratton',cha:94,str:68,stk:72,tec:88,agi:97,iq:91,finisher:'PRETTIEST MOONSAULT EVER',tags:['Female','SmackDown','Current Era']},
{name:'Liv Morgan',cha:94,str:68,stk:88,tec:91,agi:97,iq:72,finisher:'OBLIVION',tags:['Female','RAW','Current Era']},
{name:'Lola Vice',cha:88,str:72,stk:97,tec:91,agi:94,iq:68,finisher:'SPINNING BACKFIST',tags:['Female','NXT','Current Era']},
{name:'Stone Cold Steve Austin',cha:97,str:91,stk:94,tec:72,agi:68,iq:88,finisher:'STONE COLD STUNNER',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'The Rock',cha:97,str:91,stk:94,tec:88,agi:68,iq:72,finisher:'ROCK BOTTOM',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Triple H',cha:97,str:91,stk:72,tec:94,agi:68,iq:88,finisher:'PEDIGREE',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'The Undertaker',cha:97,str:94,stk:91,tec:72,agi:68,iq:88,finisher:'TOMBSTONE PILEDRIVER',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Shawn Michaels',cha:94,str:68,stk:91,tec:97,agi:88,iq:72,finisher:'SWEET CHIN MUSIC',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Paige',cha:88,str:68,stk:91,tec:94,agi:72,iq:97,finisher:'RAMPAIGE',tags:['Female','Legend']},
{name:'Rob Van Dam',cha:91,str:72,stk:94,tec:88,agi:97,iq:68,finisher:'FIVE STAR FROG SPLASH',tags:['Male','Legend','Hall of Fame']},
{name:'Kurt Angle',cha:91,str:94,stk:72,tec:97,agi:68,iq:88,finisher:'ANGLE SLAM',tags:['Male','Legend','Hall of Fame']},
{name:'Jeff Hardy',cha:94,str:68,stk:88,tec:91,agi:97,iq:72,finisher:'SWANTON BOMB',tags:['Male','Legend']},
{name:'Sol Ruca',cha:88,str:72,stk:68,tec:91,agi:97,iq:94,finisher:'SOL SNATCHER',tags:['Female','NXT','Current Era']},
{name:'Giulia',cha:91,str:68,stk:94,tec:97,agi:88,iq:72,finisher:'NORTHERN LIGHTS BOMB',tags:['Female','NXT','Current Era']},
{name:'Stephanie Vaquer',cha:88,str:72,stk:91,tec:97,agi:94,iq:68,finisher:'SVB',tags:['Female','RAW','Current Era']},
{name:'Bret Hart',cha:91,str:68,stk:72,tec:97,agi:88,iq:94,finisher:'SHARPSHOOTER',tags:['Male','Legend','Hall of Fame']},
{name:'Razor Ramon',cha:97,str:72,stk:94,tec:88,agi:68,iq:91,finisher:"RAZOR'S EDGE",tags:['Male','Legend','Hall of Fame']},
{name:'Diesel',cha:88,str:94,stk:91,tec:72,agi:68,iq:97,finisher:'JACKKNIFE POWERBOMB',tags:['Male','Legend','Hall of Fame']},
{name:'Blake Monroe',cha:94,str:68,stk:88,tec:91,agi:97,iq:72,finisher:'GLAMOUR SHOT',tags:['Female','NXT','Current Era']},
{name:'Goldberg',cha:91,str:97,stk:94,tec:72,agi:68,iq:88,finisher:'JACKHAMMER',tags:['Male','Legend','Hall of Fame']},
{name:'Bron Breakker',cha:88,str:97,stk:94,tec:72,agi:91,iq:68,finisher:'SPEAR',tags:['Male','RAW','Current Era']},
{name:'Sting',cha:94,str:72,stk:88,tec:91,agi:68,iq:97,finisher:'SCORPION DEATH DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Hulk Hogan',cha:94,str:91,stk:88,tec:72,agi:68,iq:97,finisher:'LEG DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Lita',cha:94,str:68,stk:91,tec:72,agi:97,iq:88,finisher:'LITASAULT',tags:['Female','Legend','Hall of Fame']},
{name:'Jade Cargill',cha:91,str:97,stk:94,tec:72,agi:88,iq:68,finisher:'JADED',tags:['Female','SmackDown','Current Era']},
{name:'AJ Styles',cha:88,str:68,stk:72,tec:94,agi:97,iq:91,finisher:'STYLES CLASH',tags:['Male','SmackDown','Current Era']},
{name:'Finn Bálor',cha:91,str:68,stk:88,tec:94,agi:97,iq:72,finisher:'COUP DE GRÂCE',tags:['Male','RAW','Current Era']},
{name:'Naomi',cha:94,str:68,stk:72,tec:88,agi:97,iq:91,finisher:'SPLIT-LEGGED MOONSAULT',tags:['Female','SmackDown','Current Era']},
{name:'Trish Stratus',cha:97,str:68,stk:88,tec:91,agi:94,iq:72,finisher:'STRATUSFACTION',tags:['Female','Legend','Hall of Fame']},
{name:'Demolition Smash',cha:88,str:94,stk:97,tec:72,agi:68,iq:91,finisher:'DEMOLITION DECAPITATION',tags:['Male','Legend']},
{name:'Demolition Ax',cha:88,str:97,stk:94,tec:72,agi:68,iq:91,finisher:'DEMOLITION DECAPITATION',tags:['Male','Legend']},
{name:'Ultimate Warrior',cha:94,str:97,stk:91,tec:68,agi:72,iq:88,finisher:'WARRIOR SPLASH',tags:['Male','Legend','Hall of Fame']},
{name:'Macho Man Randy Savage',cha:97,str:91,stk:94,tec:68,agi:72,iq:88,finisher:'DIVING ELBOW DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Andre the Giant',cha:91,str:94,stk:88,tec:72,agi:68,iq:97,finisher:'BUTTERFLY SUPLEX',tags:['Male','Legend','Hall of Fame']},
{name:'Roxanne Perez',cha:88,str:68,stk:72,tec:94,agi:97,iq:91,finisher:'POP ROX',tags:['Female','RAW','Current Era']},
{name:'Brock Lesnar',cha:91,str:94,stk:97,tec:88,agi:68,iq:72,finisher:'F-5',tags:['Male','Legend']},
{name:'John Cena',cha:97,str:91,stk:88,tec:72,agi:68,iq:94,finisher:'ATTITUDE ADJUSTMENT',tags:['Male','Legend']},
{name:'Sable',cha:97,str:72,stk:94,tec:88,agi:91,iq:68,finisher:'SABLE BOMB',tags:['Female','Legend']},
{name:'Big E',cha:91,str:97,stk:88,tec:78,agi:82,iq:84,finisher:'BIG ENDING',tags:['Male','Current Era','The New Day']},
{name:'Kofi Kingston',cha:91,str:78,stk:86,tec:88,agi:98,iq:91,finisher:'TROUBLE IN PARADISE',tags:['Male','Current Era','RAW','The New Day']},
{name:'Xavier Woods',cha:92,str:81,stk:84,tec:89,agi:91,iq:94,finisher:'LOST IN THE WOODS',tags:['Male','Current Era','RAW','The New Day']},
{name:'Rey Mysterio',cha:96,str:72,stk:84,tec:93,agi:99,iq:98,finisher:'619',tags:['Male','Current Era','Legend','Hall of Fame','LWO']},
{name:'Dominik Mysterio',cha:95,str:82,stk:88,tec:85,agi:91,iq:83,finisher:'619',tags:['Male','Current Era','RAW','Judgment Day']},
{name:'Hollywood Hogan',cha:99,str:91,stk:88,tec:72,agi:68,iq:97,finisher:'LEG DROP',tags:['Male','Monday Night War Era','Legend','Hall of Fame','nWo']},
{name:'Kevin Nash',cha:94,str:97,stk:91,tec:72,agi:68,iq:94,finisher:'JACKKNIFE POWERBOMB',tags:['Male','Monday Night War Era','Legend','Hall of Fame','nWo','The Kliq']},
{name:'Scott Hall',cha:97,str:88,stk:91,tec:94,agi:72,iq:88,finisher:"OUTSIDER'S EDGE",tags:['Male','Monday Night War Era','Legend','Hall of Fame','nWo','The Kliq']},
{name:'Eric Bischoff',cha:99,str:68,stk:82,tec:78,agi:72,iq:97,finisher:'ROUNDHOUSE KICK',tags:['Male','Monday Night War Era','Legend','nWo']},
{name:'Syxx',cha:88,str:68,stk:84,tec:94,agi:97,iq:91,finisher:'BUZZKILLER',tags:['Male','Monday Night War Era','Legend','nWo','The Kliq']},
{name:'Chris Jericho',cha:97,str:72,stk:88,tec:94,agi:91,iq:97,finisher:'CODEBREAKER',tags:['Male','Ruthless Aggression Era','Legend']},
{name:'Edge',cha:97,str:88,stk:94,tec:91,agi:72,iq:94,finisher:'SPEAR',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame']},
{name:'Eddie Guerrero',cha:97,str:72,stk:88,tec:97,agi:94,iq:91,finisher:'FROG SPLASH',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame']},
{name:'Booker T',cha:94,str:88,stk:94,tec:91,agi:88,iq:91,finisher:'BOOK END',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame']},
{name:'Batista',cha:91,str:97,stk:94,tec:88,agi:68,iq:91,finisher:'BATISTA BOMB',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame','Evolution']},
{name:'Sabu',cha:88,str:72,stk:91,tec:88,agi:97,iq:91,finisher:'ARABIAN FACEBUSTER',tags:['Male','ECW','Legend']},
{name:'New Jack',cha:91,str:88,stk:97,tec:68,agi:72,iq:88,finisher:'187',tags:['Male','ECW','Legend']},
{name:'Mankind',cha:94,str:91,stk:88,tec:91,agi:68,iq:97,finisher:'MANDIBLE CLAW',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Kane',cha:91,str:97,stk:94,tec:88,agi:68,iq:91,finisher:'CHOKESLAM',tags:['Male','Attitude Era','Legend','Hall of Fame','Brothers of Destruction']},
{name:'Damian Priest',cha:91,str:97,stk:94,tec:88,agi:72,iq:91,finisher:'SOUTH OF HEAVEN',tags:['Male','Current Era','RAW','Judgment Day']},
{name:'Road Warrior Hawk',cha:91,str:97,stk:97,tec:72,agi:68,iq:88,finisher:'DOOMSDAY DEVICE',tags:['Male','Legend','Hall of Fame','Road Warriors']},
{name:'Road Warrior Animal',cha:88,str:97,stk:94,tec:72,agi:68,iq:91,finisher:'DOOMSDAY DEVICE',tags:['Male','Legend','Hall of Fame','Road Warriors']},
{name:'Demolition Crush',cha:88,str:97,stk:94,tec:72,agi:68,iq:91,finisher:'DEMOLITION DECAPITATION',tags:['Male','Legend','Demolition']},
{name:'British Bulldog',cha:91,str:97,stk:88,tec:94,agi:72,iq:91,finisher:'RUNNING POWERSLAM',tags:['Male','Legend','Hall of Fame']},
{name:'Yokozuna',cha:91,str:99,stk:97,tec:88,agi:68,iq:91,finisher:'BANZAI DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Jey Uso',cha:97,str:88,stk:94,tec:88,agi:91,iq:91,finisher:'USO SPLASH',tags:['Male','Current Era','RAW','The Bloodline']},
{name:'Jacob Fatu',cha:91,str:99,stk:97,tec:88,agi:94,iq:88,finisher:'IMPLANT DDT',tags:['Male','Current Era','SmackDown','The Bloodline']},
{name:'Jimmy Uso',cha:94,str:88,stk:94,tec:88,agi:91,iq:88,finisher:'USO SPLASH',tags:['Male','Current Era','SmackDown','The Bloodline']},
{name:'Solo Sikoa',cha:88,str:97,stk:97,tec:88,agi:72,iq:91,finisher:'SAMOAN SPIKE',tags:['Male','Current Era','SmackDown','The Bloodline']},
{name:'LA Knight',cha:99,str:91,stk:94,tec:88,agi:72,iq:91,finisher:'BFT',tags:['Male','Current Era','SmackDown']}];

// Canonical Superstar metadata used by Superstar Road eligibility rules.
// Keep this map additive: new roster members should receive era, division, brand,
// faction/stable and tag-team metadata here as appropriate.
const SUPERSTAR_TAGS={
'Roman Reigns':['Male','Current Era','SmackDown','The Bloodline','The Shield'],
'Cody Rhodes':['Male','Current Era','SmackDown','Legacy'],
'Rhea Ripley':['Female','Current Era','RAW','Judgment Day'],
'CM Punk':['Male','Current Era','RAW','Straight Edge Society'],
'IYO SKY':['Female','Current Era','RAW','Damage CTRL'],
'Seth Rollins':['Male','Current Era','RAW','The Shield'],
'Becky Lynch':['Female','Current Era','RAW'],
'Randy Orton':['Male','Current Era','SmackDown','Evolution','Legacy'],
'Bianca Belair':['Female','Current Era','SmackDown'],
'Gunther':['Male','Current Era','RAW','Imperium'],
'Sami Zayn':['Male','Current Era','RAW','The Bloodline'],
'Charlotte Flair':['Female','Current Era','SmackDown','Four Horsewomen'],
'Tiffany Stratton':['Female','Current Era','SmackDown','NXT Alumni'],
'Liv Morgan':['Female','Current Era','RAW','Judgment Day'],
'Lola Vice':['Female','Current Era','NXT'],
'Stone Cold Steve Austin':['Male','Attitude Era','Legend','Hall of Fame'],
'The Rock':['Male','Attitude Era','Legend','Hall of Fame','Nation of Domination'],
'Triple H':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X','Evolution'],
'The Undertaker':['Male','Attitude Era','Legend','Hall of Fame','Brothers of Destruction'],
'Shawn Michaels':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X'],
'Paige':['Female','Reality Era','Legend'],
'Rob Van Dam':['Male','Ruthless Aggression Era','Legend','Hall of Fame','ECW'],
'Kurt Angle':['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Team Angle'],
'Jeff Hardy':['Male','Attitude Era','Ruthless Aggression Era','Legend','The Hardy Boyz'],
'Sol Ruca':['Female','Current Era','NXT'],
'Giulia':['Female','Current Era','NXT'],
'Stephanie Vaquer':['Female','Current Era','RAW'],
'Bret Hart':['Male','New Generation Era','Legend','Hall of Fame','Hart Foundation'],
'Razor Ramon':['Male','New Generation Era','Legend','Hall of Fame','The Kliq'],
'Diesel':['Male','New Generation Era','Legend','Hall of Fame','The Kliq','Two Dudes with Attitudes'],
'Blake Monroe':['Female','Current Era','NXT'],
'Goldberg':['Male','Monday Night War Era','Legend','Hall of Fame','WCW'],
'Bron Breakker':['Male','Current Era','RAW','The Vision','Steiner Family'],
'Sting':['Male','Monday Night War Era','Legend','Hall of Fame','WCW'],
'Hulk Hogan':['Male','Golden Era','Legend','Hall of Fame','nWo','Mega Powers'],
'Lita':['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Team Xtreme'],
'Jade Cargill':['Female','Current Era','SmackDown'],
'AJ Styles':['Male','Current Era','SmackDown','The O.C.'],
'Finn Bálor':['Male','Current Era','RAW','Judgment Day','Bullet Club'],
'Naomi':['Female','Current Era','SmackDown'],
'Trish Stratus':['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame'],
'Demolition Smash':['Male','Golden Era','Legend','Demolition'],
'Demolition Ax':['Male','Golden Era','Legend','Demolition'],
'Ultimate Warrior':['Male','Golden Era','Legend','Hall of Fame'],
'Macho Man Randy Savage':['Male','Golden Era','Legend','Hall of Fame','Mega Powers'],
'Andre the Giant':['Male','Golden Era','Legend','Hall of Fame'],
'Roxanne Perez':['Female','Current Era','RAW','NXT Alumni'],
'Brock Lesnar':['Male','Ruthless Aggression Era','Legend'],
'John Cena':['Male','Ruthless Aggression Era','PG Era','Legend'],
'Sable':['Female','Attitude Era','Legend'],
'Big E':['Male','Current Era','The New Day'],
'Kofi Kingston':['Male','Current Era','RAW','The New Day'],
'Xavier Woods':['Male','Current Era','RAW','The New Day'],
'Rey Mysterio':['Male','Current Era','Legend','Hall of Fame','LWO'],
'Dominik Mysterio':['Male','Current Era','RAW','Judgment Day'],
'Hollywood Hogan':['Male','Monday Night War Era','Legend','Hall of Fame','nWo'],
'Kevin Nash':['Male','Monday Night War Era','Legend','Hall of Fame','nWo','The Kliq'],
'Scott Hall':['Male','Monday Night War Era','Legend','Hall of Fame','nWo','The Kliq'],
'Eric Bischoff':['Male','Monday Night War Era','Legend','nWo'],
'Syxx':['Male','Monday Night War Era','Legend','nWo','The Kliq'],
'Chris Jericho':['Male','Ruthless Aggression Era','Legend'],
'Edge':['Male','Ruthless Aggression Era','Legend','Hall of Fame'],
'Eddie Guerrero':['Male','Ruthless Aggression Era','Legend','Hall of Fame'],
'Booker T':['Male','Ruthless Aggression Era','Legend','Hall of Fame'],
'Batista':['Male','Ruthless Aggression Era','Legend','Hall of Fame','Evolution'],
'Sabu':['Male','ECW','Legend'],
'New Jack':['Male','ECW','Legend'],
'Mankind':['Male','Attitude Era','Legend','Hall of Fame'],
'Kane':['Male','Attitude Era','Legend','Hall of Fame','Brothers of Destruction'],
'Damian Priest':['Male','Current Era','RAW','Judgment Day'],
'Road Warrior Hawk':['Male','Legend','Hall of Fame','Road Warriors'],
'Road Warrior Animal':['Male','Legend','Hall of Fame','Road Warriors'],
'Demolition Crush':['Male','Legend','Demolition'],
'British Bulldog':['Male','Legend','Hall of Fame'],
'Yokozuna':['Male','Legend','Hall of Fame'],
'Jey Uso':['Male','Current Era','RAW','The Bloodline'],
'Jacob Fatu':['Male','Current Era','SmackDown','The Bloodline'],
'Jimmy Uso':['Male','Current Era','SmackDown','The Bloodline'],
'Solo Sikoa':['Male','Current Era','SmackDown','The Bloodline'],
'LA Knight':['Male','Current Era','SmackDown']
};

// Eight-category WWE Superstar rating system.
// Level-1 profiles keep broadly comparable overall totals while preserving clear strengths/weaknesses.
const SUBMISSION_RATINGS={
'Roman Reigns':76,'Cody Rhodes':86,'Rhea Ripley':88,'CM Punk':96,'IYO SKY':90,'Seth Rollins':88,'Becky Lynch':97,'Randy Orton':90,'Bianca Belair':72,'Gunther':90,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':80,'Liv Morgan':82,'Lola Vice':94,'Stone Cold Steve Austin':78,'The Rock':72,'Triple H':91,'The Undertaker':88,'Shawn Michaels':92,'Paige':95,'Rob Van Dam':84,'Kurt Angle':100,'Jeff Hardy':76,'Sol Ruca':82,'Giulia':95,'Stephanie Vaquer':96,'Bret Hart':100,'Razor Ramon':78,'Diesel':68,'Blake Monroe':82,'Goldberg':68,'Bron Breakker':84,'Sting':94,'Hulk Hogan':65,'Lita':82,'Jade Cargill':72,'AJ Styles':95,'Finn Bálor':94,'Naomi':78,'Trish Stratus':82,'Demolition Smash':68,'Demolition Ax':68,'Ultimate Warrior':65,'Macho Man Randy Savage':74,'Andre the Giant':68,'Roxanne Perez':92,'Brock Lesnar':98,'John Cena':86,'Sable':68,'Big E':78,'Kofi Kingston':82,'Xavier Woods':86,'Rey Mysterio':88,'Dominik Mysterio':80,'Hollywood Hogan':65,'Kevin Nash':68,'Scott Hall':86,'Eric Bischoff':65,'Syxx':92,'Chris Jericho':97,'Edge':91,'Eddie Guerrero':97,'Booker T':88,'Batista':74,'Sabu':78,'New Jack':65,'Mankind':86,'Kane':78,'Damian Priest':84,'Road Warrior Hawk':68,'Road Warrior Animal':68,'Demolition Crush':68,'British Bulldog':92,'Yokozuna':72,'Jey Uso':80,'Jacob Fatu':78,'Jimmy Uso':80,'Solo Sikoa':76,'LA Knight':78
};
const STAR_POWER_RATINGS={
'Roman Reigns':100,'Cody Rhodes':98,'Rhea Ripley':97,'CM Punk':99,'IYO SKY':88,'Seth Rollins':96,'Becky Lynch':98,'Randy Orton':98,'Bianca Belair':94,'Gunther':94,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':91,'Liv Morgan':91,'Lola Vice':74,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':99,'Paige':90,'Rob Van Dam':92,'Kurt Angle':97,'Jeff Hardy':96,'Sol Ruca':76,'Giulia':82,'Stephanie Vaquer':84,'Bret Hart':99,'Razor Ramon':94,'Diesel':95,'Blake Monroe':74,'Goldberg':99,'Bron Breakker':89,'Sting':99,'Hulk Hogan':100,'Lita':94,'Jade Cargill':88,'AJ Styles':95,'Finn Bálor':92,'Naomi':88,'Trish Stratus':97,'Demolition Smash':88,'Demolition Ax':88,'Ultimate Warrior':98,'Macho Man Randy Savage':99,'Andre the Giant':100,'Roxanne Perez':82,'Brock Lesnar':99,'John Cena':100,'Sable':92,'Big E':90,'Kofi Kingston':91,'Xavier Woods':85,'Rey Mysterio':98,'Dominik Mysterio':91,'Hollywood Hogan':100,'Kevin Nash':97,'Scott Hall':97,'Eric Bischoff':90,'Syxx':86,'Chris Jericho':98,'Edge':98,'Eddie Guerrero':98,'Booker T':96,'Batista':97,'Sabu':88,'New Jack':82,'Mankind':97,'Kane':98,'Damian Priest':90,'Road Warrior Hawk':95,'Road Warrior Animal':95,'Demolition Crush':86,'British Bulldog':94,'Yokozuna':96,'Jey Uso':94,'Jacob Fatu':88,'Jimmy Uso':88,'Solo Sikoa':86,'LA Knight':94
};
const FINISHER_RATINGS={
'Roman Reigns':99,'Cody Rhodes':94,'Rhea Ripley':96,'CM Punk':94,'IYO SKY':94,'Seth Rollins':99,'Becky Lynch':92,'Randy Orton':100,'Bianca Belair':94,'Gunther':96,'Sami Zayn':96,'Charlotte Flair':97,'Tiffany Stratton':95,'Liv Morgan':90,'Lola Vice':90,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':100,'Paige':91,'Rob Van Dam':98,'Kurt Angle':97,'Jeff Hardy':99,'Sol Ruca':96,'Giulia':92,'Stephanie Vaquer':91,'Bret Hart':100,'Razor Ramon':98,'Diesel':98,'Blake Monroe':88,'Goldberg':100,'Bron Breakker':97,'Sting':98,'Hulk Hogan':100,'Lita':97,'Jade Cargill':91,'AJ Styles':99,'Finn Bálor':98,'Naomi':88,'Trish Stratus':97,'Demolition Smash':94,'Demolition Ax':94,'Ultimate Warrior':97,'Macho Man Randy Savage':100,'Andre the Giant':94,'Roxanne Perez':94,'Brock Lesnar':100,'John Cena':100,'Sable':88,'Big E':94,'Kofi Kingston':97,'Xavier Woods':88,'Rey Mysterio':100,'Dominik Mysterio':90,'Hollywood Hogan':100,'Kevin Nash':98,'Scott Hall':98,'Eric Bischoff':72,'Syxx':91,'Chris Jericho':99,'Edge':100,'Eddie Guerrero':100,'Booker T':95,'Batista':99,'Sabu':94,'New Jack':86,'Mankind':99,'Kane':99,'Damian Priest':96,'Road Warrior Hawk':98,'Road Warrior Animal':98,'Demolition Crush':93,'British Bulldog':97,'Yokozuna':98,'Jey Uso':96,'Jacob Fatu':94,'Jimmy Uso':94,'Solo Sikoa':95,'LA Knight':96
};
BASE.forEach(w=>{
  w.sub=SUBMISSION_RATINGS[w.name]??Math.max(65,Math.min(100,w.tec));
  w.star=STAR_POWER_RATINGS[w.name]??85;
  w.fnr=FINISHER_RATINGS[w.name]??90;
});

BASE.forEach(w=>w.tags=[...new Set([...(w.tags||[]),...(SUPERSTAR_TAGS[w.name]||[])])]);
function hasTag(w,t){return (w.tags||[]).includes(t)}
function roadEligibleTags(){let owned=BASE.filter(w=>level(w.name));let candidates=[...new Set(BASE.flatMap(w=>w.tags||[]))].filter(t=>owned.some(w=>hasTag(w,t)));return candidates.filter(t=>owned.filter(w=>hasTag(w,t)).length>=2)}
const KEYS=[['str','Power'],['stk','Striking'],['tec','Technique'],['agi','Aerial'],['sub','Submission'],['cha','Charisma'],['star','Star Power'],['fnr','Finisher']];let save=JSON.parse(localStorage.getItem('wweSuperstarsSave')||'null'),state={};const app=document.querySelector('#app');
function persist(){localStorage.setItem('wweSuperstarsSave',JSON.stringify(save))}
function ensureRecord(n){if(!save.records)save.records={};if(!save.records[n])save.records[n]={wins:0,losses:0,streak:0,bestStreak:0};return save.records[n]}
function recordGame(n,win){let r=ensureRecord(n);if(win){r.wins++;r.streak=Math.max(1,r.streak+1);r.bestStreak=Math.max(r.bestStreak,r.streak)}else{r.losses++;r.streak=Math.min(-1,r.streak-1)}}
function recordStats(n){let r=ensureRecord(n),g=r.wins+r.losses,p=g?Math.round(r.wins/g*100):0;return {...r,games:g,pct:p}}
const STAT_PER_LEVEL=10;function statsAt(w,lvl){let add=Math.max(0,lvl-1)*STAT_PER_LEVEL;return Object.fromEntries(KEYS.map(([k])=>[k,w[k]+add]))}function baseHpOf(w){let v=KEYS.map(([k])=>w[k]).sort((a,b)=>a-b).slice(2,-2);return v.reduce((a,b)=>a+b,0)}const HP_PER_LEVEL=40;function hpOf(w,lvl){return baseHpOf(w)+Math.max(0,lvl-1)*HP_PER_LEVEL}function level(n){return save?.roster?.[n]||0}
function artFile(name){return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.png'}
function card(w,l=1,c=''){let file=artFile(w.name);let art='<img class="cardart" src="assets/superstars/'+file+'" alt="'+w.name+'" onerror="this.onerror=null;this.outerHTML=\'<div class=&quot;sil&quot;></div>\'">';return '<div class="card '+c+'">'+art+'<div class="corner levelcorner"><small>LVL</small><b>'+l+'</b></div><div class="corner hpcorner"><small>HP</small><b>'+hpOf(w,l)+'</b></div><div class="name">'+w.name+'</div></div>';}
function cardBack(w,l=1,c=''){let s=statsAt(w,l);return '<div class="card card-back '+c+'"><div class="back-title">'+w.name+'</div><div class="back-stats">'+KEYS.map(([k,label])=>'<div><span>'+label+'</span><b>'+s[k]+'</b></div>').join('')+'</div><div class="back-hint">TAP TO RETURN</div></div>';}
function openCard(n,l){let w=BASE.find(x=>x.name===n);if(!w)return;let overlay=document.createElement('div');overlay.className='card-viewer';overlay.onclick=e=>{if(e.target===overlay)overlay.remove()};overlay.innerHTML='<div class="card-viewer-inner" onclick="event.stopPropagation()"><div class="flip-card" onclick="this.classList.toggle(\'flipped\')"><div class="flip-card-inner"><div class="flip-face flip-front">'+card(w,l,'viewer-card')+'</div><div class="flip-face flip-back">'+cardBack(w,l,'viewer-card')+'</div></div></div></div>';document.body.appendChild(overlay);}
function shell(x,c=''){app.innerHTML=`<section class="screen ${c}">${x}</section>`}
function logo(){return '<img class="game-logo" src="assets/wwe-superstars-logo.webp?v='+APP_VERSION+'" alt="WWE Superstars">'}
function versionBadge(){return '<div class="version-badge">VERSION '+APP_VERSION+'</div>'}
function start(){document.title='WWE Superstars · '+APP_VERSION;if(save)return home();shell(`<div class="startscreen"><div class="startglow"></div>${logo()}<div class="startcopy"><div class="kicker">BUILD YOUR ROSTER · BECOME UNSTOPPABLE</div><button class="btn startbtn" onclick="welcome()">START GAME</button></div>${versionBadge()}</div>`,'start')}
function welcome(){let p=[...BASE].sort(()=>Math.random()-.5).slice(0,5);state.picks=p;state.reveal=0;welcomeReveal()}
function welcomeReveal(){let i=state.reveal,w=state.picks[i],last=i===state.picks.length-1;shell(`<div class="topbar onboardingbar"><span>WELCOME PACK</span><span>${i+1} / 5</span></div><div class="welcome-reveal"><div class="kicker">YOUR STARTING ROSTER</div><div class="reveal-stage">${card(w,1,'reveal-card')}</div><div class="reveal-name">${w.name}</div><div class="reveal-progress">${state.picks.map((_,n)=>'<i class="'+(n<=i?'on':'')+'"></i>').join('')}</div><button class="btn" onclick="${last?'claimWelcome()':'nextWelcome()'}">${last?'CLAIM YOUR ROSTER':'REVEAL NEXT SUPERSTAR'}</button></div>`,'onboarding')}
function nextWelcome(){state.reveal++;welcomeReveal()}
function claimWelcome(){save={roster:{},wins:0,losses:0,records:{}};state.picks.forEach(x=>{save.roster[x.name]=1;ensureRecord(x.name)});persist();home()}
function home(){shell(`<div class="topbar"><span>WWE SUPERSTARS · v${APP_VERSION}</span><span>${save.wins}W · ${save.losses}L</span></div><div class="home-logo">${logo()}</div><div class="hero homehero"><div class="mode" onclick="selectFighter()" role="button" tabindex="0"><div class="kicker">PLAY NOW</div><h2>EXHIBITION</h2><p>Choose a Superstar. Face a same-level random opponent. Win a reward card.</p></div><div class="mode road-home" onclick="road()" role="button" tabindex="0"><div class="kicker">ENDLESS ARCADE</div><h2>SUPERSTAR ROAD</h2><p>Fixed progression difficulty. Win to advance. Lose and move back.</p><div class="mode-action">ENTER ROAD · LEVEL ${save.roadLevel||1}</div></div><div class="mode" onclick="dailyGauntlet()" role="button" tabindex="0"><div class="kicker">DAILY FEATURE</div><h2>DAILY GAUNTLET</h2><p>Beat today's featured Superstar five times. Each win awards a copy of them.</p><div class="mode-action">${dailyFeatured().name.toUpperCase()} · ${dailyProgress()}/5</div></div><button class="btn secondary" onclick="collection()">MY SUPERSTARS · ${Object.keys(save.roster).length}</button><button class="btn secondary" onclick="careerStats()">CAREER STATS</button></div>`)}
function collection(){let o=BASE.filter(x=>level(x.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>${o.length} OWNED</span></div><div class="title">My Superstars</div><div class="cards">${o.sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name)).map(x=>`<div onclick="openCard('${x.name.replaceAll("'","\\'")}',${level(x.name)})">${card(x,level(x.name))}</div>`).join('')}</div>`);requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'}))}
function careerStats(){let o=BASE.filter(x=>level(x.name)).map(w=>({w,...recordStats(w.name)})).sort((a,b)=>b.games-a.games||b.wins-a.wins||a.w.name.localeCompare(b.w.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>CAREER STATS</span></div><div class="title">Career Stats</div><div class="sub">${save.wins} wins · ${save.losses} losses</div><div class="record-list">${o.map(x=>`<div class="record-row"><img src="assets/superstars/${artFile(x.w.name)}" alt=""><div class="record-name"><b>${x.w.name}</b><small>LVL ${level(x.w.name)} · ${x.games} MATCHES</small></div><div class="record-numbers"><b>${x.wins}-${x.losses}</b><small>${x.pct}% · ${x.streak>0?'W'+x.streak:x.streak<0?'L'+Math.abs(x.streak):'—'} STREAK</small></div></div>`).join('')}</div>`,'stats-screen')}

function dailyKey(){let d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+day}
function dailyFeatured(){let k=dailyKey(),seed=[...k].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7);return BASE[seed%BASE.length]}
function dailyProgress(){return save?.dailyGauntlet?.date===dailyKey()?Math.min(5,save.dailyGauntlet.wins||0):0}
function ensureDaily(){let k=dailyKey();if(!save.dailyGauntlet||save.dailyGauntlet.date!==k)save.dailyGauntlet={date:k,wins:0};return save.dailyGauntlet}
function dailyGauntlet(){let d=ensureDaily(),w=dailyFeatured(),done=d.wins>=5;persist();shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY GAUNTLET</span></div><div class="title">${w.name}</div><div class="sub">TODAY'S FEATURED SUPERSTAR · ${d.wins}/5 WINS</div><div class="hero finish"><div class="cards gauntlet-card-wrap">${card(w,Math.max(1,Math.min(5,d.wins+1)))}</div><div class="sub">${done?'Gauntlet complete. A new featured Superstar arrives tomorrow.':'Each victory awards one '+w.name+' copy. Losses do not consume an attempt.'}</div>${done?'<button class="btn secondary" onclick="home()">COMPLETE · RETURN HOME</button>':'<button class="btn" onclick="selectGauntletFighter()">PLAY MATCH '+(d.wins+1)+' OF 5</button>'}</div>`,'gauntlet-screen')}
function selectGauntletFighter(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),stage=d.wins+1,o=BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="dailyGauntlet()" style="background:none;border:0">‹ GAUNTLET</button><span>MATCH ${stage} / 5</span></div><div class="title">Choose Superstar</div><div class="sub">${w.name} · 100% HP · Each match has a different rule.</div><div class="cards select">${o.map(x=>`<div onclick="beginGauntlet('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function beginGauntlet(n){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let p=BASE.find(x=>x.name===n),cpu=dailyFeatured(),stage=d.wins+1,pl=level(n),cl=pl,pmax=hpOf(p,pl),cmax=hpOf(cpu,cl),mods=['normal','noStat','specialist','comeback','random'],mod=ROAD_MODS.find(x=>x.id===mods[stage-1])||ROAD_MODS[0],pool=[...KEYS.map(x=>x[0])],blocked=null;if(mod.id==='noStat'){blocked=pool[(stage+dailyKey().charCodeAt(9))%pool.length];pool=pool.filter(x=>x!==blocked)}if(mod.id==='specialist')pool=pool.sort(()=>Math.random()-.5).slice(0,3);state.b={p,cpu,pl,cl,php:pmax,chp:cmax,pmax,cmax,avail:pool,gauntlet:true,gauntletStage:stage,node:{mod,pool,blocked},log:mod.name+' · DAILY GAUNTLET · MATCH '+stage+' OF 5'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
const ROAD_CITIES=['New York, USA','London, England','Tokyo, Japan','Mexico City, Mexico','Toronto, Canada','Paris, France','Sydney, Australia','Berlin, Germany','Rio de Janeiro, Brazil','Mumbai, India','Rome, Italy','Seoul, South Korea','Chicago, USA','Dublin, Ireland','Madrid, Spain','Singapore','Cape Town, South Africa','Las Vegas, USA','Auckland, New Zealand','Dubai, UAE','Buenos Aires, Argentina','Amsterdam, Netherlands','Bangkok, Thailand','Montreal, Canada'];
const ROAD_MODS=[
{id:'normal',name:'STANDARD MATCH',desc:'No special rules.'},
{id:'hardcore',name:'HARDCORE',desc:'Power and Striking attacks deal 20% more damage.'},
{id:'submission',name:'SUBMISSION MATCH',desc:'Submission attacks deal 35% more damage.'},
{id:'aerial',name:'HIGH-FLYING MATCH',desc:'Aerial attacks deal 35% more damage.'},
{id:'technical',name:'TECHNICAL SHOWCASE',desc:'Technique attacks deal 35% more damage.'},
{id:'mainEvent',name:'MAIN EVENT',desc:'Charisma, Star Power and Finisher attacks deal 20% more damage.'},
{id:'noStat',name:'STAT LOCKOUT',desc:'One attack category is unavailable.'},
{id:'specialist',name:'SPECIALIST',desc:'Only four attack categories are available.'},
{id:'iron',name:'IRON MAN',desc:'Both Superstars have 25% more HP.'},
{id:'glass',name:'GLASS CANNON',desc:'Both Superstars have 30% less HP.'},
{id:'opening',name:'DAMAGED START',desc:'Both Superstars begin at 75% HP.'},
{id:'comeback',name:'COMEBACK',desc:'Attacks deal 25% more damage below 30% HP.'},
{id:'random',name:'CHAOS',desc:'Attack categories fully reshuffle every turn.'}
];
const ROAD_BROAD_TAGS=['Male','Female','Current Era','Legend','Hall of Fame','RAW','SmackDown','NXT','Golden Era','New Generation Era','Attitude Era','Ruthless Aggression Era','Monday Night War Era','ECW','WCW'];
function roadSeed(n,salt=0){let x=(n*9301+49297+salt*2339)%233280;return x/233280}
function roadBand(n){return 1+Math.floor((n-1)/25)}
function roadEligibleRequirements(n){
 let owned=BASE.filter(w=>level(w.name)),all=[...new Set(BASE.flatMap(w=>w.tags||[]))],band=roadBand(n);
 return all.filter(t=>{
   let rosterCount=BASE.filter(w=>hasTag(w,t)).length,ownedCount=owned.filter(w=>hasTag(w,t)).length;
   let broad=ROAD_BROAD_TAGS.includes(t),minRoster=broad?3:3,minOwned=band<=1?1:2;
   return rosterCount>=minRoster&&ownedCount>=minOwned;
 });
}
function roadNode(n){
 let band=roadBand(n),seed=roadSeed(n),mods=ROAD_MODS.slice(0,Math.min(ROAD_MODS.length,6+band*2)),mod=mods[Math.floor(seed*mods.length)],pool=[...KEYS.map(x=>x[0])],blocked=null;
 if(mod.id==='noStat'){blocked=pool[Math.floor(roadSeed(n,1)*pool.length)];pool=pool.filter(x=>x!==blocked)}
 if(mod.id==='specialist'){pool=pool.sort((a,b)=>roadSeed(n,a.charCodeAt(0))-roadSeed(n,b.charCodeAt(0))).slice(0,4)}
 let eligibleTag=null,reqs=roadEligibleRequirements(n),requireChance=Math.min(.25+band*.08,.7);
 if(n>=4&&reqs.length&&roadSeed(n,2)<requireChance)eligibleTag=reqs[Math.floor(roadSeed(n,3)*reqs.length)];
 let cpuPool=eligibleTag?BASE.filter(w=>hasTag(w,eligibleTag)):BASE,cpu=cpuPool[Math.floor(roadSeed(n,4)*cpuPool.length)],city=ROAD_CITIES[(n-1)%ROAD_CITIES.length];
 return {n,band,mod,cpu,blocked,pool,eligibleTag,city};
}
function road(){if(!save.roadLevel)save.roadLevel=1;persist();let n=save.roadLevel,nodes=[0,1,2,3].map(i=>roadNode(n+i)),band=roadBand(n);shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>SUPERSTAR ROAD</span></div><div class="title">SUPERSTAR ROAD</div><div class="sub">MATCH ${n} · LEVEL ${band} · The road never ends. Requirements and stipulations become more demanding as you travel.</div><div class="road-map"><div class="road-track"></div>${nodes.map((x,i)=>{let cl=x.band,max=hpOf(x.cpu,cl),start=max;if(x.mod.id==='iron')max=Math.round(max*1.25);if(x.mod.id==='glass')max=Math.round(max*.7);start=max;if(x.mod.id==='opening')start=Math.round(max*.75);return `<div class="road-stop stop-${i} ${i?'future':'current'}"><div class="road-pin"><span>${x.n}</span></div><div class="road-card"><div class="road-city">📍 ${x.city}</div><div class="road-level">MATCH ${x.n} · LEVEL ${x.band}</div><div class="road-opponent">${card(x.cpu,cl,'road-mini-card')}</div><b>${x.mod.name}</b><small>${(x.eligibleTag?'ENTRY: '+x.eligibleTag.toUpperCase()+' · ':'OPEN ENTRY · ')+x.mod.desc}</small><span>${x.cpu.name} · LVL ${cl} · ${start} HP${start!==max?' / '+max+' MAX':''}</span>${i===0?'<button class="btn" onclick="selectRoadFighter()">PLAY MATCH</button>':''}</div></div>`}).join('')}</div>`,'road-screen')}
function selectRoadFighter(){let node=roadNode(save.roadLevel||1),cl=node.band,cmax=hpOf(node.cpu,cl),chp=cmax;if(node.mod.id==='iron')cmax=Math.round(cmax*1.25);if(node.mod.id==='glass')cmax=Math.round(cmax*.7);chp=cmax;if(node.mod.id==='opening')chp=Math.round(cmax*.75);let o=BASE.filter(x=>level(x.name)&&(!node.eligibleTag||hasTag(x,node.eligibleTag))).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="road()" style="background:none;border:0">‹ ROAD</button><span>SUPERSTAR ROAD · MATCH ${node.n}</span></div><div class="title">Choose Superstar</div><div class="sub">${node.eligibleTag?'ENTRY: '+node.eligibleTag.toUpperCase():'OPEN ENTRY'} · ${node.mod.name} · ${node.cpu.name} LVL ${cl}</div><div class="cards select">${o.map(x=>`<div onclick="beginRoad('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function beginRoad(n){let node=roadNode(save.roadLevel||1),p=BASE.find(x=>x.name===n);if(!p||!level(n)||node.eligibleTag&&!hasTag(p,node.eligibleTag))return selectRoadFighter();let pl=level(n),cl=node.band,pmax=hpOf(p,pl),cmax=hpOf(node.cpu,cl);if(node.mod.id==='iron'){pmax=Math.round(pmax*1.25);cmax=Math.round(cmax*1.25)}if(node.mod.id==='glass'){pmax=Math.round(pmax*.7);cmax=Math.round(cmax*.7)}let php=pmax,chp=cmax;if(node.mod.id==='opening'){php=Math.round(pmax*.75);chp=Math.round(cmax*.75)}state.b={p,cpu:node.cpu,pl,cl,php,chp,pmax,cmax,avail:[...node.pool],road:true,node,log:(node.eligibleTag?node.eligibleTag.toUpperCase()+' · ':'')+node.mod.name+' · Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}

function selectFighter(){let o=BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>EXHIBITION</span></div><div class="title">Choose Superstar</div><div class="sub">Pick anyone in your collection.</div><div class="cards select">${o.map(x=>`<div onclick="begin('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function begin(n){let p=BASE.find(x=>x.name===n),pool=BASE.filter(x=>x.name!==n),cpu=pool[Math.floor(Math.random()*pool.length)],pl=level(n),cl=pl;state.b={p,cpu,pl,cl,php:hpOf(p,pl),chp:hpOf(cpu,cl),pmax:hpOf(p,pl),cmax:hpOf(cpu,cl),avail:KEYS.map(x=>x[0]),log:'Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
const ATTACK_ICONS={str:'strength-icon.png',stk:'strike-icon.png',tec:'technical-icon.png',agi:'agility-icon.png',sub:'technical-icon.png',cha:'charisma-icon.png',star:'charisma-icon.png',fnr:'strength-icon.png'};
const ACTIONS=[
{id:'defence',name:'DEFENCE',desc:'Take 50% less damage this exchange.'},
{id:'chair',name:'STEEL CHAIR',desc:'Deal 85 damage.'},
{id:'lowblow',name:'LOW BLOW',desc:'Deal 55 damage and halve incoming damage.'},
{id:'ref',name:'DISTRACT REFEREE',desc:'Neither Superstar deals damage this exchange.'},
{id:'crowd',name:'CROWD SUPPORT',desc:'Recover 80 HP.'},
{id:'adrenaline',name:'ADRENALINE',desc:'Your next stat attack deals 40% more damage.'},
{id:'reverse',name:'REVERSE IT',desc:'Reflect 50% of incoming damage.'},
{id:'cheap',name:'CHEAP SHOT',desc:'Deal 60 damage.'},
{id:'secondwind',name:'SECOND WIND',desc:'Recover 120 HP when below half HP, otherwise 60.'},
{id:'mindgames',name:'MIND GAMES',desc:'Reduce incoming damage by 35%.'},
{id:'fighting',name:'FIGHTING SPIRIT',desc:'Recover 50 HP and boost your next stat attack by 25%.'},
{id:'brawl',name:'WILD BRAWL',desc:'Deal 75 damage and take 25% more incoming damage.'}
];
function actionBy(id){return ACTIONS.find(a=>a.id===String(id).replace('act:',''))}
function initActionDecks(b){if(b.actionInit)return;b.actionInit=true;let pick=()=>{let p=[...ACTIONS],o=[];while(o.length<3&&p.length){let i=Math.floor(Math.random()*p.length);o.push('act:'+p.splice(i,1)[0].id)}return o};b.actionCards=pick();b.cpuActionCards=pick()}
function battle(){let b=state.b,ps=statsAt(b.p,b.pl);initActionDecks(b);if(!b.used)b.used=[];if(!b.hand)b.hand=[];let allowed=[...b.avail,...b.actionCards];b.hand=b.hand.filter(k=>allowed.includes(k)&&!b.used.includes(k));let unused=allowed.filter(k=>!b.used.includes(k)&&!b.hand.includes(k));if(!b.actionSeen&&!b.hand.some(k=>actionBy(k))){let acts=unused.filter(k=>actionBy(k));if(acts.length){let ai=Math.floor(Math.random()*acts.length),pick=acts[ai];b.hand.push(pick);unused=unused.filter(k=>k!==pick);b.actionSeen=true}}if(b.hand.length+unused.length<3){b.used=[];unused=allowed.filter(k=>!b.hand.includes(k))}while(b.hand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.hand.push(unused.splice(i,1)[0])}let choices=[...b.hand];shell(`<div class="battle-logo-wrap">${logo()}</div><div class="topbar"><span>${b.gauntlet?'DAILY GAUNTLET · '+b.gauntletStage+'/5':(b.road?'SUPERSTAR ROAD · '+b.node.n:'EXHIBITION')}</span><span>${b.gauntlet?b.node.mod.name:(b.road?b.node.mod.name:'LIVE')}</span></div><div class="versus">${card(b.p,b.pl)}<div class="vs">VS</div>${card(b.cpu,b.cl)}</div><div class="hpbox"><div class="hphead"><span>${b.p.name}</span><span>${b.php}/${b.pmax}</span></div><div class="hpbar"><div class="hpfill" style="width:${Math.max(0,b.php/b.pmax*100)}%"></div></div></div><div class="hpbox"><div class="hphead"><span>${b.cpu.name}</span><span>${b.chp}/${b.cmax}</span></div><div class="hpbar"><div class="hpfill" style="width:${Math.max(0,b.chp/b.cmax*100)}%"></div></div></div><div class="log">${b.log}</div><div class="chooser"><h3>CHOOSE YOUR CARD</h3><div class="attacks">${choices.map(k=>{let ac=actionBy(k);return ac?`<button class="attack action-card" onclick="attack('${k}')"><small>ACTION</small><strong>${ac.name}</strong><em>${ac.desc}</em></button>`:`<button class="attack" onclick="attack('${k}')"><img class="attackicon" src="assets/${ATTACK_ICONS[k]}" alt=""><b>${ps[k]}</b><small>${KEYS.find(x=>x[0]===k)?.[1]||''}</small></button>`}).join('')}</div></div>`,'battle')}
function cpuChoice(b,cs){initActionDecks(b);if(!b.cpuUsed)b.cpuUsed=[];if(!b.cpuHand)b.cpuHand=[];let allowed=[...b.avail,...b.cpuActionCards];b.cpuHand=b.cpuHand.filter(k=>allowed.includes(k)&&!b.cpuUsed.includes(k));let unused=allowed.filter(k=>!b.cpuUsed.includes(k)&&!b.cpuHand.includes(k));if(!b.cpuActionSeen&&!b.cpuHand.some(k=>actionBy(k))){let acts=unused.filter(k=>actionBy(k));if(acts.length){let pick=acts[Math.floor(Math.random()*acts.length)];b.cpuHand.push(pick);unused=unused.filter(k=>k!==pick);b.cpuActionSeen=true}}if(b.cpuHand.length+unused.length<3){b.cpuUsed=[];unused=allowed.filter(k=>!b.cpuHand.includes(k))}while(b.cpuHand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.cpuHand.push(unused.splice(i,1)[0])}return [...b.cpuHand].sort((a,c)=>{let av=actionBy(a)?72:cs[a],cv=actionBy(c)?72:cs[c];return cv-av})[0]}
function resolveAction(id,side,b){let a=actionBy(id),r={damage:0,mult:1,reflect:0,cancel:false,text:a?.name||'ACTION'};if(!a)return r;let mine=side==='p'?'php':'chp',max=side==='p'?'pmax':'cmax';if(a.id==='defence')r.mult=.5;if(a.id==='chair')r.damage=85;if(a.id==='lowblow'){r.damage=55;r.mult=.5}if(a.id==='ref')r.cancel=true;if(a.id==='crowd')b[mine]=Math.min(b[max],b[mine]+80);if(a.id==='adrenaline')b[side==='p'?'pBoost':'cBoost']=1.4;if(a.id==='reverse')r.reflect=.5;if(a.id==='cheap')r.damage=60;if(a.id==='secondwind')b[mine]=Math.min(b[max],b[mine]+(b[mine]<b[max]/2?120:60));if(a.id==='mindgames')r.mult=.65;if(a.id==='fighting'){b[mine]=Math.min(b[max],b[mine]+50);b[side==='p'?'pBoost':'cBoost']=1.25}if(a.id==='brawl'){r.damage=75;r.mult=1.25}return r}
function attack(pk){let b=state.b,ps=statsAt(b.p,b.pl),cs=statsAt(b.cpu,b.cl);if(!b.hand||!b.hand.includes(pk))return battle();let ck=cpuChoice(b,cs),pa=actionBy(pk),ca=actionBy(ck),pr=pa?resolveAction(pk,'p',b):{damage:0,mult:1,reflect:0,cancel:false},cr=ca?resolveAction(ck,'c',b):{damage:0,mult:1,reflect:0,cancel:false};let pd=pa?pr.damage:ps[pk],cd=ca?cr.damage:cs[ck];if(!pa&&b.pBoost){pd=Math.round(pd*b.pBoost);b.pBoost=null}if(!ca&&b.cBoost){cd=Math.round(cd*b.cBoost);b.cBoost=null}if(b.road||b.gauntlet){let m=b.node.mod.id;if(m==='comeback'){if(b.php/b.pmax<.3)pd=Math.round(pd*1.25);if(b.chp/b.cmax<.3)cd=Math.round(cd*1.25)}if(m==='hardcore'){if(pk==='str'||pk==='stk'||pa?.id==='chair')pd=Math.round(pd*1.2);if(ck==='str'||ck==='stk'||ca?.id==='chair')cd=Math.round(cd*1.2)}if(m==='submission'){if(pk==='sub')pd=Math.round(pd*1.35);if(ck==='sub')cd=Math.round(cd*1.35)}if(m==='aerial'){if(pk==='agi')pd=Math.round(pd*1.35);if(ck==='agi')cd=Math.round(cd*1.35)}if(m==='technical'){if(pk==='tec')pd=Math.round(pd*1.35);if(ck==='tec')cd=Math.round(cd*1.35)}if(m==='mainEvent'){if(['cha','star','fnr'].includes(pk))pd=Math.round(pd*1.2);if(['cha','star','fnr'].includes(ck))cd=Math.round(cd*1.2)}}if(pr.cancel||cr.cancel){pd=0;cd=0}pd=Math.round(pd*cr.mult);cd=Math.round(cd*pr.mult);let pReflect=Math.round(cd*pr.reflect),cReflect=Math.round(pd*cr.reflect),nextPhp=b.php-cd-cReflect,nextChp=b.chp-pd-pReflect;b.php=nextPhp;b.chp=nextChp;b.used.push(pk);b.hand=b.hand.filter(k=>k!==pk);b.cpuUsed.push(ck);b.cpuHand=b.cpuHand.filter(k=>k!==ck);let pn=pa?pa.name:KEYS.find(x=>x[0]===pk)[1],cn=ca?ca.name:KEYS.find(x=>x[0]===ck)[1];b.log=`${pn} · ${pd} DAMAGE · ${b.cpu.name.toUpperCase()} USES ${cn.toUpperCase()} · ${cd} DAMAGE`;if(b.php<=0||b.chp<=0){let win=b.php<=0&&b.chp<=0?b.chp<b.php:b.chp<=0;return setTimeout(()=>finish(win),350)}battle()}
const FINISHER_MEDIA_URL='finisher-media.json?v='+APP_VERSION;
let finisherMediaCache=null,finisherMediaPromise=null;
function loadFinisherMedia(){if(finisherMediaCache)return Promise.resolve(finisherMediaCache);if(finisherMediaPromise)return finisherMediaPromise;finisherMediaPromise=fetch(FINISHER_MEDIA_URL,{cache:'force-cache'}).then(r=>r.ok?r.json():{}).catch(()=>({})).then(x=>(finisherMediaCache=x,finisherMediaPromise=null,x));return finisherMediaPromise}
function preloadArt(...ws){ws.flat().filter(Boolean).forEach(w=>{let i=new Image();i.decoding='async';i.src='assets/superstars/'+artFile(typeof w==='string'?w:w.name)})}
function preloadFinisher(w){if(!w)return;loadFinisherMedia().then(media=>{let raw=media[w.name]||'',url=tenorEmbed(raw);if(!url)return;if(/\.(?:gif|webp)(?:$|\?)/i.test(raw)){let i=new Image();i.src=url}else{let l=document.createElement('link');l.rel='preconnect';l.href='https://tenor.com';l.crossOrigin='anonymous';document.head.appendChild(l)}})}
function preloadMatchMedia(p,cpu){preloadArt(p,cpu);preloadFinisher(p);preloadFinisher(cpu)}
function tenorEmbed(url){if(!url)return'';let m=url.match(/(?:\/view\/[^?#]*-gif-)(\d+)/i);return m?'https://tenor.com/embed/'+m[1]:url}
async function finish(win){let b=state.b;if(win)save.wins++;else save.losses++;recordGame(b.p.name,win);let r=recordStats(b.p.name);state.winAward=win&&r.wins>0&&r.wins%50===0?b.p.name:null;if(b.road&&win){save.roadLevel=(save.roadLevel||1)+1}persist();let w=win?b.p:b.cpu,media=await loadFinisherMedia();let raw=media[w.name]||'',url=tenorEmbed(raw),direct=/\.(?:gif|webp|mp4)(?:$|\?)/i.test(raw);shell(`<div class="finish-show"><div class="finish-head"><div class="kicker">${win?'YOU WIN':'DEFEAT'}</div><div class="big">${w.finisher}</div><div class="sub">${w.name} hits the finisher!</div></div>${url?`<div class="finisher-media">${direct?`<img src="${url}" alt="${w.name} finisher">`:`<iframe src="${url}" title="${w.name} finisher" allow="autoplay; fullscreen" scrolling="no" frameborder="0"></iframe>`}</div>`:`<div class="finisher-media missing"><span>FINISHER CLIP</span><b>${w.name}</b><small>Add a URL in Finisher Studio</small></div>`}<div class="pin-stage"><div class="pin-label">PIN COUNT</div><div id="pinCount" class="pin-number">1</div></div><div id="finishAction" class="finish-action"></div></div>`,'finish-screen');let n=1,el=document.querySelector('#pinCount');let timer=setInterval(()=>{n++;if(el){el.classList.remove('pop');void el.offsetWidth;el.textContent=n;el.classList.add('pop')}if(n===3){clearInterval(timer);setTimeout(()=>{let a=document.querySelector('#finishAction');if(a)a.innerHTML=win?(b.gauntlet?'<button class="btn" onclick="claimGauntletReward()">CLAIM '+b.cpu.name.toUpperCase()+'</button>':'<button class="btn" onclick="rewardPack()">CLAIM REWARD</button>'):(b.gauntlet?'<button class="btn secondary" onclick="dailyGauntlet()">TRY AGAIN</button>':(b.road?'<button class="btn secondary" onclick="road()">RETURN TO ROAD</button>':'<button class="btn secondary" onclick="home()">RETURN HOME</button>'))},700)}},900)}
function claimGauntletReward(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);d.wins++;persist();let next=state.winAward?'claimWinAward()':'dailyGauntlet()';shell(`<div class="hero finish"><div class="kicker">DAILY GAUNTLET REWARD · ${d.wins}/5</div>${card(w,neu,'flash')}<div class="title">${old?'LV. '+old+' → LV. '+neu:'UNLOCKED'}</div><div class="sub">${w.name} awarded for defeating today's featured Superstar.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward')}
function rewardPack(){shell(`<div class="hero finish"><div class="kicker">MATCH REWARD</div><div class="title">Victory Pack</div><div class="pack" onclick="openReward()">WWE<br>SUPERSTARS</div><div class="sub">Tap the pack to reveal your Superstar.</div></div>`,'reward')}
function duplicateUpgrade(w,old,neu,next,kicker='DUPLICATE ABSORBED'){let before=statsAt(w,old),after=statsAt(w,neu),bh=hpOf(w,old),ah=hpOf(w,neu);shell(`<div class="hero finish duplicate-upgrade"><div class="kicker">${kicker}</div><div class="upgrade-card">${card(w,old,'flash')}</div><div class="upgrade-level">LV. <b id="upgradeLevel">${old}</b> <span>→</span> LV. ${neu}</div><div class="upgrade-stats">${KEYS.map(([k,label])=>`<div class="upgrade-stat"><span>${label}</span><b id="up-${k}">${before[k]}</b><i>▲</i><em>+${after[k]-before[k]}</em></div>`).join('')}<div class="upgrade-stat hp-up"><span>HP</span><b id="up-hp">${bh}</b><i>▲</i><em>+${ah-bh}</em></div></div><div class="upgrade-message">CARD UPGRADE</div><button id="upgradeContinue" class="btn upgrade-continue" onclick="${next}">Continue</button></div>`,'reward');setTimeout(()=>{let c=document.querySelector('.upgrade-card');if(c)c.innerHTML=card(w,neu,'flash');let lv=document.querySelector('#upgradeLevel');if(lv)lv.textContent=neu;KEYS.forEach(([k])=>tickUpgrade('up-'+k,before[k],after[k]));tickUpgrade('up-hp',bh,ah);document.querySelectorAll('.upgrade-stat').forEach((el,i)=>setTimeout(()=>el.classList.add('rising'),i*70));let m=document.querySelector('.upgrade-message');if(m)m.classList.add('show');let btn=document.querySelector('#upgradeContinue');if(btn)btn.classList.add('show')},650)}
function tickUpgrade(id,from,to){let el=document.getElementById(id);if(!el)return;let start=performance.now(),dur=700;function step(t){let p=Math.min(1,(t-start)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(from+(to-from)*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
function openReward(){let wasRoad=!!state.b?.road,w=BASE[Math.floor(Math.random()*BASE.length)],old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);persist();let next=state.winAward?'claimWinAward()':(wasRoad?'road()':'home()');if(old)return duplicateUpgrade(w,old,neu,next);shell(`<div class="hero finish"><div class="kicker">NEW SUPERSTAR!</div>${card(w,neu,'flash')}<div class="title">UNLOCKED</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward')}
function claimWinAward(){let n=state.winAward;if(!n)return state.b?.gauntlet?dailyGauntlet():(state.b?.road?road():home());let w=BASE.find(x=>x.name===n),old=level(n),neu=old+1;save.roster[n]=neu;state.winAward=null;persist();shell(`<div class="hero finish"><div class="kicker">50-WIN AWARD</div>${card(w,neu,'flash')}<div class="title">BONUS ${w.name.toUpperCase()}</div><div class="sub">50 wins with ${w.name}! Extra Superstar copy awarded. LV. ${old} → LV. ${neu}</div><button class="btn" onclick="${state.b?.road?'road()':'home()'}">Continue</button></div>`,'reward')}start();setTimeout(()=>{loadFinisherMedia();let owned=BASE.filter(w=>level(w.name));preloadArt(owned.slice(0,12))},250);