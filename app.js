const APP_VERSION='0.9.179';
const BASE=[
{name:'Roman Reigns',cha:97,str:94,stk:88,tec:72,agi:68,iq:91,finisher:'SPEAR',tags:["Male","SmackDown","Current Era"]},{name:'Cody Rhodes',cha:97,str:68,stk:94,tec:88,agi:72,iq:91,finisher:'CROSS RHODES',tags:["Male","SmackDown","Current Era"]},{name:'Rhea Ripley',cha:91,str:94,stk:88,tec:72,agi:68,iq:97,finisher:'RIPTIDE',tags:["Female","RAW","Current Era"]},{name:'CM Punk',cha:91,str:68,stk:88,tec:94,agi:72,iq:97,finisher:'GO TO SLEEP',tags:["Male","RAW","Current Era"]},{name:'IYO SKY',cha:88,str:68,stk:72,tec:91,agi:94,iq:97,finisher:'OVER THE MOONSAULT',tags:["Female","RAW","Current Era"]},{name:'Seth Rollins',cha:97,str:68,stk:88,tec:91,agi:94,iq:72,finisher:'CURB STOMP',tags:["Male","RAW","Current Era"]},{name:'Becky Lynch',cha:97,str:68,stk:91,tec:94,agi:72,iq:88,finisher:'MANHANDLE SLAM',tags:["Female","RAW","Current Era"]},{name:'Randy Orton',cha:88,str:72,stk:91,tec:94,agi:68,iq:97,finisher:'RKO',tags:["Male","SmackDown","Current Era"]},{name:'Bianca Belair',cha:91,str:94,stk:88,tec:68,agi:97,iq:72,finisher:'K.O.D.',tags:["Female","SmackDown","Current Era"]},{name:'Gunther',cha:72,str:94,stk:97,tec:88,agi:68,iq:91,finisher:'POWERBOMB',tags:["Male","RAW","Current Era"]},{name:'Sami Zayn',cha:97,str:68,stk:72,tec:88,agi:91,iq:94,finisher:'HELLUVA KICK',tags:["Male","RAW","Current Era"]},{name:'Charlotte Flair',cha:94,str:72,stk:88,tec:97,agi:91,iq:68,finisher:'FIGURE EIGHT',tags:["Female","SmackDown","Current Era"]},
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
{name:'Dominik Mysterio',cha:95,str:82,stk:88,tec:85,agi:91,iq:83,finisher:'FROG SPLASH',tags:['Male','Current Era','RAW','Judgment Day']},
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
{name:'King of Kings',cha:98,str:94,stk:92,tec:96,agi:68,iq:96,finisher:'PEDIGREE',tags:['Male','Ruthless Aggression Era','Legend','Hall of Fame']},
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
{name:'Ultimo Dragon',cha:88,str:68,stk:86,tec:99,agi:100,iq:94,finisher:'DRAGON BOMB',tags:['Male','Monday Night War Era','Ruthless Aggression Era','Legend','WCW']},
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
{name:"Penta",cha:97,str:80,stk:94,tec:98,agi:99,iq:95,finisher:"MEXICAN DESTROYER",tags:["Male","Current Era","RAW","Lucha Brothers"]},
{name:"Vince McMahon",cha:99,str:72,stk:86,tec:70,agi:65,iq:98,finisher:"MCMAHON STUNNER",tags:["Male","Attitude Era","Ruthless Aggression Era","Legend","The Corporation"]},
{name:"Shane McMahon",cha:94,str:78,stk:88,tec:76,agi:92,iq:84,finisher:"COAST TO COAST",tags:["Male","Attitude Era","Ruthless Aggression Era","Legend","The Corporation"]},
{name:"Stephanie McMahon",cha:99,str:70,stk:84,tec:76,agi:68,iq:97,finisher:"PEDIGREE",tags:["Female","Attitude Era","Ruthless Aggression Era","Legend","The Corporation"]},
{name:"Toni Storm",cha:94,str:84,stk:92,tec:96,agi:90,iq:91,finisher:"STORM ZERO",tags:["Female","Current Era","Legend"]},
{name:"Bobby Lashley",cha:91,str:100,stk:96,tec:92,agi:78,iq:88,finisher:"HURT LOCK",tags:["Male","Ruthless Aggression Era","Current Era","Legend","The Hurt Business"]},
{name:"MVP",cha:96,str:86,stk:90,tec:88,agi:78,iq:94,finisher:"PLAYMAKER",tags:["Male","Ruthless Aggression Era","Current Era","Legend","The Hurt Business"]},
{name:"Scott Steiner",cha:88,str:98,stk:94,tec:94,agi:82,iq:88,finisher:"STEINER SCREWDRIVER",tags:["Male","New Generation Era","Monday Night War Era","Legend","Hall of Fame","WCW","Steiner Brothers"]},
{name:"Rick Steiner",cha:84,str:97,stk:94,tec:92,agi:80,iq:88,finisher:"STEINER DRIVER",tags:["Male","New Generation Era","Monday Night War Era","Legend","Hall of Fame","WCW","Steiner Brothers"]},
{name:"Big Poppa Pump",cha:99,str:100,stk:98,tec:90,agi:72,iq:92,finisher:"STEINER RECLINER",tags:["Male","Monday Night War Era","Ruthless Aggression Era","Legend","Hall of Fame","WCW"]},
{name:"Nikki Bella",cha:96,str:88,stk:90,tec:88,agi:84,iq:90,finisher:"RACK ATTACK",tags:["Female","PG Era","Reality Era","Legend","Hall of Fame","Bella Twins"]},
{name:"Brie Bella",cha:92,str:78,stk:88,tec:90,agi:92,iq:88,finisher:"BELLA BUSTER",tags:["Female","PG Era","Reality Era","Legend","Hall of Fame","Bella Twins"]},
{name:"Eva Marie",cha:95,str:68,stk:80,tec:74,agi:84,iq:78,finisher:"SLICED RED",tags:["Female","Reality Era","Legend"]},
{name:"Rick Rude",cha:100,str:88,stk:94,tec:92,agi:76,iq:94,finisher:"RUDE AWAKENING",tags:["Male","Golden Era","Legend","Hall of Fame"]},
{name:"Ivory",cha:91,str:78,stk:90,tec:92,agi:84,iq:90,finisher:"POISON IVORY",tags:["Female","Attitude Era","Legend","Hall of Fame","Right to Censor"]},
{name:"Michelle McCool",cha:94,str:82,stk:92,tec:94,agi:86,iq:91,finisher:"FAITH BREAKER",tags:["Female","Ruthless Aggression Era","PG Era","Legend","LayCool"]},
{name:"Sasha Banks",cha:99,str:76,stk:92,tec:98,agi:94,iq:96,finisher:"BANK STATEMENT",tags:["Female","Reality Era","Current Era","Legend","Four Horsewomen"]},
{name:"Carmella",cha:98,str:72,stk:88,tec:90,agi:92,iq:94,finisher:"CODE OF SILENCE",tags:["Female","Reality Era","Current Era","Legend"]},
{name:"Arianna Grace",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"GRACEFUL DDT",tags:["Female","NXT"]},
{name:"Izzi Dame",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"SITOUT POWERBOMB",tags:["Female","NXT"]},
{name:"La Catalina",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"DIVING CROSSBODY",tags:["Female","Current Era"]},
{name:"Austin Theory",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"A-TOWN DOWN",tags:["Male","Current Era"]},
{name:"Angelo Dawkins",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"SKY HIGH",tags:["Male","Current Era"]},
{name:"Axiom",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"GOLDEN RATIO",tags:["Male","NXT"]},
{name:"Baron Corbin",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"END OF DAYS",tags:["Male","Current Era"]},
{name:"Big Cass",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"EAST RIVER CROSSING",tags:["Male","Reality Era"]},
{name:"King Booker",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"BOOK END",tags:["Male","Ruthless Aggression Era"]},
{name:"Bronson Reed",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"TSUNAMI",tags:["Male","Current Era"]},
{name:"Candice LeRae",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"WICKED STEPSISTER",tags:["Female","Current Era"]},
{name:"Chad Gable",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"CHAOS THEORY",tags:["Male","Current Era"]},
{name:"Danhausen",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"VERY NICE VERY EVIL",tags:["Male","Current Era"]},
{name:"Dragon Lee",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"OPERATION DRAGON",tags:["Male","Current Era"]},
{name:"Drew McIntyre '09",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"FUTURE SHOCK DDT",tags:["Male","PG Era"]},
{name:"El Grande Americano",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"DIVING HEADBUTT",tags:["Male","Current Era"]},
{name:"Ethan Page",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"EGO'S EDGE",tags:["Male","NXT"]},
{name:"Fallon Henley",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"FAMOUSER",tags:["Female","NXT"]},
{name:"Demon Balor",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"COUP DE GRÂCE",tags:["Male","Current Era"]},
{name:"Grayson Waller",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"ROLLING STUNNER",tags:["Male","Current Era"]},
{name:"Jacy Jayne",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"RUNNING KNEE",tags:["Female","NXT"]},
{name:"JD McDonagh",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"DEVIL INSIDE",tags:["Male","Current Era"]},
{name:"Je'Von Evans",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"OG CUTTER",tags:["Male","NXT"]},
{name:"Joe Hendry",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"STANDING OVATION",tags:["Male","Current Era"]},
{name:"Johnny Gargano",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"ONE FINAL BEAT",tags:["Male","Current Era"]},
{name:"Jordynne Grace",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"JUGGERNAUT DRIVER",tags:["Female","Current Era"]},
{name:"Karmen Petrovic",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"SPINNING HEEL KICK",tags:["Female","NXT"]},
{name:"Kit Wilson",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"TWISTED NECKBREAKER",tags:["Male","Current Era"]},
{name:"Kiana James",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"401K",tags:["Female","Current Era"]},
{name:"Lady Shani",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"SHANI DRIVER",tags:["Female","Current Era"]},
{name:"Lainey Reid",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"RUNNING KNEE",tags:["Female","NXT"]},
{name:"Lash Legend",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"LASH EXTENSION",tags:["Female","Current Era"]},
{name:"Lexis King",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"CORONATION",tags:["Male","NXT"]},
{name:"Lizzy Rain",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"RAIN DROP",tags:["Female","NXT"]},
{name:"Lyra Valkyria '26",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"NIGHTWISH",tags:["Female","Current Era"]},
{name:"Matt Cardona",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"RADIO SILENCE",tags:["Male","Current Era"]},
{name:"Maxxine Dupri",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"REVERSE CATERPILLAR",tags:["Female","Current Era"]},
{name:"Michin",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"EAT DEFEAT",tags:["Female","Current Era"]},
{name:"Montez Ford",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"FROM THE HEAVENS",tags:["Male","Current Era"]},
{name:"Myles Borne",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"BORNE AGAIN",tags:["Male","NXT"]},
{name:"Naraku",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"POWERBOMB",tags:["Male","Current Era"]},
{name:"Nathan Frazer",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"PHOENIX SPLASH",tags:["Male","NXT"]},
{name:"Nattie",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"SHARPSHOOTER",tags:["Female","Current Era"]},
{name:"Omos",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"TWO-HANDED CHOKESLAM",tags:["Male","Current Era"]},
{name:"Otis",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"CATERPILLAR",tags:["Male","Current Era"]},
{name:"Paige NXT",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"PAIGE TURNER",tags:["Female","NXT"]},
{name:"Dean Ambrose",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"DIRTY DEEDS",tags:["Male","Reality Era"]},
{name:"Ricky Saints",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"ROSHAMBO",tags:["Male","NXT"]},
{name:"Roman Reigns (Shield)",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"SPEAR",tags:["Male","Reality Era","The Shield"]},
{name:"Royce Keys",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"POWERBOMB",tags:["Male","Current Era"]},
{name:"Seth Rollins (Shield)",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"BLACKOUT",tags:["Male","Reality Era","The Shield"]},
{name:"Dean Ambrose (Shield)",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"DIRTY DEEDS",tags:["Male","Reality Era","The Shield"]},
{name:"Tatum Paxley",cha:92,str:78,stk:88,tec:96,agi:86,iq:90,finisher:"PSYCHO TRAP",tags:["Female","NXT"]},
{name:"Thea Hail",cha:90,str:82,stk:92,tec:86,agi:98,iq:76,finisher:"KIMURA LOCK",tags:["Female","NXT"]},
{name:"Tony D'Angelo",cha:94,str:70,stk:86,tec:90,agi:92,iq:88,finisher:"SPINEBUSTER",tags:["Male","NXT"]},
{name:"Wade Barrett",cha:88,str:94,stk:96,tec:78,agi:70,iq:84,finisher:"BULL HAMMER",tags:["Male","PG Era"]}
];

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
'King of Kings':['Male','Ruthless Aggression Era','Legend','Hall of Fame'],
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
  "King of Kings": [
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
'Roman Reigns':76,'Cody Rhodes':86,'Rhea Ripley':88,'CM Punk':96,'IYO SKY':90,'Seth Rollins':88,'Becky Lynch':97,'Randy Orton':90,'Bianca Belair':72,'Gunther':90,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':80,'Liv Morgan':82,'Lola Vice':94,'Stone Cold Steve Austin':78,'The Rock':72,'Triple H':91,'The Undertaker':88,'Shawn Michaels':92,'Paige':95,'Rob Van Dam':84,'Kurt Angle':100,'Jeff Hardy':76,'Sol Ruca':82,'Giulia':95,'Stephanie Vaquer':96,'Bret Hart':100,'Razor Ramon':78,'Diesel':68,'Blake Monroe':82,'Goldberg':68,'Bron Breakker':84,'Sting':94,'Hulk Hogan':65,'Lita':82,'Jade Cargill':72,'AJ Styles':95,'Finn Bálor':94,'Naomi':78,'Trish Stratus':82,'Demolition Smash':68,'Demolition Ax':68,'Ultimate Warrior':65,'Macho Man Randy Savage':74,'Andre the Giant':68,'Roxanne Perez':92,'Brock Lesnar':98,'John Cena':86,'Sable':68,'Big E':78,'Kofi Kingston':82,'Xavier Woods':86,'Rey Mysterio':88,'Dominik Mysterio':80,'Hollywood Hogan':65,'Kevin Nash':68,'Scott Hall':86,'Eric Bischoff':65,'Syxx':92,'Chris Jericho':97,'Edge':91,'Eddie Guerrero':97,'Booker T':88,'Batista':74,'Sabu':78,'New Jack':65,'Mankind':86,'Kane':78,'Damian Priest':84,'Road Warrior Hawk':68,'Road Warrior Animal':68,'Demolition Crush':68,'British Bulldog':92,'Yokozuna':72,'Jey Uso':80,'Jacob Fatu':78,'Jimmy Uso':80,'Solo Sikoa':76,'LA Knight':78,"Faarooq":76,"Mark Henry":70,"D'Lo Brown":84,"Kama Mustafa":82,"The Rock '98":72,"Rikishi":74,"Umaga":72,"Triple H DX":91,"Road Dogg":72,"Billy Gunn":76,"Chyna":82,"Shawn Michaels DX":94,"X-Pac":90,"Mickie James":94,"Bull Nakano":88,"King of Kings":92,"Cactus Jack":82,"Dude Love":84,"Terry Funk":94,"Chainsaw Charlie":84,"Kamala":68,"Rowdy Roddy Piper":92,"Lex Luger":86,"The Godfather":74,"Hacksaw Jim Duggan":68,"Mr Perfect":96,"Earthquake":68,"Typhoon":68,"Sensational Sherri":88,"Ultimo Dragon":98,"Vader":82,"Ken Shamrock":100,"Gangrel":84,"Dusty Rhodes":84,"Goldust":86,"Ric Flair":100,"AJ Lee":100,"Candice Michelle":78,"Maryse":86,"Torrie Wilson":74
};
const STAR_POWER_RATINGS={
'Roman Reigns':100,'Cody Rhodes':98,'Rhea Ripley':97,'CM Punk':99,'IYO SKY':88,'Seth Rollins':96,'Becky Lynch':98,'Randy Orton':98,'Bianca Belair':94,'Gunther':94,'Sami Zayn':91,'Charlotte Flair':97,'Tiffany Stratton':91,'Liv Morgan':91,'Lola Vice':74,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':99,'Paige':90,'Rob Van Dam':92,'Kurt Angle':97,'Jeff Hardy':96,'Sol Ruca':76,'Giulia':82,'Stephanie Vaquer':84,'Bret Hart':99,'Razor Ramon':94,'Diesel':95,'Blake Monroe':74,'Goldberg':99,'Bron Breakker':89,'Sting':99,'Hulk Hogan':100,'Lita':94,'Jade Cargill':88,'AJ Styles':95,'Finn Bálor':92,'Naomi':88,'Trish Stratus':97,'Demolition Smash':88,'Demolition Ax':88,'Ultimate Warrior':98,'Macho Man Randy Savage':99,'Andre the Giant':100,'Roxanne Perez':82,'Brock Lesnar':99,'John Cena':100,'Sable':92,'Big E':90,'Kofi Kingston':91,'Xavier Woods':85,'Rey Mysterio':98,'Dominik Mysterio':91,'Hollywood Hogan':100,'Kevin Nash':97,'Scott Hall':97,'Eric Bischoff':90,'Syxx':86,'Chris Jericho':98,'Edge':98,'Eddie Guerrero':98,'Booker T':96,'Batista':97,'Sabu':88,'New Jack':82,'Mankind':97,'Kane':98,'Damian Priest':90,'Road Warrior Hawk':95,'Road Warrior Animal':95,'Demolition Crush':86,'British Bulldog':94,'Yokozuna':96,'Jey Uso':94,'Jacob Fatu':88,'Jimmy Uso':88,'Solo Sikoa':86,'LA Knight':94,"Faarooq":89,"Mark Henry":94,"D'Lo Brown":84,"Kama Mustafa":80,"The Rock '98":98,"Rikishi":93,"Umaga":93,"Triple H DX":98,"Road Dogg":88,"Billy Gunn":89,"Chyna":96,"Shawn Michaels DX":99,"X-Pac":89,"Mickie James":91,"Bull Nakano":92,"King of Kings":100,"Cactus Jack":96,"Dude Love":92,"Terry Funk":97,"Chainsaw Charlie":86,"Kamala":90,"Rowdy Roddy Piper":99,"Lex Luger":96,"The Godfather":90,"Hacksaw Jim Duggan":94,"Mr Perfect":98,"Earthquake":92,"Typhoon":86,"Sensational Sherri":94,"Ultimo Dragon":94,"Vader":98,"Ken Shamrock":94,"Gangrel":88,"Dusty Rhodes":100,"Goldust":94,"Ric Flair":100,"AJ Lee":96,"Candice Michelle":86,"Maryse":91,"Torrie Wilson":94
};
const FINISHER_RATINGS={
'Roman Reigns':99,'Cody Rhodes':94,'Rhea Ripley':96,'CM Punk':94,'IYO SKY':94,'Seth Rollins':99,'Becky Lynch':92,'Randy Orton':100,'Bianca Belair':94,'Gunther':96,'Sami Zayn':96,'Charlotte Flair':97,'Tiffany Stratton':95,'Liv Morgan':90,'Lola Vice':90,'Stone Cold Steve Austin':100,'The Rock':100,'Triple H':99,'The Undertaker':100,'Shawn Michaels':100,'Paige':91,'Rob Van Dam':98,'Kurt Angle':97,'Jeff Hardy':99,'Sol Ruca':96,'Giulia':92,'Stephanie Vaquer':91,'Bret Hart':100,'Razor Ramon':98,'Diesel':98,'Blake Monroe':88,'Goldberg':100,'Bron Breakker':97,'Sting':98,'Hulk Hogan':100,'Lita':97,'Jade Cargill':91,'AJ Styles':99,'Finn Bálor':98,'Naomi':88,'Trish Stratus':97,'Demolition Smash':94,'Demolition Ax':94,'Ultimate Warrior':97,'Macho Man Randy Savage':100,'Andre the Giant':94,'Roxanne Perez':94,'Brock Lesnar':100,'John Cena':100,'Sable':88,'Big E':94,'Kofi Kingston':97,'Xavier Woods':88,'Rey Mysterio':100,'Dominik Mysterio':90,'Hollywood Hogan':100,'Kevin Nash':98,'Scott Hall':98,'Eric Bischoff':72,'Syxx':91,'Chris Jericho':99,'Edge':100,'Eddie Guerrero':100,'Booker T':95,'Batista':99,'Sabu':94,'New Jack':86,'Mankind':99,'Kane':99,'Damian Priest':96,'Road Warrior Hawk':98,'Road Warrior Animal':98,'Demolition Crush':93,'British Bulldog':97,'Yokozuna':98,'Jey Uso':96,'Jacob Fatu':94,'Jimmy Uso':94,'Solo Sikoa':95,'LA Knight':96,"Faarooq":94,"Mark Henry":96,"D'Lo Brown":90,"Kama Mustafa":88,"The Rock '98":99,"Rikishi":94,"Umaga":98,"Triple H DX":99,"Road Dogg":88,"Billy Gunn":93,"Chyna":96,"Shawn Michaels DX":100,"X-Pac":91,"Mickie James":94,"Bull Nakano":96,"King of Kings":100,"Cactus Jack":97,"Dude Love":91,"Terry Funk":96,"Chainsaw Charlie":91,"Kamala":91,"Rowdy Roddy Piper":96,"Lex Luger":97,"The Godfather":91,"Hacksaw Jim Duggan":92,"Mr Perfect":98,"Earthquake":96,"Typhoon":92,"Sensational Sherri":90,"Ultimo Dragon":97,"Vader":99,"Ken Shamrock":98,"Gangrel":92,"Dusty Rhodes":97,"Goldust":94,"Ric Flair":100,"AJ Lee":98,"Candice Michelle":88,"Maryse":93,"Torrie Wilson":88
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
'Jimmy Uso':['Upper Midcard',702],'Solo Sikoa':['Upper Midcard',705],'LA Knight':['Upper Midcard',708],'Faarooq':['Upper Midcard',704],'Mark Henry':['Upper Midcard',707],"D'Lo Brown":['Midcard',694],'Kama Mustafa':['Lower Midcard',686],"The Rock '98":['Main Event',716],'Rikishi':['Upper Midcard',704],'Umaga':['Upper Midcard',708],'Triple H DX':['Main Event',716],'King of Kings':['Main Event',720],'Cactus Jack':['Upper Midcard',709],'Dude Love':['Upper Midcard',703],'Terry Funk':['Main Event',712],'Chainsaw Charlie':['Midcard',696],'Kamala':['Midcard',694],'Rowdy Roddy Piper':['Main Event',716],'Lex Luger':['Main Event',712],'The Godfather':['Midcard',696],'Hacksaw Jim Duggan':['Upper Midcard',702],'Mr Perfect':['Main Event',712],'Earthquake':['Upper Midcard',704],'Typhoon':['Midcard',694],'Sensational Sherri':['Upper Midcard',700],'Ultimo Dragon':['Upper Midcard',708],'Vader':['Main Event',716],'Ken Shamrock':['Upper Midcard',709],'Gangrel':['Midcard',693],'Dusty Rhodes':['Main Event',718],'Goldust':['Upper Midcard',705],'Ric Flair':['Main Event',720],'AJ Lee':['Main Event',712],'Candice Michelle':['Midcard',690],'Maryse':['Upper Midcard',700],'Torrie Wilson':['Upper Midcard',699],'Road Dogg':['Midcard',692],'Billy Gunn':['Upper Midcard',701],'Chyna':['Upper Midcard',707],'Shawn Michaels DX':['Main Event',719],'X-Pac':['Midcard',697],'Mickie James':['Upper Midcard',702],'Bull Nakano':['Upper Midcard',706]
};
/* v0.9.122: achievement-led quintiles, 239 cards divided 48/48/48/48/47.
   Ranking weights combine curated title/history prominence and existing card rankings.
   A wrestler's eight-stat total is tier-based, while signature strengths are preserved. */
