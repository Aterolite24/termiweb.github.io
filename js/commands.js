var password = "password";
var linkedin = "https://www.linkedin.com/in/achal-gawande-33615b250/";
var instagram = "https://www.instagram.com/_.4ch4l._24/";
var github = "https://github.com/Aterolite24";
var email = 'mailto:gawandeachal24@gmail.com';
var codeforces = "https://codeforces.com/profile/godYagami";

linespace = [
  "<br>"
]

whois = [
  "<br>",
  "Hey there, I'm Achal!👋",
  "Currently cruising through my second year, ",
  "pursuing B.tech in Computer Science at Indian Institute of Technology (BHU), Varanasi.",
  "My interests? Well, I'm all about diving into the world of Machine Learning, ",
  "Natural Language Processing, Data Analytics, Competitive Programming, and Algorithms.",
  "Always eager to learn more and passionate about exploring new technologies.",
  "When it comes to soft skills, I pride myself on effective communication and seamless team collaboration.",
  "I believe in the power of teamwork to achieve great results.", 
  "<br>",
  "<br>"
];

whoami = [
  "<br>",
  "Who am I? Never quite know, always on the chase.",
  "<br>",
  "<br>"
];

social = [
  "<br>",
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/achal-gawande-33615b250/' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/_.4ch4l._24/' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/Aterolite24' + "</a>",
  "<br>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>",
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are on GitHub, offline, or confidential. Still you may use",
  '<span class="command">github</span>         To checkout my projects online',
  '<span class="command">social</span>         Display social networks',
  "<br>",
  "<br>"
];

extras = [
  "<br>",
  '<span class=\"command\">google</span>         To checkout my projects online<br><span class=\"command\">youtube</span>         To checkout my projects online<br><span class=\"command\">getquote</span>         To checkout my projects online<br><span class=\"command\">secret</span>         Find the password<br><span class=\"command\">banner</span>         Display the header',
]

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Aterolite24?',
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">pass</span>           It\'s not as obvious as you\'d expect.',
  '<span class="command">banner</span>         Display the header',
  "<br>",
  "<br>",
];

// Get the current date and time
const currentDate = new Date();

// Get the current hour (in 24-hour format) from the current date
const currentHour = currentDate.getHours();

// Define the messages for different times of the day
let greeting;

if (currentHour >= 5 && currentHour < 12) {
    greeting = "<\\Hello world> Let's make today amazing!";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "&lt\!Bad> vibes, cosmos! Let's rock this afternoon!";
} else {
    greeting = "<< Sleep tight, programmer! Time to log off and recharge those bytes >>";
}

coorps = [
  '<header><div class=\"header-top\"> <div class=\"container\"> <div class=\"header-alert-news\" style=\"font-size: var(--fs-9) !important;\"> <p class="headerp"><b>Aterolite24</b> (ASG) Beyond Corporation. All dreams unreserved.</p> </div> <ul class=\"header-social-container\"> <li> <a href=\" '+github+'\" target="_blank" class=\"social-link\"> <ion-icon name=\"logo-github\" role=\"img\" class=\"md hydrated\" aria-label=\"logo github\"></ion-icon> </a> </li> <li> <a href=\" '+ codeforces +'\"target="_blank" class=\"social-link\"> <ion-icon name=\"bar-chart-outline\" role=\"img\" class=\"md hydrated\" aria-label=\"logo Codeforces\"></ion-icon> </a> </li> <li> <a href=\" '+ instagram+ '\"target="_blank" class=\"social-link\"> <ion-icon name=\"logo-instagram\" role=\"img\" class=\"md hydrated\" aria-label=\"logo instagram\"></ion-icon> </a> </li> <li> <a href=\" ' + linkedin + ' \"target="_blank" class=\"social-link\"> <ion-icon name=\"logo-linkedin\" role=\"img\" class=\"md hydrated\" aria-label=\"logo linkedin\"></ion-icon> </a> </li> </ul> </div> </div><div class=\"header-main\"> <div class=\"container\"><div class=\"terminalIcon\"><ion-icon name=\"terminal-outline\" class=\"terminal-outline\"></ion-icon> </div><div class=\"header-user-actions\"><span class=\"usernn\"> '+ greeting + '</span></div</div> </div></header>'
]

