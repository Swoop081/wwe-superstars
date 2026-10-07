const APP_VERSION='0.8.93';
const BASE=[
{name:'Roman Reigns',cha:97,str:94,stk:88,tec:72,agi:68,iq:91,finisher:'SPEAR'},{name:'Cody Rhodes',cha:97,str:68,stk:94,tec:88,agi:72,iq:91,finisher:'CROSS RHODES'},{name:'Rhea Ripley',cha:91,str:94,stk:88,tec:72,agi:68,iq:97,finisher:'RIPTIDE'},{name:'CM Punk',cha:91,str:68,stk:88,tec:94,agi:72,iq:97,finisher:'GO TO SLEEP'},{name:'IYO SKY',cha:88,str:68,stk:72,tec:91,agi:94,iq:97,finisher:'OVER THE MOONSAULT'},{name:'Seth Rollins',cha:97,str:68,stk:88,tec:91,agi:94,iq:72,finisher:'CURB STOMP'},{name:'Becky Lynch',cha:97,str:68,stk:91,tec:94,agi:72,iq:88,finisher:'MANHANDLE SLAM'},{name:'Randy Orton',cha:88,str:72,stk:91,tec:94,agi:68,iq:97,finisher:'RKO'},{name:'Bianca Belair',cha:91,str:94,stk:88,tec:68,agi:97,iq:72,finisher:'K.O.D.'},{name:'Gunther',cha:72,str:94,stk:97,tec:88,agi:68,iq:91,finisher:'POWERBOMB'},{name:'Sami Zayn',cha:97,str:68,stk:72,tec:88,agi:91,iq:94,finisher:'HELLUVA KICK'},{name:'Charlotte Flair',cha:94,str:72,stk:88,tec:97,agi:91,iq:68,finisher:'FIGURE EIGHT'},
{name:'Tiffany Stratton',cha:94,str:68,stk:72,tec:88,agi:97,iq:91,finisher:'PRETTIEST MOONSAULT EVER',tags:['Female','SmackDown','Current Era']},
{name:'Liv Morgan',cha:94,str:68,stk:88,tec:91,agi:97,iq:72,finisher:'OBLIVION',tags:['Female','RAW','Current Era']},
{name:'Lola Vice',cha:88,str:72,stk:97,tec:91,agi:94,iq:68,finisher:'SPINNING BACK KICK',tags:['Female','NXT','Current Era']},
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
{name:'LA Knight',cha:99,str:91,stk:94,tec:88,agi:72,iq:91,finisher:'BFT',tags:['Male','Current Era','SmackDown']},
{name:'Faarooq',cha:88,str:96,stk:94,tec:78,agi:65,iq:86,finisher:'DOMINATOR',tags:['Male','Attitude Era','Legend','Nation of Domination']},
{name:'Mark Henry',cha:84,str:100,stk:94,tec:72,agi:65,iq:86,finisher:"WORLD'S STRONGEST SLAM",tags:['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Nation of Domination']},
{name:"D'Lo Brown",cha:84,str:84,stk:88,tec:86,agi:92,iq:82,finisher:'LO DOWN',tags:['Male','Attitude Era','Legend','Nation of Domination']},
{name:'Kama Mustafa',cha:78,str:94,stk:92,tec:82,agi:68,iq:84,finisher:'DEATH VALLEY DRIVER',tags:['Male','Attitude Era','Legend','Nation of Domination']},
{name:"The Rock '98",cha:100,str:91,stk:94,tec:84,agi:78,iq:88,finisher:'ROCK BOTTOM',tags:['Male','Attitude Era','Legend','Nation of Domination']},
{name:'Rikishi',cha:91,str:97,stk:91,tec:78,agi:72,iq:84,finisher:'BANZAI DROP',tags:['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame']},
{name:'Umaga',cha:82,str:99,stk:98,tec:80,agi:78,iq:86,finisher:'SAMOAN SPIKE',tags:['Male','Ruthless Aggression Era','Legend']},
{name:'Triple H DX',cha:96,str:89,stk:86,tec:94,agi:74,iq:92,finisher:'PEDIGREE',tags:['Male','Attitude Era','Legend','Hall of Fame','D-Generation X']},
{name:'Triple H King of Kings',cha:98,str:94,stk:92,tec:96,agi:68,iq:96,finisher:'PEDIGREE',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame']},
{name:'Cactus Jack',cha:94,str:91,stk:97,tec:84,agi:72,iq:90,finisher:'DOUBLE ARM DDT',tags:['Male','Attitude Era','ECW','Legend','Hall of Fame']},
{name:'Dude Love',cha:97,str:86,stk:84,tec:88,agi:72,iq:92,finisher:'SWEET SHIN MUSIC',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Terry Funk',cha:94,str:88,stk:97,tec:92,agi:70,iq:91,finisher:'SPINNING TOE HOLD',tags:['Male','Golden Era','Attitude Era','ECW','Legend','Hall of Fame']},
{name:'Chainsaw Charlie',cha:88,str:86,stk:96,tec:88,agi:70,iq:88,finisher:'PILEDRIVER',tags:['Male','Attitude Era','Legend']},
{name:'Kamala',cha:88,str:96,stk:92,tec:72,agi:65,iq:82,finisher:'AIR AFRICA',tags:['Male','Golden Era','Legend']},
{name:'Rowdy Roddy Piper',cha:100,str:86,stk:98,tec:90,agi:68,iq:94,finisher:'SLEEPER HOLD',tags:['Male','Golden Era','Legend','Hall of Fame']},
{name:'Lex Luger',cha:91,str:99,stk:92,tec:82,agi:70,iq:88,finisher:'TORTURE RACK',tags:['Male','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW']},
{name:'The Godfather',cha:96,str:91,stk:90,tec:78,agi:70,iq:86,finisher:'PIMP DROP',tags:['Male','Attitude Era','Legend']},
{name:'Hacksaw Jim Duggan',cha:96,str:94,stk:92,tec:72,agi:65,iq:84,finisher:'THREE-POINT STANCE CLOTHESLINE',tags:['Male','Golden Era','Legend','Hall of Fame']},
{name:'Mr Perfect',cha:96,str:84,stk:88,tec:99,agi:90,iq:94,finisher:'PERFECT-PLEX',tags:['Male','Golden Era','New Generation Era','Legend','Hall of Fame']},
{name:'Earthquake',cha:88,str:99,stk:96,tec:76,agi:65,iq:84,finisher:'EARTHQUAKE SPLASH',tags:['Male','Golden Era','Legend','Natural Disasters']},
{name:'Typhoon',cha:82,str:98,stk:94,tec:74,agi:65,iq:82,finisher:'TIDAL WAVE',tags:['Male','Golden Era','Legend','Natural Disasters']},
{name:'Sensational Sherri',cha:99,str:70,stk:86,tec:91,agi:84,iq:96,finisher:'SLEEPER HOLD',tags:['Female','Golden Era','New Generation Era','Legend','Hall of Fame']},
{name:'Ultimo Dragon',cha:88,str:68,stk:86,tec:99,agi:100,iq:94,finisher:'DRAGON SLEEPER',tags:['Male','Monday Night War Era','Ruthless Aggression Era','Legend','WCW']},
{name:'Vader',cha:91,str:100,stk:99,tec:88,agi:82,iq:88,finisher:'VADER BOMB',tags:['Male','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW']},
{name:'Ken Shamrock',cha:88,str:94,stk:96,tec:99,agi:76,iq:92,finisher:'ANKLE LOCK',tags:['Male','Attitude Era','Legend']},
{name:'Gangrel',cha:91,str:84,stk:88,tec:86,agi:82,iq:88,finisher:'IMPLANT DDT',tags:['Male','Attitude Era','Legend','The Brood']},
{name:'Dusty Rhodes',cha:100,str:88,stk:94,tec:90,agi:68,iq:96,finisher:'BIONIC ELBOW',tags:['Male','Golden Era','Legend','Hall of Fame']},
{name:'Goldust',cha:97,str:84,stk:91,tec:90,agi:78,iq:92,finisher:'CURTAIN CALL',tags:['Male','New Generation Era','Attitude Era','Legend']},
{name:'Ric Flair',cha:100,str:78,stk:91,tec:100,agi:78,iq:100,finisher:'FIGURE FOUR LEGLOCK',tags:['Male','Golden Era','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW']},
{name:'AJ Lee',cha:98,str:68,stk:90,tec:96,agi:92,iq:94,finisher:'BLACK WIDOW',tags:['Female','PG Era','Legend']},
{name:'Candice Michelle',cha:91,str:74,stk:86,tec:82,agi:88,iq:82,finisher:'CANDYWRAPPER',tags:['Female','Ruthless Aggression Era','Legend']},
{name:'Maryse',cha:96,str:70,stk:86,tec:88,agi:86,iq:90,finisher:'FRENCH KISS',tags:['Female','Ruthless Aggression Era','PG Era','Legend']},
{name:'Torrie Wilson',cha:97,str:70,stk:84,tec:80,agi:88,iq:84,finisher:'NOSE JOB',tags:['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','WCW']},
{name:'Road Dogg',cha:96,str:80,stk:88,tec:78,agi:76,iq:86,finisher:'PUMPHANDLE DROP',tags:['Male','Attitude Era','Legend','D-Generation X','New Age Outlaws']},
{name:'Billy Gunn',cha:88,str:96,stk:90,tec:82,agi:86,iq:78,finisher:'FAMEASSER',tags:['Male','Attitude Era','Legend','Hall of Fame','D-Generation X','New Age Outlaws']},
{name:'Chyna',cha:94,str:99,stk:92,tec:84,agi:70,iq:86,finisher:'PEDIGREE',tags:['Female','Attitude Era','Legend','Hall of Fame','D-Generation X']},
{name:'Shawn Michaels DX',cha:99,str:70,stk:94,tec:98,agi:92,iq:88,finisher:'SWEET CHIN MUSIC',tags:['Male','Attitude Era','Legend','Hall of Fame','D-Generation X']},
{name:'X-Pac',cha:88,str:72,stk:88,tec:92,agi:97,iq:84,finisher:'X-FACTOR',tags:['Male','Attitude Era','Legend','D-Generation X','The Kliq']},
{name:'Mickie James',cha:92,str:72,stk:90,tec:94,agi:88,iq:86,finisher:'MICKIE-DT',tags:['Female','Ruthless Aggression Era','Legend']},
{name:'Bull Nakano',cha:88,str:94,stk:96,tec:90,agi:76,iq:88,finisher:'BULL NAKANO LEG DROP',tags:['Female','New Generation Era','Legend','Hall of Fame']},
{name:"Big Boss Man",cha:88,str:94,stk:92,tec:82,agi:68,iq:90,finisher:"BOSS MAN SLAM",tags:["Male","Golden Era","Attitude Era","Legend","Hall of Fame"]},
{name:"Jake Roberts",cha:97,str:82,stk:86,tec:94,agi:68,iq:98,finisher:"DDT",tags:["Male","Golden Era","Legend","Hall of Fame"]},
{name:"King Kong Bundy",cha:86,str:99,stk:96,tec:74,agi:65,iq:84,finisher:"ATLANTIC CITY AVALANCHE",tags:["Male","Golden Era","Legend"]},
{name:"JBL",cha:96,str:94,stk:99,tec:86,agi:68,iq:94,finisher:"CLOTHESLINE FROM HELL",tags:["Male","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame","APA"]},
{name:"Stacy Keibler",cha:99,str:68,stk:78,tec:80,agi:92,iq:84,finisher:"SPINNING HEEL KICK",tags:["Female","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame","WCW"]},
{name:"Cora Jade",cha:92,str:70,stk:88,tec:94,agi:91,iq:86,finisher:"JADED",tags:["Female","Current Era","NXT"]},
{name:"Kelani Jordan",cha:88,str:72,stk:82,tec:90,agi:99,iq:86,finisher:"SPLIT-LEGGED MOONSAULT",tags:["Female","Current Era","NXT"]},
{name:"Kendal Grey",cha:82,str:88,stk:84,tec:98,agi:90,iq:94,finisher:"SHADES OF GREY",tags:["Female","Current Era","NXT"]},
{name:"Jaida Parker",cha:94,str:92,stk:97,tec:80,agi:84,iq:86,finisher:"HIPNOTIC",tags:["Female","Current Era","NXT","OTM"]},
{name:"La Parka",cha:97,str:78,stk:86,tec:92,agi:96,iq:88,finisher:"CORKSCREW SENTON",tags:["Male","Monday Night War Era","Legend","WCW","AAA"]},
{name:"Rey Fenix",cha:91,str:72,stk:88,tec:96,agi:100,iq:92,finisher:"MEXICAN MUSCLE BUSTER",tags:["Male","Current Era","SmackDown","Lucha Brothers"]},
{name:"Mr. Iguana",cha:97,str:76,stk:84,tec:90,agi:94,iq:86,finisher:"IGUANA-RANA",tags:["Male","Current Era","AAA"]},
{name:"El Hijo del Vikingo",cha:88,str:74,stk:86,tec:96,agi:100,iq:92,finisher:"630 SENTON",tags:["Male","Current Era","AAA"]},
{name:"Jushin Thunder Liger",cha:94,str:76,stk:90,tec:100,agi:99,iq:97,finisher:"LIGER BOMB",tags:["Male","New Generation Era","Monday Night War Era","Legend","Hall of Fame","WCW"]},
{name:"Tazz",cha:91,str:92,stk:94,tec:100,agi:72,iq:96,finisher:"TAZZMISSION",tags:["Male","Attitude Era","ECW","Legend"]},
{name:"Victoria",cha:94,str:88,stk:92,tec:91,agi:86,iq:88,finisher:"WIDOW'S PEAK",tags:["Female","Ruthless Aggression Era","Legend"]},
{name:"Tajiri",cha:88,str:70,stk:98,tec:96,agi:97,iq:90,finisher:"BUZZSAW KICK",tags:["Male","Attitude Era","Ruthless Aggression Era","ECW","Legend"]},
{name:"William Regal",cha:96,str:84,stk:92,tec:100,agi:68,iq:99,finisher:"KNEE TREMBLER",tags:["Male","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame"]},
{name:"Fit Finlay",cha:86,str:92,stk:96,tec:96,agi:70,iq:94,finisher:"CELTIC CROSS",tags:["Male","Monday Night War Era","Ruthless Aggression Era","Legend","WCW"]},
{name:"Steve Blackman",cha:78,str:92,stk:99,tec:94,agi:84,iq:90,finisher:"BICYCLE KICK",tags:["Male","Attitude Era","Legend"]},
{name:"Raven",cha:97,str:82,stk:92,tec:91,agi:72,iq:98,finisher:"EVENFLOW DDT",tags:["Male","Monday Night War Era","Attitude Era","ECW","Legend","WCW"]},
{name:"Jazz",cha:88,str:94,stk:94,tec:92,agi:78,iq:88,finisher:"JAZZ STINGER",tags:["Female","Attitude Era","Ruthless Aggression Era","ECW","Legend"]},
{name:"Logan Paul",cha:99,str:86,stk:94,tec:82,agi:98,iq:78,finisher:"ONE LUCKY PUNCH",tags:["Male","Current Era","RAW"]},
{name:"Drew McIntyre",cha:96,str:99,stk:97,tec:91,agi:76,iq:92,finisher:"CLAYMORE",tags:["Male","Current Era","SmackDown"]},
{name:"Sheamus",cha:94,str:98,stk:99,tec:90,agi:72,iq:91,finisher:"BROGUE KICK",tags:["Male","Current Era","RAW","The Bar"]},
{name:"Jeff Jarrett",cha:98,str:84,stk:90,tec:94,agi:78,iq:97,finisher:"THE STROKE",tags:["Male","New Generation Era","Attitude Era","Monday Night War Era","Legend","Hall of Fame","WCW"]},
{name:"Mabel",cha:84,str:99,stk:96,tec:72,agi:65,iq:82,finisher:"BELLY-TO-BELLY SUPLEX",tags:["Male","New Generation Era","Legend","Men on a Mission"]},
{name:"Bayley",cha:96,str:82,stk:94,tec:96,agi:90,iq:97,finisher:"ROSE PLANT",tags:["Female","Current Era","RAW","Damage CTRL"]},
{name:"Alexa Bliss",cha:98,str:72,stk:88,tec:92,agi:91,iq:96,finisher:"SISTER ABIGAIL",tags:["Female","Current Era","SmackDown"]},
{name:"Asuka",cha:94,str:84,stk:97,tec:100,agi:94,iq:96,finisher:"ASUKA LOCK",tags:["Female","Current Era","RAW","Kabuki Warriors"]},
{name:"Nia Jax",cha:93,str:100,stk:99,tec:76,agi:65,iq:86,finisher:"ANNIHILATOR",tags:["Female","Current Era","SmackDown"]},
{name:"Chelsea Green",cha:99,str:74,stk:88,tec:87,agi:86,iq:94,finisher:"UNPRETTY-HER",tags:["Female","Current Era","SmackDown"]},
{name:"Piper Niven",cha:87,str:98,stk:99,tec:86,agi:70,iq:88,finisher:"PIPER DRIVER",tags:["Female","Current Era","SmackDown"]},
{name:"Raquel Rodriguez",cha:90,str:99,stk:97,tec:84,agi:76,iq:88,finisher:"TEJANA BOMB",tags:["Female","Current Era","RAW"]},
{name:"Kairi Sane",cha:93,str:72,stk:91,tec:96,agi:100,iq:94,finisher:"INSANE ELBOW",tags:["Female","Current Era","RAW","Kabuki Warriors","Damage CTRL"]},
{name:"Lyra Valkyria",cha:91,str:78,stk:91,tec:96,agi:97,iq:94,finisher:"NIGHTWING",tags:["Female","Current Era","RAW"]},
{name:"Zelina Vega",cha:96,str:68,stk:84,tec:92,agi:98,iq:93,finisher:"CODE RED",tags:["Female","Current Era","SmackDown","LWO"]},
{name:"Kevin Owens",cha:97,str:94,stk:99,tec:92,agi:82,iq:96,finisher:"STUNNER",tags:["Male","Current Era","SmackDown"]},
{name:"Shinsuke Nakamura",cha:96,str:88,stk:96,tec:98,agi:90,iq:97,finisher:"KINSHASA",tags:["Male","Current Era","SmackDown"]},
{name:"Braun Strowman",cha:92,str:100,stk:100,tec:74,agi:68,iq:84,finisher:"RUNNING POWERSLAM",tags:["Male","Current Era","RAW"]},
{name:"R-Truth",cha:100,str:82,stk:93,tec:88,agi:90,iq:78,finisher:"LIE DETECTOR",tags:["Male","Current Era","RAW"]},
{name:"The Miz",cha:100,str:82,stk:94,tec:91,agi:76,iq:99,finisher:"SKULL-CRUSHING FINALE",tags:["Male","Current Era","RAW"]},
{name:"Carmelo Hayes",cha:95,str:76,stk:89,tec:95,agi:99,iq:92,finisher:"NOTHING BUT NET",tags:["Male","Current Era","SmackDown"]},
{name:"Trick Williams",cha:98,str:92,stk:95,tec:84,agi:88,iq:90,finisher:"TRICK SHOT",tags:["Male","Current Era","SmackDown"]},
{name:"Oba Femi",cha:93,str:100,stk:99,tec:88,agi:76,iq:91,finisher:"FALL FROM GRACE",tags:["Male","Current Era","RAW"]},
{name:"Penta",cha:97,str:80,stk:94,tec:98,agi:99,iq:95,finisher:"MEXICAN DESTROYER",tags:["Male","Current Era","RAW","Lucha Brothers"]}];

// Canonical Superstar metadata used by Superstar Road eligibility rules.
// Keep this map additive: new roster members should receive era, division, brand,
// faction/stable and tag-team metadata here as appropriate.
const SUPERSTAR_TAGS={
"Bayley":["Female","Current Era","RAW","Damage CTRL"],
"Alexa Bliss":["Female","Current Era","SmackDown"],
"Asuka":["Female","Current Era","RAW","Kabuki Warriors"],
"Nia Jax":["Female","Current Era","SmackDown"],
"Chelsea Green":["Female","Current Era","SmackDown"],
"Piper Niven":["Female","Current Era","SmackDown"],
"Raquel Rodriguez":["Female","Current Era","RAW"],
"Kairi Sane":["Female","Current Era","RAW","Kabuki Warriors","Damage CTRL"],
"Lyra Valkyria":["Female","Current Era","RAW"],
"Zelina Vega":["Female","Current Era","SmackDown","LWO"],
"Kevin Owens":["Male","Current Era","SmackDown"],
"Shinsuke Nakamura":["Male","Current Era","SmackDown"],
"Braun Strowman":["Male","Current Era","RAW"],
"R-Truth":["Male","Current Era","RAW"],
"The Miz":["Male","Current Era","RAW"],
"Carmelo Hayes":["Male","Current Era","SmackDown"],
"Trick Williams":["Male","Current Era","SmackDown"],
"Oba Femi":["Male","Current Era","RAW"],
"Penta":["Male","Current Era","RAW","Lucha Brothers"],
"Tazz":["Male","Attitude Era","ECW","Legend"],
"Victoria":["Female","Ruthless Aggression Era","Legend"],
"Tajiri":["Male","Attitude Era","Ruthless Aggression Era","ECW","Legend"],
"William Regal":["Male","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame"],
"Fit Finlay":["Male","Monday Night War Era","Ruthless Aggression Era","Legend","WCW"],
"Steve Blackman":["Male","Attitude Era","Legend"],
"Raven":["Male","Monday Night War Era","Attitude Era","ECW","Legend","WCW"],
"Jazz":["Female","Attitude Era","Ruthless Aggression Era","ECW","Legend"],
"Logan Paul":["Male","Current Era","RAW"],
"Drew McIntyre":["Male","Current Era","SmackDown"],
"Sheamus":["Male","Current Era","RAW","The Bar"],
"Jeff Jarrett":["Male","New Generation Era","Attitude Era","Monday Night War Era","Legend","Hall of Fame","WCW"],
"Mabel":["Male","New Generation Era","Legend","Men on a Mission"],
"Big Boss Man":["Male","Golden Era","Attitude Era","Legend","Hall of Fame"],
"Jake Roberts":["Male","Golden Era","Legend","Hall of Fame"],
"King Kong Bundy":["Male","Golden Era","Legend"],
"JBL":["Male","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame","APA"],
"Stacy Keibler":["Female","Attitude Era","Ruthless Aggression Era","Legend","Hall of Fame","WCW"],
"Cora Jade":["Female","Current Era","NXT"],
"Kelani Jordan":["Female","Current Era","NXT"],
"Kendal Grey":["Female","Current Era","NXT"],
"Jaida Parker":["Female","Current Era","NXT","OTM"],
"La Parka":["Male","Monday Night War Era","Legend","WCW","AAA"],
"Rey Fenix":["Male","Current Era","SmackDown","Lucha Brothers"],
"Mr. Iguana":["Male","Current Era","AAA"],
"El Hijo del Vikingo":["Male","Current Era","AAA"],
"Jushin Thunder Liger":["Male","New Generation Era","Monday Night War Era","Legend","Hall of Fame","WCW"],
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
'LA Knight':['Male','Current Era','SmackDown'],
'Faarooq':['Male','Attitude Era','Legend','Nation of Domination'],
'Mark Henry':['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Nation of Domination'],
"D'Lo Brown":['Male','Attitude Era','Legend','Nation of Domination'],
'Kama Mustafa':['Male','Attitude Era','Legend','Nation of Domination'],
"The Rock '98":['Male','Attitude Era','Legend','Nation of Domination'],
'Rikishi':['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame'],
'Umaga':['Male','Ruthless Aggression Era','Legend'],
'Triple H DX':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X'],
'Triple H King of Kings':['Male','Ruthless Aggression Era','Legend','Hall of Fame'],
'Cactus Jack':['Male','Attitude Era','ECW','Legend','Hall of Fame'],
'Dude Love':['Male','Attitude Era','Legend','Hall of Fame'],
'Terry Funk':['Male','Golden Era','Attitude Era','ECW','Legend','Hall of Fame'],
'Chainsaw Charlie':['Male','Attitude Era','Legend'],
'Kamala':['Male','Golden Era','Legend'],
'Rowdy Roddy Piper':['Male','Golden Era','Legend','Hall of Fame'],
'Lex Luger':['Male','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW'],
'The Godfather':['Male','Attitude Era','Legend'],
'Hacksaw Jim Duggan':['Male','Golden Era','Legend','Hall of Fame'],
'Mr Perfect':['Male','Golden Era','New Generation Era','Legend','Hall of Fame'],
'Earthquake':['Male','Golden Era','Legend','Natural Disasters'],
'Typhoon':['Male','Golden Era','Legend','Natural Disasters'],
'Sensational Sherri':['Female','Golden Era','New Generation Era','Legend','Hall of Fame'],
'Ultimo Dragon':['Male','Monday Night War Era','Ruthless Aggression Era','Legend','WCW'],
'Vader':['Male','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW'],
'Ken Shamrock':['Male','Attitude Era','Legend'],
'Gangrel':['Male','Attitude Era','Legend','The Brood'],
'Dusty Rhodes':['Male','Golden Era','Legend','Hall of Fame'],
'Goldust':['Male','New Generation Era','Attitude Era','Legend'],
'Ric Flair':['Male','Golden Era','New Generation Era','Monday Night War Era','Legend','Hall of Fame','WCW'],
'AJ Lee':['Female','PG Era','Legend'],
'Candice Michelle':['Female','Ruthless Aggression Era','Legend'],
'Maryse':['Female','Ruthless Aggression Era','PG Era','Legend'],
'Torrie Wilson':['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','WCW'],
'Road Dogg':['Male','Attitude Era','Legend','D-Generation X','New Age Outlaws'],
'Billy Gunn':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X','New Age Outlaws'],
'Chyna':['Female','Attitude Era','Legend','Hall of Fame','D-Generation X'],
'Shawn Michaels DX':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X'],
'X-Pac':['Male','Attitude Era','Legend','D-Generation X','The Kliq'],
'Mickie James':['Female','Ruthless Aggression Era','Legend'],
'Bull Nakano':['Female','New Generation Era','Legend','Hall of Fame']
};
// v0.8.84 tag audit: canonical additive corrections for Road, collection identity and typography.
const TAG_AUDIT={
  "Bayley": [
    "NXT Alumni"
  ],
  "Alexa Bliss": [
    "NXT Alumni"
  ],
  "Asuka": [
    "NXT Alumni"
  ],
  "Nia Jax": [
    "NXT Alumni"
  ],
  "Chelsea Green": [
    "NXT Alumni"
  ],
  "Piper Niven": [
    "NXT Alumni"
  ],
  "Raquel Rodriguez": [
    "Judgment Day",
    "NXT Alumni"
  ],
  "Kairi Sane": [
    "NXT Alumni"
  ],
  "Lyra Valkyria": [
    "NXT Alumni"
  ],
  "Zelina Vega": [
    "LWO"
  ],
  "Kevin Owens": [
    "NXT Alumni"
  ],
  "Shinsuke Nakamura": [
    "NXT Alumni"
  ],
  "Braun Strowman": [
    "Wyatt Family"
  ],
  "Carmelo Hayes": [
    "NXT Alumni"
  ],
  "Trick Williams": [
    "NXT Alumni"
  ],
  "Oba Femi": [
    "NXT Alumni"
  ],
  "Penta": [
    "Lucha Brothers",
    "AAA"
  ],
  "Rey Fenix": [
    "Lucha Brothers",
    "AAA"
  ],
  "R-Truth": [
    "PG Era"
  ],
  "The Miz": [
    "Ruthless Aggression Era",
    "PG Era"
  ],
  "Sheamus": [
    "Ruthless Aggression Era",
    "PG Era"
  ],
  "Drew McIntyre": [
    "PG Era"
  ],
  "Logan Paul": [],
  "Tazz": [
    "ECW"
  ],
  "Victoria": [
    "Ruthless Aggression Era"
  ],
  "Tajiri": [
    "ECW"
  ],
  "William Regal": [
    "Monday Night War Era"
  ],
  "Fit Finlay": [
    "WCW"
  ],
  "Steve Blackman": [
    "Attitude Era"
  ],
  "Raven": [
    "ECW",
    "WCW"
  ],
  "Jazz": [
    "ECW"
  ],
  "Jeff Jarrett": [
    "WCW"
  ],
  "Mabel": [
    "Men on a Mission"
  ],
  "Road Warrior Hawk": [
    "Golden Era",
    "Road Warriors"
  ],
  "Road Warrior Animal": [
    "Golden Era",
    "Road Warriors"
  ],
  "Demolition Crush": [
    "Golden Era",
    "Demolition"
  ],
  "British Bulldog": [
    "Golden Era",
    "New Generation Era",
    "Hart Foundation"
  ],
  "Yokozuna": [
    "New Generation Era"
  ],
  "Rikishi": [
    "Attitude Era"
  ],
  "Umaga": [
    "Ruthless Aggression Era"
  ],
  "Triple H King of Kings": [
    "Evolution"
  ],
  "Chainsaw Charlie": [
    "ECW"
  ],
  "Ken Shamrock": [
    "Attitude Era"
  ],
  "Dusty Rhodes": [
    "Golden Era"
  ],
  "Goldust": [
    "Attitude Era"
  ],
  "Mickie James": [
    "Ruthless Aggression Era"
  ],
  "Bull Nakano": [
    "New Generation Era"
  ],
  "Sabu": [
    "Attitude Era",
    "ECW"
  ],
  "New Jack": [
    "Attitude Era",
    "ECW"
  ],
  "Paige": [
    "Reality Era"
  ],
  "Rob Van Dam": [
    "ECW",
    "Ruthless Aggression Era"
  ],
  "Kurt Angle": [
    "Attitude Era",
    "Ruthless Aggression Era",
    "Team Angle"
  ],
  "Jeff Hardy": [
    "Attitude Era",
    "Ruthless Aggression Era",
    "The Hardy Boyz",
    "Team Xtreme"
  ],
  "Bret Hart": [
    "New Generation Era",
    "Hart Foundation"
  ],
  "Razor Ramon": [
    "New Generation Era",
    "The Kliq"
  ],
  "Diesel": [
    "New Generation Era",
    "The Kliq",
    "Two Dudes with Attitudes"
  ],
  "Goldberg": [
    "Monday Night War Era",
    "WCW"
  ],
  "Sting": [
    "Monday Night War Era",
    "WCW"
  ],
  "Hulk Hogan": [
    "Golden Era",
    "Mega Powers"
  ],
  "Lita": [
    "Attitude Era",
    "Ruthless Aggression Era",
    "Team Xtreme"
  ],
  "Trish Stratus": [
    "Attitude Era",
    "Ruthless Aggression Era"
  ],
  "Ultimate Warrior": [
    "Golden Era"
  ],
  "Macho Man Randy Savage": [
    "Golden Era",
    "Mega Powers"
  ],
  "Andre the Giant": [
    "Golden Era"
  ],
  "Brock Lesnar": [
    "Ruthless Aggression Era"
  ],
  "John Cena": [
    "Ruthless Aggression Era",
    "PG Era"
  ],
  "Sable": [
    "Attitude Era"
  ],
  "Chris Jericho": [
    "Attitude Era",
    "Ruthless Aggression Era"
  ],
  "Edge": [
    "Attitude Era",
    "Ruthless Aggression Era"
  ],
  "Eddie Guerrero": [
    "Attitude Era",
    "Ruthless Aggression Era"
  ],
  "Booker T": [
    "Monday Night War Era",
    "Ruthless Aggression Era",
    "WCW"
  ]
};
Object.entries(TAG_AUDIT).forEach(([name,tags])=>{SUPERSTAR_TAGS[name]=[...new Set([...(SUPERSTAR_TAGS[name]||[]),...tags])]});

// Eight-category WWE Superstar rating system.
// Level-1 profiles keep broadly comparable overall totals while preserving clear strengths/weaknesses.
const SUBMISSION_RATINGS={
'Roman Reigns':76,'Cody Rhodes':86,'Rhea Ripley':88,'CM Punk':96,'IYO SKY':90,'Seth Rollins':88,'Becky Lynch':97,'Randy Orton':90,'Bianca Belair':72,'Gunther':90,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':80,'Liv Morgan':82,'Lola Vice':94,'Stone Cold Steve Austin':78,'The Rock':72,'Triple H':91,'The Undertaker':88,'Shawn Michaels':92,'Paige':95,'Rob Van Dam':84,'Kurt Angle':100,'Jeff Hardy':76,'Sol Ruca':82,'Giulia':95,'Stephanie Vaquer':96,'Bret Hart':100,'Razor Ramon':78,'Diesel':68,'Blake Monroe':82,'Goldberg':68,'Bron Breakker':84,'Sting':94,'Hulk Hogan':65,'Lita':82,'Jade Cargill':72,'AJ Styles':95,'Finn Bálor':94,'Naomi':78,'Trish Stratus':82,'Demolition Smash':68,'Demolition Ax':68,'Ultimate Warrior':65,'Macho Man Randy Savage':74,'Andre the Giant':68,'Roxanne Perez':92,'Brock Lesnar':98,'John Cena':86,'Sable':68,'Big E':78,'Kofi Kingston':82,'Xavier Woods':86,'Rey Mysterio':88,'Dominik Mysterio':80,'Hollywood Hogan':65,'Kevin Nash':68,'Scott Hall':86,'Eric Bischoff':65,'Syxx':92,'Chris Jericho':97,'Edge':91,'Eddie Guerrero':97,'Booker T':88,'Batista':74,'Sabu':78,'New Jack':65,'Mankind':86,'Kane':78,'Damian Priest':84,'Road Warrior Hawk':68,'Road Warrior Animal':68,'Demolition Crush':68,'British Bulldog':92,'Yokozuna':72,'Jey Uso':80,'Jacob Fatu':78,'Jimmy Uso':80,'Solo Sikoa':76,'LA Knight':78,"Faarooq":76,"Mark Henry":70,"D'Lo Brown":84,"Kama Mustafa":82,"The Rock '98":72,"Rikishi":74,"Umaga":72,"Triple H DX":91,"Road Dogg":72,"Billy Gunn":76,"Chyna":82,"Shawn Michaels DX":94,"X-Pac":90,"Mickie James":94,"Bull Nakano":88,"Triple H King of Kings":92,"Cactus Jack":82,"Dude Love":84,"Terry Funk":94,"Chainsaw Charlie":84,"Kamala":68,"Rowdy Roddy Piper":92,"Lex Luger":86,"The Godfather":74,"Hacksaw Jim Duggan":68,"Mr Perfect":96,"Earthquake":68,"Typhoon":68,"Sensational Sherri":88,"Ultimo Dragon":98,"Vader":82,"Ken Shamrock":100,"Gangrel":84,"Dusty Rhodes":84,"Goldust":86,"Ric Flair":100,"AJ Lee":100,"Candice Michelle":78,"Maryse":86,"Torrie Wilson":74
};
const STAR_POWER_RATINGS={
'Roman Reigns':100,'Cody Rhodes':98,'Rhea Ripley':97,'CM Punk':99,'IYO SKY':88,'Seth Rollins':96,'Becky Lynch':98,'Randy Orton':98,'Bianca Belair':94,'Gunther':94,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':91,'Liv Morgan':91,'Lola Vice':74,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':99,'Paige':90,'Rob Van Dam':92,'Kurt Angle':97,'Jeff Hardy':96,'Sol Ruca':76,'Giulia':82,'Stephanie Vaquer':84,'Bret Hart':99,'Razor Ramon':94,'Diesel':95,'Blake Monroe':74,'Goldberg':99,'Bron Breakker':89,'Sting':99,'Hulk Hogan':100,'Lita':94,'Jade Cargill':88,'AJ Styles':95,'Finn Bálor':92,'Naomi':88,'Trish Stratus':97,'Demolition Smash':88,'Demolition Ax':88,'Ultimate Warrior':98,'Macho Man Randy Savage':99,'Andre the Giant':100,'Roxanne Perez':82,'Brock Lesnar':99,'John Cena':100,'Sable':92,'Big E':90,'Kofi Kingston':91,'Xavier Woods':85,'Rey Mysterio':98,'Dominik Mysterio':91,'Hollywood Hogan':100,'Kevin Nash':97,'Scott Hall':97,'Eric Bischoff':90,'Syxx':86,'Chris Jericho':98,'Edge':98,'Eddie Guerrero':98,'Booker T':96,'Batista':97,'Sabu':88,'New Jack':82,'Mankind':97,'Kane':98,'Damian Priest':90,'Road Warrior Hawk':95,'Road Warrior Animal':95,'Demolition Crush':86,'British Bulldog':94,'Yokozuna':96,'Jey Uso':94,'Jacob Fatu':88,'Jimmy Uso':88,'Solo Sikoa':86,'LA Knight':94,"Faarooq":89,"Mark Henry":94,"D'Lo Brown":84,"Kama Mustafa":80,"The Rock '98":98,"Rikishi":93,"Umaga":93,"Triple H DX":98,"Road Dogg":88,"Billy Gunn":89,"Chyna":96,"Shawn Michaels DX":99,"X-Pac":89,"Mickie James":91,"Bull Nakano":92,"Triple H King of Kings":100,"Cactus Jack":96,"Dude Love":92,"Terry Funk":97,"Chainsaw Charlie":86,"Kamala":90,"Rowdy Roddy Piper":99,"Lex Luger":96,"The Godfather":90,"Hacksaw Jim Duggan":94,"Mr Perfect":98,"Earthquake":92,"Typhoon":86,"Sensational Sherri":94,"Ultimo Dragon":94,"Vader":98,"Ken Shamrock":94,"Gangrel":88,"Dusty Rhodes":100,"Goldust":94,"Ric Flair":100,"AJ Lee":96,"Candice Michelle":86,"Maryse":91,"Torrie Wilson":94
};
const FINISHER_RATINGS={
'Roman Reigns':99,'Cody Rhodes':94,'Rhea Ripley':96,'CM Punk':94,'IYO SKY':94,'Seth Rollins':99,'Becky Lynch':92,'Randy Orton':100,'Bianca Belair':94,'Gunther':96,'Sami Zayn':96,'Charlotte Flair':97,'Tiffany Stratton':95,'Liv Morgan':90,'Lola Vice':90,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':100,'Paige':91,'Rob Van Dam':98,'Kurt Angle':97,'Jeff Hardy':99,'Sol Ruca':96,'Giulia':92,'Stephanie Vaquer':91,'Bret Hart':100,'Razor Ramon':98,'Diesel':98,'Blake Monroe':88,'Goldberg':100,'Bron Breakker':97,'Sting':98,'Hulk Hogan':100,'Lita':97,'Jade Cargill':91,'AJ Styles':99,'Finn Bálor':98,'Naomi':88,'Trish Stratus':97,'Demolition Smash':94,'Demolition Ax':94,'Ultimate Warrior':97,'Macho Man Randy Savage':100,'Andre the Giant':94,'Roxanne Perez':94,'Brock Lesnar':100,'John Cena':100,'Sable':88,'Big E':94,'Kofi Kingston':97,'Xavier Woods':88,'Rey Mysterio':100,'Dominik Mysterio':90,'Hollywood Hogan':100,'Kevin Nash':98,'Scott Hall':98,'Eric Bischoff':72,'Syxx':91,'Chris Jericho':99,'Edge':100,'Eddie Guerrero':100,'Booker T':95,'Batista':99,'Sabu':94,'New Jack':86,'Mankind':99,'Kane':99,'Damian Priest':96,'Road Warrior Hawk':98,'Road Warrior Animal':98,'Demolition Crush':93,'British Bulldog':97,'Yokozuna':98,'Jey Uso':96,'Jacob Fatu':94,'Jimmy Uso':94,'Solo Sikoa':95,'LA Knight':96,"Faarooq":94,"Mark Henry":96,"D'Lo Brown":90,"Kama Mustafa":88,"The Rock '98":99,"Rikishi":94,"Umaga":98,"Triple H DX":99,"Road Dogg":88,"Billy Gunn":93,"Chyna":96,"Shawn Michaels DX":100,"X-Pac":91,"Mickie James":94,"Bull Nakano":96,"Triple H King of Kings":100,"Cactus Jack":97,"Dude Love":91,"Terry Funk":96,"Chainsaw Charlie":91,"Kamala":91,"Rowdy Roddy Piper":96,"Lex Luger":97,"The Godfather":91,"Hacksaw Jim Duggan":92,"Mr Perfect":98,"Earthquake":96,"Typhoon":92,"Sensational Sherri":90,"Ultimo Dragon":97,"Vader":99,"Ken Shamrock":98,"Gangrel":92,"Dusty Rhodes":97,"Goldust":94,"Ric Flair":100,"AJ Lee":98,"Candice Michelle":88,"Maryse":93,"Torrie Wilson":88
};
BASE.forEach(w=>{
  w.sub=SUBMISSION_RATINGS[w.name]??Math.max(65,Math.min(100,w.tec));
  w.star=STAR_POWER_RATINGS[w.name]??85;
  w.fnr=FINISHER_RATINGS[w.name]??90;
});

/* v0.7.82 roster hierarchy — Level 1 overall strength reflects card position.
   Existing stat shapes are retained, but each Superstar is normalized to a tier-specific
   target rather than a universal total. Individual ratings stay between 65 and 100. */
const CARD_POSITION={
'Roman Reigns':['Main Event',719],'Cody Rhodes':['Main Event',718],'Rhea Ripley':['Main Event',717],'CM Punk':['Main Event',718],
'IYO SKY':['Upper Midcard',706],'Seth Rollins':['Main Event',716],'Becky Lynch':['Main Event',715],'Randy Orton':['Main Event',717],
'Bianca Belair':['Upper Midcard',708],'Gunther':['Main Event',716],'Sami Zayn':['Upper Midcard',705],'Charlotte Flair':['Main Event',714],
'Tiffany Stratton':['Upper Midcard',704],'Liv Morgan':['Upper Midcard',702],'Lola Vice':['Midcard',695],
'Stone Cold Steve Austin':['Main Event',720],'The Rock':['Main Event',720],'Triple H':['Main Event',718],'The Undertaker':['Main Event',720],
'Shawn Michaels':['Main Event',719],'Paige':['Upper Midcard',703],'Rob Van Dam':['Upper Midcard',707],'Kurt Angle':['Main Event',718],
'Jeff Hardy':['Upper Midcard',706],'Sol Ruca':['Lower Midcard',689],'Giulia':['Midcard',697],'Stephanie Vaquer':['Upper Midcard',701],
'Bret Hart':['Main Event',718],'Razor Ramon':['Upper Midcard',705],'Diesel':['Upper Midcard',703],'Blake Monroe':['Lower Midcard',685],
'Goldberg':['Main Event',717],'Bron Breakker':['Upper Midcard',708],'Sting':['Main Event',718],'Hulk Hogan':['Main Event',719],
'Lita':['Upper Midcard',704],'Jade Cargill':['Upper Midcard',702],'AJ Styles':['Main Event',713],'Finn Bálor':['Upper Midcard',706],
'Naomi':['Midcard',693],'Trish Stratus':['Upper Midcard',707],'Demolition Smash':['Midcard',691],'Demolition Ax':['Midcard',695],
'Ultimate Warrior':['Main Event',713],'Macho Man Randy Savage':['Main Event',718],'Andre the Giant':['Main Event',715],
'Roxanne Perez':['Midcard',699],'Brock Lesnar':['Main Event',720],'John Cena':['Main Event',720],'Sable':['Lower Midcard',687],
'Big E':['Upper Midcard',702],'Kofi Kingston':['Upper Midcard',703],'Xavier Woods':['Midcard',697],'Rey Mysterio':['Main Event',713],
'Dominik Mysterio':['Upper Midcard',701],'Hollywood Hogan':['Main Event',720],'Kevin Nash':['Main Event',713],'Scott Hall':['Upper Midcard',709],
'Eric Bischoff':['Opener',674],'Syxx':['Midcard',693],'Chris Jericho':['Main Event',715],'Edge':['Main Event',716],
'Eddie Guerrero':['Main Event',716],'Booker T':['Upper Midcard',708],'Batista':['Main Event',715],'Sabu':['Midcard',695],
'New Jack':['Lower Midcard',681],'Mankind':['Upper Midcard',709],'Kane':['Main Event',712],'Damian Priest':['Upper Midcard',707],
'Road Warrior Hawk':['Upper Midcard',705],'Road Warrior Animal':['Upper Midcard',704],'Demolition Crush':['Midcard',693],
'British Bulldog':['Upper Midcard',707],'Yokozuna':['Main Event',712],'Jey Uso':['Main Event',711],'Jacob Fatu':['Upper Midcard',709],
'Jimmy Uso':['Upper Midcard',702],'Solo Sikoa':['Upper Midcard',705],'LA Knight':['Upper Midcard',708],'Faarooq':['Upper Midcard',704],'Mark Henry':['Upper Midcard',707],"D'Lo Brown":['Midcard',694],'Kama Mustafa':['Lower Midcard',686],"The Rock '98":['Main Event',716],'Rikishi':['Upper Midcard',704],'Umaga':['Upper Midcard',708],'Triple H DX':['Main Event',716],'Triple H King of Kings':['Main Event',720],'Cactus Jack':['Upper Midcard',709],'Dude Love':['Upper Midcard',703],'Terry Funk':['Main Event',712],'Chainsaw Charlie':['Midcard',696],'Kamala':['Midcard',694],'Rowdy Roddy Piper':['Main Event',716],'Lex Luger':['Main Event',712],'The Godfather':['Midcard',696],'Hacksaw Jim Duggan':['Upper Midcard',702],'Mr Perfect':['Main Event',712],'Earthquake':['Upper Midcard',704],'Typhoon':['Midcard',694],'Sensational Sherri':['Upper Midcard',700],'Ultimo Dragon':['Upper Midcard',708],'Vader':['Main Event',716],'Ken Shamrock':['Upper Midcard',709],'Gangrel':['Midcard',693],'Dusty Rhodes':['Main Event',718],'Goldust':['Upper Midcard',705],'Ric Flair':['Main Event',720],'AJ Lee':['Main Event',712],'Candice Michelle':['Midcard',690],'Maryse':['Upper Midcard',700],'Torrie Wilson':['Upper Midcard',699],'Road Dogg':['Midcard',692],'Billy Gunn':['Upper Midcard',701],'Chyna':['Upper Midcard',707],'Shawn Michaels DX':['Main Event',719],'X-Pac':['Midcard',697],'Mickie James':['Upper Midcard',702],'Bull Nakano':['Upper Midcard',706]
};
const POSITION_RANGES={
'Main Event':[710,720],'Upper Midcard':[700,709],'Midcard':[690,699],'Lower Midcard':[680,689],'Opener':[670,679]
};
function normalizePositionStats(w){
  const keys=['str','stk','tec','agi','sub','cha','star','fnr'];
  const spec=CARD_POSITION[w.name]||['Midcard',690],target=spec[1];
  w.position=spec[0];
  let delta=target-keys.reduce((n,k)=>n+w[k],0);
  const order=[...keys].sort((a,b)=>{
    const da=Math.abs(w[a]-82.5),db=Math.abs(w[b]-82.5);
    return da-db||keys.indexOf(a)-keys.indexOf(b);
  });
  while(delta){
    let moved=false;
    for(const k of order){
      if(delta>0&&w[k]<100){w[k]++;delta--;moved=true}
      else if(delta<0&&w[k]>65){w[k]--;delta++;moved=true}
      if(!delta)break;
    }
    if(!moved)break;
  }
}
BASE.forEach(normalizePositionStats);

BASE.forEach(w=>w.tags=[...new Set([...(w.tags||[]),...(SUPERSTAR_TAGS[w.name]||[])])]);
function hasTag(w,t){return (w.tags||[]).includes(t)}
function roadEligibleTags(){let owned=BASE.filter(w=>level(w.name));let candidates=[...new Set(BASE.flatMap(w=>w.tags||[]))].filter(t=>owned.some(w=>hasTag(w,t)));return candidates.filter(t=>owned.filter(w=>hasTag(w,t)).length>=2)}
const KEYS=[['str','Power'],['stk','Striking'],['tec','Technique'],['agi','Aerial'],['sub','Submission'],['cha','Charisma'],['star','Star Power'],['fnr','Finisher']];let save=JSON.parse(localStorage.getItem('wweSuperstarsSave')||'null'),state={};const app=document.querySelector('#app');
function coinIcon(c='coin-icon'){return '<span class="'+c+'" aria-label="coin"><span class="coin-face">$</span></span>'}
function persist(){localStorage.setItem('wweSuperstarsSave',JSON.stringify(save))}
async function checkForUpdate(){
 try{
  let u=new URL('version.json',location.href);u.searchParams.set('_',Date.now());
  let r=await fetch(u.toString(),{cache:'no-store',headers:{'Cache-Control':'no-cache'}});
  if(!r.ok)return;
  let v=String((await r.json()).version||'').trim();
  if(v&&v!==APP_VERSION){
   let key='wweUpdateReload:'+v;
   if(sessionStorage.getItem(key))return;
   sessionStorage.setItem(key,'1');
   let target=new URL(location.href);target.searchParams.set('v',v);target.searchParams.set('_',Date.now());
   location.replace(target.toString())
  }
 }catch(e){}
}

function ensureEconomy(){
 if(!save)return;
 if(save.coins==null)save.coins=5;
 if(save.coinMatches==null)save.coinMatches=(save.wins||0)+(save.losses||0);
 if(!save.shopPurchases||save.shopPurchases.date!==dailyKey())save.shopPurchases={date:dailyKey(),bought:[]};
}
function awardMatchCoin(){ensureEconomy();save.coinMatches=(save.coinMatches||0)+1;if(save.coinMatches%50===0){save.coins++;state.coinEarned=true}}
function seededShopRandom(seed){let x=seed>>>0;return()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296}}
function dailyShopOffers(){ensureEconomy();let key=dailyKey(),seed=[...key].reduce((n,c)=>Math.imul(n^c.charCodeAt(0),16777619)>>>0,2166136261),rand=seededShopRandom(seed),pool=[...BASE];for(let i=pool.length-1;i>0;i--){let j=Math.floor(rand()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}return pool.slice(0,9).map((w,i)=>({w,copies:i<5?1:i<8?2:3,cost:i<5?1:i<8?2:3,id:key+'-'+i})).sort((a,b)=>b.copies-a.copies||a.w.name.localeCompare(b.w.name))}
function shop(){ensureEconomy();let offers=dailyShopOffers(),bought=save.shopPurchases.bought||[],progress=(save.coinMatches||0)%50;shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY SHOP</span><span class="shop-coins">${coinIcon()}<b>${save.coins}</b></span></div><div class="shop-head"><div><div class="kicker">REFRESHES DAILY</div><div class="title">Superstar Shop</div></div><div class="coin-progress"><b>${progress}/50</b><span>MATCHES TO NEXT COIN</span></div></div><div class="shop-grid">${offers.map((o,i)=>{let sold=bought.includes(o.id),can=save.coins>=o.cost;return `<div class="shop-offer ${sold?'sold':''}"><div class="shop-card">${card(o.w,o.copies,'','lazy')}</div><div class="shop-offer-copy"><span>${o.copies} ${o.copies===1?'COPY':'COPIES'} · +${o.copies} LEVEL${o.copies===1?'':'S'}</span><button ${sold||!can?'disabled':''} onclick="buyShopOffer('${o.id}',${i})">${sold?'SOLD':coinIcon('coin-icon coin-small')+o.cost+' COIN'+(o.cost===1?'':'S')}</button></div></div>`}).join('')}</div>`,'shop-screen')}
function buyShopOffer(id,index){ensureEconomy();let offer=dailyShopOffers()[index];if(!offer||offer.id!==id||save.shopPurchases.bought.includes(id)||save.coins<offer.cost)return shop();save.coins-=offer.cost;save.shopPurchases.bought.push(id);let old=level(offer.w.name),neu=old+offer.copies;save.roster[offer.w.name]=neu;ensureRecord(offer.w.name);persist();let next='shop()';if(old)return duplicateUpgrade(offer.w,old,neu,next,'SHOP PURCHASE · '+offer.copies+' '+(offer.copies===1?'COPY':'COPIES'));shell(`<div class="new-backdrop">${artImage(offer.w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">SHOP PURCHASE · ${offer.copies} ${offer.copies===1?'COPY':'COPIES'}</div><div class="new-name">${offer.w.name}</div><div class="new-card">${card(offer.w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">CONTINUE</button></div>`,'reward new-superstar-screen')}

function ensureRecord(n){if(!save.records)save.records={};if(!save.records[n])save.records[n]={wins:0,losses:0,streak:0,bestStreak:0};return save.records[n]}
function recordGame(n,win){let r=ensureRecord(n);if(win){r.wins++;r.streak=Math.max(1,r.streak+1);r.bestStreak=Math.max(r.bestStreak,r.streak)}else{r.losses++;r.streak=Math.min(-1,r.streak-1)}}
function recordStats(n){let r=ensureRecord(n),g=r.wins+r.losses,p=g?Math.round(r.wins/g*100):0;return {...r,games:g,pct:p}}
const STAT_PER_LEVEL=10;function statsAt(w,lvl){let add=Math.max(0,lvl-1)*STAT_PER_LEVEL;return Object.fromEntries(KEYS.map(([k])=>[k,w[k]+add]))}function baseHpOf(w){let v=KEYS.map(([k])=>w[k]).sort((a,b)=>a-b).slice(2,-2);return v.reduce((a,b)=>a+b,0)}const HP_PER_LEVEL=40;function hpOf(w,lvl){return baseHpOf(w)+Math.max(0,lvl-1)*HP_PER_LEVEL}function level(n){return save?.roster?.[n]||0}
// Share versioned URLs between displayed cards and preload requests.
function artFile(name,format='webp'){return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.'+format}
function artUrl(name,format='webp'){return 'assets/superstars/'+artFile(name,format)+'?v='+APP_VERSION}
function artFallback(img){
  img.onerror=null;
  const placeholder=document.createElement('div');
  placeholder.className='sil';
  placeholder.setAttribute('role','img');
  placeholder.setAttribute('aria-label',img.alt||img.dataset.artName);
  img.replaceWith(placeholder);
}
function artImage(name,c='',loading='eager'){
  return '<img class="'+c+'" src="'+artUrl(name,'webp')+'" alt="'+name+'" data-art-name="'+name+'" decoding="async" loading="'+loading+'" onerror="artFallback(this)">';
}
const TAG_FONT_CLASSES=[
  ['D-Generation X','font-dx'],['New Age Outlaws','font-dx'],['nWo','font-nwo'],['NWO','font-nwo'],
  ['The Bloodline','font-bloodline'],['Bloodline','font-bloodline'],['The Shield','font-shield'],['Shield','font-shield'],
  ['Evolution','font-evolution'],['Nation of Domination','font-nation'],['ECW','font-ecw'],
  ['LWO','font-lwo'],['Lucha Brothers','font-lucha'],['Damage CTRL','font-damage'],['Kabuki Warriors','font-kabuki'],
  ['APA','font-apa'],['Judgment Day','font-judgment'],['Imperium','font-imperium'],['The Brood','font-brood'],['Hart Foundation','font-hart'],['Team Xtreme','font-xtreme'],['The Hardy Boyz','font-xtreme'],['Wyatt Family','font-wyatt'],['The Kliq','font-kliq'],['Demolition','font-demolition'],['Road Warriors','font-roadwarriors'],['The New Day','font-newday'],['New Day','font-newday'],
  ['Golden Era','font-golden'],['New Generation Era','font-newgen'],['Attitude Era','font-attitude'],
  ['Ruthless Aggression Era','font-ruthless'],['PG Era','font-pg'],['Reality Era','font-reality'],['Monday Night War Era','font-mnw'],['Current Era','font-current']
];
function superstarFontClass(w){let tags=[...new Set([...(SUPERSTAR_TAGS[w.name]||[]),...(w.tags||[])])];for(const [tag,cl] of TAG_FONT_CLASSES)if(tags.includes(tag))return cl;return 'font-current'}
function card(w,l=1,c='',loading='eager'){let art=artImage(w.name,'cardart',loading),font=superstarFontClass(w);return '<div class="card '+c+' '+font+'">'+art+'<div class="corner levelcorner"><small>LVL</small><b>'+l+'</b></div><div class="corner hpcorner"><small>HP</small><b>'+hpOf(w,l)+'</b></div><div class="name">'+w.name+'</div></div>';}
function cardBack(w,l=1,c=''){let s=statsAt(w,l);return '<div class="card card-back '+c+'"><div class="back-title">'+w.name+'</div><div class="back-stats">'+KEYS.map(([k,label])=>'<div><span>'+label+'</span><b>'+s[k]+'</b></div>').join('')+'</div><div class="back-hint">TAP TO RETURN</div></div>';}
function openCard(n,l){let w=BASE.find(x=>x.name===n);if(!w)return;let overlay=document.createElement('div');overlay.className='card-viewer';overlay.onclick=e=>{if(e.target===overlay)overlay.remove()};overlay.innerHTML='<div class="card-viewer-inner" onclick="event.stopPropagation()"><div class="flip-card" onclick="this.classList.toggle(\'flipped\')"><div class="flip-card-inner"><div class="flip-face flip-front">'+card(w,l,'viewer-card')+'</div><div class="flip-face flip-back">'+cardBack(w,l,'viewer-card')+'</div></div></div></div>';document.body.appendChild(overlay);}
function shell(x,c=''){app.innerHTML=`<section class="screen ${c}">${x}</section>`}
function logo(){return '<img class="game-logo" src="assets/wwe-superstar-logo.png?v='+APP_VERSION+'" alt="WWE Superstars">'}
function versionBadge(){return '<div class="version-badge">VERSION '+APP_VERSION+'</div>'}
function start(){document.title='WWE Superstars · '+APP_VERSION;if(save)return home();shell(`<div class="startscreen"><div class="startglow"></div><div class="start-brand">${logo()}<div class="start-eyebrow">YOUR CAREER STARTS HERE</div></div><div class="startcopy"><div class="start-title">BUILD YOUR<br>ROSTER</div><div class="kicker">5 RANDOM SUPERSTARS · LEVEL 1</div><button class="btn startbtn" onclick="welcome()">OPEN WELCOME PACK</button></div>${versionBadge()}</div>`,'start')}
function welcome(){let p=[...BASE].sort(()=>Math.random()-.5).slice(0,5);state.picks=p;preloadArt(p);state.reveal=0;welcomeReveal()}
function welcomeReveal(){let i=state.reveal,w=state.picks[i],last=i===state.picks.length-1;shell(`<div class="onboarding-logo">${logo()}</div><div class="topbar onboardingbar"><span>WELCOME PACK</span><span class="welcome-count">${i+1}<i>/5</i></span></div><div class="welcome-reveal"><div class="kicker">${last?'FINAL SUPERSTAR':'YOUR STARTING ROSTER'}</div><div class="reveal-stage">${card(w,1,'reveal-card')}</div><div class="reveal-meta"><b>LVL 1</b><span>STARTING ROSTER</span></div><div class="reveal-progress">${state.picks.map((_,n)=>'<i class="'+(n<=i?'on':'')+'"></i>').join('')}</div><button class="btn welcome-next" onclick="${last?'claimWelcome()':'nextWelcome()'}">${last?'ENTER WWE SUPERSTARS':'REVEAL NEXT'}</button></div>`,'onboarding')}
function nextWelcome(){state.reveal++;welcomeReveal()}
function claimWelcome(){save={roster:{},wins:0,losses:0,records:{},coins:5,coinMatches:0,shopPurchases:{date:dailyKey(),bought:[]}};state.picks.forEach(x=>{save.roster[x.name]=1;ensureRecord(x.name)});persist();home()}
function home(){ensureEconomy();let g=dailyFeatured(),gp=dailyProgress(),rn=save.roadLevel||1;if(!state.roadNodes||state.roadNodes[0]?.n!==rn)state.roadNodes=[0,1,2].map(i=>roadNode(rn+i));let roadOpp=state.roadNodes[0].cpu,owned=Object.keys(save.roster).length,strongest=BASE.filter(x=>level(x.name)).sort((x,y)=>level(y.name)-level(x.name)||hpOf(y,level(y.name))-hpOf(x,level(x.name))||x.name.localeCompare(y.name))[0]||BASE[0],coinProgress=(save.coinMatches||0)%50,shopFeature=dailyShopOffers()[0];shell(`<div class="home-shell"><div class="home-top"><span>WWE SUPERSTARS</span><small>v${APP_VERSION} · ${save.wins}W ${save.losses}L · ● ${save.coins}</small></div><div class="home-logo home-collage-logo">${logo()}</div><div class="home-collage"><button class="home-tile home-road" onclick="road()">${artImage(roadOpp.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>WORLD TOUR · STAGE ${roadBand(rn)}</small><strong>SUPERSTAR<br>ROAD</strong><em>MATCH ${rn}</em></span></button><button class="home-tile home-gauntlet" onclick="dailyGauntlet()">${artImage(g.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>DAILY FEATURE · ${gp}/5 WINS</small><strong>DAILY<br>GAUNTLET</strong><em>${g.name}</em></span></button><button class="home-tile home-exhibition" onclick="exhibitionMenu()">${artImage(BASE[Math.floor(Math.random()*BASE.length)].name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>QUICK PLAY</small><strong>EXHIBITION</strong><em>2 CARDS WIN · 1 LOSS</em></span></button><button class="home-tile home-shop" onclick="shop()">${artImage(shopFeature.w.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="shop-home-price">${coinIcon('coin-icon coin-home')}<b>3</b></span><span class="tile-copy"><small>DAILY 3-COIN FEATURE · ${coinProgress}/50 TO NEXT COIN</small><strong>SHOP</strong><em>${dailyShopOffers()[8].w.name} · ${save.coins} COINS</em></span></button><button class="home-tile home-collection" onclick="collection()">${artImage(strongest.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>YOUR ROSTER</small><strong>MY SUPERSTARS</strong><em>${owned} OWNED</em></span></button></div><button class="home-career" onclick="careerStats()">CAREER STATS <span>›</span></button></div>`,'home-collage-screen')}
function collection(){let o=BASE.filter(x=>level(x.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>${o.length} OWNED</span></div><div class="title">My Superstars</div><div class="cards">${o.sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name)).map(x=>`<div onclick="openCard('${x.name.replaceAll("'","\\'")}',${level(x.name)})">${card(x,level(x.name),'','lazy')}</div>`).join('')}</div>`);requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'}))}
function careerStats(){let o=BASE.filter(x=>level(x.name)).map(w=>({w,...recordStats(w.name)})).sort((a,b)=>b.games-a.games||b.wins-a.wins||a.w.name.localeCompare(b.w.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>CAREER STATS</span></div><div class="career-head"><div><div class="kicker">YOUR WWE SUPERSTARS</div><div class="title">Career Stats</div></div><div class="career-total"><b>${save.wins}</b><span>WINS</span><i>${save.losses}</i><span>LOSSES</span></div></div><div class="record-list">${o.map((x,i)=>`<div class="record-row"><div class="record-portrait">${artImage(x.w.name,'','lazy')}</div><div class="record-name"><small>#${String(i+1).padStart(2,'0')} · LVL ${level(x.w.name)}</small><b>${x.w.name}</b><em>${x.games} MATCHES</em></div><div class="record-numbers"><b>${x.wins}<i>–</i>${x.losses}</b><strong>${x.pct}%</strong><small>${x.streak>0?'W'+x.streak:x.streak<0?'L'+Math.abs(x.streak):'—'} STREAK</small></div></div>`).join('')}</div>`,'stats-screen')}

function dailyKey(){let d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+day}
function dailyFeatured(){let k=dailyKey(),seed=[...k].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7);return BASE[seed%BASE.length]}
function dailyProgress(){return save?.dailyGauntlet?.date===dailyKey()?Math.min(5,save.dailyGauntlet.wins||0):0}
function ensureDaily(){let k=dailyKey();if(!save.dailyGauntlet||save.dailyGauntlet.date!==k)save.dailyGauntlet={date:k,wins:0};return save.dailyGauntlet}
function dailyGauntlet(){let d=ensureDaily(),w=dailyFeatured(),done=d.wins>=5,stage=Math.min(5,d.wins+1);persist();shell(`<div class="gauntlet-backdrop">${artImage(w.name,'gauntlet-bg','eager')}</div><div class="topbar gauntlet-top"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY GAUNTLET</span></div><div class="gauntlet-kicker">TODAY'S FEATURED SUPERSTAR</div><div class="title gauntlet-title">${w.name}</div><div class="gauntlet-progress">${[1,2,3,4,5].map(i=>`<span class="${i<=d.wins?'won':i===stage&&!done?'current':''}">${i<=d.wins?'✓':i}</span>`).join('')}</div><div class="hero finish gauntlet-hero"><div class="cards gauntlet-card-wrap">${card(w,Math.max(1,stage))}</div><div class="gauntlet-copy"><strong>${done?'GAUNTLET COMPLETE':'MATCH '+stage+' OF 5'}</strong><div class="sub">${done?'A new featured Superstar arrives tomorrow.':'Win to earn one '+w.name+' copy. Losses do not consume an attempt.'}</div>${done?'<button class="btn secondary" onclick="home()">RETURN HOME</button>':'<button class="btn" onclick="selectGauntletFighter()">PLAY MATCH '+stage+' OF 5</button>'}</div></div>`,'gauntlet-screen')}
function selectGauntletFighter(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),stage=d.wins+1,o=BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="dailyGauntlet()" style="background:none;border:0">‹ GAUNTLET</button><span>MATCH ${stage} / 5</span></div><div class="title">Choose Superstar</div><div class="sub">${w.name} · 100% HP · Each match has a different rule.</div><div class="cards select">${o.map(x=>`<div onclick="beginGauntlet('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name),'','lazy')}</div>`).join('')}</div>`)}
function beginGauntlet(n){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let p=BASE.find(x=>x.name===n),cpu=dailyFeatured(),stage=d.wins+1,pl=level(n),cl=pl,pmax=hpOf(p,pl),cmax=hpOf(cpu,cl),mods=['normal','noStat','specialist','comeback','random'],mod=ROAD_MODS.find(x=>x.id===mods[stage-1])||ROAD_MODS[0],pool=[...KEYS.map(x=>x[0])],blocked=null;if(mod.id==='noStat'){blocked=pool[(stage+dailyKey().charCodeAt(9))%pool.length];pool=pool.filter(x=>x!==blocked)}if(mod.id==='specialist')pool=pool.sort(()=>Math.random()-.5).slice(0,4);state.b={p,cpu,pl,cl,php:pmax,chp:cmax,pmax,cmax,avail:pool,gauntlet:true,gauntletStage:stage,node:{mod,pool,blocked},log:mod.name+' · DAILY GAUNTLET · MATCH '+stage+' OF 5'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
const ROAD_CITIES=[
'New York, USA','Los Angeles, USA','Chicago, USA','Las Vegas, USA','Miami, USA','Philadelphia, USA','Boston, USA','Dallas, USA','Houston, USA','Atlanta, USA','San Francisco, USA','Seattle, USA','Phoenix, USA','Denver, USA','Detroit, USA','Minneapolis, USA','New Orleans, USA','Nashville, USA','Orlando, USA','Tampa, USA','San Diego, USA','San Antonio, USA','Austin, USA','Baltimore, USA','Cleveland, USA','Pittsburgh, USA','St. Louis, USA','Kansas City, USA','Indianapolis, USA','Charlotte, USA','Washington DC, USA','Brooklyn, USA',
'London, England','Manchester, England','Glasgow, Scotland','Dublin, Ireland','Paris, France','Berlin, Germany','Munich, Germany','Rome, Italy','Milan, Italy','Madrid, Spain','Barcelona, Spain','Amsterdam, Netherlands','Brussels, Belgium','Vienna, Austria','Prague, Czech Republic','Athens, Greece','Stockholm, Sweden','Oslo, Norway','Copenhagen, Denmark','Helsinki, Finland','Warsaw, Poland',
'Toronto, Canada','Montreal, Canada','Vancouver, Canada','Mexico City, Mexico','Monterrey, Mexico','Buenos Aires, Argentina','Rio de Janeiro, Brazil','Sao Paulo, Brazil','Santiago, Chile','Lima, Peru',
'Tokyo, Japan','Osaka, Japan','Seoul, South Korea','Beijing, China','Shanghai, China','Hong Kong','Singapore','Bangkok, Thailand','Manila, Philippines','Mumbai, India','New Delhi, India','Dubai, UAE','Abu Dhabi, UAE',
'Sydney, Australia','Melbourne, Australia','Brisbane, Australia','Perth, Australia','Auckland, New Zealand','Cape Town, South Africa','Johannesburg, South Africa'
];
const ROAD_MODS=[
{id:'normal',name:'STANDARD MATCH',desc:'No special rules.'},
{id:'hardcore',name:'HARDCORE',desc:'Weapon and illegal Action damage is increased by 25%.'},
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
 let cpuPool=eligibleTag?BASE.filter(w=>hasTag(w,eligibleTag)):BASE,cpu=cpuPool[Math.floor(Math.random()*cpuPool.length)],city=ROAD_CITIES[Math.floor(Math.random()*ROAD_CITIES.length)];
 let matchType=roadSeed(n,7)<.25?'tag':'singles',cpu2=null;
 if(matchType==='tag'){
   let partnerPool=cpuPool.filter(w=>w.name!==cpu.name);
   if(!partnerPool.length)partnerPool=BASE.filter(w=>w.name!==cpu.name);
   cpu2=partnerPool[Math.floor(roadSeed(n,8)*partnerPool.length)];
 }
 return {n,band,mod,cpu,cpu2,matchType,blocked,pool,eligibleTag,city};
}

const roadPhotoCache={};
function roadPhotoKey(city){return 'wweRoadPhoto:'+city}
const CITY_LANDMARKS={
'New York':'Empire State Building Manhattan skyline','Los Angeles':'Los Angeles downtown skyline Hollywood','Chicago':'Chicago skyline Willis Tower','Las Vegas':'Las Vegas Strip skyline','Miami':'Miami skyline Biscayne Bay','Philadelphia':'Philadelphia skyline City Hall','Boston':'Boston skyline harbor','Dallas':'Dallas skyline Reunion Tower','Houston':'Houston downtown skyline','Atlanta':'Atlanta skyline','San Francisco':'Golden Gate Bridge San Francisco','Seattle':'Seattle Space Needle skyline','Phoenix':'Phoenix skyline Arizona','Denver':'Denver skyline Rocky Mountains','Detroit':'Detroit skyline Renaissance Center','Minneapolis':'Minneapolis skyline','New Orleans':'New Orleans French Quarter skyline','Nashville':'Nashville skyline','Orlando':'Orlando skyline Florida','Tampa':'Tampa skyline waterfront','San Diego':'San Diego skyline bay','San Antonio':'San Antonio River Walk skyline','Austin':'Austin Texas Capitol skyline','Baltimore':'Baltimore Inner Harbor skyline','Cleveland':'Cleveland skyline Lake Erie','Pittsburgh':'Pittsburgh skyline rivers','St. Louis':'Gateway Arch St Louis skyline','Kansas City':'Kansas City skyline','Indianapolis':'Indianapolis Monument Circle skyline','Charlotte':'Charlotte skyline North Carolina','Washington DC':'Washington Monument Capitol skyline','Brooklyn':'Brooklyn Bridge Manhattan skyline',
'London':'Big Ben London Eye Tower Bridge skyline','Manchester':'Manchester England skyline','Glasgow':'Glasgow Scotland city skyline','Dublin':'Dublin Ireland River Liffey skyline','Paris':'Eiffel Tower Paris skyline','Berlin':'Brandenburg Gate Berlin skyline','Munich':'Munich Frauenkirche skyline','Rome':'Colosseum Rome skyline','Milan':'Milan Cathedral Duomo skyline','Madrid':'Madrid Gran Via skyline','Barcelona':'Sagrada Familia Barcelona skyline','Amsterdam':'Amsterdam canals historic skyline','Brussels':'Grand Place Brussels skyline','Vienna':'Vienna St Stephens Cathedral skyline','Prague':'Prague Castle Charles Bridge skyline','Athens':'Acropolis Athens skyline','Stockholm':'Stockholm old town skyline','Oslo':'Oslo Opera House skyline','Copenhagen':'Copenhagen Nyhavn skyline','Helsinki':'Helsinki Cathedral skyline','Warsaw':'Warsaw skyline Palace of Culture',
'Toronto':'CN Tower Toronto skyline','Montreal':'Montreal skyline Mount Royal','Vancouver':'Vancouver skyline mountains harbor','Mexico City':'Mexico City Palacio Bellas Artes skyline','Monterrey':'Monterrey skyline Cerro de la Silla','Buenos Aires':'Buenos Aires Obelisk skyline','Rio de Janeiro':'Christ the Redeemer Rio skyline Sugarloaf','Sao Paulo':'Sao Paulo skyline Paulista','Santiago':'Santiago Chile skyline Andes','Lima':'Lima Peru skyline coast',
'Tokyo':'Tokyo Tower Mount Fuji skyline','Osaka':'Osaka Castle skyline','Seoul':'N Seoul Tower skyline','Beijing':'Forbidden City Beijing skyline','Shanghai':'Shanghai Pudong skyline Oriental Pearl','Hong Kong':'Hong Kong Victoria Harbour skyline','Singapore':'Marina Bay Sands Singapore skyline','Bangkok':'Bangkok Wat Arun skyline','Manila':'Manila skyline bay Philippines','Mumbai':'Gateway of India Mumbai skyline','New Delhi':'India Gate New Delhi','Dubai':'Burj Khalifa Dubai skyline','Abu Dhabi':'Sheikh Zayed Grand Mosque Abu Dhabi skyline',
'Sydney':'Sydney Opera House Harbour Bridge skyline','Melbourne':'Melbourne skyline Yarra River','Brisbane':'Brisbane skyline river Story Bridge','Perth':'Perth skyline Swan River','Auckland':'Auckland Sky Tower skyline','Cape Town':'Cape Town Table Mountain skyline','Johannesburg':'Johannesburg skyline South Africa'};
async function roadCityPhoto(city){if(roadPhotoCache[city])return roadPhotoCache[city];let cacheKey=roadPhotoKey(city)+':landmark2',saved=localStorage.getItem(cacheKey);if(saved){roadPhotoCache[city]=saved;return saved}try{let place=city.split(',')[0],q=CITY_LANDMARKS[place]||place+' iconic landmark skyline',u='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch='+encodeURIComponent(q)+'&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*',r=await fetch(u,{cache:'force-cache'}),j=await r.json(),pages=Object.values(j.query?.pages||{}).filter(p=>p.imageinfo?.[0]?.thumburl&&!/logo|flag|map|icon|seal|diagram|coat of arms|poster/i.test(p.title));let scored=pages.map(p=>{let title=p.title.toLowerCase(),words=q.toLowerCase().split(/\s+/),score=words.reduce((n,w)=>n+(w.length>3&&title.includes(w)?1:0),0);return {p,score}}).sort((x,y)=>y.score-x.score),url=scored[0]?.p.imageinfo?.[0]?.thumburl||'';if(url){roadPhotoCache[city]=url;try{localStorage.setItem(cacheKey,url)}catch(e){}}return url}catch(e){return ''}}
async function loadExhibitionPhoto(city){let el=document.querySelector('.exhibition-backdrop[data-exhibition-city]');if(!el)return;let url=roadPhotoCache[city]||localStorage.getItem(roadPhotoKey(city)+':landmark2')||await roadCityPhoto(city);if(!url||!el.isConnected)return;let img=new Image();img.decoding='async';img.onload=()=>{if(el.isConnected){let safe='url("'+url.replaceAll('"','%22')+'")';el.style.backgroundImage=safe;el.style.setProperty('--exhibition-city-image',safe);let event=document.querySelector('.exhibition-event'),photo=document.querySelector('.exhibition-city-photo');if(photo){photo.style.backgroundImage=safe;photo.classList.add('loaded')}if(event)event.classList.add('has-city-photo');el.classList.add('loaded')}};img.src=url}
function applyRoadPhoto(el,url){if(!url)return;let img=new Image();img.decoding='async';img.onload=()=>{if(el.isConnected){el.style.setProperty('--road-city-image',`url("${url.replaceAll('"','%22')}")`);el.classList.add('has-city-photo')}};img.src=url}
async function loadRoadCityPhotos(){let els=[...document.querySelectorAll('.road-destination[data-road-city]')];els.forEach(el=>{let city=el.dataset.roadCity,saved=roadPhotoCache[city]||localStorage.getItem(roadPhotoKey(city)+':landmark2');if(saved){roadPhotoCache[city]=saved;applyRoadPhoto(el,saved)}else roadCityPhoto(city).then(url=>applyRoadPhoto(el,url))});let n=save.roadLevel||1;for(let i=3;i<9;i++){let city=roadNode(n+i).city;if(!roadPhotoCache[city]&&!localStorage.getItem(roadPhotoKey(city)+':landmark2'))roadCityPhoto(city)}}
function road(){if(!save.roadLevel)save.roadLevel=1;persist();let n=save.roadLevel;if(!state.roadNodes||state.roadNodes[0]?.n!==n)state.roadNodes=[0,1,2].map(i=>roadNode(n+i));let nodes=state.roadNodes,band=roadBand(n);shell(`<div class="road-hero"><button class="road-back" onclick="home()">‹</button><div class="road-brand"><div class="road-brand-small">WWE SUPERSTARS</div><div class="road-brand-title">SUPERSTAR ROAD</div></div><div class="road-stage">STAGE ${band}<small>MATCH ${n} - ${n+2}</small></div></div><div class="road-destinations">${nodes.map((x,i)=>{let cl=x.band,max=hpOf(x.cpu,cl),start=max;if(x.mod.id==='iron')max=Math.round(max*1.25);if(x.mod.id==='glass')max=Math.round(max*.7);start=max;if(x.mod.id==='opening')start=Math.round(max*.75);let parts=x.city.split(','),place=parts[0],country=parts.slice(1).join(',').trim(),side=i%2?'right':'left';return `<section class="road-destination ${side} ${i?'future':'current'}" data-road-city="${x.city.replaceAll('"','&quot;')}"><div class="road-destination-shade"></div><div class="road-copy"><div class="road-place">${place}</div><div class="road-country">${country}</div><div class="road-match">MATCH ${x.n} · LEVEL ${x.band} · ${x.matchType==='tag'?'2 VS 2 TAG TEAM':'1 VS 1'}</div><div class="road-rule">${x.mod.name}</div><div class="road-desc">${(x.eligibleTag?'ENTRY: '+x.eligibleTag.toUpperCase()+' · ':'OPEN ENTRY · ')+x.mod.desc}</div></div><div class="road-fighter"><div class="road-badge">${x.n}</div><div class="road-card-wrap">${card(x.cpu,cl,'road-mini-card')}<div class="road-card-name">${x.cpu.name}</div></div></div>${i===0?'<button class="btn road-play" onclick="selectRoadFighter()">PLAY MATCH</button>':''}</section>`}).join('')}</div>`,'road-screen');loadRoadCityPhotos()}

function ownedForNode(node){return BASE.filter(x=>level(x.name)&&(!node.eligibleTag||hasTag(x,node.eligibleTag))).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name))}
function selectRoadFighter(){let rn=save.roadLevel||1,node=state.roadNodes?.find(x=>x.n===rn)||roadNode(rn);state.activeRoadNode=node;let o=ownedForNode(node),tag=node.matchType==='tag';state.tagPick1=null;shell('<div class="topbar"><button onclick="road()" style="background:none;border:0">‹ ROAD</button><span>SUPERSTAR ROAD · MATCH '+node.n+'</span></div><div class="title">'+(tag?'Choose First Superstar':'Choose Superstar')+'</div><div class="sub">'+(tag?'2 VS 2 TAG TEAM · ':'')+(node.eligibleTag?'ENTRY: '+node.eligibleTag.toUpperCase():'OPEN ENTRY')+' · '+node.mod.name+' · '+node.cpu.name+(tag&&node.cpu2?' & '+node.cpu2.name:'')+' LVL '+node.band+'</div><div class="cards select">'+o.map(x=>'<div onclick="'+(tag?"pickRoadTag1('"+x.name.replaceAll("'","\\'")+"')":"beginRoad('"+x.name.replaceAll("'","\\'")+"')")+'">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>')}
function pickRoadTag1(n){state.tagPick1=n;let node=state.activeRoadNode,o=ownedForNode(node).filter(x=>x.name!==n);shell('<div class="topbar"><button onclick="selectRoadFighter()" style="background:none;border:0">‹ BACK</button><span>SUPERSTAR ROAD · TAG TEAM</span></div><div class="title">Choose Partner</div><div class="sub">'+n.toUpperCase()+' · SELECT TAG TEAM PARTNER</div><div class="cards select">'+o.map(x=>'<div onclick="beginRoadTag(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>')}
function roadHp(w,l,node){let m=hpOf(w,l);if(node.mod.id==='iron')m=Math.round(m*1.25);if(node.mod.id==='glass')m=Math.round(m*.7);return m}
function roadStartHp(max,node){return node.mod.id==='opening'?Math.round(max*.75):max}
function beginRoad(n){let rn=save.roadLevel||1,node=state.activeRoadNode&&state.activeRoadNode.n===rn?state.activeRoadNode:(state.roadNodes?.find(x=>x.n===rn)||roadNode(rn)),p=BASE.find(x=>x.name===n);if(!p||!level(n)||node.eligibleTag&&!hasTag(p,node.eligibleTag))return selectRoadFighter();let pl=level(n),cl=node.band,pmax=roadHp(p,pl,node),cmax=roadHp(node.cpu,cl,node),php=roadStartHp(pmax,node),chp=roadStartHp(cmax,node);state.b={p,cpu:node.cpu,pl,cl,php,chp,pmax,cmax,avail:[...node.pool],road:true,node,log:(node.eligibleTag?node.eligibleTag.toUpperCase()+' · ':'')+node.mod.name+' · Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
function beginRoadTag(n2){let node=state.activeRoadNode,n1=state.tagPick1,p=BASE.find(x=>x.name===n1),p2=BASE.find(x=>x.name===n2);if(!p||!p2||p===p2)return selectRoadFighter();let pl=level(n1),pl2=level(n2),cl=node.band,cpu2=node.cpu2||BASE.find(x=>x.name!==node.cpu.name),pmax=roadHp(p,pl,node),p2max=roadHp(p2,pl2,node),cmax=roadHp(node.cpu,cl,node),c2max=roadHp(cpu2,cl,node);state.b={p,p2,cpu:node.cpu,cpu2,pl,pl2,cl,cl2:cl,php:roadStartHp(pmax,node),p2hp:roadStartHp(p2max,node),chp:roadStartHp(cmax,node),c2hp:roadStartHp(c2max,node),pmax,p2max,cmax,c2max,avail:[...node.pool],road:true,tag:true,node,log:node.mod.name+' · TAG TEAM · Choose your attack.'};preloadMatchMedia(p,p2,node.cpu,cpu2);battle()}

function exhibitionMenu(){shell('<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>EXHIBITION</span></div><div class="matchtype-logo">'+logo()+'</div><div class="matchtype-menu"><div class="kicker">CHOOSE MATCH TYPE</div><button class="matchtype-card" onclick="selectFighter()"><b>1 VS 1</b><span>SINGLES MATCH</span><small>CLASSIC WWE SUPERSTARS MATCH</small></button><button class="matchtype-card" onclick="selectTagFighter()"><b>2 VS 2</b><span>TAG TEAM MATCH</span><small>TAG OUT TO SURVIVE · FIRST SUPERSTAR TO 0 HP LOSES</small></button></div>','exhibition-screen')}
function exhibitionRoster(){return BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name))}
function selectFighter(){let o=exhibitionRoster(),city=ROAD_CITIES[Math.floor(Math.random()*ROAD_CITIES.length)];state.exhibitionCity=city;shell('<div class="exhibition-backdrop" data-exhibition-city="'+city+'"></div><div class="topbar exhibition-top"><button onclick="exhibitionMenu()" style="background:none;border:0">‹ EXHIBITION</button><span>1 VS 1</span></div><div class="exhibition-event"><div class="exhibition-city-photo" aria-hidden="true"></div><div class="kicker">WWE SUPERSTARS · LIVE</div><div class="title">'+city.split(',')[0]+'</div><div class="sub">ONE NIGHT · RANDOM OPPONENT · WIN A SUPERSTAR</div></div><div class="title exhibition-choose">Choose Superstar</div><div class="cards select exhibition-roster">'+o.map(x=>'<div onclick="begin(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen');loadExhibitionPhoto(city)}
function begin(n){let p=BASE.find(x=>x.name===n),pool=BASE.filter(x=>x.name!==n),cpu=pool[Math.floor(Math.random()*pool.length)],pl=level(n),cl=pl;state.b={p,cpu,pl,cl,php:hpOf(p,pl),chp:hpOf(cpu,cl),pmax:hpOf(p,pl),cmax:hpOf(cpu,cl),avail:KEYS.map(x=>x[0]),exhibitionCity:state.exhibitionCity||'',log:(state.exhibitionCity?state.exhibitionCity.toUpperCase()+' · ':'')+'Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
function selectTagFighter(){let o=exhibitionRoster(),city=ROAD_CITIES[Math.floor(Math.random()*ROAD_CITIES.length)];state.exhibitionCity=city;state.tagPick1=null;shell('<div class="exhibition-backdrop" data-exhibition-city="'+city+'"></div><div class="topbar exhibition-top"><button onclick="exhibitionMenu()" style="background:none;border:0">‹ EXHIBITION</button><span>2 VS 2 · TAG TEAM</span></div><div class="title exhibition-choose">Choose First Superstar</div><div class="sub">SELECT YOUR ACTIVE SUPERSTAR</div><div class="cards select exhibition-roster">'+o.map(x=>'<div onclick="pickTag1(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen');loadExhibitionPhoto(city)}
function pickTag1(n){state.tagPick1=n;let o=exhibitionRoster().filter(x=>x.name!==n);shell('<div class="topbar"><button onclick="selectTagFighter()" style="background:none;border:0">‹ BACK</button><span>2 VS 2 · TAG TEAM</span></div><div class="title">Choose Partner</div><div class="sub">'+n.toUpperCase()+' · SELECT TAG TEAM PARTNER</div><div class="cards select exhibition-roster">'+o.map(x=>'<div onclick="beginTag(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen')}
function beginTag(n2){let n1=state.tagPick1,p=BASE.find(x=>x.name===n1),p2=BASE.find(x=>x.name===n2);if(!p||!p2||p===p2)return selectTagFighter();let pl=level(n1),pl2=level(n2),opp=BASE.filter(x=>x.name!==n1&&x.name!==n2),cpu=opp.splice(Math.floor(Math.random()*opp.length),1)[0],cpu2=opp[Math.floor(Math.random()*opp.length)],cl=pl,cl2=pl2;state.b={p,p2,cpu,cpu2,pl,pl2,cl,cl2,php:hpOf(p,pl),p2hp:hpOf(p2,pl2),chp:hpOf(cpu,cl),c2hp:hpOf(cpu2,cl),pmax:hpOf(p,pl),p2max:hpOf(p2,pl2),cmax:hpOf(cpu,cl),c2max:hpOf(cpu2,cl),avail:KEYS.map(x=>x[0]),tag:true,exhibitionCity:state.exhibitionCity||'',log:'TAG TEAM · Choose your attack.'};preloadMatchMedia(p,p2,cpu,cpu2);battle()}

const ATTACK_ICONS={str:'power.png',stk:'strike.png',tec:'technique.png',agi:'agility.png',sub:'submission.png',cha:'charisma.png',star:'star-power.png',fnr:'finisher.png'};
const ACTIONS=[
{id:'defence',name:'DEFENCE'},{id:'chair',name:'STEEL CHAIR'},{id:'lowblow',name:'LOW BLOW'},{id:'ref',name:'DIRTY TACTICS'},
{id:'crowd',name:'CROWD SUPPORT'},{id:'adrenaline',name:'ADRENALINE'},{id:'reverse',name:'REVERSE IT'},{id:'cheap',name:'CHEAP SHOT'},
{id:'secondwind',name:'SECOND WIND'},{id:'tag',name:'TAG'},{id:'mindgames',name:'MIND GAMES'},{id:'fighting',name:'FIGHTING SPIRIT'},{id:'brawl',name:'WILD BRAWL'}
];
function actionBy(id){return ACTIONS.find(a=>a.id===String(id).replace('act:',''))}
function actionIcon(id){let k=String(id).replace('act:',''),icons={defence:'defence.png',chair:'steel-chair.png',lowblow:'low-blow.png',ref:'dirty-tactics.png',crowd:'crowd-support.png',adrenaline:'adrenaline.png',reverse:'reverse-it.png',cheap:'cheap-shot.png',secondwind:'second-wind.png',tag:'tag.png',mindgames:'mind-games.png',fighting:'fighting-spirit.png',brawl:'wild-brawl.png'},file=icons[k];return file?'<img class="action-icon-img" src="assets/'+file+'?v='+APP_VERSION+'" alt="">':'★'}
function randomActions(count=3){let p=ACTIONS.filter(a=>a.id!=='tag'),o=[];while(o.length<count&&p.length){let i=Math.floor(Math.random()*p.length);o.push('act:'+p.splice(i,1)[0].id)}return o}
function initActionDecks(b){if(b.actionInit)return;b.actionInit=true;b.actionCards=randomActions(b.tag?2:3);b.cpuActionCards=randomActions(b.tag?2:3)}
function reloadTagActions(b,side){if(!b.tag)return;if(side==='p'){b.actionCards=randomActions(2);b.used=[];b.hand=[]}else{b.cpuActionCards=randomActions(2);b.cpuUsed=[];b.cpuHand=[]}}
function avgStat(stats){let v=Object.values(stats);return v.reduce((a,b)=>a+b,0)/v.length}
function actionNumbers(id,side,b,stats){let n=baseActionNumbers(id,side,b,stats);if(n.damage)n.damage=modifiedDamage(id,n.damage,side,b);return n}
function modifiedDamage(id,damage,side,b){if(!(b.road||b.gauntlet))return damage;let m=b.node.mod.id,k=String(id).replace('act:',''),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;if(m==='comeback'&&hp/max<.3)return Math.round(damage*1.25);if(m==='hardcore'&&['chair','lowblow','cheap','brawl'].includes(k))return Math.round(damage*1.25);if(m==='submission'&&k==='sub'||m==='aerial'&&k==='agi'||m==='technical'&&k==='tec')return Math.round(damage*1.35);if(m==='mainEvent'&&['cha','star','fnr'].includes(k))return Math.round(damage*1.2);return damage}
function baseActionNumbers(id,side,b,stats){let avg=avgStat(stats),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax,r=n=>Math.round(n);switch(String(id).replace('act:','')){case'defence':return{heal:r(max*.12),block:r(avg*1.5)};case'chair':return{damage:r(avg*1.5)};case'lowblow':return{damage:r(avg),block:r(avg*.8)};case'ref':return{damage:r(avg*.5)};case'crowd':return{heal:r(max*.35)};case'adrenaline':return{boost:r(avg)};case'reverse':return{block:r(avg),reflect:r(avg)};case'cheap':return{damage:r(avg*1.1),block:r(avg*.6)};case'secondwind':return{heal:r(max*(hp<max/2?.4:.2)),lowHeal:r(max*.4),normalHeal:r(max*.2)};case'tag':return{tag:true};case'mindgames':return{block:r(avg),boost:r(avg*.75)};case'fighting':return{heal:r(max*.2),boost:r(avg)};case'brawl':return{damage:r(avg*1.75),incoming:r(avg*.2)};default:return{}}}
function actionDesc(id,side,b,stats){let n=actionNumbers(id,side,b,stats);switch(String(id).replace('act:','')){case'defence':return `Restore ${n.heal} HP. Block ${n.block} damage this exchange.`;case'chair':return `Deal ${n.damage} damage.`;case'lowblow':return `Deal ${n.damage} damage. Block ${n.block} incoming damage.`;case'ref':return `Deal ${n.damage} damage. Negate the opponent's move this exchange.`;case'crowd':return `Restore ${n.heal} HP.`;case'adrenaline':return `Your next stat attack gains +${n.boost} damage.`;case'reverse':return `Block ${n.block} damage and reflect up to ${n.reflect} damage.`;case'cheap':return `Deal ${n.damage} damage. Block ${n.block} incoming damage.`;case'secondwind':return `Restore ${n.normalHeal} HP — ${n.lowHeal} HP below half health.`;case'tag':return b.tag?'Negate the incoming move and tag your partner.':'Unavailable outside Tag Team matches.';case'mindgames':return `Block ${n.block} damage. Your next stat attack gains +${n.boost} damage.`;case'fighting':return `Restore ${n.heal} HP. Your next stat attack gains +${n.boost} damage.`;case'brawl':return `Deal ${n.damage} damage. Opponent gains +${n.incoming} damage this exchange.`;default:return''}}
function battle(){let b=state.b,ps=statsAt(b.p,b.pl);initActionDecks(b);if(!b.used)b.used=[];if(!b.hand)b.hand=[];let allowed=[...b.avail,...b.actionCards,...(b.tag?['act:tag']:[])];b.hand=b.hand.filter(k=>allowed.includes(k)&&!b.used.includes(k));let unused=allowed.filter(k=>!b.used.includes(k)&&!b.hand.includes(k));if(b.hand.length+unused.length<3){b.used=[];unused=allowed.filter(k=>!b.hand.includes(k))}while(b.hand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.hand.push(unused.splice(i,1)[0])}let choices=[...b.hand];shell(`<div class="battle-logo-wrap">${logo()}</div><div class="topbar"><span>${b.gauntlet?'DAILY GAUNTLET · '+b.gauntletStage+'/5':(b.road?'SUPERSTAR ROAD · '+b.node.n:'EXHIBITION')}</span><span>${b.gauntlet?b.node.mod.name:(b.road?b.node.mod.name:'LIVE')}</span></div><div class="versus">${card(b.p,b.pl,"","eager",b.php)}<div class="vs">VS</div>${card(b.cpu,b.cl,"","eager",b.chp)}</div>${b.tag?`<div class="tag-benches"><div class="tag-bench"><small>PARTNER · RECOVERING</small><b>${b.p2.name}</b><span>${b.p2hp}/${b.p2max} HP</span></div><div class="tag-bench cpu"><small>PARTNER · RECOVERING</small><b>${b.cpu2.name}</b><span>${b.c2hp}/${b.c2max} HP</span></div></div>`:''}<div class="hpbox"><div class="hphead"><span>${b.p.name}</span><span>${b.php}/${b.pmax}</span></div><div class="hpbar"><div class="hpfill ${b.php/b.pmax>.6?'hp-green':b.php/b.pmax>.3?'hp-amber':'hp-red'}" style="width:${Math.max(0,b.php/b.pmax*100)}%"></div></div><div class="fighter-log player-fighter-log">${b.pLog||''}</div></div><div class="hpbox"><div class="hphead"><span>${b.cpu.name}</span><span>${b.chp}/${b.cmax}</span></div><div class="hpbar"><div class="hpfill ${b.chp/b.cmax>.6?'hp-green':b.chp/b.cmax>.3?'hp-amber':'hp-red'}" style="width:${Math.max(0,b.chp/b.cmax*100)}%"></div></div><div class="fighter-log cpu-fighter-log">${b.cLog||''}</div></div><div class="chooser"><h3>CHOOSE YOUR CARD</h3><div class="attacks">${choices.map(k=>{let ac=actionBy(k);return ac?`<button class="attack action-card action-${ac.id}" onclick="attack('${k}')"><span class="action-glyph">${actionIcon(k)}</span><small>ACTION</small><strong>${ac.name}</strong><em>${actionDesc(k,'p',b,ps)}</em></button>`:(()=>{let base=ps[k]+(b.pBoost||0),shown=modifiedDamage(k,base,'p',b),bonus=shown!==base;return `<button class="attack${bonus?' modified-attack':''}" onclick="attack('${k}')"><img class="attackicon" src="assets/${ATTACK_ICONS[k]}" alt=""><b>${shown}</b><small>${KEYS.find(x=>x[0]===k)?.[1]||''}</small>${bonus?`<em class="match-bonus">BONUS APPLIED</em>`:''}</button>`})()}).join('')}</div></div>`,'battle')}
function actionValue(id,side,b,stats){let a=actionBy(id),n=actionNumbers(id,side,b,stats),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;if(!a)return 0;let enemyStats=statsAt(side==='p'?b.cpu:b.p,side==='p'?b.cl:b.pl),enemyActions=side==='p'?b.cpuActionCards:b.actionCards,enemyKeys=[...b.avail,...(enemyActions||[])];let threat=enemyKeys.reduce((total,k)=>total+(actionBy(k)?(actionNumbers(k,side==='p'?'c':'p',b,enemyStats).damage||0):modifiedDamage(k,enemyStats[k]+((side==='p'?b.cBoost:b.pBoost)||0),side==='p'?'c':'p',b)),0)/enemyKeys.length,block=Math.min(n.block||0,threat);switch(a.id){case'chair':return n.damage;case'lowblow':case'cheap':return n.damage+block*.7;case'brawl':return n.damage-n.incoming;case'defence':return Math.min(max-hp,n.heal)+block;case'crowd':case'secondwind':return Math.min(max-hp,n.heal)*1.15;case'adrenaline':return n.boost*1.15;case'reverse':return block+Math.min(n.reflect,block)*.7;case'mindgames':return block+n.boost;case'fighting':return Math.min(max-hp,n.heal)+n.boost;case'tag':{if(!b.tag)return 0;let partnerHp=side==='p'?b.p2hp:b.c2hp,partnerMax=side==='p'?b.p2max:b.c2max,ratio=hp/max,partnerRatio=partnerHp/partnerMax;if(ratio<.28&&partnerRatio>.2)return avgStat(stats)*2.4;if(ratio<.45&&partnerRatio>ratio+.08)return avgStat(stats)*1.65;return avgStat(stats)*.35}case'ref':{let prevented=threat,ratio=hp/max;return n.damage+prevented*(ratio<.3?.95:.72)}default:return avgStat(stats)}}
// Both sides value attacks with their queued bonus and the active match rule.
function chooseCard(b,stats,side,hand){
 let boost=(side==='p'?b.pBoost:b.cBoost)||0,enemyHp=side==='p'?b.chp:b.php;
 let value=k=>{let a=actionBy(k);if(!a){let damage=modifiedDamage(k,stats[k]+boost,side,b);return damage>=enemyHp?damage+100000:damage}
 let n=actionNumbers(k,side,b,stats),v=actionValue(k,side,b,stats);
 if(n.damage>=enemyHp)return v+100000;
 // A banked bonus should be cashed in on a stat card instead of stacking setup actions.
 if(boost&&n.boost)v-=n.boost*1.5;
 // Avoid wasting pure healing when already near full health.
 if(n.heal&&!n.damage&&!n.block&&!n.boost&&((side==='p'?b.php:b.chp)/(side==='p'?b.pmax:b.cmax))>.88)v*=.2;
 return v;
 };
 return [...hand].sort((a,c)=>value(c)-value(a))[0];
}
function cpuChoice(b,cs){initActionDecks(b);if(!b.cpuUsed)b.cpuUsed=[];if(!b.cpuHand)b.cpuHand=[];let allowed=[...b.avail,...b.cpuActionCards,...(b.tag?['act:tag']:[])];b.cpuHand=b.cpuHand.filter(k=>allowed.includes(k)&&!b.cpuUsed.includes(k));let unused=allowed.filter(k=>!b.cpuUsed.includes(k)&&!b.cpuHand.includes(k));if(b.cpuHand.length+unused.length<3){b.cpuUsed=[];unused=allowed.filter(k=>!b.cpuHand.includes(k))}while(b.cpuHand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.cpuHand.push(unused.splice(i,1)[0])}return chooseCard(b,cs,'c',b.cpuHand)}
function resolveAction(id,side,b,stats){let a=actionBy(id),n=actionNumbers(id,side,b,stats),r={damage:0,block:0,reflect:0,incoming:0,cancel:false,text:a?.name||'ACTION'};if(!a)return r;let mine=side==='p'?'php':'chp',max=side==='p'?'pmax':'cmax',boost=side==='p'?'pBoost':'cBoost',heal=x=>b[mine]=Math.min(b[max],b[mine]+x);if(n.heal)heal(n.heal);r.damage=n.damage||0;r.block=n.block||0;r.reflect=n.reflect||0;r.incoming=n.incoming||0;if(a.id==='ref')r.cancel=true;if(a.id==='tag'&&b.tag){r.cancel=true;r.tag=true;}if(n.boost)b[boost]=(b[boost]||0)+n.boost;return r}
// Simultaneous exchange: calculate both effects from the same pre-turn state.
function actionLogEffect(r,damage,reflected,cancelled){
 let parts=[];if(damage||reflected)parts.push(`${damage+reflected} DAMAGE`);
 if(r.healed)parts.push(`RESTORED ${r.healed} HP`);
 if(r.blocked)parts.push(`BLOCKED ${r.blocked} DAMAGE`);
 if(r.boost)parts.push(`NEXT STAT ATTACK +${r.boost} DAMAGE`);
 if(r.incoming)parts.push(`OPPONENT +${r.incoming} DAMAGE THIS EXCHANGE`);
 if(r.cancel&&!r.tag)parts.push('OPPONENT MOVE NEGATED');
 if(!parts.length)parts.push(cancelled?'DAMAGE CANCELLED':'NO DAMAGE');
 return parts.join(' · ');
}
function showImpactFX(pk,ck,pDamage,cDamage,pHeal,cHeal){let root=document.querySelector('.battle');if(!root)return;let layer=document.createElement('div');layer.className='impact-fx';let pa=actionBy(pk),ca=actionBy(ck),fx=pa?.id||(!pa?pk:''),cfx=ca?.id||(!ca?ck:'');layer.innerHTML=`${pDamage?'<b class="damage-pop cpu-hit">-'+pDamage+'</b>':''}${cDamage?'<b class="damage-pop player-hit">-'+cDamage+'</b>':''}${pHeal?'<b class="heal-pop player-heal">+'+pHeal+' HP</b>':''}${cHeal?'<b class="heal-pop cpu-heal">+'+cHeal+' HP</b>':''}<i class="impact-burst fx-${fx}"></i><i class="impact-burst cpu-fx fx-${cfx}"></i>`;root.appendChild(layer);if(['chair','lowblow','cheap','brawl'].includes(fx)||['chair','lowblow','cheap','brawl'].includes(cfx))root.classList.add('battle-shake');setTimeout(()=>{root.classList.remove('battle-shake');layer.remove()},850)}
function attack(pk){
 let b=state.b;if(b.ended)return;
 let ps=statsAt(b.p,b.pl),cs=statsAt(b.cpu,b.cl);
 if(!b.hand||!b.hand.includes(pk))return battle();
 let ck=cpuChoice(b,cs),pa=actionBy(pk),ca=actionBy(ck);
 const blank=()=>({damage:0,block:0,reflect:0,incoming:0,cancel:false});
 // Snapshot numerical effects before either side heals or takes damage.
 let pn=pa?actionNumbers(pk,'p',b,ps):{},cn=ca?actionNumbers(ck,'c',b,cs):{};
 let pd=pa?(pn.damage||0):modifiedDamage(pk,ps[pk]+(b.pBoost||0),'p',b);
 let cd=ca?(cn.damage||0):modifiedDamage(ck,cs[ck]+(b.cBoost||0),'c',b);
 let php=b.php,chp=b.chp,pBoostBefore=b.pBoost||0,cBoostBefore=b.cBoost||0;
 let pr=pa?resolveAction(pk,'p',b,ps):blank(),cr=ca?resolveAction(ck,'c',b,cs):blank();
 pr.healed=b.php-php;cr.healed=b.chp-chp;pr.boost=pn.boost||0;cr.boost=cn.boost||0;
 let pTagged=!!pr.tag,cTagged=!!cr.tag,pCancel=!!pr.cancel&&!pTagged,cCancel=!!cr.cancel&&!cTagged,cancelled=pCancel||cCancel,pReflect=0,cReflect=0;
 // DIRTY TACTICS negates the opponent's entire card, including self-heals and setup boosts.
 // TAG is different: it only protects the wrestler tagging out, so opponent self-effects remain.
 if(pCancel&&!cCancel){b.chp=chp;b.cBoost=cBoostBefore;cr.healed=0;cr.boost=0}
 if(cCancel&&!pCancel){b.php=php;b.pBoost=pBoostBefore;pr.healed=0;pr.boost=0}
 if(pCancel&&cCancel){b.php=php;b.chp=chp;b.pBoost=pBoostBefore;b.cBoost=cBoostBefore;pr.healed=cr.healed=pr.boost=cr.boost=0}
 // DIRTY TACTICS negates only the opponent's move while its own damage still lands.
 // TAG only makes the tagging wrestler escape the opponent's targeted effects.
 if(pCancel&&cCancel){pd=0;cd=0}else if(pCancel){pd=pr.damage||0;cd=0}else if(cCancel){pd=0;cd=cr.damage||0}else{
   if(!pa)b.pBoost=null;if(!ca)b.cBoost=null;
   pd+=cr.incoming||0;cd+=pr.incoming||0;
   pr.blocked=Math.min(pr.block||0,cd);cr.blocked=Math.min(cr.block||0,pd);
   // Reverse It returns damage it actually blocked, including a fully blocked hit.
   pReflect=Math.min(pr.reflect||0,pr.blocked);cReflect=Math.min(cr.reflect||0,cr.blocked);
   pd=Math.max(0,pd-cr.blocked);cd=Math.max(0,cd-pr.blocked);
 }
 if(pTagged){cd=0;cReflect=0;pr.blocked=0}
 if(cTagged){pd=0;pReflect=0;cr.blocked=0}
 let nextPhp=b.php-cd-cReflect,nextChp=b.chp-pd-pReflect;
 b.php=Math.max(0,nextPhp);b.chp=Math.max(0,nextChp);
 if(b.tag){
   // Apron recovery applies only when the wrestler remains on the apron after this exchange.
   let pBenchStats=statsAt(b.p2,b.pl2),cBenchStats=statsAt(b.cpu2,b.cl2);
   let pRegen=Math.max(1,Math.round(avgStat(pBenchStats)/6)),cRegen=Math.max(1,Math.round(avgStat(cBenchStats)/6));
   if(!pTagged)b.p2hp=Math.min(b.p2max,b.p2hp+pRegen);
   if(!cTagged)b.c2hp=Math.min(b.c2max,b.c2hp+cRegen);
   if(pTagged){[b.p,b.p2]=[b.p2,b.p];[b.pl,b.pl2]=[b.pl2,b.pl];[b.php,b.p2hp]=[b.p2hp,b.php];[b.pmax,b.p2max]=[b.p2max,b.pmax];b.pBoost=null;reloadTagActions(b,'p')}
   if(cTagged){[b.cpu,b.cpu2]=[b.cpu2,b.cpu];[b.cl,b.cl2]=[b.cl2,b.cl];[b.chp,b.c2hp]=[b.c2hp,b.chp];[b.cmax,b.c2max]=[b.c2max,b.cmax];b.cBoost=null;reloadTagActions(b,'c')}
 }
 showImpactFX(pk,ck,pd+pReflect,cd+cReflect,pr.healed,cr.healed);
 if(pk!=='act:tag')b.used.push(pk);b.hand=b.hand.filter(k=>k!==pk);if(ck!=='act:tag')b.cpuUsed.push(ck);b.cpuHand=b.cpuHand.filter(k=>k!==ck);
 let pName=pa?pa.name:KEYS.find(x=>x[0]===pk)[1],cName=ca?ca.name:KEYS.find(x=>x[0]===ck)[1];
 let pEffect=pTagged?'INCOMING MOVE NEGATED · TAGGED '+b.p.name.toUpperCase():pa?actionLogEffect(pr,pd,pReflect,cancelled):`${pd} DAMAGE`,cEffect=cTagged?'INCOMING MOVE NEGATED · TAGGED '+b.cpu.name.toUpperCase():ca?actionLogEffect(cr,cd,cReflect,cancelled):`${cd} DAMAGE`;
 b.pLog=`<strong>${pa?'<i>'+actionIcon(pk)+'</i> ':''}${pName.toUpperCase()}</strong><span>${pEffect}</span>`;b.cLog=`<strong>${ca?'<i>'+actionIcon(ck)+'</i> ':''}${cName.toUpperCase()}</strong><span>${cEffect}</span>`;
 if(nextPhp<=0||nextChp<=0){b.ended=true;let win=nextPhp<=0&&nextChp<=0?nextChp<nextPhp:nextChp<=0;return setTimeout(()=>finish(win),350)}
 if((b.road||b.gauntlet)&&b.node.mod.id==='random'){b.hand=[];b.cpuHand=[];b.used=[];b.cpuUsed=[]}
 battle();
}
const FINISHER_MEDIA_URL='finisher-media.json?v='+APP_VERSION;
let finisherMediaCache=null,finisherMediaPromise=null;
function loadFinisherMedia(){if(finisherMediaCache)return Promise.resolve(finisherMediaCache);if(finisherMediaPromise)return finisherMediaPromise;finisherMediaPromise=fetch(FINISHER_MEDIA_URL,{cache:'force-cache'}).then(r=>r.ok?r.json():{}).catch(()=>({})).then(x=>(finisherMediaCache=x,finisherMediaPromise=null,x));return finisherMediaPromise}
// Keep URLs deduplicated without retaining 80 decoded image objects in memory.
const artPreloads=new Map();
function preloadArt(...ws){return Promise.all(ws.flat().filter(Boolean).map(w=>{
  const name=typeof w==='string'?w:w.name,url=artUrl(name);
  if(artPreloads.has(url))return artPreloads.get(url);
  const pending=new Promise(resolve=>{
    let image=new Image(),fallback=failedWebpArt.has(name);
    image.decoding='async';image.fetchPriority='low';
    image.onload=()=>resolve(true);
    image.onerror=()=>{
      if(!fallback){fallback=true;failedWebpArt.add(name);image.src=artUrl(name,'png')}
      else{artPreloads.delete(url);resolve(false)}
    };
    image.src=artUrl(name,fallback?'png':'webp');
  });
  artPreloads.set(url,pending);return pending;
}))}
function preloadRosterInBackground(){
  const connection=navigator.connection;
  if(connection?.saveData||/^(slow-)?2g$/.test(connection?.effectiveType||''))return;
  const owned=BASE.filter(w=>level(w.name)),queue=[...owned,...BASE.filter(w=>!level(w.name))];
  const idle=fn=>window.requestIdleCallback?window.requestIdleCallback(fn):setTimeout(fn,500);
  function next(){
    if(!queue.length)return;
    if(document.visibilityState==='hidden'){setTimeout(next,1500);return}
    const batch=queue.splice(0,2);
    preloadArt(batch).then(()=>idle(next));
  }
  idle(next);
}
function preloadFinisher(w){if(!w)return;loadFinisherMedia().then(media=>{let raw=media[w.name]||'',url=tenorEmbed(raw);if(!url)return;if(/\.(?:gif|webp)(?:$|\?)/i.test(raw)){let i=new Image();i.src=url}else{let l=document.createElement('link');l.rel='preconnect';l.href='https://tenor.com';l.crossOrigin='anonymous';document.head.appendChild(l)}})}
function preloadMatchMedia(...ws){let wrestlers=ws.flat().filter(Boolean);preloadArt(...wrestlers);wrestlers.forEach(preloadFinisher)}
function tenorEmbed(url){if(!url)return'';let m=url.match(/(?:\/view\/[^?#]*-gif-)(\d+)/i);return m?'https://tenor.com/embed/'+m[1]:url}
async function finish(win){let b=state.b;if(win)save.wins++;else save.losses++;awardMatchCoin();let resultWrestler=b.p;recordGame(resultWrestler.name,win);let r=recordStats(resultWrestler.name);state.winAward=win&&r.wins>0&&r.wins%50===0?resultWrestler.name:null;if(b.road){save.roadLevel=win?(save.roadLevel||1)+1:Math.max(1,(save.roadLevel||1)-1)}persist();let w=win?b.p:b.cpu,media=await loadFinisherMedia();let raw=media[w.name]||'',url=tenorEmbed(raw),direct=/\.(?:gif|webp|mp4)(?:$|\?)/i.test(raw);shell(`<div class="finish-show"><div class="finish-head"><div class="kicker">${win?'YOU WIN':'DEFEAT'}</div><div class="big">${w.finisher}</div><div class="sub">${w.name} hits the finisher!</div></div>${url?`<div class="finisher-media">${direct?`<img src="${url}" alt="${w.name} finisher">`:`<iframe src="${url}" title="${w.name} finisher" allow="autoplay; fullscreen" scrolling="no" frameborder="0"></iframe>`}</div>`:`<div class="finisher-media missing"><span>FINISHER CLIP</span><b>${w.name}</b><small>Add a URL in Finisher Studio</small></div>`}<div class="pin-stage"><div class="pin-label">PIN COUNT</div><div id="pinCount" class="pin-number">1</div></div><div id="finishAction" class="finish-action"></div></div>`,'finish-screen');let n=1,el=document.querySelector('#pinCount');let timer=setInterval(()=>{n++;if(el){el.classList.remove('pop');void el.offsetWidth;el.textContent=n;el.classList.add('pop')}if(n===3){clearInterval(timer);setTimeout(()=>{let a=document.querySelector('#finishAction');if(a)a.innerHTML=win?(b.gauntlet?'<button class="btn" onclick="claimGauntletReward()">CLAIM '+b.cpu.name.toUpperCase()+'</button>':'<button class="btn" onclick="rewardPack(true)">CLAIM 2 REWARDS</button>'):(b.gauntlet?'<button class="btn" onclick="rewardPack(false)">CLAIM CONSOLATION CARD</button>':'<button class="btn" onclick="rewardPack(false)">CLAIM 1 REWARD</button>')},700)}},900)}
function claimGauntletReward(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);d.wins++;persist();let next=state.winAward?'claimWinAward()':'dailyGauntlet()';if(old)return duplicateUpgrade(w,old,neu,next,'DAILY GAUNTLET · '+d.wins+'/5');shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">DAILY GAUNTLET · ${d.wins}/5</div><div class="new-name">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward new-superstar-screen')}
function rewardReturn(){return state.b?.road?'road()':'home()'}
function rewardPack(win=true){let w=state.b?.p,r=w?recordStats(w.name):null;state.matchRewards=Array.from({length:win?2:1},()=>BASE[Math.floor(Math.random()*BASE.length)]);state.matchRewardIndex=0;state.matchRewardWin=win;shell(`<div class="victory-backdrop">${w?artImage(w.name,'victory-bg','eager'):''}</div><div class="hero finish victory-reward"><div class="kicker">${win?'WINNER':'DEFEAT'}</div><div class="victory-name">${w?.name||'MATCH COMPLETE'}</div>${r?`<div class="victory-record">${r.wins} WINS · ${r.losses} LOSSES · ${r.pct}%</div>`:''}<div class="reward-divider"></div><div class="kicker">MATCH REWARD</div><div class="title">${win?'Victory Pack · 2 Cards':'Consolation Pack · 1 Card'}</div><div class="pack premium-pack" onclick="openReward()">${logo()}<span>TAP TO OPEN</span></div></div>`,'reward victory-screen')}
function duplicateUpgrade(w,old,neu,next,kicker='DUPLICATE ABSORBED'){let before=statsAt(w,old),after=statsAt(w,neu),bh=hpOf(w,old),ah=hpOf(w,neu);shell(`<div class="upgrade-backdrop">${artImage(w.name,'upgrade-bg','eager')}</div><div class="hero finish duplicate-upgrade"><div class="kicker">${kicker}</div><div class="upgrade-name">${w.name}</div><div class="upgrade-card">${card(w,old,'flash')}</div><div class="upgrade-level"><small>LEVEL UP</small><b class="level-old">${old}</b><span>→</span><b class="level-new">${neu}</b></div><div class="upgrade-summary"><strong>HP +${ah-bh}</strong><strong>ALL STATS +${after[KEYS[0][0]]-before[KEYS[0][0]]}</strong></div><div class="upgrade-stats">${KEYS.map(([k,label])=>`<div class="upgrade-stat"><span>${label}</span><b id="up-${k}">${before[k]}</b><i>▲</i><em>+${after[k]-before[k]}</em></div>`).join('')}<div class="upgrade-stat hp-up"><span>HP</span><b id="up-hp">${bh}</b><i>▲</i><em>+${ah-bh}</em></div></div><div class="upgrade-message">LEVEL ${neu}</div><button id="upgradeContinue" class="btn upgrade-continue" onclick="${next}">Continue</button></div>`,'reward upgrade-screen');setTimeout(()=>{let c=document.querySelector('.upgrade-card');if(c)c.innerHTML=card(w,neu,'flash');let lv=document.querySelector('.level-new');if(lv){lv.classList.add('slam');}KEYS.forEach(([k])=>tickUpgrade('up-'+k,before[k],after[k]));tickUpgrade('up-hp',bh,ah);document.querySelectorAll('.upgrade-stat').forEach((el,i)=>setTimeout(()=>el.classList.add('rising'),i*70));let m=document.querySelector('.upgrade-message');if(m)m.classList.add('show');let btn=document.querySelector('#upgradeContinue');if(btn)btn.classList.add('show')},650)}
function tickUpgrade(id,from,to){let el=document.getElementById(id);if(!el)return;let start=performance.now(),dur=700;function step(t){let p=Math.min(1,(t-start)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(from+(to-from)*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
function nextMatchReward(){state.matchRewardIndex=(state.matchRewardIndex||0)+1;if(state.matchRewardIndex<(state.matchRewards?.length||0))return openReward();let returnTo=state.b?.gauntlet?'gauntlet':(state.b?.road?'road':'home');state.matchRewards=null;state.matchRewardIndex=0;state.matchRewardWin=null;state.b=null;if(state.winAward)return claimWinAward();return returnTo==='gauntlet'?dailyGauntlet():(returnTo==='road'?road():home())}
function openReward(){if(!state.matchRewards?.length){state.matchRewards=[BASE[Math.floor(Math.random()*BASE.length)]];state.matchRewardIndex=0}let idx=state.matchRewardIndex||0,w=state.matchRewards[idx],old=level(w.name),neu=old+1,total=state.matchRewards.length;save.roster[w.name]=neu;ensureRecord(w.name);persist();let next='nextMatchReward()',kicker=total>1?'REWARD '+(idx+1)+' OF '+total:(state.matchRewardWin===false?'CONSOLATION REWARD':'MATCH REWARD');if(old)return duplicateUpgrade(w,old,neu,next,kicker);shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">${kicker}</div><div class="new-name">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">${idx+1<total?'NEXT REWARD':'CONTINUE'}</button></div>`,'reward new-superstar-screen')}
function claimWinAward(){let n=state.winAward;if(!n)return state.b?.gauntlet?dailyGauntlet():(state.b?.road?road():home());let w=BASE.find(x=>x.name===n),old=level(n),neu=old+1,next=state.b?.gauntlet?'dailyGauntlet()':(state.b?.road?'road()':'home()');save.roster[n]=neu;state.winAward=null;persist();if(old)return duplicateUpgrade(w,old,neu,next,'50-WIN AWARD');shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">50-WIN AWARD</div><div class="new-name">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Bonus Superstar added to your collection.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward new-superstar-screen')}function bootGame(){start();setTimeout(()=>checkForUpdate(),700);setInterval(()=>checkForUpdate(),60000);setTimeout(()=>loadFinisherMedia(),1800);setTimeout(()=>preloadRosterInBackground(),5000)}
bootGame();