const TIER_NAMES=['Main Event','Upper Midcard','Midcard','Lower Midcard','Opener'];
const POSITION_RANGES={'Main Event':[710,720],'Upper Midcard':[700,709],'Midcard':[690,699],'Lower Midcard':[680,689],'Opener':[670,679]};
const TITLE_LEGENDS=["Stone Cold Steve Austin","The Rock","Hulk Hogan","Hollywood Hogan","John Cena","Roman Reigns","Cody Rhodes","The Undertaker","Triple H","King of Kings","Triple H DX","Shawn Michaels","Shawn Michaels DX","Bret Hart","Ric Flair","Randy Orton","Brock Lesnar","Kurt Angle","CM Punk","Seth Rollins","Edge","Chris Jericho","Batista","Goldberg","Sting","Macho Man Randy Savage","Ultimate Warrior","Andre the Giant","Yokozuna","Kane","Eddie Guerrero","Rey Mysterio","Booker T","King Booker","AJ Styles","Drew McIntyre","Gunther","Bobby Lashley","Becky Lynch","Charlotte Flair","Rhea Ripley","Bianca Belair","Bayley","Sasha Banks","IYO SKY","Asuka","Trish Stratus","Lita"];
const OTHER_CHAMPIONS=["Rhea Ripley","Bianca Belair","Bayley","Sasha Banks","IYO SKY","Asuka","Trish Stratus","Lita","Alexa Bliss","Liv Morgan","Naomi","Nia Jax","Toni Storm","AJ Lee","Mickie James","Paige","Nikki Bella","Roxanne Perez","Tiffany Stratton","Damian Priest","Finn Bálor","Demon Balor","Big E","Kofi Kingston","Sami Zayn","Shinsuke Nakamura","Braun Strowman","Mankind","Cactus Jack","Dusty Rhodes","Vader","Terry Funk","Lex Luger","Mr Perfect","Rowdy Roddy Piper","Rick Rude","Scott Steiner","Big Poppa Pump","Jeff Jarrett","Dean Ambrose","Roman Reigns (Shield)","Seth Rollins (Shield)","Dean Ambrose (Shield)"];
/* Achievement corrections: title reigns, sustained main-roster success, and
   established personas outrank developmental prospects and authority figures.
   These are explicit, reviewable placements; quintile boundaries stay equal. */
const RANKING_CORRECTIONS={
'Main Event':["Kevin Owens","Sheamus","The Miz","JBL","Jeff Hardy","Dean Ambrose","Mankind","Dusty Rhodes","Vader","Toni Storm","Alexa Bliss","Liv Morgan","Naomi","Nia Jax","AJ Lee","Mickie James","Paige","Nikki Bella","Roxanne Perez","Tiffany Stratton","Damian Priest","Finn Bálor","Big E","Kofi Kingston","Sami Zayn","Shinsuke Nakamura","Braun Strowman","Kevin Nash","Jey Uso","The Rock '98"],
'Upper Midcard':["Trick Williams","Oba Femi","Penta","Ricky Saints","Wade Barrett","Jordynne Grace","Johnny Gargano","Carmelo Hayes","Tazz","William Regal","Raven","Rick Steiner","Michelle McCool","R-Truth","Victoria","Jushin Thunder Liger","Rob Van Dam","Razor Ramon","Diesel","Road Warrior Hawk","Road Warrior Animal","JBL","Sheamus","Kevin Owens","The Miz","Jeff Hardy","Bayley","Asuka","Drew McIntyre","Giulia","Stephanie Vaquer","Chelsea Green","Penta","Bobby Lashley","Scott Hall","Demon Balor","Dean Ambrose (Shield)","Roman Reigns (Shield)","Seth Rollins (Shield)"],
'Midcard':["Sol Ruca","Rey Fenix","El Hijo del Vikingo","Kairi Sane","Lyra Valkyria","Raquel Rodriguez","Piper Niven","Nattie","Montez Ford","Tajiri","Fit Finlay","Jake Roberts","King Kong Bundy","Carmella","Ivory","Chad Gable","Dragon Lee","Ethan Page","Joe Hendry","Logan Paul","Jacy Jayne","Lash Legend","Tatum Paxley","Tony D'Angelo","Bron Breakker","Oba Femi","Trick Williams","Penta","Ricky Saints","Wade Barrett"],
'Lower Midcard':["Lola Vice","Blake Monroe","Cora Jade","Kelani Jordan","Kendal Grey","Jaida Parker","Arianna Grace","Izzi Dame","La Catalina","Fallon Henley","Je'Von Evans","Karmen Petrovic","Kiana James","Lainey Reid","Lexis King","Lizzy Rain","Myles Borne","Nathan Frazer","Thea Hail","Kit Wilson","Grayson Waller","JD McDonagh","Danhausen","Mr. Iguana","Lady Shani","Maxxine Dupri","MVP","Shane McMahon","Vince McMahon","Stephanie McMahon"],
'Opener':["Eric Bischoff","Eva Marie","Stacy Keibler","Kama Mustafa","Naraku","Royce Keys","La Catalina","Karmen Petrovic","Lainey Reid","Lizzy Rain","Kit Wilson","Myles Borne","Arianna Grace","Izzi Dame","Blake Monroe","Mr. Iguana","Danhausen","Shane McMahon","Stephanie McMahon"]
};
const ranking=new Map();
TITLE_LEGENDS.forEach((n,i)=>ranking.set(n,10000-i*2));
OTHER_CHAMPIONS.forEach((n,i)=>{if(!ranking.has(n))ranking.set(n,9000-i*2)});
const correctionTier=new Map();
for(const [tier,names] of Object.entries(RANKING_CORRECTIONS))
 for(const name of names)correctionTier.set(name,tier);
const tierPriority={'Main Event':5,'Upper Midcard':4,'Midcard':3,'Lower Midcard':2,'Opener':1};
for(const n of ['Drew McIntyre','Bayley','Asuka','Bobby Lashley','Kevin Owens','Sheamus','Mankind','Dusty Rhodes','Vader','Jeff Hardy','Toni Storm'])correctionTier.set(n,'Main Event');
for(const n of ['Trick Williams','Oba Femi','Penta','Ricky Saints','Wade Barrett','Jordynne Grace','Johnny Gargano','Carmelo Hayes','Tazz','William Regal','Raven','Michelle McCool','Jushin Thunder Liger'])correctionTier.set(n,'Upper Midcard');

const CAREER_PRIORITY={
 'Drew McIntyre':980,'Bayley':970,'Asuka':960,'Bobby Lashley':950,
 'Kevin Owens':940,'Sheamus':930,'Mankind':920,'Dusty Rhodes':910,
 'Vader':900,'Jeff Hardy':890,'Toni Storm':880,
 'Trick Williams':980,'Oba Femi':970,'Penta':960,'Ricky Saints':950,
 'Wade Barrett':940,'Jordynne Grace':930,'Johnny Gargano':920,
 'Carmelo Hayes':910,'Tazz':900,'William Regal':890,
 'Raven':880,'Michelle McCool':870,'Jushin Thunder Liger':860
};

const ranked=[...BASE].sort((a,b)=>{
 const score=w=>{const t=correctionTier.get(w.name)||(TITLE_LEGENDS.includes(w.name)?'Main Event':OTHER_CHAMPIONS.includes(w.name)?'Upper Midcard':CARD_POSITION[w.name]?.[0]||'Midcard');return tierPriority[t]*10000+(CAREER_PRIORITY[w.name]??((ranking.get(w.name)??((CARD_POSITION[w.name]?.[1]??690)*10))/100))};
 return score(b)-score(a)||a.name.localeCompare(b.name);
});
const tierCounts=TIER_NAMES.map((_,i)=>Math.floor(BASE.length/5)+(i<BASE.length%5?1:0));
let offset=0;
for(let t=0;t<TIER_NAMES.length;t++){
 const [lo,hi]=POSITION_RANGES[TIER_NAMES[t]];
 for(const [i,w] of ranked.slice(offset,offset+tierCounts[t]).entries()){
   w.position=TIER_NAMES[t];
   w.tierTarget=hi-Math.floor(i*(hi-lo+1)/tierCounts[t]);
 }
 offset+=tierCounts[t];
}
function normalizePositionStats(w){
 const keys=['str','stk','tec','agi','sub','cha','star','fnr'],target=w.tierTarget;
 // Push strongest and weakest categories apart while retaining each wrestler's original order.
 const rankedKeys=[...keys].sort((a,b)=>w[b]-w[a]||keys.indexOf(a)-keys.indexOf(b));
 const high=rankedKeys.slice(0,2),low=rankedKeys.slice(-2);
 for(let k of high)w[k]=Math.max(w[k],94);
 for(let k of low)w[k]=Math.min(w[k],69);
 let delta=target-keys.reduce((n,k)=>n+w[k],0),guard=0;
 while(delta&&guard++<2000){
   let moved=false;
   const order=[...keys].sort((a,b)=>Math.abs(w[a]-83)-Math.abs(w[b]-83)||keys.indexOf(a)-keys.indexOf(b));
   for(const k of order){
     const lower=low.includes(k)?65:70,upper=high.includes(k)?100:93;
     if(delta>0&&w[k]<upper){w[k]++;delta--;moved=true}
     else if(delta<0&&w[k]>lower){w[k]--;delta++;moved=true}
     if(!delta)break;
   }
   if(!moved)break;
 }
}
BASE.forEach(normalizePositionStats);