// Replace ${greeting} in the coorps string with the actual greeting
// coorps[0] = coorps[0].replace('${greeting}', greeting);


bannerdiv = [
  "<br>",
    "╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗",
    "║<div class=\"banner\">                                    .''.                                                                                                                                                .''.                    </div> ║",
    "║<div class=\"banner\">        .''.      .        *''*    :_\\/_:     .                                                                                                             .''.      .        *''*    :_\\/_:     .              </div>║",
    "║<div class=\"banner\">       :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.                                                                                                         :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.           </div>║",
    "║<div class=\"banner\">   .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-                                                                                                     .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-           </div>║",
    "║<div class=\"banner\">  :_\\/_:'.:::.   | ' *''*    * '.\\'/.'_\\(/_'.':'.'                                                                                                    :_\\/_:'.:::.    | ' *''*    * '.\\'/.'_\\(/_'.':'.'          </div>║",
    "║<div class=\"banner\">  : /\\ : :::::   =  *_\\/_*     -= o =- /)\\    '  *                                                                                                    : /\\ : :::::    =  *_\\/_*     -= o =- /)\\    '  *          </div>║",
    "║<div class=\"banner\">   '..' ':::'   === * /\\ *     .'/.\\'.  ' ._____                                                                                                       '..' ':::'    === * /\\ *     .'/.\\'.  ' ._____            </div>║",
    "║<div class=\"banner\">       *         |   *..*         :       |.   |' .---'|     █████╗ ████████╗███████╗██████╗  ██████╗ ██╗     ██╗████████╗███████╗    ██████╗ ██╗  ██╗      *         |   *..*         :       |.   |' .---'|    </div>║",
    "║<div class=\"banner\">         *       |     _           .--'|  ||   | _|    |     ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗██║     ██║╚══██╔══╝██╔════╝    ╚════██╗██║  ██║       *       |     _           .--'|  ||   | _|    |    </div>║",
    "║<div class=\"banner\">         *       |  .-'|       __  |   |  |    ||      |     ███████║   ██║   █████╗  ██████╔╝██║   ██║██║     ██║   ██║   █████╗       █████╔╝███████║       *       |  .-'|       __  |   |  |    ||      |    </div>║",
    "║<div class=\"banner\">      .-----.    |  |' |  ||  |  | |   |  |    ||      |     ██╔══██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║     ██║   ██║   ██╔══╝      ██╔═══╝ ╚════██║    .-----.    |  |' |  ||  |  | |   |  |    ||      |    </div>║",
    "║<div class=\"banner\">   ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____ ██║  ██║   ██║   ███████╗██║  ██║╚██████╔╝███████╗██║   ██║   ███████╗    ███████╗     ██║ ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____</div>║",
    "║<div class=\"banner\"> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝     ╚═╝  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>║",
    "║<div class=\"banner\"> ~-~                    ~-~-~-~-~-~-~-~-~-~   /|                                                                   ~-~                    ~-~-~-~-~-~-~-~-~-~       /|                                           </div>║",
    "║<div class=\"banner\">  ~-~-~    )     ~-~-~-~-~-~-~-~   /|~       /_|\\         ~-~-~-~~-~-~-~              /|         ~-~-~-~~-~-~-      ~-~-~)      ~-~-~-~-~-~-~-~       /|~          /_|\\                                          </div>║",
    "║<div class=\"banner\">         _-H-__  -~-~-~-~-~-~     /_|\\    -~======-~             ~-~-~-~             /_|\\        ~-~-~-~               _-H-__  -~-~-~-~-~-~          /_|\\       -~======-~                                       </div>║",
    "║<div class=\"banner\"> ~-\\XXXXXXXXXX/~     ~-~-~-~     /__|_\\ ~-~-~-~                   ~-~-~-          -~======-~         ~-~-~-~      ~-\\XXXXXXXXXX/~     ~-~-~-~       /__|_\\ ~-~-~-~                                               </div>║",
    "║<div class=\"banner\"> ~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~    ~-~-~-~-~-~    ~-~~-~-~-~-~     ~-~-~-~-~-~    ~-~~-~-~-~-~               ~-~-~-~-~-~    ~- ~ ========  ~-~-~-~                                             </div>║",
    "╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝",
  "<br>",
  "<br>"
];

banners = [
  "<br>",
    "╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗",
    "║<span class=\"banner\">                                    .''.                                                                                                                                                .''.                    </span> ║",
    "║<span class=\"banner\">        .''.      .        *''*    :_\\/_:     .                                                                                                             .''.      .        *''*    :_\\/_:     .              </span>║",
    "║<span class=\"banner\">       :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.                                                                                                         :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.           </span>║",
    "║<span class=\"banner\">   .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-                                                                                                     .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-           </span>║",
    "║<span class=\"banner\">  :_\\/_:'.:::.   | ' *''*    * '.\\'/.'_\\(/_'.':'.'                                                                                                    :_\\/_:'.:::.    | ' *''*    * '.\\'/.'_\\(/_'.':'.'          </span>║",
    "║<span class=\"banner\">  : /\\ : :::::   =  *_\\/_*     -= o =- /)\\    '  *                                                                                                    : /\\ : :::::    =  *_\\/_*     -= o =- /)\\    '  *          </span>║",
    "║<span class=\"banner\">   '..' ':::'   === * /\\ *     .'/.\\'.  ' ._____                                                                                                       '..' ':::'    === * /\\ *     .'/.\\'.  ' ._____            </span>║",
    "║<span class=\"banner\">       *         |   *..*         :       |.   |' .---'|     █████╗ ████████╗███████╗██████╗  ██████╗ ██╗     ██╗████████╗███████╗    ██████╗ ██╗  ██╗      *         |   *..*         :       |.   |' .---'|    </span>║",
    "║<span class=\"banner\">         *       |     _           .--'|  ||   | _|    |     ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗██║     ██║╚══██╔══╝██╔════╝    ╚════██╗██║  ██║       *       |     _           .--'|  ||   | _|    |    </span>║",
    "║<span class=\"banner\">         *       |  .-'|       __  |   |  |    ||      |     ███████║   ██║   █████╗  ██████╔╝██║   ██║██║     ██║   ██║   █████╗       █████╔╝███████║       *       |  .-'|       __  |   |  |    ||      |    </span>║",
    "║<span class=\"banner\">      .-----.    |  |' |  ||  |  | |   |  |    ||      |     ██╔══██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║     ██║   ██║   ██╔══╝      ██╔═══╝ ╚════██║    .-----.    |  |' |  ||  |  | |   |  |    ||      |    </span>║",
    "║<span class=\"banner\">   ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____ ██║  ██║   ██║   ███████╗██║  ██║╚██████╔╝███████╗██║   ██║   ███████╗    ███████╗     ██║ ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____</span>║",
    "║<span class=\"banner\"> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝     ╚═╝  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span>║",
    "║<span class=\"banner\"> ~-~                    ~-~-~-~-~-~-~-~-~-~   /|                                                                   ~-~                    ~-~-~-~-~-~-~-~-~-~       /|                                           </span>║",
    "║<span class=\"banner\">  ~-~-~    )     ~-~-~-~-~-~-~-~   /|~       /_|\\         ~-~-~-~~-~-~-~              /|         ~-~-~-~~-~-~-      ~-~-~)      ~-~-~-~-~-~-~-~       /|~          /_|\\                                          </span>║",
    "║<span class=\"banner\">         _-H-__  -~-~-~-~-~-~     /_|\\    -~======-~             ~-~-~-~             /_|\\        ~-~-~-~               _-H-__  -~-~-~-~-~-~          /_|\\       -~======-~                                       </span>║",
    "║<span class=\"banner\"> ~-\\XXXXXXXXXX/~     ~-~-~-~     /__|_\\ ~-~-~-~                   ~-~-~-          -~======-~         ~-~-~-~      ~-\\XXXXXXXXXX/~     ~-~-~-~       /__|_\\ ~-~-~-~                                               </span>║",
    "║<span class=\"banner\"> ~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~    ~-~-~-~-~-~    ~-~~-~-~-~-~     ~-~-~-~-~-~    ~-~~-~-~-~-~               ~-~-~-~-~-~    ~- ~ ========  ~-~-~-~                                             </span>║",
    "╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝",
  "<br>",
  "<br>"
];