BASE.forEach(w=>w.tags=[...new Set([...(w.tags||[]),...(SUPERSTAR_TAGS[w.name]||[])])]);
function hasTag(w,t){return (w.tags||[]).includes(t)}
function roadEligibleTags(){let owned=BASE.filter(w=>level(w.name));let candidates=[...new Set(BASE.flatMap(w=>w.tags||[]))].filter(t=>owned.some(w=>hasTag(w,t)));return candidates.filter(t=>owned.filter(w=>hasTag(w,t)).length>=2)}
const KEYS=[['str','Power'],['stk','Striking'],['tec','Technique'],['agi','Aerial'],['sub','Submission'],['cha','Charisma'],['star','Star Power'],['fnr','Finisher']];let save=null,state={};try{let raw=localStorage.getItem('wweSuperstarsSave');if(raw)save=JSON.parse(raw);if(save&&(!save.roster||typeof save.roster!=='object'||Array.isArray(save.roster)))throw Error('Invalid save structure')}catch(e){console.error('WWE Superstars save could not be read; preserving existing data for recovery',e);try{let damaged=localStorage.getItem('wweSuperstarsSave');if(damaged&&!localStorage.getItem('wweSuperstarsSave_corrupt_backup'))localStorage.setItem('wweSuperstarsSave_corrupt_backup',damaged)}catch(backupError){console.warn('Could not back up damaged save',backupError)}save=null;}const app=document.querySelector('#app');
function coinIcon(c='coin-icon'){return '<span class="'+c+'" aria-label="coin"><span class="coin-face"></span></span>'}
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
 if(!save.shopPurchases||save.shopPurchases.date!==dailyKey())save.shopPurchases={date:dailyKey(),bought:[],refresh:0};if(save.shopPurchases.refresh==null)save.shopPurchases.refresh=0;
}
function awardMatchCoin(){ensureEconomy();save.coinMatches=(save.coinMatches||0)+1;if(save.coinMatches%50===0){save.coins++;state.pendingCoinAwards=(state.pendingCoinAwards||[]).concat({reason:'50 MATCHES COMPLETED',detail:'One coin earned for every 50 matches played.'})}}
function seededShopRandom(seed){let x=seed>>>0;return()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296}}
function dailyShopOffers(){ensureEconomy();let key=dailyKey(),refresh=save.shopPurchases.refresh||0,slot=key+'-'+refresh,stored=save.shopPurchases.offers;
 if(save.shopPurchases.offerSlot===slot&&Array.isArray(stored)&&stored.length===9&&stored.every(o=>BASE.some(w=>w.name===o.name))){return stored.map(o=>({w:BASE.find(w=>w.name===o.name),copies:o.copies,cost:o.cost,id:o.id}))}
 let seed=[...slot].reduce((n,c)=>Math.imul(n^c.charCodeAt(0),16777619)>>>0,2166136261),rand=seededShopRandom(seed),pool=[...BASE];for(let i=pool.length-1;i>0;i--){let j=Math.floor(rand()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 let offers=pool.slice(0,9).map((w,i)=>({w,copies:i<5?1:i<8?2:3,cost:i<5?1:i<8?2:3,id:slot+'-'+i})).sort((a,b)=>b.copies-a.copies||a.w.name.localeCompare(b.w.name));
 save.shopPurchases.offerSlot=slot;save.shopPurchases.offers=offers.map(o=>({name:o.w.name,copies:o.copies,cost:o.cost,id:o.id}));persist();return offers}
function shopResetRemaining(){let n=new Date(),next=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1),s=Math.max(0,Math.ceil((next-n)/1000)),h=String(Math.floor(s/3600)).padStart(2,'0'),m=String(Math.floor(s%3600/60)).padStart(2,'0'),sec=String(s%60).padStart(2,'0');return h+':'+m+':'+sec}
let shopClockTimer=null;
function startShopClock(){if(shopClockTimer)clearInterval(shopClockTimer);let tick=()=>{let el=document.querySelector('#shopResetClock');if(!el){clearInterval(shopClockTimer);shopClockTimer=null;return}if(save.shopPurchases?.date!==dailyKey()){clearInterval(shopClockTimer);shopClockTimer=null;return shop()}el.textContent=shopResetRemaining()};tick();shopClockTimer=setInterval(tick,1000)}
function shop(){ensureEconomy();let offers=dailyShopOffers(),bought=save.shopPurchases.bought||[],progress=(save.coinMatches||0)%50;shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY SHOP</span><span class="shop-coins">${coinIcon()}<b>${save.coins}</b></span></div><div class="shop-reset-bar"><span>NEXT DAILY RESET</span><b id="shopResetClock">${shopResetRemaining()}</b><button ${save.coins<1?'disabled':''} onclick="manualShopRefresh()">${coinIcon('coin-icon coin-small')} REFRESH · 1 COIN</button></div><div class="shop-head"><div><div class="title">Superstar Shop</div></div><div class="coin-progress"><b>${progress}/50</b><span>MATCHES TO NEXT COIN</span></div></div><div class="shop-grid">${offers.map((o,i)=>{let sold=bought.includes(o.id),can=save.coins>=o.cost;return `<div class="shop-offer ${sold?'sold':''}"><div class="shop-card">${card(o.w,o.copies,'','lazy')}</div><div class="shop-offer-copy"><span>${o.copies} ${o.copies===1?'COPY':'COPIES'} · +${o.copies} LEVEL${o.copies===1?'':'S'}</span><button ${sold||!can?'disabled':''} onclick="buyShopOffer('${o.id}',${i})">${sold?'SOLD':coinIcon('coin-icon coin-small')+o.cost+' COIN'+(o.cost===1?'':'S')}</button></div></div>`}).join('')}</div>`,'shop-screen');startShopClock()}
function manualShopRefresh(){ensureEconomy();if(save.coins<1)return shop();save.coins--;save.shopPurchases.refresh=(save.shopPurchases.refresh||0)+1;save.shopPurchases.bought=[];persist();shop()}
function buyShopOffer(id,index){ensureEconomy();let offer=dailyShopOffers()[index];if(!offer||offer.id!==id||save.shopPurchases.bought.includes(id)||save.coins<offer.cost)return shop();save.coins-=offer.cost;save.shopPurchases.bought.push(id);let old=level(offer.w.name),neu=old+offer.copies;save.roster[offer.w.name]=neu;ensureRecord(offer.w.name);persist();let next='shop()';if(old)return duplicateUpgrade(offer.w,old,neu,next,'SHOP PURCHASE · '+offer.copies+' '+(offer.copies===1?'COPY':'COPIES'));shell(`<div class="new-backdrop">${artImage(offer.w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">SHOP PURCHASE · ${offer.copies} ${offer.copies===1?'COPY':'COPIES'}</div><div class="new-name">${offer.w.name}</div><div class="new-card">${card(offer.w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">CONTINUE</button></div>`,'reward new-superstar-screen')}

function ensureRecord(n){if(!save.records)save.records={};if(!save.records[n])save.records[n]={wins:0,losses:0,streak:0,bestStreak:0};return save.records[n]}
function recordGame(n,win){let r=ensureRecord(n);if(win){r.wins++;r.streak=Math.max(1,r.streak+1);r.bestStreak=Math.max(r.bestStreak,r.streak)}else{r.losses++;r.streak=Math.min(-1,r.streak-1)}}
function recordStats(n){let r=ensureRecord(n),g=r.wins+r.losses,p=g?Math.round(r.wins/g*100):0;return {...r,games:g,pct:p}}
const STAT_PER_LEVEL=6;function statsAt(w,lvl){let add=Math.max(0,lvl-1)*STAT_PER_LEVEL;return Object.fromEntries(KEYS.map(([k])=>[k,w[k]+add]))}function baseHpOf(w){let v=KEYS.map(([k])=>w[k]).sort((a,b)=>a-b).slice(2,-2);return v.reduce((a,b)=>a+b,0)}const HP_PER_LEVEL=32;function hpOf(w,lvl){return baseHpOf(w)+Math.max(0,lvl-1)*HP_PER_LEVEL}function level(n){return save?.roster?.[n]||0}
// Share versioned URLs between displayed cards and preload requests.
function artFile(name,format='webp'){const slug=name==='King of Kings'?'triple-h-king-of-kings':name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');return slug+'.'+format}
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
let TYPOGRAPHY={};
const TYPOGRAPHY_READY=fetch('card-typography.json?v='+APP_VERSION).then(r=>r.ok?r.json():{}).then(v=>{TYPOGRAPHY=v||{};return TYPOGRAPHY}).catch(()=>TYPOGRAPHY={});
function typographyStyle(name){const t=TYPOGRAPHY[name]||{};return '--name-fit:'+Math.min(1,8/Math.max(8,...name.trim().split(/\s+/).map(w=>w.length))).toFixed(3)+';--name-size:'+((t.size||100)/100)+';--name-leading:'+((t.lineHeight||100)/100)+';--name-tracking:'+((t.letterSpacing||0)/100)+'em'}
const PERSONA_FONT_CLASSES={
  "Roman Reigns": "font-superstar-0",
  "Cody Rhodes": "font-superstar-1",
  "Rhea Ripley": "font-superstar-2",
  "CM Punk": "font-superstar-3",
  "IYO SKY": "font-superstar-4",
  "Seth Rollins": "font-superstar-5",
  "Becky Lynch": "font-superstar-6",
  "Randy Orton": "font-superstar-7",
  "Bianca Belair": "font-superstar-8",
  "Gunther": "font-superstar-9",
  "Sami Zayn": "font-superstar-10",
  "Charlotte Flair": "font-superstar-11",
  "Tiffany Stratton": "font-superstar-12",
  "Liv Morgan": "font-superstar-13",
  "Lola Vice": "font-superstar-14",
  "Stone Cold Steve Austin": "font-superstar-15",
  "The Rock": "font-superstar-16",
  "Triple H": "font-superstar-17",
  "The Undertaker": "font-superstar-18",
  "Shawn Michaels": "font-superstar-19",
  "Paige": "font-superstar-20",
  "Rob Van Dam": "font-superstar-21",
  "Kurt Angle": "font-superstar-22",
  "Jeff Hardy": "font-superstar-23",
  "Sol Ruca": "font-superstar-24",
  "Giulia": "font-superstar-25",
  "Stephanie Vaquer": "font-superstar-26",
  "Bret Hart": "font-superstar-27",
  "Razor Ramon": "font-superstar-28",
  "Diesel": "font-superstar-29",
  "Blake Monroe": "font-superstar-30",
  "Goldberg": "font-superstar-31",
  "Bron Breakker": "font-superstar-32",
  "Sting": "font-superstar-33",
  "Hulk Hogan": "font-superstar-34",
  "Lita": "font-superstar-35",
  "Jade Cargill": "font-superstar-36",
  "AJ Styles": "font-superstar-37",
  "Finn Bálor": "font-superstar-38",
  "Naomi": "font-superstar-39",
  "Trish Stratus": "font-superstar-40",
  "Demolition Smash": "font-superstar-41",
  "Demolition Ax": "font-superstar-41",
  "Ultimate Warrior": "font-superstar-42",
  "Macho Man Randy Savage": "font-superstar-43",
  "Andre the Giant": "font-superstar-44",
  "Roxanne Perez": "font-superstar-45",
  "Brock Lesnar": "font-superstar-46",
  "John Cena": "font-superstar-47",
  "Sable": "font-superstar-48",
  "Big E": "font-superstar-49",
  "Kofi Kingston": "font-superstar-49",
  "Xavier Woods": "font-superstar-49",
  "Rey Mysterio": "font-superstar-50",
  "Dominik Mysterio": "font-superstar-51",
  "Hollywood Hogan": "font-superstar-52",
  "Kevin Nash": "font-superstar-52",
  "Scott Hall": "font-superstar-52",
  "Eric Bischoff": "font-superstar-53",
  "Syxx": "font-superstar-52",
  "Chris Jericho": "font-superstar-54",
  "Edge": "font-superstar-55",
  "Eddie Guerrero": "font-superstar-56",
  "Booker T": "font-superstar-57",
  "Batista": "font-superstar-58",
  "Sabu": "font-superstar-59",
  "New Jack": "font-superstar-60",
  "Mankind": "font-superstar-61",
  "Kane": "font-superstar-62",
  "Damian Priest": "font-superstar-63",
  "Road Warrior Hawk": "font-superstar-41",
  "Road Warrior Animal": "font-superstar-41",
  "Demolition Crush": "font-superstar-41",
  "British Bulldog": "font-superstar-64",
  "Yokozuna": "font-superstar-65",
  "Jey Uso": "font-superstar-0",
  "Jacob Fatu": "font-superstar-0",
  "Jimmy Uso": "font-superstar-0",
  "Solo Sikoa": "font-superstar-0",
  "LA Knight": "font-superstar-66",
  "Faarooq": "font-superstar-67",
  "Mark Henry": "font-superstar-68",
  "Kama Mustafa": "font-superstar-69",
  "Rikishi": "font-superstar-70",
  "Umaga": "font-superstar-71",
  "Triple H DX": "font-superstar-72",
  "King of Kings": "font-superstar-73",
  "Cactus Jack": "font-superstar-74",
  "Dude Love": "font-superstar-75",
  "Terry Funk": "font-superstar-76",
  "Chainsaw Charlie": "font-superstar-77",
  "Kamala": "font-superstar-78",
  "Rowdy Roddy Piper": "font-superstar-79",
  "Lex Luger": "font-superstar-80",
  "The Godfather": "font-superstar-81",
  "Hacksaw Jim Duggan": "font-superstar-82",
  "Mr Perfect": "font-superstar-83",
  "Earthquake": "font-superstar-84",
  "Typhoon": "font-superstar-85",
  "Sensational Sherri": "font-superstar-86",
  "Ultimo Dragon": "font-superstar-87",
  "Vader": "font-superstar-88",
  "Ken Shamrock": "font-superstar-89",
  "Gangrel": "font-superstar-90",
  "Dusty Rhodes": "font-superstar-91",
  "Goldust": "font-superstar-92",
  "Ric Flair": "font-superstar-93",
  "AJ Lee": "font-superstar-94",
  "Candice Michelle": "font-superstar-95",
  "Maryse": "font-superstar-96",
  "Torrie Wilson": "font-superstar-97",
  "Road Dogg": "font-superstar-72",
  "Billy Gunn": "font-superstar-72",
  "Chyna": "font-superstar-72",
  "Shawn Michaels DX": "font-superstar-72",
  "X-Pac": "font-superstar-72",
  "Mickie James": "font-superstar-98",
  "Bull Nakano": "font-superstar-99",
  "Big Boss Man": "font-superstar-100",
  "Jake Roberts": "font-superstar-101",
  "King Kong Bundy": "font-superstar-102",
  "JBL": "font-superstar-103",
  "Stacy Keibler": "font-superstar-104",
  "Cora Jade": "font-superstar-105",
  "Kelani Jordan": "font-superstar-106",
  "Kendal Grey": "font-superstar-107",
  "Jaida Parker": "font-superstar-108",
  "La Parka": "font-superstar-109",
  "Rey Fenix": "font-superstar-110",
  "Mr. Iguana": "font-superstar-111",
  "El Hijo del Vikingo": "font-superstar-112",
  "Jushin Thunder Liger": "font-superstar-113",
  "Tazz": "font-superstar-114",
  "Victoria": "font-superstar-115",
  "Tajiri": "font-superstar-116",
  "William Regal": "font-superstar-117",
  "Fit Finlay": "font-superstar-118",
  "Steve Blackman": "font-superstar-119",
  "Raven": "font-superstar-120",
  "Jazz": "font-superstar-121",
  "Logan Paul": "font-superstar-122",
  "Drew McIntyre": "font-superstar-123",
  "Sheamus": "font-superstar-124",
  "Jeff Jarrett": "font-superstar-125",
  "Mabel": "font-superstar-126",
  "Bayley": "font-superstar-127",
  "Alexa Bliss": "font-superstar-128",
  "Asuka": "font-superstar-4",
  "Nia Jax": "font-superstar-129",
  "Chelsea Green": "font-superstar-130",
  "Piper Niven": "font-superstar-131",
  "Raquel Rodriguez": "font-superstar-132",
  "Kairi Sane": "font-superstar-4",
  "Lyra Valkyria": "font-superstar-133",
  "Zelina Vega": "font-superstar-134",
  "Kevin Owens": "font-superstar-135",
  "Shinsuke Nakamura": "font-superstar-136",
  "Braun Strowman": "font-superstar-137",
  "R-Truth": "font-superstar-138",
  "The Miz": "font-superstar-139",
  "Carmelo Hayes": "font-superstar-140",
  "Trick Williams": "font-superstar-141",
  "Oba Femi": "font-superstar-142",
  "Penta": "font-superstar-110",
  "Vince McMahon": "font-superstar-143",
  "Shane McMahon": "font-superstar-144",
  "Stephanie McMahon": "font-superstar-145",
  "Toni Storm": "font-superstar-146",
  "Bobby Lashley": "font-superstar-147",
  "MVP": "font-superstar-148",
  "Scott Steiner": "font-superstar-149",
  "Rick Steiner": "font-superstar-149",
  "Big Poppa Pump": "font-superstar-150",
  "Nikki Bella": "font-superstar-151",
  "Brie Bella": "font-superstar-151",
  "Eva Marie": "font-superstar-152",
  "Rick Rude": "font-superstar-153",
  "Ivory": "font-superstar-154",
  "Michelle McCool": "font-superstar-155",
  "Sasha Banks": "font-superstar-156",
  "Carmella": "font-superstar-157",
  "D'Lo Brown": "font-superstar-158",
  "The Rock '98": "font-superstar-159",
  "Arianna Grace": "font-superstar-160",
  "Izzi Dame": "font-superstar-161",
  "La Catalina": "font-superstar-162",
  "Austin Theory": "font-superstar-163",
  "Angelo Dawkins": "font-superstar-164",
  "Axiom": "font-superstar-165",
  "Baron Corbin": "font-superstar-166",
  "Big Cass": "font-superstar-167",
  "King Booker": "font-superstar-168",
  "Bronson Reed": "font-superstar-169",
  "Candice LeRae": "font-superstar-170",
  "Chad Gable": "font-superstar-171",
  "Danhausen": "font-superstar-172",
  "Dragon Lee": "font-superstar-173",
  "Drew McIntyre '09": "font-superstar-174",
  "El Grande Americano": "font-superstar-175",
  "Ethan Page": "font-superstar-176",
  "Fallon Henley": "font-superstar-177",
  "Demon Balor": "font-superstar-178",
  "Grayson Waller": "font-superstar-179",
  "Jacy Jayne": "font-superstar-180",
  "JD McDonagh": "font-superstar-181",
  "Je'Von Evans": "font-superstar-182",
  "Joe Hendry": "font-superstar-183",
  "Johnny Gargano": "font-superstar-184",
  "Jordynne Grace": "font-superstar-185",
  "Karmen Petrovic": "font-superstar-186",
  "Kit Wilson": "font-superstar-187",
  "Kiana James": "font-superstar-188",
  "Lady Shani": "font-superstar-189",
  "Lainey Reid": "font-superstar-190",
  "Lash Legend": "font-superstar-191",
  "Lexis King": "font-superstar-192",
  "Lizzy Rain": "font-superstar-193",
  "Lyra Valkyria '26": "font-superstar-194",
  "Matt Cardona": "font-superstar-195",
  "Maxxine Dupri": "font-superstar-196",
  "Michin": "font-superstar-197",
  "Montez Ford": "font-superstar-198",
  "Myles Borne": "font-superstar-199",
  "Naraku": "font-superstar-200",
  "Nathan Frazer": "font-superstar-201",
  "Nattie": "font-superstar-202",
  "Omos": "font-superstar-203",
  "Otis": "font-superstar-204",
  "Paige NXT": "font-superstar-205",
  "Dean Ambrose": "font-superstar-206",
  "Ricky Saints": "font-superstar-207",
  "Roman Reigns (Shield)": "font-superstar-208",
  "Royce Keys": "font-superstar-209",
  "Seth Rollins (Shield)": "font-superstar-210",
  "Dean Ambrose (Shield)": "font-superstar-211",
  "Tatum Paxley": "font-superstar-212",
  "Thea Hail": "font-superstar-213",
  "Tony D'Angelo": "font-superstar-214",
  "Wade Barrett": "font-superstar-215"
};
const TAG_FONT_CLASSES=[
  ['D-Generation X','font-dx'],['New Age Outlaws','font-dx'],['nWo','font-nwo'],['NWO','font-nwo'],
  ['The Bloodline','font-bloodline'],['Bloodline','font-bloodline'],['The Shield','font-shield'],['Shield','font-shield'],
  ['Evolution','font-evolution'],['Nation of Domination','font-nation'],['ECW','font-ecw'],
  ['LWO','font-lwo'],['Lucha Brothers','font-lucha'],['Damage CTRL','font-damage'],['Kabuki Warriors','font-kabuki'],
  ['APA','font-apa'],['Judgment Day','font-judgment'],['Imperium','font-imperium'],['The Brood','font-brood'],['Hart Foundation','font-hart'],['Team Xtreme','font-xtreme'],['The Hardy Boyz','font-xtreme'],['Wyatt Family','font-wyatt'],['The Kliq','font-kliq'],['Demolition','font-demolition'],['Road Warriors','font-roadwarriors'],['The New Day','font-newday'],['New Day','font-newday'],
  ['Golden Era','font-golden'],['New Generation Era','font-newgen'],['Attitude Era','font-attitude'],
  ['Ruthless Aggression Era','font-ruthless'],['PG Era','font-pg'],['Reality Era','font-reality'],['Monday Night War Era','font-mnw'],['Current Era','font-current']
];
function superstarFontClass(w){if(PERSONA_FONT_CLASSES[w.name])return PERSONA_FONT_CLASSES[w.name];let tags=[...new Set([...(SUPERSTAR_TAGS[w.name]||[]),...(w.tags||[])])];for(const [tag,cl] of TAG_FONT_CLASSES)if(tags.includes(tag))return cl;return 'font-current'}
function cardNameHtml(name){const t=TYPOGRAPHY[name]||{},layout=t.layout||((name==='Triple H'||name==='Big E')?'one':name==='El Hijo del Vikingo'?'vikingo':'words');if(layout==='one')return name.toUpperCase();if(layout==='vikingo')return 'EL HIJO<br>DEL VIKINGO';return name.trim().split(/\s+/).join('<br>')}function card(w,l=1,c='',loading='eager'){let art=artImage(w.name,'cardart',loading),font=superstarFontClass(w),words=w.name.trim().split(/\s+/),single=words.length===1,nameFit=single&&w.name.length>=10?'card-name-single-long':'card-name-normal';return '<div class="card '+c+' '+font+'">'+art+'<div class="corner levelcorner"><small>LVL</small><b>'+l+'</b></div><div class="corner hpcorner"><small>HP</small><b>'+hpOf(w,l)+'</b></div><div class="name '+nameFit+'" style="'+typographyStyle(w.name)+'">'+cardNameHtml(w.name)+'</div></div>';}
function cardBack(w,l=1,c=''){let s=statsAt(w,l),base=statsAt(w,1);return '<div class="card card-back '+c+'"><div class="back-title">'+w.name+'</div><div class="back-stats">'+KEYS.map(([k,label])=>{let gain=Math.max(0,(s[k]||0)-(base[k]||0));return '<div class="back-stat"><img src="assets/'+ATTACK_ICONS[k]+'?v='+APP_VERSION+'" alt="'+label+'"><b>'+s[k]+'</b>'+(gain?'<small>+'+gain+' UPGRADE</small>':'<small class="base-stat">BASE</small>')+'</div>'}).join('')+'</div><div class="back-hint">TAP TO RETURN</div></div>';}
function openCard(n,l){let w=BASE.find(x=>x.name===n);if(!w)return;let overlay=document.createElement('div');overlay.className='card-viewer';overlay.onclick=e=>{if(e.target===overlay)overlay.remove()};overlay.innerHTML='<div class="card-viewer-inner" onclick="event.stopPropagation()"><div class="flip-card" onclick="this.classList.toggle(\'flipped\')"><div class="flip-card-inner"><div class="flip-face flip-front">'+card(w,l,'viewer-card')+'</div><div class="flip-face flip-back">'+cardBack(w,l,'viewer-card')+'</div></div></div></div>';document.body.appendChild(overlay);}
function shell(x,c=''){app.innerHTML=`<section class="screen ${c}">${x}</section>`}
function logo(){return '<img class="game-logo" src="assets/wwe-superstar-logo.png?v='+APP_VERSION+'" alt="WWE Superstars">'}
function versionBadge(){return '<div class="version-badge">VERSION '+APP_VERSION+'</div>'}
function start(){document.title='WWE Superstars · '+APP_VERSION;if(save)return home();shell(`<div class="startscreen"><div class="startglow"></div><div class="start-brand">${logo()}<div class="start-eyebrow">YOUR CAREER STARTS HERE</div></div><div class="startcopy"><div class="start-title">BUILD YOUR<br>ROSTER</div><div class="kicker">5 RANDOM SUPERSTARS · LEVEL 1</div><button class="btn startbtn" onclick="welcome()">OPEN WELCOME PACK</button></div>${versionBadge()}</div>`,'start')}
function welcome(){let p=[...BASE].sort(()=>Math.random()-.5).slice(0,5);state.picks=p;preloadArt(p);state.reveal=0;welcomeReveal()}
function welcomeReveal(){let i=state.reveal,w=state.picks[i],last=i===state.picks.length-1;shell(`<div class="onboarding-logo">${logo()}</div><div class="topbar onboardingbar"><span>WELCOME PACK</span><span class="welcome-count">${i+1}<i>/5</i></span></div><div class="welcome-reveal"><div class="kicker">${last?'FINAL SUPERSTAR':'YOUR STARTING ROSTER'}</div><div class="reveal-stage">${card(w,1,'reveal-card')}</div><div class="reveal-meta"><b>LVL 1</b><span>STARTING ROSTER</span></div><div class="reveal-progress">${state.picks.map((_,n)=>'<i class="'+(n<=i?'on':'')+'"></i>').join('')}</div><button class="btn welcome-next" onclick="${last?'claimWelcome()':'nextWelcome()'}">${last?'ENTER WWE SUPERSTARS':'REVEAL NEXT'}</button></div>`,'onboarding')}
function nextWelcome(){state.reveal++;welcomeReveal()}
function claimWelcome(){save={roster:{},wins:0,losses:0,records:{},coins:5,coinMatches:0,shopPurchases:{date:dailyKey(),bought:[]}};state.picks.forEach(x=>{save.roster[x.name]=1;ensureRecord(x.name)});persist();home()}
function openFactionWarfare(event){if(event){event.preventDefault();event.stopPropagation()}try{if(typeof window.factionWarfareMenu!=='function')throw Error('Faction Warfare UI did not load');window.factionWarfareMenu()}catch(error){console.error('Faction Warfare failed to open',error);shell('<div class="fw-page"><h1>FACTION WARFARE</h1><p>Unable to open: '+String(error.message||error).replace(/[&<>]/g,'')+'</p><button class="btn" onclick="home()">BACK TO HOME</button></div>','fw-screen')}}
let homePage=0,homeTouchX=null;
function homeNavigate(page){homePage=Math.max(0,Math.min(2,page));const track=document.querySelector('#homePages');if(track)track.style.transform='translateX(-'+(homePage*100)+'%)';document.querySelectorAll('.home-nav-page').forEach((b,i)=>{b.classList.toggle('active',i===homePage);b.setAttribute('aria-current',i===homePage?'page':'false')})}
function homeTouchStart(e){homeTouchX=e.touches[0].clientX}
function homeTouchEnd(e){if(homeTouchX===null)return;let delta=e.changedTouches[0].clientX-homeTouchX;homeTouchX=null;if(Math.abs(delta)>55)homeNavigate(homePage+(delta<0?1:-1))}
function home(){ensureEconomy();let g=dailyFeatured(),gp=dailyProgress(),rn=save.roadLevel||1;state.roadNodes=roadBlock();let roadOpp=state.roadNodes[0].cpu,owned=Object.keys(save.roster).length,strongest=BASE.filter(x=>level(x.name)).sort((x,y)=>level(y.name)-level(x.name)||hpOf(y,level(y.name))-hpOf(x,level(x.name))||x.name.localeCompare(y.name))[0]||BASE[0],coinProgress=(save.coinMatches||0)%50,shopOffers=dailyShopOffers(),shopFeature=shopOffers.find(o=>o.copies===3&&o.cost===3)||shopOffers[0];shell(`<div class="home-shell home-v2"><div class="home-top"><span>WWE SUPERSTARS</span><small>v${APP_VERSION} · ${save.wins}W ${save.losses}L · ● ${save.coins}</small></div><div class="home-logo home-collage-logo">${logo()}</div><div class="home-pages-viewport" ontouchstart="homeTouchStart(event)" ontouchend="homeTouchEnd(event)"><div class="home-pages-track" id="homePages"><div class="home-page"><div class="home-page-grid"><button class="home-tile home-road home-tile-large" onclick="road()">${artImage(roadOpp.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>GLOBAL CIRCUIT · STAGE ${roadBand(rn)}</small><strong>WORLD<br>TOUR</strong><em>MATCH ${rn}</em></span></button><button class="home-tile home-exhibition" onclick="exhibitionMenu()">${artImage(BASE[Math.floor(Math.random()*BASE.length)].name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>QUICK PLAY</small><strong>EXHIBITION</strong><em>2 CARDS WIN · 1 LOSS</em></span></button><button class="home-tile home-shop" onclick="shop()">${artImage(shopFeature.w.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="shop-feature-coin" aria-label="Your coin balance">${coinIcon('coin-icon shop-feature-coin-face')}<span class="shop-feature-balance">${save.coins}</span></span><span class="tile-copy"><small>DAILY 3-COIN FEATURE</small><strong>SHOP</strong><em>${shopFeature.w.name} · ${shopFeature.cost} COINS</em></span></button></div></div><div class="home-page"><div class="home-page-grid"><button class="home-tile home-live home-tile-large" onclick="wweLive()">${artImage(liveMainEventBannerStar(),'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>DAILY REAL-WORLD SUPERCARD</small><strong>WWE LIVE</strong><em>REPLAY HISTORY · EARN DUPLICATES</em></span></button><button class="home-tile home-gauntlet home-tile-large" onclick="dailyGauntlet()">${artImage(g.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>DAILY FEATURE · ${gp}/5 WINS</small><strong>DAILY<br>GAUNTLET</strong><em>${g.name}</em></span></button><button class="home-tile home-collection" onclick="collection()">${artImage(strongest.name,'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>YOUR ROSTER</small><strong>MY SUPERSTARS</strong><em>${owned} OWNED</em></span></button><button class="home-tile home-stats" onclick="careerStats()">${artImage((careerLeaderboard()[0]?.w.name||strongest.name),'home-tile-art','eager')}<span class="tile-shade"></span><span class="tile-copy"><small>YOUR RECORD</small><strong>CAREER STATS</strong><em>${save.wins} WINS · ${save.losses} LOSSES</em></span></button></div></div><div class="home-page home-page-faction"><div class="home-page-grid"><button type="button" class="home-tile home-faction" onclick="openFactionWarfare(event)"><span class="home-faction-art-grid">${(save.factionWarfare&&save.factionWarfare.status!=="completed"&&Array.isArray(save.factionWarfare.members)&&save.factionWarfare.members.length===4?save.factionWarfare.members.map(n=>BASE.find(w=>w.name===n)).filter(Boolean):BASE.filter(w=>level(w.name)>0).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name)).slice(0,4)).map(w=>artImage(w.name,"home-faction-art","eager")).join("")}</span><span class="tile-shade"></span><span class="tile-copy"><small>4 SUPERSTARS · 3 TITLE DIVISIONS</small><strong>FACTION<br>WARFARE</strong><em>BUILD YOUR DYNASTY</em></span></button></div></div></div></div><nav class="home-page-rail" aria-label="Home pages"><button class="home-nav-page" onclick="homeNavigate(0)">PLAY</button><button class="home-nav-page" onclick="homeNavigate(1)">LIVE & COLLECTION</button><button class="home-nav-page" onclick="homeNavigate(2)">FACTION WARFARE</button></nav></div>`,'home-collage-screen');homeNavigate(homePage)}
const LIVE_EVENTS=[
{name:'WORLDS COLLIDE: CHICAGO',date:'SEPTEMBER 30, 2026',matches:[['La Parka','Mr. Iguana'],['Axiom',"Je'Von Evans"],['La Catalina','Roxanne Perez'],['Penta','Rey Fenix'],['El Grande Americano','Omos'],[['CM Punk','Rey Mysterio'],['Dominik Mysterio','JD McDonagh']]]},
{name:"SUNDAY NIGHT'S MAIN EVENT",date:'SEPTEMBER 6, 2026',matches:[['Dominik Mysterio','Joe Hendry'],['Trick Williams','Baron Corbin'],['Oba Femi','Bron Breakker'],[['Jade Cargill','Michin'],['Charlotte Flair','Alexa Bliss']],['Randy Orton','Cody Rhodes']]},
{name:'NXT HEATWAVE 2026',date:'AUGUST 30, 2026',matches:[['Jaida Parker','Nattie'],['Kelani Jordan','Kendal Grey'],["Tony D'Angelo",'Grayson Waller']]},
{name:'SUMMERSLAM 2026 — NIGHT 1',date:'AUGUST 1, 2026',matches:[['Liv Morgan','IYO SKY'],['Jacob Fatu','LA Knight'],[['Jimmy Uso','Jey Uso'],['Royce Keys','Solo Sikoa']],['Jacy Jayne','Paige'],[['Nikki Bella','Brie Bella'],['Fallon Henley','Lainey Reid']],['CM Punk','Cody Rhodes'],['Oba Femi','Brock Lesnar']]},
{name:'SUMMERSLAM 2026 — NIGHT 2',date:'AUGUST 2, 2026',matches:[['Baron Corbin','Trick Williams'],['Chad Gable','Penta'],['Kevin Owens','Sami Zayn'],['Finn Bálor','Gunther'],[['Chelsea Green','Tiffany Stratton'],['Jade Cargill','Lash Legend']],['Danhausen','Dominik Mysterio'],['Roman Reigns','Seth Rollins']]},
{name:"SATURDAY NIGHT'S MAIN EVENT XLV",date:'JULY 18, 2026',matches:[[['Fallon Henley','Lainey Reid'],['Paige','Brie Bella']],['Danhausen','JD McDonagh'],["Lyra Valkyria '26",'Bayley'],[['CM Punk','Cody Rhodes'],['Gunther','Sami Zayn']]]},
{name:'NXT GREAT AMERICAN BASH',date:'JUNE 28, 2026',matches:[["Tony D'Angelo",'Naraku'],['Tatum Paxley','Arianna Grace'],['Kendal Grey','Lola Vice']]},
{name:'NIGHT OF CHAMPIONS 2026',date:'JUNE 27, 2026',matches:[['Oba Femi','Jey Uso'],['IYO SKY','Liv Morgan'],['Trick Williams','Ricky Saints'],['Tiffany Stratton','Jade Cargill'],['Seth Rollins','Bron Breakker'],['Cody Rhodes','Sami Zayn']]},
{name:'CLASH IN ITALY',date:'MAY 31, 2026',matches:[['Cody Rhodes','Gunther'],['Rhea Ripley','Jade Cargill'],['Brock Lesnar','Oba Femi'],['Sol Ruca','Becky Lynch'],['Roman Reigns','Jacob Fatu']]},
{name:"SATURDAY NIGHT'S MAIN EVENT XLIV",date:'MAY 23, 2026',matches:[[['Charlotte Flair','Alexa Bliss'],['Jade Cargill','Michin']],['Sol Ruca','Becky Lynch'],['Penta','Ethan Page'],[['Paige','Brie Bella'],['Nia Jax','Lash Legend']],[['Logan Paul','Austin Theory'],['Montez Ford','Angelo Dawkins']]]},
{name:'BACKLASH 2026',date:'MAY 9, 2026',matches:[['Bron Breakker','Seth Rollins'],['Trick Williams','Sami Zayn'],[['Danhausen','Joe Hendry'],['The Miz','Kit Wilson']],['IYO SKY','Asuka'],['Roman Reigns','Jacob Fatu']]},
{name:'NXT VENGEANCE DAY 2026',date:'MARCH 7, 2026',matches:[['Blake Monroe','Jaida Parker'],["Tony D'Angelo",'Lexis King'],['Tatum Paxley','Izzi Dame'],['Lola Vice','Kelani Jordan'],['Joe Hendry','Ricky Saints']]},
{name:'WRESTLEMANIA 42 — NIGHT 2',date:'APRIL 19, 2026',matches:[['Oba Femi','Brock Lesnar'],['Penta','Rey Mysterio'],['Trick Williams','Sami Zayn'],['Finn Bálor','Dominik Mysterio'],['Rhea Ripley','Jade Cargill'],[['Danhausen','John Cena'],['The Miz','Kit Wilson']],['Roman Reigns','CM Punk']]},
{name:'WRESTLEMANIA 42 — NIGHT 1',date:'APRIL 18, 2026',matches:[[['Jey Uso','Jimmy Uso'],['Logan Paul','Austin Theory']],['Jacob Fatu','Drew McIntyre'],[['Brie Bella','Paige'],['Charlotte Flair','Alexa Bliss']],['Becky Lynch','AJ Lee'],['Gunther','Seth Rollins'],['Liv Morgan','Stephanie Vaquer'],['Cody Rhodes','Randy Orton']]},
{name:'ELIMINATION CHAMBER 2026',date:'FEBRUARY 28, 2026',matches:[[['Rhea Ripley','Alexa Bliss','Asuka'],['Tiffany Stratton','Kiana James','Raquel Rodriguez']],['AJ Lee','Becky Lynch'],['CM Punk','Finn Bálor'],[['Randy Orton','Cody Rhodes','LA Knight'],['Logan Paul','Trick Williams',"Je'Von Evans"]]]},
{name:'ROYAL RUMBLE 2026',date:'JANUARY 31, 2026',matches:[[['Liv Morgan','Tiffany Stratton','Sol Ruca','Raquel Rodriguez'],['Charlotte Flair','Alexa Bliss','Rhea Ripley','IYO SKY']],['Gunther','AJ Styles'],['Drew McIntyre','Sami Zayn'],[['Roman Reigns','Bron Breakker','Randy Orton','Logan Paul'],['Cody Rhodes','Brock Lesnar','Oba Femi','Jey Uso']]]},
{name:'NXT DEADLINE 2025',date:'DECEMBER 6, 2025',matches:[[['Kendal Grey','Sol Ruca','Lola Vice'],['Kelani Jordan','Jordynne Grace','Jaida Parker']],['Ethan Page','Mr. Iguana'],['Izzi Dame','Tatum Paxley'],[['Je\'Von Evans','Joe Hendry','Myles Borne'],['Trick Williams','Lexis King','Tony D\'Angelo']],['Oba Femi','Ricky Saints']]},
{name:'SURVIVOR SERIES: WARGAMES 2025',date:'NOVEMBER 29, 2025',matches:[[['Rhea Ripley','Alexa Bliss','Charlotte Flair','IYO SKY'],['Lash Legend','Asuka','Kairi Sane','Nia Jax']],['Becky Lynch','AJ Lee'],['Dominik Mysterio','John Cena'],['Stephanie Vaquer','Nikki Bella'],['CM Punk','Drew McIntyre'],[['Roman Reigns','Cody Rhodes','Jimmy Uso','Jey Uso'],['Brock Lesnar','Logan Paul','Bron Breakker','Bronson Reed']]]},
{name:"SATURDAY NIGHT'S MAIN EVENT XLI",date:'NOVEMBER 1, 2025',matches:[['Cody Rhodes','Drew McIntyre'],['Tiffany Stratton','Jade Cargill'],['Dominik Mysterio','Penta'],['CM Punk','Jey Uso']]},
{name:'NXT HALLOWEEN HAVOC 2025',date:'OCTOBER 25, 2025',matches:[['Tatum Paxley','Jacy Jayne'],['Ricky Saints','Trick Williams']]},
{name:'CROWN JEWEL 2025',date:'OCTOBER 11, 2025',matches:[['Stephanie Vaquer','Tiffany Stratton'],['John Cena','AJ Styles'],['Seth Rollins','Cody Rhodes']]}];
function liveToday(){let epoch=new Date(2026,9,8),now=new Date(),day=Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate())-epoch)/86400000);return LIVE_EVENTS[((day%LIVE_EVENTS.length)+LIVE_EVENTS.length)%LIVE_EVENTS.length]}
function liveMainEventBannerStar(){const e=liveToday(),m=e.matches[e.matches.length-1],sides=liveSides(m),names=sides.flat();return names.find(n=>BASE.some(w=>w.name===n))||'Cody Rhodes'}
function liveProgress(){let key=dailyKey()+'-'+liveToday().name;if(!save.liveProgress||save.liveProgress.key!==key){save.liveProgress={key,completed:[]};persist()}return save.liveProgress}
const LIVE_EVENT_LOGOS={
'ROYAL RUMBLE 2026':'https://www.wrestlingattitude.com/wp-content/uploads/2026/01/Royal_Rumble_Riyadh_Logo_2026.jpg',
'SUMMERSLAM 2026 — NIGHT 1':'https://assets.khelnow.com/news/uploads/2024/05/WWE-SummerSlam-2026.png',
'SUMMERSLAM 2026 — NIGHT 2':'https://assets.khelnow.com/news/uploads/2024/05/WWE-SummerSlam-2026.png',
'NXT HALLOWEEN HAVOC 2025':'https://www.wwe.com/f/styles/og_image/public/2025/10/NXT_Halloween_Havoc_Logo_2025.png',
'WORLDS COLLIDE: CHICAGO':'https://www.wwe.com/f/styles/og_image/public/2026/07/WWE_AAA_Worlds_Collide_2026_Logo_0.png',
'NIGHT OF CHAMPIONS 2026':'https://www.wwe.com/f/styles/og_image/public/2026/04/2026_Night_of_Champions_Logo.png',
'CLASH IN ITALY':'https://www.wwe.com/f/styles/og_image/public/2026/02/Clash_in_Italy_2026_Logo.png',
'NXT DEADLINE 2025':'https://corporate.wwe.com/f/inline-images/nxt-deadline-sanantonion-logo.png',
'SUNDAY NIGHT\'S MAIN EVENT':'https://assets.khelnow.com/news/uploads/2026/09/WWE-Sunday-Nights-Main-Event-September-2026-X%40WWE.png',
'SURVIVOR SERIES: WARGAMES 2025':'https://images2.minutemediacdn.com/image/upload/c_fill%2Cw_1200%2Car_1%3A1%2Cf_auto%2Cq_auto%2Cg_auto/images/voltaxMediaLibrary/mmsport/wrestling_on_fannation/01jz0syq76r2qb5tb8pj.jpg',
'BACKLASH 2026':'https://commons.wikimedia.org/wiki/Special:FilePath/Backlash_2026.png',
'WRESTLEMANIA 42':'https://commons.wikimedia.org/wiki/Special:FilePath/Djxug13-98d10349-5c16-4c75-806c-aef3a811753e.png',
'CROWN JEWEL 2025':'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_Jewel_2025_logo.png',
'SATURDAY NIGHT\'S MAIN EVENT XLV':'https://commons.wikimedia.org/wiki/Special:FilePath/Saturday_Nights_Main_Event_Logo_2006.png',
'SATURDAY NIGHT\'S MAIN EVENT XLIV':'https://commons.wikimedia.org/wiki/Special:FilePath/Saturday_Nights_Main_Event_Logo_2006.png',
'SATURDAY NIGHT\'S MAIN EVENT XLI':'https://commons.wikimedia.org/wiki/Special:FilePath/Saturday_Nights_Main_Event_Logo_2006.png',
'NXT GREAT AMERICAN BASH':'https://commons.wikimedia.org/wiki/Special:FilePath/NXT_The_Great_American_Bash_logo_2022.png',
'NXT VENGEANCE DAY 2026':'https://commons.wikimedia.org/wiki/Special:FilePath/Nxt_vengeance_day_2022_logo.jpg',
'ELIMINATION CHAMBER 2026':'https://commons.wikimedia.org/wiki/Special:FilePath/WWE_Elimination_Chamber_logo%2C_2015_-_present.png',
'NXT HEATWAVE 2026':'https://commons.wikimedia.org/wiki/Special:FilePath/WWE_NXT_2024_Logo.svg',
'WRESTLEMANIA 42 — NIGHT 1':'https://commons.wikimedia.org/wiki/Special:FilePath/Djxug13-98d10349-5c16-4c75-806c-aef3a811753e.png',
'WRESTLEMANIA 42 — NIGHT 2':'https://commons.wikimedia.org/wiki/Special:FilePath/Djxug13-98d10349-5c16-4c75-806c-aef3a811753e.png'
};
function liveEventHeading(e){let url=LIVE_EVENT_LOGOS[e.name];return url?'<div class="live-event-logo"><img src="'+url+'" alt="'+e.name+'" loading="eager" onerror="this.parentNode.classList.add(\'logo-failed\')"><span>'+e.name+'</span></div>':'<div class="live-event-wordmark live-event-wordmark--'+(e.name.includes('SUMMERSLAM')?'summer':e.name.includes('ROYAL RUMBLE')?'rumble':e.name.includes('WORLDS COLLIDE')?'collide':e.name.includes('CHAMPIONS')?'champions':e.name.includes('SURVIVOR SERIES')?'wargames':e.name.includes('HALLOWEEN')?'halloween':e.name.includes('DEADLINE')?'deadline':e.name.includes('CLASH')?'clash':'main-event')+'"><span>'+e.name.replace(' — ','<br>')+'</span></div>'}
function liveSides(m){return Array.isArray(m[0])?[m[0],m[1]]:[[m[0]],[m[1]]]}
function liveSideOwned(side){return side.every(n=>level(n)>0)}
function wweLive(){let e=liveToday(),progress=liveProgress();shell(`<div class="topbar"><button onclick="home()">‹ HOME</button><span>WWE LIVE</span></div><div class="live-heading"><div class="kicker">TODAY'S SUPERCARD · ${e.date}</div>${liveEventHeading(e)}<div class="sub">${progress.completed.length}/${e.matches.length} COMPLETE · RESET ${shopResetRemaining()}</div></div><div class="live-matches">${e.matches.map((m,i)=>{let sides=liveSides(m),owned=sides.some(liveSideOwned),done=progress.completed.includes(i);return `<div class="live-match"><div class="live-match-number">${i===e.matches.length-1?'MAIN EVENT':'MATCH '+(i+1)}</div><div class="live-matchup"><div>${sides[0].map(n=>artImage(n,'live-portrait','lazy')).join('')}<b>${sides[0].join(' & ')}</b></div><strong>VS</strong><div>${sides[1].map(n=>artImage(n,'live-portrait','lazy')).join('')}<b>${sides[1].join(' & ')}</b></div></div><button class="live-play-button" ${done||!owned?'disabled':''} onclick="beginLive(${i})">${done?'COMPLETED':owned?'PLAY':sides.map(side=>side.join(' & ')).join(' OR ')+' REQUIRED'}</button></div>`}).reverse().join('')}</div>`,'live-screen')}
function beginLive(i){let e=liveToday(),m=e.matches[i],progress=liveProgress();if(!m||progress.completed.includes(i))return wweLive();let sides=liveSides(m),available=sides.map(liveSideOwned);if(!available.some(Boolean))return wweLive();if(available[0]&&available[1]){shell(`<div class="topbar"><button onclick="wweLive()">‹ WWE LIVE</button><span>CHOOSE YOUR SIDE</span></div><div class="live-heading"><div class="title">${e.name}</div><div class="sub">SELECT THE SUPERSTAR OR TEAM YOU WANT TO PLAY</div></div><div class="live-side-choices">${sides.map((side,j)=>`<button type="button" class="live-side-choice live-side-choice--safe" onclick="startLiveSide(${i},${j})"><div class="live-side-art live-side-art--contained">${side.map(n=>artImage(n,'live-side-portrait','eager')).join('')}</div><strong class="live-side-choice-name">${side.join(' & ')}</strong><span>PLAY AS THIS SIDE ›</span></button>`).join('')}</div><button type="button" class="live-play-button" onclick="wweLive()">BACK TO MATCHES</button>`,'live-screen');return}startLiveSide(i,available[0]?0:1)}
function startLiveSide(i,side){let e=liveToday(),progress=liveProgress(),m=e.matches[i];if(!m||progress.completed.includes(i))return wweLive();let sides=liveSides(m),chosen=sides[side],enemy=sides[1-side];if(!chosen||!liveSideOwned(chosen))return wweLive();let p=BASE.find(x=>x.name===chosen[0]),cpu=BASE.find(x=>x.name===enemy[0]);if(!p||!cpu)return wweLive();let pl=level(p.name),cl=pl,b={p,cpu,pl,cl,php:hpOf(p,pl),chp:hpOf(cpu,cl),pmax:hpOf(p,pl),cmax:hpOf(cpu,cl),avail:KEYS.map(x=>x[0]),live:true,liveIndex:i,liveKey:progress.key,log:'WWE LIVE · '+e.name};if(chosen.length>2){b.multi=true;b.tag=true;b.teams={p:chosen.map(n=>{let w=BASE.find(x=>x.name===n),l=level(n);return{w,l,hp:hpOf(w,l),max:hpOf(w,l)}}),c:enemy.map(n=>{let w=BASE.find(x=>x.name===n),l=pl;return{w,l,hp:hpOf(w,l),max:hpOf(w,l)}})};if(b.teams.p.some(x=>!x.w)||b.teams.c.some(x=>!x.w))return wweLive()}else if(chosen.length===2){let p2=BASE.find(x=>x.name===chosen[1]),cpu2=BASE.find(x=>x.name===enemy[1]);if(!p2||!cpu2)return wweLive();let pl2=level(p2.name),cl2=pl2;Object.assign(b,{p2,cpu2,pl2,cl2,p2hp:hpOf(p2,pl2),c2hp:hpOf(cpu2,cl2),p2max:hpOf(p2,pl2),c2max:hpOf(cpu2,cl2),tag:true})}state.b=b;preloadMatchMedia(p,cpu);battle()}
function multiSync(b){for(let side of ['p','c']){let a=b.teams[side][0];if(side==='p'){b.p=a.w;b.pl=a.l;b.php=a.hp;b.pmax=a.max}else{b.cpu=a.w;b.cl=a.l;b.chp=a.hp;b.cmax=a.max}}}
function multiStore(b){b.teams.p[0].hp=b.php;b.teams.c[0].hp=b.chp}
function multiSwap(b,side,index){let t=b.teams[side];if(index<=0||index>=t.length||t[index].hp<=0)return false;[t[0],t[index]]=[t[index],t[0]];multiSync(b);if(side==='p'){b.pBoost=null;reloadTagActions(b,'p')}else{b.cBoost=null;reloadTagActions(b,'c')}return true}
function multiChooseTag(index){return false}
function claimLiveReward(){let b=state.b,p=liveProgress();if(!b?.live||!b.ended||b.matchWon!==true||b.liveKey!==p.key||p.completed.includes(b.liveIndex))return wweLive();let w=b.p,old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);p.completed.push(b.liveIndex);persist();return duplicateUpgrade(w,old,neu,'wweLive()','WWE LIVE · '+liveToday().name)}
function collectionSortValue(){return localStorage.getItem('wweCollectionSort')||'level'}
function collectionViewValue(){return localStorage.getItem('wweCollectionView')||'gallery'}
function setCollectionSort(v){localStorage.setItem('wweCollectionSort',v);collection(false)}
function setCollectionView(v){localStorage.setItem('wweCollectionView',v);collection(false)}
function collection(resetScroll=true){let o=BASE.filter(x=>level(x.name)),sort=collectionSortValue(),view=collectionViewValue(),sorters={level:(a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name),name:(a,b)=>a.name.localeCompare(b.name),hp:(a,b)=>hpOf(b,level(b.name))-hpOf(a,level(a.name))||level(b.name)-level(a.name)||a.name.localeCompare(b.name),newest:(a,b)=>BASE.indexOf(b)-BASE.indexOf(a)};o.sort(sorters[sort]||sorters.level);let items=o.map(x=>{let l=level(x.name);if(view==='list')return `<button class="collection-list-item" onclick="openCard('${x.name.replaceAll("'","\\'")}',${l})">${artImage(x.name,'collection-list-art','lazy')}<span class="collection-list-copy"><strong class="${superstarFontClass(x)}">${x.name}</strong><small>LEVEL ${l} · HP ${hpOf(x,l)}</small></span><span class="collection-list-arrow">›</span></button>`;return `<div onclick="openCard('${x.name.replaceAll("'","\\'")}',${l})">${card(x,l,'','lazy')}</div>`}).join('');shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>${o.length} OWNED</span></div><div class="collection-heading"><div class="title">My Superstars</div><div class="collection-controls"><label>SORT <select onchange="setCollectionSort(this.value)"><option value="level" ${sort==='level'?'selected':''}>LEVEL</option><option value="name" ${sort==='name'?'selected':''}>NAME</option><option value="hp" ${sort==='hp'?'selected':''}>HP</option><option value="newest" ${sort==='newest'?'selected':''}>NEWEST</option></select></label><div class="collection-view-toggle"><button class="${view==='gallery'?'active':''}" onclick="setCollectionView('gallery')" aria-label="Gallery view">▦</button><button class="${view==='list'?'active':''}" onclick="setCollectionView('list')" aria-label="List view">☰</button></div></div></div><div class="${view==='list'?'collection-list':'cards collection-gallery'}">${items}</div>`);if(resetScroll)requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'}))}
function careerLeaderboard(){return BASE.filter(x=>level(x.name)).map(w=>({w,...recordStats(w.name)})).sort((a,b)=>b.games-a.games||b.wins-a.wins||a.w.name.localeCompare(b.w.name))}
function careerStats(){let o=careerLeaderboard();shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>CAREER STATS</span></div><div class="career-head"><div><div class="kicker">YOUR WWE SUPERSTARS</div><div class="title">Career Stats</div></div><div class="career-total"><b>${save.wins}</b><span>WINS</span><i>${save.losses}</i><span>LOSSES</span></div></div><div class="record-list">${o.map((x,i)=>`<div class="record-row"><div class="record-portrait">${artImage(x.w.name,'','lazy')}</div><div class="record-name"><small>#${String(i+1).padStart(2,'0')} · LVL ${level(x.w.name)}</small><b>${x.w.name}</b><em>${x.games} MATCHES</em></div><div class="record-numbers"><b>${x.wins}<i>–</i>${x.losses}</b><strong>${x.pct}%</strong><small>${x.streak>0?'W'+x.streak:x.streak<0?'L'+Math.abs(x.streak):'—'} STREAK</small></div></div>`).join('')}</div>`,'stats-screen')}

function dailyKey(){let d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+day}
function dailyFeaturedFor(key,pool=BASE){let seed=[...key].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7);return pool[seed%pool.length]}
function dailyFeatured(){let d=ensureDaily(),w=BASE.find(x=>x.name===d.featured);return w||dailyFeaturedFor(d.date)}
function dailyProgress(){return save?.dailyGauntlet?.date===dailyKey()?Math.min(5,save.dailyGauntlet.wins||0):0}
function ensureDaily(){let k=dailyKey();if(!save.dailyGauntlet||save.dailyGauntlet.date!==k){let w=dailyFeaturedFor(k);save.dailyGauntlet={date:k,wins:0,featured:w.name}}else if(!save.dailyGauntlet.featured){let legacyPool=BASE.slice(0,166),w=(save.dailyGauntlet.wins||0)>0?dailyFeaturedFor(k,legacyPool):dailyFeaturedFor(k);save.dailyGauntlet.featured=w.name}return save.dailyGauntlet}
function dailyGauntlet(){let d=ensureDaily(),w=dailyFeatured(),done=d.wins>=5,stage=Math.min(5,d.wins+1);persist();shell(`<div class="gauntlet-backdrop">${artImage(w.name,'gauntlet-bg','eager')}</div><div class="topbar gauntlet-top"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY GAUNTLET</span></div><div class="gauntlet-kicker">TODAY'S FEATURED SUPERSTAR</div><div class="title gauntlet-title">${w.name}</div><div class="gauntlet-progress">${[1,2,3,4,5].map(i=>`<span class="${i<=d.wins?'won':i===stage&&!done?'current':''}">${i<=d.wins?'✓':i}</span>`).join('')}</div><div class="hero finish gauntlet-hero"><div class="cards gauntlet-card-wrap">${card(w,Math.max(1,stage))}</div><div class="gauntlet-copy"><strong>${done?'GAUNTLET COMPLETE':'MATCH '+stage+' OF 5'}</strong><div class="sub">${done?'NEXT DAILY RESET · <b id="gauntletResetClock">'+shopResetRemaining()+'</b>':'Win to earn one '+w.name+' copy. Losses do not consume an attempt.'}</div>${done?'<button class="btn secondary" onclick="home()">RETURN HOME</button>':'<button class="btn" onclick="selectGauntletFighter()">PLAY MATCH '+stage+' OF 5</button>'}</div></div>`,'gauntlet-screen');if(done)startGauntletClock()}
function startGauntletClock(){if(shopClockTimer)clearInterval(shopClockTimer);let tick=()=>{let el=document.querySelector('#gauntletResetClock');if(!el){clearInterval(shopClockTimer);shopClockTimer=null;return}if(ensureDaily().date!==dailyKey()){clearInterval(shopClockTimer);shopClockTimer=null;return dailyGauntlet()}el.textContent=shopResetRemaining()};tick();shopClockTimer=setInterval(tick,1000)}
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
function roadSeed(n,salt=0){let x=Math.imul((n+1)^(salt+0x9e3779b9),0x85ebca6b);x^=x>>>13;x=Math.imul(x,0xc2b2ae35);x^=x>>>16;return (x>>>0)/4294967296}
function roadBand(n){return 1+Math.floor((n-1)/15)}
function roadEligibleRequirements(n){
 let owned=BASE.filter(w=>level(w.name)),all=[...new Set(BASE.flatMap(w=>w.tags||[]))],band=roadBand(n);
 return all.filter(t=>{
   let rosterCount=BASE.filter(w=>hasTag(w,t)).length,ownedCount=owned.filter(w=>hasTag(w,t)).length;
   let broad=ROAD_BROAD_TAGS.includes(t),minRoster=broad?3:3,minOwned=band<=1?1:2;
   return rosterCount>=minRoster&&ownedCount>=minOwned;
 });
}
function roadBlock(){let n=save.roadLevel||1;if(save.roadQueueVersion!==2){save.roadQueue={};save.roadQueueVersion=2}if(!save.roadQueue)save.roadQueue={};let nodes=[];for(let i=0;i<3;i++){let match=n+i,key=String(match),node=save.roadQueue[key];if(!node){let exclude=nodes.map(x=>x.mod.id);node=roadNode(match,exclude);save.roadQueue[key]=node}nodes.push(node)}for(let key of Object.keys(save.roadQueue)){if(+key<n-3)delete save.roadQueue[key]}save.roadNodes=nodes;state.roadNodes=nodes;persist();return nodes}
function roadNode(n,excludeMods=[]){
 let band=roadBand(n),seed=roadSeed(n),allMods=ROAD_MODS.slice(0,Math.min(ROAD_MODS.length,6+band*2)),mods=allMods.filter(m=>!excludeMods.includes(m.id));if(!mods.length)mods=allMods;let mod=mods[Math.floor(seed*mods.length)],pool=[...KEYS.map(x=>x[0])],blocked=null;
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
'London':'Big Ben London Eye Tower Bridge skyline','Manchester':'Manchester England skyline','Glasgow':'Glasgow Scotland city skyline','Dublin':'Dublin Ireland River Liffey skyline','Paris':'Eiffel Tower Paris skyline','Berlin':'Brandenburg Gate Berlin skyline','Munich':'Munich Frauenkirche skyline','Rome':'Colosseum Rome skyline','Milan':'Milan Cathedral Duomo skyline','Madrid':'Madrid Gran Via skyline','Barcelona':'Sagrada Familia Barcelona skyline','Amsterdam':'Amsterdam Netherlands canal houses canal bridge cityscape','Brussels':'Grand Place Brussels skyline','Vienna':'Vienna St Stephens Cathedral skyline','Prague':'Prague Castle Charles Bridge skyline','Athens':'Acropolis Athens skyline','Stockholm':'Stockholm old town skyline','Oslo':'Oslo Opera House skyline','Copenhagen':'Copenhagen Nyhavn skyline','Helsinki':'Helsinki Cathedral skyline','Warsaw':'Warsaw skyline Palace of Culture',
'Toronto':'CN Tower Toronto skyline','Montreal':'Montreal skyline Mount Royal','Vancouver':'Vancouver skyline mountains harbor','Mexico City':'Mexico City Palacio Bellas Artes skyline','Monterrey':'Monterrey skyline Cerro de la Silla','Buenos Aires':'Buenos Aires Obelisk skyline','Rio de Janeiro':'Christ the Redeemer Rio skyline Sugarloaf','Sao Paulo':'Sao Paulo skyline Paulista','Santiago':'Skyline of Santiago Chile Andes cityscape','Lima':'Lima Peru skyline coast',
'Tokyo':'Tokyo Tower Mount Fuji skyline','Osaka':'Osaka Castle skyline','Seoul':'N Seoul Tower skyline','Beijing':'Forbidden City Beijing skyline','Shanghai':'Shanghai Pudong skyline Oriental Pearl','Hong Kong':'Hong Kong Victoria Harbour skyline','Singapore':'Marina Bay Sands Singapore skyline','Bangkok':'Bangkok Wat Arun skyline','Manila':'Manila skyline bay Philippines','Mumbai':'Gateway of India Mumbai skyline','New Delhi':'India Gate New Delhi','Dubai':'Burj Khalifa Dubai skyline','Abu Dhabi':'Sheikh Zayed Grand Mosque Abu Dhabi skyline',
'Sydney':'Sydney Opera House Harbour Bridge skyline','Melbourne':'Melbourne skyline Yarra River','Brisbane':'Brisbane skyline river Story Bridge','Perth':'Perth skyline Swan River','Auckland':'Auckland Sky Tower skyline','Cape Town':'Cape Town Table Mountain skyline','Johannesburg':'Johannesburg skyline South Africa'};
async function roadCityPhoto(city){if(roadPhotoCache[city])return roadPhotoCache[city];let cacheKey=roadPhotoKey(city)+':landmark4',saved=localStorage.getItem(cacheKey);if(saved){roadPhotoCache[city]=saved;return saved}try{let place=city.split(',')[0],q=CITY_LANDMARKS[place]||place+' iconic landmark skyline',u='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch='+encodeURIComponent(q)+'&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*',r=await fetch(u,{cache:'force-cache'}),j=await r.json(),pages=Object.values(j.query?.pages||{}).filter(p=>p.imageinfo?.[0]?.thumburl&&!/logo|flag|map|icon|seal|diagram|coat of arms|poster|newspaper|article|page|book|text|document|manuscript|journal|magazine|wiki/i.test(p.title));let scored=pages.map(p=>{let title=p.title.toLowerCase(),words=q.toLowerCase().split(/\s+/),score=words.reduce((n,w)=>n+(w.length>3&&title.includes(w)?1:0),0);return {p,score}}).sort((x,y)=>y.score-x.score),url=scored[0]?.p.imageinfo?.[0]?.thumburl||'';if(url){roadPhotoCache[city]=url;try{localStorage.setItem(cacheKey,url)}catch(e){}}return url}catch(e){return ''}}
async function loadExhibitionPhoto(city){let el=document.querySelector('.exhibition-backdrop[data-exhibition-city]');if(!el)return;let url=roadPhotoCache[city]||localStorage.getItem(roadPhotoKey(city)+':landmark4')||await roadCityPhoto(city);if(!url||!el.isConnected)return;let img=new Image();img.decoding='async';img.onload=()=>{if(el.isConnected){let safe='url("'+url.replaceAll('"','%22')+'")';el.style.backgroundImage=safe;el.style.setProperty('--exhibition-city-image',safe);let event=document.querySelector('.exhibition-event'),photo=document.querySelector('.exhibition-city-photo');if(photo){photo.style.backgroundImage=safe;photo.classList.add('loaded')}if(event)event.classList.add('has-city-photo');el.classList.add('loaded')}};img.src=url}
function applyRoadPhoto(el,url){if(!url)return;let img=new Image();img.decoding='async';img.onload=()=>{if(el.isConnected){el.style.setProperty('--road-city-image',`url("${url.replaceAll('"','%22')}")`);el.classList.add('has-city-photo')}};img.src=url}
async function loadRoadCityPhotos(){let els=[...document.querySelectorAll('.road-destination[data-road-city]')];els.forEach(el=>{let city=el.dataset.roadCity,saved=roadPhotoCache[city]||localStorage.getItem(roadPhotoKey(city)+':landmark4');if(saved){roadPhotoCache[city]=saved;applyRoadPhoto(el,saved)}else roadCityPhoto(city).then(url=>applyRoadPhoto(el,url))});let n=save.roadLevel||1;for(let i=3;i<9;i++){let city=roadNode(n+i).city;if(!roadPhotoCache[city]&&!localStorage.getItem(roadPhotoKey(city)+':landmark4'))roadCityPhoto(city)}}
function road(){if(!save.roadLevel)save.roadLevel=1;persist();let n=save.roadLevel,nodes=roadBlock(),band=roadBand(n),blockStart=n,blockEnd=n+2;state.roadNodes=nodes;shell(`<div class="road-hero"><button class="road-back" onclick="home()">‹</button><div class="road-brand"><div class="road-brand-small">WWE SUPERSTARS</div><div class="road-brand-title">WORLD TOUR</div></div><div class="road-stage">STAGE ${band}<small>MATCH ${blockStart} - ${blockEnd}</small></div></div><div class="road-destinations">${nodes.map((x,i)=>{let cl=x.band,max=hpOf(x.cpu,cl),start=max;if(x.mod.id==='iron')max=Math.round(max*1.25);if(x.mod.id==='glass')max=Math.round(max*.7);start=max;if(x.mod.id==='opening')start=Math.round(max*.75);let parts=x.city.split(','),place=parts[0],country=parts.slice(1).join(',').trim(),side=i%2?'right':'left';return `<section class="road-destination ${side} ${i?'future':'current'}" data-road-city="${x.city.replaceAll('"','&quot;')}"><div class="road-destination-shade"></div><div class="road-copy"><div class="road-place">${place}</div><div class="road-country">${country}</div><div class="road-match">MATCH ${x.n} · LEVEL ${x.band} · ${x.matchType==='tag'?'2 VS 2 TAG TEAM':'1 VS 1'}</div><div class="road-rule">${x.mod.name}</div><div class="road-desc">${(x.eligibleTag?'ENTRY: '+x.eligibleTag.toUpperCase()+' · ':'OPEN ENTRY · ')+x.mod.desc}</div></div><div class="road-fighter"><div class="road-badge">${x.n}</div><div class="road-card-wrap">${card(x.cpu,cl,'road-mini-card')}</div></div>${i===0?'<button class="btn road-play" onclick="selectRoadFighter()">PLAY MATCH</button>':''}</section>`}).join('')}</div>`,'road-screen');loadRoadCityPhotos()}

function ownedForNode(node){return BASE.filter(x=>level(x.name)&&(!node.eligibleTag||hasTag(x,node.eligibleTag))).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name))}
function selectRoadFighter(){let rn=save.roadLevel||1,node=state.roadNodes?.find(x=>x.n===rn)||roadNode(rn);state.activeRoadNode=node;let o=ownedForNode(node),tag=node.matchType==='tag';state.tagPick1=null;shell('<div class="topbar"><button onclick="road()" style="background:none;border:0">‹ ROAD</button><span>WORLD TOUR · MATCH '+node.n+'</span></div><div class="title">'+(tag?'Choose First Superstar':'Choose Superstar')+'</div><div class="sub">'+(tag?'2 VS 2 TAG TEAM · ':'')+(node.eligibleTag?'ENTRY: '+node.eligibleTag.toUpperCase():'OPEN ENTRY')+' · '+node.mod.name+' · '+node.cpu.name+(tag&&node.cpu2?' & '+node.cpu2.name:'')+' LVL '+node.band+'</div><div class="cards select">'+o.map(x=>'<div onclick="'+(tag?"pickRoadTag1('"+x.name.replaceAll("'","\\'")+"')":"beginRoad('"+x.name.replaceAll("'","\\'")+"')")+'">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>')}
function pickRoadTag1(n){state.tagPick1=n;let node=state.activeRoadNode,o=ownedForNode(node).filter(x=>x.name!==n);shell('<div class="topbar"><button onclick="selectRoadFighter()" style="background:none;border:0">‹ BACK</button><span>WORLD TOUR · TAG TEAM</span></div><div class="title">Choose Partner</div><div class="sub">'+n.toUpperCase()+' · SELECT TAG TEAM PARTNER</div><div class="cards select">'+o.map(x=>'<div onclick="beginRoadTag(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>')}
function roadHp(w,l,node){let m=hpOf(w,l);if(node.mod.id==='iron')m=Math.round(m*1.25);if(node.mod.id==='glass')m=Math.round(m*.7);return m}
function roadStartHp(max,node){return node.mod.id==='opening'?Math.round(max*.75):max}
function beginRoad(n){let rn=save.roadLevel||1,node=state.activeRoadNode&&state.activeRoadNode.n===rn?state.activeRoadNode:(state.roadNodes?.find(x=>x.n===rn)||roadNode(rn)),p=BASE.find(x=>x.name===n);if(!p||!level(n)||node.eligibleTag&&!hasTag(p,node.eligibleTag))return selectRoadFighter();let pl=level(n),cl=node.band,pmax=roadHp(p,pl,node),cmax=roadHp(node.cpu,cl,node),php=roadStartHp(pmax,node),chp=roadStartHp(cmax,node);state.b={p,cpu:node.cpu,pl,cl,php,chp,pmax,cmax,avail:[...node.pool],road:true,node,log:(node.eligibleTag?node.eligibleTag.toUpperCase()+' · ':'')+node.mod.name+' · Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
function beginRoadTag(n2){let node=state.activeRoadNode,n1=state.tagPick1,p=BASE.find(x=>x.name===n1),p2=BASE.find(x=>x.name===n2);if(!p||!p2||p===p2)return selectRoadFighter();let pl=level(n1),pl2=level(n2),cl=node.band,cpu2=node.cpu2||BASE.find(x=>x.name!==node.cpu.name),pmax=roadHp(p,pl,node),p2max=roadHp(p2,pl2,node),cmax=roadHp(node.cpu,cl,node),c2max=roadHp(cpu2,cl,node);state.b={p,p2,cpu:node.cpu,cpu2,pl,pl2,cl,cl2:cl,php:roadStartHp(pmax,node),p2hp:roadStartHp(p2max,node),chp:roadStartHp(cmax,node),c2hp:roadStartHp(c2max,node),pmax,p2max,cmax,c2max,avail:[...node.pool],road:true,tag:true,node,log:node.mod.name+' · TAG TEAM · Choose your attack.'};preloadMatchMedia(p,p2,node.cpu,cpu2);battle()}

function selectMultiFighter(size){state.multiSize=size;state.multiPicks=[];pickMultiFighter()}
function pickMultiFighter(){let size=state.multiSize,picks=state.multiPicks,o=exhibitionRoster().filter(w=>!picks.includes(w.name));shell('<div class="topbar"><button onclick="exhibitionMenu()">‹ EXHIBITION</button><span>'+size+' VS '+size+'</span></div><div class="title">Choose Superstar '+(picks.length+1)+' of '+size+'</div><div class="sub">'+picks.join(' & ')+'</div>'+exhibitionFilterBar()+'<div class="cards select exhibition-roster">'+o.map(w=>'<div data-tags="'+exhibitionTags(w)+'" onclick="addMultiFighter('+JSON.stringify(w.name).replaceAll('"','&quot;')+')">'+card(w,level(w.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen')}
function addMultiFighter(n){if(state.multiPicks.includes(n)||!level(n))return;state.multiPicks.push(n);if(state.multiPicks.length<state.multiSize)return pickMultiFighter();let chosen=state.multiPicks,opp=BASE.filter(w=>!chosen.includes(w.name)).sort(()=>Math.random()-.5).slice(0,chosen.length),mk=(w,l)=>({w,l,hp:hpOf(w,l),max:hpOf(w,l)}),p=chosen.map(n=>{let w=BASE.find(x=>x.name===n);return mk(w,level(n))}),c=opp.map((w,i)=>mk(w,p[i].l));let b={multi:true,tag:true,teams:{p,c},avail:KEYS.map(x=>x[0]),log:'ELIMINATION TAG · Choose your attack.'};multiSync(b);state.b=b;preloadMatchMedia([...chosen.map(n=>BASE.find(w=>w.name===n)),...opp]);battle()}
function exhibitionMenu(){shell('<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>EXHIBITION</span></div><div class="matchtype-logo">'+logo()+'</div><div class="matchtype-menu"><div class="kicker">CHOOSE MATCH TYPE</div><button class="matchtype-card" onclick="selectFighter()"><b>1 VS 1</b><span>SINGLES MATCH</span><small>CLASSIC WWE SUPERSTARS MATCH</small></button><button class="matchtype-card" onclick="selectTagFighter()"><b>2 VS 2</b><span>TAG TEAM MATCH</span><small>TAG OUT TO SURVIVE · FIRST SUPERSTAR TO 0 HP LOSES</small></button><button class="matchtype-card" onclick="selectMultiFighter(3)"><b>3 VS 3</b><span>ELIMINATION TAG</span></button><button class="matchtype-card" onclick="selectMultiFighter(4)"><b>4 VS 4</b><span>ELIMINATION TAG</span></button></div>','exhibition-screen exhibition-menu-screen')}
function exhibitionFilterBar(){return '<div class="exhibition-filter-heading"><div class="exhibition-filter-title">FILTER SUPERSTARS</div><div class="exhibition-filters"><label>GENDER <select aria-label="Filter gender" onchange="applyExhibitionFilters()"><option value="">ALL</option><option>Male</option><option>Female</option></select></label><label>BRAND <select aria-label="Filter brand" onchange="applyExhibitionFilters()"><option value="">ALL</option><option>RAW</option><option>SmackDown</option><option>NXT</option></select></label><label>ERA <select aria-label="Filter era" onchange="applyExhibitionFilters()"><option value="">ALL</option><option>Current Era</option><option>Attitude Era</option><option>Ruthless Aggression Era</option><option>Reality Era</option><option>PG Era</option><option>Golden Era</option><option>Legend</option></select></label></div></div><div class="exhibition-filter-count" id="exhibitionFilterCount"></div>'}
function exhibitionTags(w){let tags=[...(w.tags||[])];if(tags.includes('NXT')&&!tags.some(t=>/Era$/.test(t)))tags.push('Current Era');if(tags.includes('Ruthless Aggression'))tags.push('Ruthless Aggression Era');return tags.join('|').toLowerCase()}
function applyExhibitionFilters(){let filters=[...document.querySelectorAll('.exhibition-filters select')].map(s=>s.value.toLowerCase()).filter(Boolean),cards=[...document.querySelectorAll('.exhibition-roster > div[data-tags]')],shown=0;for(let card of cards){let ok=filters.every(v=>card.dataset.tags.split('|').includes(v));card.style.display=ok?'':'none';if(ok)shown++}let el=document.getElementById('exhibitionFilterCount');if(el)el.textContent=shown+' SUPERSTARS'+(shown?'':' · TRY ANOTHER FILTER')}
function exhibitionRosterCards(o,action){return o.map(w=>'<div data-tags="'+exhibitionTags(w)+'" onclick="'+action(w)+'">'+card(w,level(w.name),'','lazy')+'</div>').join('')}
function exhibitionRoster(){return BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name))}
function selectFighter(){let o=exhibitionRoster(),city=ROAD_CITIES[Math.floor(Math.random()*ROAD_CITIES.length)];state.exhibitionCity=city;shell('<div class="exhibition-backdrop" data-exhibition-city="'+city+'"></div><div class="topbar exhibition-top"><button onclick="exhibitionMenu()" style="background:none;border:0">‹ EXHIBITION</button><span>1 VS 1</span></div><div class="exhibition-event"><div class="exhibition-city-photo" aria-hidden="true"></div><div class="kicker">WWE SUPERSTARS · LIVE</div><div class="title">'+city.split(',')[0]+'</div><div class="sub">ONE NIGHT · RANDOM OPPONENT · WIN A SUPERSTAR</div></div><div class="title exhibition-choose">Choose Superstar</div>'+exhibitionFilterBar()+'<div class="cards select exhibition-roster">'+o.map(x=>'<div data-tags="'+exhibitionTags(x)+'" onclick="begin(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen');loadExhibitionPhoto(city)}
function begin(n){let p=BASE.find(x=>x.name===n),pool=BASE.filter(x=>x.name!==n),cpu=pool[Math.floor(Math.random()*pool.length)],pl=level(n),cl=pl;state.b={p,cpu,pl,cl,php:hpOf(p,pl),chp:hpOf(cpu,cl),pmax:hpOf(p,pl),cmax:hpOf(cpu,cl),avail:KEYS.map(x=>x[0]),exhibitionCity:state.exhibitionCity||'',log:(state.exhibitionCity?state.exhibitionCity.toUpperCase()+' · ':'')+'Choose your attack.'};preloadMatchMedia(state.b.p,state.b.cpu);battle()}
function selectTagFighter(){let o=exhibitionRoster(),city=ROAD_CITIES[Math.floor(Math.random()*ROAD_CITIES.length)];state.exhibitionCity=city;state.tagPick1=null;shell('<div class="exhibition-backdrop" data-exhibition-city="'+city+'"></div><div class="topbar exhibition-top"><button onclick="exhibitionMenu()" style="background:none;border:0">‹ EXHIBITION</button><span>2 VS 2 · TAG TEAM</span></div><div class="title exhibition-choose">Choose First Superstar</div><div class="sub">SELECT YOUR ACTIVE SUPERSTAR</div>'+exhibitionFilterBar()+'<div class="cards select exhibition-roster">'+o.map(x=>'<div data-tags="'+exhibitionTags(x)+'" onclick="pickTag1(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen');loadExhibitionPhoto(city)}
function pickTag1(n){state.tagPick1=n;let o=exhibitionRoster().filter(x=>x.name!==n);shell('<div class="topbar"><button onclick="selectTagFighter()" style="background:none;border:0">‹ BACK</button><span>2 VS 2 · TAG TEAM</span></div><div class="title">Choose Partner</div><div class="sub">'+n.toUpperCase()+' · SELECT TAG TEAM PARTNER</div>'+exhibitionFilterBar()+'<div class="cards select exhibition-roster">'+o.map(x=>'<div data-tags="'+exhibitionTags(x)+'" onclick="beginTag(\''+x.name.replaceAll("'","\\'")+'\')">'+card(x,level(x.name),'','lazy')+'</div>').join('')+'</div>','exhibition-screen')}
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
function reloadTagActions(b,side){if(!b.tag)return;
 // Every incoming wrestler receives a fresh move deck and two new random actions plus TAG.
 // Defer hand creation until the completed exchange has removed its played cards.
 if(side==='p')b.pendingTagHand=true;
 else b.pendingCpuTagHand=true;
}
function avgStat(stats){let v=Object.values(stats);return v.reduce((a,b)=>a+b,0)/v.length}
function actionNumbers(id,side,b,stats){let n=baseActionNumbers(id,side,b,stats);if(n.damage)n.damage=modifiedDamage(id,n.damage,side,b);return n}
function modifiedDamage(id,damage,side,b){if(!(b.road||b.gauntlet))return damage;let m=b.node.mod.id,k=String(id).replace('act:',''),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;if(m==='comeback'&&hp/max<.3)return Math.round(damage*1.25);if(m==='hardcore'&&['chair','lowblow','cheap','brawl'].includes(k))return Math.round(damage*1.25);if(m==='submission'&&k==='sub'||m==='aerial'&&k==='agi'||m==='technical'&&k==='tec')return Math.round(damage*1.35);if(m==='mainEvent'&&['cha','star','fnr'].includes(k))return Math.round(damage*1.2);return damage}
function baseActionNumbers(id,side,b,stats){let avg=avgStat(stats),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax,r=n=>Math.round(n);switch(String(id).replace('act:','')){case'defence':return{heal:r(max*.12),block:r(avg*1.5)};case'chair':return{damage:r(avg*1.5)};case'lowblow':return{damage:r(avg),block:r(avg*.8)};case'ref':return{damage:r(avg*.5)};case'crowd':return{heal:r(max*.35)};case'adrenaline':return{boost:r(avg)};case'reverse':return{block:r(avg),reflect:r(avg)};case'cheap':return{damage:r(avg*1.1),block:r(avg*.6)};case'secondwind':return{heal:r(max*(hp<max/2?.4:.2)),lowHeal:r(max*.4),normalHeal:r(max*.2)};case'tag':return{tag:true};case'mindgames':return{block:r(avg),boost:r(avg*.75)};case'fighting':return{heal:r(max*.2),boost:r(avg)};case'brawl':return{damage:r(avg*1.75),incoming:r(avg*.2)};default:return{}}}
function actionDesc(id,side,b,stats){let n=actionNumbers(id,side,b,stats);switch(String(id).replace('act:','')){case'defence':return `Restore ${n.heal} HP. Block ${n.block} damage this exchange.`;case'chair':return `Deal ${n.damage} damage.`;case'lowblow':return `Deal ${n.damage} damage. Block ${n.block} incoming damage.`;case'ref':return `Deal ${n.damage} damage. Negate the opponent's move this exchange.`;case'crowd':return `Restore ${n.heal} HP.`;case'adrenaline':return `Your next stat attack gains +${n.boost} damage.`;case'reverse':return `Block ${n.block} damage and reflect up to ${n.reflect} damage.`;case'cheap':return `Deal ${n.damage} damage. Block ${n.block} incoming damage.`;case'secondwind':return `Restore ${n.normalHeal} HP — ${n.lowHeal} HP below half health.`;case'tag':return b.tag?'Negate the incoming move and tag your partner.':'Unavailable outside Tag Team matches.';case'mindgames':return `Block ${n.block} damage. Your next stat attack gains +${n.boost} damage.`;case'fighting':return `Restore ${n.heal} HP. Your next stat attack gains +${n.boost} damage.`;case'brawl':return `Deal ${n.damage} damage. Opponent gains +${n.incoming} damage this exchange.`;default:return''}}
function battle(){let b=state.b,ps=statsAt(b.p,b.pl);initActionDecks(b);if(b.pendingTagHand){b.pendingTagHand=false;b.actionCards=randomActions(2);b.used=[];b.hand=[];b.tagDrawTurns=0}if(!b.used)b.used=[];if(!b.hand)b.hand=[];let allowed=[...b.avail,...b.actionCards,...(b.tag?['act:tag']:[])];b.hand=b.hand.filter(k=>allowed.includes(k)&&!b.used.includes(k));let unused=allowed.filter(k=>!b.used.includes(k)&&!b.hand.includes(k));if(b.hand.length+unused.length<3){b.used=[];unused=allowed.filter(k=>!b.hand.includes(k))}while(b.hand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.hand.push(unused.splice(i,1)[0])}b.tagDrawTurns=b.hand.includes('act:tag')?0:(b.tagDrawTurns||0)+1;let choices=[...b.hand];shell(`<div class="battle-logo-wrap">${logo()}</div><div class="topbar">${b.road?'<button onclick="road()" style="background:none;border:0">‹ ROAD</button>':'<span>'+(b.gauntlet?'DAILY GAUNTLET · '+b.gauntletStage+'/5':'EXHIBITION')+'</span>'}<span>${b.road?'WORLD TOUR · '+b.node.n:(b.gauntlet?b.node.mod.name:'LIVE')}</span>${b.road?'<span>'+b.node.mod.name+'</span>':''}</div><div class="versus">${card(b.p,b.pl,"","eager",b.php)}<div class="vs">VS</div>${card(b.cpu,b.cl,"","eager",b.chp)}</div>${b.multi&&b.eliminationNotice?`<div class="elimination-notice" role="status">${b.eliminationNotice}</div>`:""}${b.multi?`<div class="tag-benches"><div class="tag-bench"><small>YOUR TEAM · TAG CARD REQUIRED</small>${b.teams.p.map((x,i)=>`<button ${true?'disabled':''} onclick="multiChooseTag(${i})">${x.hp<=0?"ELIMINATED · ":""}${x.w.name} · ${x.hp}/${x.max} HP</button>`).join('')}</div><div class="tag-bench cpu"><small>OPPONENT TEAM</small>${b.teams.c.map(x=>`<div>${x.hp<=0?"ELIMINATED · ":""}${x.w.name} · ${x.hp}/${x.max} HP</div>`).join('')}</div></div>`:b.tag?`<div class="tag-benches"><div class="tag-bench"><small>PARTNER · RECOVERING</small><b>${b.p2.name}</b><span>${b.p2hp}/${b.p2max} HP</span></div><div class="tag-bench cpu"><small>PARTNER · RECOVERING</small><b>${b.cpu2.name}</b><span>${b.c2hp}/${b.c2max} HP</span></div></div>`:''}<div class="hpbox"><div class="hphead"><span>${b.p.name}</span><span>${b.php}/${b.pmax}</span></div><div class="hpbar"><div class="hpfill ${b.php/b.pmax>.6?'hp-green':b.php/b.pmax>.3?'hp-amber':'hp-red'}" style="width:${Math.max(0,b.php/b.pmax*100)}%"></div></div><div class="fighter-log player-fighter-log">${b.pLog||''}</div></div><div class="hpbox"><div class="hphead"><span>${b.cpu.name}</span><span>${b.chp}/${b.cmax}</span></div><div class="hpbar"><div class="hpfill ${b.chp/b.cmax>.6?'hp-green':b.chp/b.cmax>.3?'hp-amber':'hp-red'}" style="width:${Math.max(0,b.chp/b.cmax*100)}%"></div></div><div class="fighter-log cpu-fighter-log">${b.cLog||''}</div></div><div class="chooser"><h3>CHOOSE YOUR CARD</h3><div class="attacks">${choices.map(k=>{let ac=actionBy(k);return ac?`<button class="attack action-card action-${ac.id}" onclick="attack('${k}')"><span class="action-glyph">${actionIcon(k)}</span><small>ACTION</small><em>${actionDesc(k,'p',b,ps)}</em></button>`:(()=>{let base=ps[k]+(b.pBoost||0),shown=modifiedDamage(k,base,'p',b),bonus=shown!==base;return `<button class="attack${bonus?' modified-attack':''}" onclick="attack('${k}')"><img class="attackicon" src="assets/${ATTACK_ICONS[k]}" alt=""><b>${shown}</b>${bonus?`<em class="match-bonus">BONUS APPLIED</em>`:''}</button>`})()}).join('')}</div></div>`,'battle')}
function actionValue(id,side,b,stats){let a=actionBy(id),n=actionNumbers(id,side,b,stats),hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;if(!a)return 0;let enemyStats=statsAt(side==='p'?b.cpu:b.p,side==='p'?b.cl:b.pl),enemyActions=side==='p'?b.cpuActionCards:b.actionCards,enemyKeys=[...b.avail,...(enemyActions||[])];let threat=enemyKeys.reduce((total,k)=>total+(actionBy(k)?(actionNumbers(k,side==='p'?'c':'p',b,enemyStats).damage||0):modifiedDamage(k,enemyStats[k]+((side==='p'?b.cBoost:b.pBoost)||0),side==='p'?'c':'p',b)),0)/enemyKeys.length,block=Math.min(n.block||0,threat);switch(a.id){case'chair':return n.damage;case'lowblow':case'cheap':return n.damage+block*.7;case'brawl':return n.damage-n.incoming;case'defence':return Math.min(max-hp,n.heal)+block;case'crowd':case'secondwind':return Math.min(max-hp,n.heal)*1.15;case'adrenaline':return n.boost*1.15;case'reverse':return block+Math.min(n.reflect,block)*.7;case'mindgames':return block+n.boost;case'fighting':return Math.min(max-hp,n.heal)+n.boost;case'tag':{if(!b.tag)return 0;if(b.multi){const team=b.teams?.[side==='p'?'p':'c'];const partner=team?.find((x,i)=>i>0&&x.hp>0);if(!partner)return 0;const ratio=hp/Math.max(1,max),partnerRatio=partner.hp/Math.max(1,partner.max);if(ratio<.3&&partnerRatio>.3)return avgStat(stats)*3;if(ratio<.5&&partnerRatio>ratio+.12)return avgStat(stats)*2.2;if(ratio<.7&&partnerRatio>ratio+.25)return avgStat(stats)*1.5;return avgStat(stats)*.35;}let partnerHp=side==='p'?b.p2hp:b.c2hp,partnerMax=side==='p'?b.p2max:b.c2max,ratio=hp/max,partnerRatio=partnerHp/partnerMax;if(ratio<.28&&partnerRatio>.2)return avgStat(stats)*2.4;if(ratio<.45&&partnerRatio>ratio+.08)return avgStat(stats)*1.65;return avgStat(stats)*.35}case'ref':{let prevented=threat,ratio=hp/max;return n.damage+prevented*(ratio<.3?.95:.72)}default:return avgStat(stats)}}
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
function cpuChoice(b,cs){initActionDecks(b);if(b.pendingCpuTagHand){b.pendingCpuTagHand=false;b.cpuActionCards=randomActions(2);b.cpuUsed=[];b.cpuHand=[]}if(!b.cpuUsed)b.cpuUsed=[];if(!b.cpuHand)b.cpuHand=[];let allowed=[...b.avail,...b.cpuActionCards,...(b.tag?['act:tag']:[])];b.cpuHand=b.cpuHand.filter(k=>allowed.includes(k)&&!b.cpuUsed.includes(k));let unused=allowed.filter(k=>!b.cpuUsed.includes(k)&&!b.cpuHand.includes(k));if(b.cpuHand.length+unused.length<3){b.cpuUsed=[];unused=allowed.filter(k=>!b.cpuHand.includes(k))}while(b.cpuHand.length<3&&unused.length){let i=Math.floor(Math.random()*unused.length);b.cpuHand.push(unused.splice(i,1)[0])}return chooseCard(b,cs,'c',b.cpuHand)}
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
 if(b.tag&&!b.multi){
   // Apron recovery applies only when the wrestler remains on the apron after this exchange.
   let pBenchStats=statsAt(b.p2,b.pl2),cBenchStats=statsAt(b.cpu2,b.cl2);
   let pRegen=Math.max(1,Math.round(avgStat(pBenchStats)/6)),cRegen=Math.max(1,Math.round(avgStat(cBenchStats)/6));
   if(!pTagged)b.p2hp=Math.min(b.p2max,b.p2hp+pRegen);
   if(!cTagged)b.c2hp=Math.min(b.c2max,b.c2hp+cRegen);
   if(pTagged){[b.p,b.p2]=[b.p2,b.p];[b.pl,b.pl2]=[b.pl2,b.pl];[b.php,b.p2hp]=[b.p2hp,b.php];[b.pmax,b.p2max]=[b.p2max,b.pmax];b.pBoost=null;reloadTagActions(b,'p')}
   if(cTagged){[b.cpu,b.cpu2]=[b.cpu2,b.cpu];[b.cl,b.cl2]=[b.cl2,b.cl];[b.chp,b.c2hp]=[b.c2hp,b.chp];[b.cmax,b.c2max]=[b.c2max,b.cmax];b.cBoost=null;reloadTagActions(b,'c')}
 }
 showImpactFX(pk,ck,pd+pReflect,cd+cReflect,pr.healed,cr.healed);
 if(pk!=='act:tag')b.used.push(pk);else b.tagDrawTurns=0;b.hand=b.hand.filter(k=>k!==pk);if(ck!=='act:tag')b.cpuUsed.push(ck);b.cpuHand=b.cpuHand.filter(k=>k!==ck);
 let pName=pa?pa.name:KEYS.find(x=>x[0]===pk)[1],cName=ca?ca.name:KEYS.find(x=>x[0]===ck)[1];
 let pEffect=pTagged?'INCOMING MOVE NEGATED · TAGGED '+b.p.name.toUpperCase():pa?actionLogEffect(pr,pd,pReflect,cancelled):`${pd} DAMAGE`,cEffect=cTagged?'INCOMING MOVE NEGATED · TAGGED '+b.cpu.name.toUpperCase():ca?actionLogEffect(cr,cd,cReflect,cancelled):`${cd} DAMAGE`;
 b.pLog=`<strong>${pa?'<i>'+actionIcon(pk)+'</i> ':''}${pName.toUpperCase()}</strong><span>${pEffect}</span>`;b.cLog=`<strong>${ca?'<i>'+actionIcon(ck)+'</i> ':''}${cName.toUpperCase()}</strong><span>${cEffect}</span>`;
 if(b.multi){if(b.multiTagCooldown>0)b.multiTagCooldown--;multiStore(b);if(b.faction){for(const side of ['p','c']){for(let i=1;i<b.teams[side].length;i++){const bench=b.teams[side][i];if(bench.hp>0&&bench.hp<bench.max){const recovery=Math.max(1,Math.round(avgStat(statsAt(bench.w,bench.l))/6));bench.hp=Math.min(bench.max,bench.hp+recovery)}}}}if(b.faction&&!b.faction.final){if(b.php<=0||b.chp<=0){b.ended=true;const win=b.php<=0&&b.chp<=0?b.chp<b.php:b.chp<=0;return setTimeout(()=>finish(win),350)}}b.eliminationNotice='';for(let side of ['p','c']){let t=b.teams[side];if(t[0].hp<=0){let fallen=t[0].w.name;t[0].hp=0;let next=t.findIndex((x,i)=>i>0&&x.hp>0);if(next>=0){multiSwap(b,side,next);b.eliminationNotice+=(b.eliminationNotice?' · ':'')+fallen.toUpperCase()+' ELIMINATED — '+t[0].w.name.toUpperCase()+' ENTERS';}else{b.eliminationNotice+=(b.eliminationNotice?' · ':'')+fallen.toUpperCase()+' ELIMINATED';}}else if((side==='p'?pTagged:cTagged)){let next=t.findIndex((x,i)=>i>0&&x.hp>0);if(next>=0)multiSwap(b,side,next)}}/* CPU substitutions require playing TAG, just like the player. */let pAlive=b.teams.p.some(x=>x.hp>0),cAlive=b.teams.c.some(x=>x.hp>0);if(!pAlive||!cAlive){b.ended=true;return setTimeout(()=>finish(pAlive&&!cAlive),350)}battle();return}
 if(nextPhp<=0||nextChp<=0){b.ended=true;let win=nextPhp<=0&&nextChp<=0?nextChp<nextPhp:nextChp<=0;return setTimeout(()=>finish(win),350)}
 if((b.road||b.gauntlet)&&b.node.mod.id==='random'){b.hand=[];b.cpuHand=[];b.used=[];b.cpuUsed=[]}
 battle();
}
const FINISHER_MEDIA_URL='finisher-media.json?v='+APP_VERSION;
let finisherMediaCache=null,finisherMediaPromise=null;
function loadFinisherMedia(){if(finisherMediaCache)return Promise.resolve(finisherMediaCache);if(finisherMediaPromise)return finisherMediaPromise;finisherMediaPromise=fetch(FINISHER_MEDIA_URL,{cache:'force-cache'}).then(r=>r.ok?r.json():{}).catch(()=>({})).then(x=>(finisherMediaCache=x,finisherMediaPromise=null,x));return finisherMediaPromise}
// Keep URLs deduplicated without retaining 80 decoded image objects in memory.
const artPreloads=new Map();
const failedWebpArt=new Set();
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
async function finish(win){let b=state.b;b.matchWon=!!win;if(b.faction){let season=save.factionWarfare;if(b.faction.final){const survivors=win?(b.teams?.p||[]).filter((x,i)=> (i===0?b.php:x.hp)>0).map(x=>x.w.name):[];const result=FactionWarfareRules.finishFinal(season,!!win,survivors);state.factionSurvivorRewards=result.survivorRewards.slice()}else{FactionWarfareRules.applyResult(season,b.faction.division,!!win)}persist()}if(win)save.wins++;else save.losses++;awardMatchCoin();let resultWrestler=b.p;recordGame(resultWrestler.name,win);let r=recordStats(resultWrestler.name);state.winAward=win&&r.wins>0&&r.wins%50===0?resultWrestler.name:null;if(b.road){let oldRoad=save.roadLevel||1;save.roadLevel=win?oldRoad+1:oldRoad;if(win&&Math.floor((save.roadLevel-1)/15)>Math.floor((oldRoad-1)/15)){save.coins++;state.roadLevelUp=roadBand(save.roadLevel);state.pendingCoinAwards=(state.pendingCoinAwards||[]).concat({reason:'WORLD TOUR STAGE '+state.roadLevelUp,detail:'Bonus coin for clearing 15 World Tour matches.'})}}persist();let w=win?b.p:b.cpu,media=await loadFinisherMedia();let raw=media[w.name]||'',url=tenorEmbed(raw),direct=/\.(?:gif|webp|mp4)(?:$|\?)/i.test(raw);shell(`<div class="finish-show"><div class="finish-head"><div class="kicker">${win?'YOU WIN':'DEFEAT'}</div><div class="big">${w.finisher}</div><div class="sub">${w.name} hits the finisher!</div></div>${url?`<div class="finisher-media">${direct?`<img src="${url}" alt="${w.name} finisher">`:`<iframe src="${url}" title="${w.name} finisher" allow="autoplay; fullscreen" scrolling="no" frameborder="0"></iframe>`}</div>`:`<div class="finisher-media missing"><span>FINISHER CLIP</span><b>${w.name}</b><small>Add a URL in Finisher Studio</small></div>`}<div class="pin-stage"><div class="pin-label">PIN COUNT</div><div id="pinCount" class="pin-number">1</div></div><div id="finishAction" class="finish-action"></div></div>`,'finish-screen');let n=1,el=document.querySelector('#pinCount');let timer=setInterval(()=>{n++;if(el){el.classList.remove('pop');void el.offsetWidth;el.textContent=n;el.classList.add('pop')}if(n===3){clearInterval(timer);setTimeout(()=>{let a=document.querySelector('#finishAction');if(a)a.innerHTML=win?(b.live?'<button class="btn" onclick="claimLiveReward()">CLAIM WINNER DUPLICATE</button>':b.gauntlet?'<button class="btn" onclick="claimGauntletReward()">CLAIM '+b.cpu.name.toUpperCase()+'</button>':'<button class="btn" onclick="rewardPack(true)">CLAIM 2 REWARDS</button>'):(b.live?'<button class="btn" onclick="wweLive()">RETURN TO WWE LIVE</button>':b.gauntlet?'<button class="btn" onclick="rewardPack(false)">CLAIM CONSOLATION CARD</button>':'<button class="btn" onclick="rewardPack(false)">CLAIM 1 REWARD</button>')},700)}},900)}
function claimGauntletReward(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);d.wins++;persist();let next=state.winAward?'claimWinAward()':'dailyGauntlet()';if(old)return duplicateUpgrade(w,old,neu,next,'DAILY GAUNTLET · '+d.wins+'/5');shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">DAILY GAUNTLET · ${d.wins}/5</div><div class="new-name ${w.name.trim().includes(' ')?'name-fit-multi':(w.name.length>=10?'name-fit-single-long':'name-fit-short')}">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward new-superstar-screen')}
function rewardReturn(){return state.b?.faction?'factionDashboard()':state.b?.road?'road()':'home()'}
function rewardPack(win=true){let w=state.b?.p,r=w?recordStats(w.name):null;state.matchRewards=Array.from({length:win?2:1},()=>BASE[Math.floor(Math.random()*BASE.length)]);state.matchRewardIndex=0;state.matchRewardWin=win;shell(`<div class="victory-backdrop">${w?artImage(w.name,'victory-bg','eager'):''}</div><div class="hero finish victory-reward"><div class="kicker">${win?'WINNER':'DEFEAT'}</div><div class="victory-name">${w?.name||'MATCH COMPLETE'}</div>${r?`<div class="victory-record">${r.wins} WINS · ${r.losses} LOSSES · ${r.pct}%</div>`:''}<div class="reward-divider"></div><div class="kicker">MATCH REWARD</div><div class="title">${win?'Victory Pack · 2 Cards':'Consolation Pack · 1 Card'}</div><div class="pack premium-pack" onclick="openReward()">${logo()}<span>TAP TO OPEN</span></div></div>`,'reward victory-screen')}
function duplicateUpgrade(w,old,neu,next,kicker='DUPLICATE ABSORBED'){let before=statsAt(w,old),after=statsAt(w,neu),bh=hpOf(w,old),ah=hpOf(w,neu);shell(`<div class="upgrade-backdrop">${artImage(w.name,'upgrade-bg','eager')}</div><div class="hero finish duplicate-upgrade"><div class="kicker">${kicker}</div><div class="upgrade-name">${w.name}</div><div class="upgrade-card">${card(w,old,'flash')}</div><div class="upgrade-level"><small>LEVEL UP</small><b class="level-old">${old}</b><span>→</span><b class="level-new">${neu}</b></div><div class="upgrade-summary"><strong>HP +${ah-bh}</strong><strong>ALL STATS +${after[KEYS[0][0]]-before[KEYS[0][0]]}</strong></div><div class="upgrade-stats">${KEYS.map(([k,label])=>`<div class="upgrade-stat"><span>${label}</span><b id="up-${k}">${before[k]}</b><i>▲</i><em>+${after[k]-before[k]}</em></div>`).join('')}<div class="upgrade-stat hp-up"><span>HP</span><b id="up-hp">${bh}</b><i>▲</i><em>+${ah-bh}</em></div></div><div class="upgrade-message">LEVEL ${neu}</div><button id="upgradeContinue" class="btn upgrade-continue" onclick="${next}">Continue</button></div>`,'reward upgrade-screen');setTimeout(()=>{let c=document.querySelector('.upgrade-card');if(c)c.innerHTML=card(w,neu,'flash');let lv=document.querySelector('.level-new');if(lv){lv.classList.add('slam');}KEYS.forEach(([k])=>tickUpgrade('up-'+k,before[k],after[k]));tickUpgrade('up-hp',bh,ah);document.querySelectorAll('.upgrade-stat').forEach((el,i)=>setTimeout(()=>el.classList.add('rising'),i*70));let m=document.querySelector('.upgrade-message');if(m)m.classList.add('show');let btn=document.querySelector('#upgradeContinue');if(btn)btn.classList.add('show')},650)}
function tickUpgrade(id,from,to){let el=document.getElementById(id);if(!el)return;let start=performance.now(),dur=700;function step(t){let p=Math.min(1,(t-start)/dur),e=1-Math.pow(1-p,3);el.textContent=Math.round(from+(to-from)*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
function showPendingCoinAward(next){
 const awards=state.pendingCoinAwards||[];
 if(!awards.length)return next();
 state.pendingCoinAwards=[];
 const amount=awards.length;
 const reasons=awards.map(a=>'<div class="coin-award-reason"><strong>'+a.reason+'</strong><small>'+a.detail+'</small></div>').join('');
 state.coinAwardContinue=next;
 shell('<div class="coin-award-screen"><div class="kicker">MATCH MILESTONE</div><h1>COIN EARNED!</h1><div class="coin-award-amount">+'+amount+' '+(amount===1?'COIN':'COINS')+'</div>'+reasons+'<p>YOUR BALANCE: '+save.coins+' '+(save.coins===1?'COIN':'COINS')+'</p><button class="btn" onclick="continueCoinAward()">CONTINUE</button></div>','coin-award-screen-wrap');
}
function continueCoinAward(){const next=state.coinAwardContinue;state.coinAwardContinue=null;if(next)next();else home()}
function nextMatchReward(){state.matchRewardIndex=(state.matchRewardIndex||0)+1;if(state.matchRewardIndex<(state.matchRewards?.length||0))return openReward();let returnTo=state.b?.faction?'faction':state.b?.gauntlet?'gauntlet':(state.b?.road?'road':'home');state.matchRewards=null;state.matchRewardIndex=0;state.matchRewardWin=null;state.rewardReturnTo=returnTo;state.b=null;return showPendingCoinAward(()=>{if(state.winAward)return claimWinAward();if(state.roadLevelUp)return showRoadLevelUp();return returnTo==='faction'?(state.factionSurvivorRewards?.length?factionFinalRewards():factionDashboard()):returnTo==='gauntlet'?dailyGauntlet():(returnTo==='road'?road():home())})}
function showRoadLevelUp(){let band=state.roadLevelUp;state.roadLevelUp=null;persist();shell(`<div class="road-levelup"><div class="road-levelup-rays"></div><div class="kicker">WORLD TOUR</div><div class="road-levelup-label">LEVEL UP</div><div class="road-levelup-number">${band}</div><div class="road-levelup-coin">${coinIcon('coin-icon road-level-coin')}<b>+1 COIN</b></div><div class="sub">15 MATCHES CLEARED · THE ROAD GETS TOUGHER</div><button class="btn" onclick="road()">ENTER LEVEL ${band}</button></div>`,'road-levelup-screen')}
function openReward(){if(!state.matchRewards?.length){state.matchRewards=[BASE[Math.floor(Math.random()*BASE.length)]];state.matchRewardIndex=0}let idx=state.matchRewardIndex||0,w=state.matchRewards[idx],old=level(w.name),neu=old+1,total=state.matchRewards.length;save.roster[w.name]=neu;ensureRecord(w.name);persist();let next='nextMatchReward()',kicker=total>1?'REWARD '+(idx+1)+' OF '+total:(state.matchRewardWin===false?'CONSOLATION REWARD':'MATCH REWARD');if(old)return duplicateUpgrade(w,old,neu,next,kicker);shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">${kicker}</div><div class="new-name ${w.name.trim().includes(' ')?'name-fit-multi':(w.name.length>=10?'name-fit-single-long':'name-fit-short')}">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Added to your WWE Superstars collection.</div><button class="btn" onclick="${next}">${idx+1<total?'NEXT REWARD':'CONTINUE'}</button></div>`,'reward new-superstar-screen')}
function claimWinAward(){let n=state.winAward,route=state.rewardReturnTo||(state.b?.faction?'faction':state.b?.gauntlet?'gauntlet':state.b?.road?'road':'home');let next=route==='faction'?'factionDashboard()':route==='gauntlet'?'dailyGauntlet()':route==='road'?'road()':'home()';if(!n)return route==='faction'?factionDashboard():route==='gauntlet'?dailyGauntlet():route==='road'?road():home();let w=BASE.find(x=>x.name===n),old=level(n),neu=old+1;save.roster[n]=neu;state.winAward=null;persist();if(old)return duplicateUpgrade(w,old,neu,next,'50-WIN AWARD');shell(`<div class="new-backdrop">${artImage(w.name,'new-bg','eager')}</div><div class="hero finish new-superstar"><div class="kicker">50-WIN AWARD</div><div class="new-name ${w.name.trim().includes(' ')?'name-fit-multi':(w.name.length>=10?'name-fit-single-long':'name-fit-short')}">${w.name}</div><div class="new-card">${card(w,neu,'flash')}</div><div class="new-level">LVL ${neu}</div><div class="sub">Bonus Superstar added to your collection.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward new-superstar-screen')}function bootGame(){start();setTimeout(()=>checkForUpdate(),700);setInterval(()=>checkForUpdate(),60000);setTimeout(()=>loadFinisherMedia(),1800);setTimeout(()=>preloadRosterInBackground(),5000)}
bootGame();