banner = [
  "<br>",
    "<span class=\"banner\">╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗</span> ",
    "<span class=\"banner\">║                                    .''.                                                                                                                                                .''.                     ║</span> ",
    "<span class=\"banner\">║        .''.      .        *''*    :_\\/_:     .                                                                                                             .''.      .        *''*    :_\\/_:     .              ║</span> ",
    "<span class=\"banner\">║       :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.                                                                                                         :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.           ║</span> ",
    "<span class=\"banner\">║   .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-                                                                                                     .''.: /\\ :    /)\\   ':'* /\\ *  : '..'.  -=:o:=-           ║</span> ",
    "<span class=\"banner\">║  :_\\/_:'.:::.   | ' *''*    * '.\\'/.'_\\(/_'.':'.'                                                                                                    :_\\/_:'.:::.    | ' *''*    * '.\\'/.'_\\(/_'.':'.'          ║</span> ",
    "<span class=\"banner\">║  : /\\ : :::::   =  *_\\/_*     -= o =- /)\\    '  *                                                                                                    : /\\ : :::::    =  *_\\/_*     -= o =- /)\\    '  *          ║</span> ",
    "<span class=\"banner\">║   '..' ':::'   === * /\\ *     .'/.\\'.  ' ._____                                                                                                       '..' ':::'    === * /\\ *     .'/.\\'.  ' ._____            ║</span> ",
    "<span class=\"banner\">║       *         |   *..*         :       |.   |' .---'|     █████╗ ████████╗███████╗██████╗  ██████╗ ██╗     ██╗████████╗███████╗    ██████╗ ██╗  ██╗      *         |   *..*         :       |.   |' .---'|    ║</span> ",
    "<span class=\"banner\">║         *       |     _           .--'|  ||   | _|    |     ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗██║     ██║╚══██╔══╝██╔════╝    ╚════██╗██║  ██║       *       |     _           .--'|  ||   | _|    |    ║</span> ",
    "<span class=\"banner\">║         *       |  .-'|       __  |   |  |    ||      |     ███████║   ██║   █████╗  ██████╔╝██║   ██║██║     ██║   ██║   █████╗       █████╔╝███████║       *       |  .-'|       __  |   |  |    ||      |    ║</span> ",
    "<span class=\"banner\">║      .-----.    |  |' |  ||  |  | |   |  |    ||      |     ██╔══██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║     ██║   ██║   ██╔══╝      ██╔═══╝ ╚════██║    .-----.    |  |' |  ||  |  | |   |  |    ||      |    ║</span> ",
    "<span class=\"banner\">║   ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____ ██║  ██║   ██║   ███████╗██║  ██║╚██████╔╝███████╗██║   ██║   ███████╗    ███████╗     ██║ ___'       ' /'\\ |  '-.''.    '-'   '-.'    '© 2024 |____║</span> ",
    "<span class=\"banner\">║ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝     ╚═╝  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~║</span> ",
    "<span class=\"banner\">║ ~-~                    ~-~-~-~-~-~-~-~-~-~   /|                                                                   ~-~                    ~-~-~-~-~-~-~-~-~-~       /|                                           ║</span> ",
    "<span class=\"banner\">║  ~-~-~    )     ~-~-~-~-~-~-~-~   /|~       /_|\\         ~-~-~-~~-~-~-~              /|         ~-~-~-~~-~-~-      ~-~-~)      ~-~-~-~-~-~-~-~       /|~          /_|\\                                          ║</span> ",
    "<span class=\"banner\">║         _-H-__  -~-~-~-~-~-~     /_|\\    -~======-~             ~-~-~-~             /_|\\        ~-~-~-~               _-H-__  -~-~-~-~-~-~          /_|\\       -~======-~                                       ║</span> ",
    "<span class=\"banner\">║ ~-\\XXXXXXXXXX/~     ~-~-~-~     /__|_\\ ~-~-~-~                   ~-~-~-          -~======-~         ~-~-~-~      ~-\\XXXXXXXXXX/~     ~-~-~-~       /__|_\\ ~-~-~-~                                               ║</span> ",
    "<span class=\"banner\">║ ~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~    ~-~-~-~-~-~    ~-~~-~-~-~-~     ~-~-~-~-~-~    ~-~~-~-~-~-~               ~-~-~-~-~-~    ~- ~ ========  ~-~-~-~                                             ║</span> ",
    "<span class=\"banner\">╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝</span> ",
  "<br>",
  "<br>"
];

// const bannerContainer = document.getElementById("banner-content");

helper = [
  "<div class=\"helper\"><span class=\"lineone\">Step into the Matrix of my Interactive Web Terminal</span><br><span class=\"lineone\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\"></span></div>",
  "<br>",
]

banner_content = [
  "<div class=\"banner2\"><div class=\"container\"><div class=\"slider-container has-scrollbar\"><div class=\"slider-item\"><img src=\"./img/banner1.png\" alt=\"Basic Commands\" class=\"banner-img\"><div class=\"banner-content\"><p class=\"banner-subtitle\">Exploring My Digital Space \></p><h2 class=\"banner-title\">Terminal Vibes \>\></h2><p class=\"banner-text\">Hey there! 🖥️ Welcome to my <b>Terminal - Type Portfolio Website</b>.<br> Here, I delve into the depths of my digital universe, showcasing my passions, projects, and adventures. <br>Swipe left to delve deeper and uncover more wonders!</p></div></div><div class=\"slider-item\"><img src=\"./img/banner2.png\" alt=\"Frequently Used Commands\" class=\"banner-img\"><div class=\"banner-content\"><p class=\"banner-subtitle\">Harmonizing Basic Website Commands</p><h2 class=\"banner-title\">Frequently Used Commands \>\></h2><p class=\"banner-text\"><span class=\"command\">help</span>           You obviously already know what this does<br><span class=\"command\">whois</span>          To know a basic summary of who I am<br><span class=\"command\">social</span>         Displays my social network<br><span class=\"command\">projects</span>       View coding projects<br><span class=\"command\">resume</span>         Showcases my professional resume</div></div><div class=\"slider-item\"><img src=\"./img/banner3.png\" alt=\"new fashion summer sale\" class=\"banner-img\"><div class=\"banner-content\"><p class=\"banner-subtitle\">Unleash Special Website Magic \></p><h2 class=\"banner-title\">Commando Cool \>\></h2><p class=\"banner-text\"><span class=\"command\">google</span>           Summon the Almighty Google for infinite wisdom<br><span class=\"command\">youtube</span>          Enter YouTube's world of endless entertainment!<br><span class=\"command\">getquote</span>         Unlock wisdom with the GetQuote command!<br><span class=\"command\">secret</span>           Find the password<br><span class=\"command\">banner</span>           Display the header</div></div></div></div></div>"
]

defaulter = [
  "<br>",
  '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span> </span>',
  "<br>",
  "<br>"
]


// ██████╗ ████████╗███████╗██████╗  ██████╗ ██╗     ██╗████████╗███████╗    ██████╗ ██╗  ██╗
// ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗██║     ██║╚══██╔══╝██╔════╝    ╚════██╗██║  ██║
// ███████║   ██║   █████╗  ██████╔╝██║   ██║██║     ██║   ██║   █████╗       █████╔╝███████║
// ██╔══██║   ██║   ██╔══╝  ██╔══██╗██║   ██║██║     ██║   ██║   ██╔══╝      ██╔═══╝ ╚════██║
// ██║  ██║   ██║   ███████╗██║  ██║╚██████╔╝███████╗██║   ██║   ███████╗    ███████╗     ██║
// ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝    ╚══════╝     ╚═╝
                                                                                          

//     ___   __                  ___ __          ___  __ __
//    /   | / /____  _________  / (_) /____     |__ \/ // /      
//   / /| |/ __/ _ \/ ___/ __ \/ / / __/ _ \    __/ / // /_
//  / ___ / /_/  __/ /  / /_/ / / / /_/  __/   / __/__  __/
// /_/  |_\__/\___/_/   \____/_/_/\__/\___/   /____/ /_/   
                                                     
// "                                   .''.",
// "       .''.      .        *''*    :_\/_:     .",
// "      :_\/_:   _\(/_  .:.*_\/_*   : /\ :  .'.:.'.",
// "  .''.: /\ :    /)\   ':'* /\ *  : '..'.  -=:o:=-",
// " :_\/_:'.:::.  | ' *''*    * '.\'/.'_\(/_'.':'.'",
// " : /\ : :::::  =  *_\/_*     -= o =- /)\    '  *",
// "  '..'  ':::' === * /\ *     .'/.\'.  ' ._____",
// "      *        |   *..*         :       |.   |' .---'|",
// "        *      |     _           .--'|  ||   | _|    |         ___   __                  ___ __          ___  __ __",
// "        *      |  .-'|       __  |   |  |    ||      |        /   | / /____  _________  / (_) /____     |__ \/ // /",
// "     .-----.   |  |' |  ||  |  | |   |  |    ||      |       / /| |/ __/ _ \/ ___/ __ \/ / / __/ _ \    __/ / // /_",
// " ___'       ' /'\ |  '-.''.    '-'   '-.'    '`      |____  / ___ / /_/  __/ /  / /_/ / / / /_/  __/   / __/__  __/",
// "jgs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   /_/  |_\__/\___/_/   \____/_/_/\__/\___/   /____/ /_/   ",
// "  &                    ~-~-~-~-~-~-~-~-~-~   /|",
// " ejm97    )      ~-~-~-~-~-~-~-~  /|~       /_|\ ",
// "        _-H-__  -~-~-~-~-~-~     /_|\    -~======-~",
// "~-\XXXXXXXXXX/~     ~-~-~-~     /__|_\ ~-~-~-~",
// "~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~",

sumfetch = [
  "                                                         ",
  '          ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><ion-icon name="newspaper-outline"></ion-icon></span>',
  '       ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄                  -----------',
  '     ▄▓▓▀ ▄▓▀   ▐▓▓  ▀▓▓   ▓▓▄                 <span><ion-icon name="newspaper-outline"></ion-icon></span> ABOUT',
  '   ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓               <span><ion-icon name="newspaper-outline"></ion-icon></span> Achal Gawande',
  '<span>  ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓              <ion-icon name="newspaper-outline"></ion-icon> <u><a href=\"resume_url.pdf\" target=\"_blank\">resume</a></u></span>',
  '▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓           <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"${config.repo}\" target=\"_blank\">Github repo</a></u>',
  '▐▓                                ▐▓           -----------',
  '▐▓    > A T E R O L I T E 2 4     ▐▓           <span><ion-icon name="newspaper-outline"></ion-icon></span> CONTACT',
  '▐▓                                ▐▓           <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"mailto:${config.email}\" target=\"_blank\">${config.email}</a></u>',
  '▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓           <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"https://github.com/Aterolite24\" target=\"_blank\">github.com/Aterolite24</a></u>',
  '  ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓              <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"https://linkedin.com/in/achal-gawande-33615b250/}\" target=\"_blank\">linkedin.com/in/achal-gawande-33615b250/</a></u>',
  '   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓               -----------',
  '    ▀▓▓▓   ▐▓▓   ▓▓  ▓▓▓   ▓▓▀                 <span><ion-icon name="newspaper-outline"></ion-icon></span> DONATE',
  '       ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▄▄▓▓▀                    <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"${config.donate_urls.paypal}\" target=\"_blank\">${config.donate_urls.paypal}</a></u>',
  '          ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▀▀                     <span><ion-icon name="newspaper-outline"></ion-icon></span> <u><a href=\"${config.donate_urls.patreon}\" target=\"_blank\">${config.donate_urls.patreon}</a></u>',
  "                                                       "
];

// document.getElementById('sumfetch-container').innerHTML = sumfetch.join('');
