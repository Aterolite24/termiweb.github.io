// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];


// Define a function to run the loopLines function with a delay
function runLoopLines(lines, style, time) {
  return new Promise((resolve, reject) => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        addLine(line, style, time);
        if (index === lines.length - 1) {
          resolve(); // Resolve the promise when all lines are added
        }
      }, index * time);
    });
  });
}

// Chain the execution of loopLines functions with a delay between each call
runLoopLines(coorps, "", 80)
  .then(() => runLoopLines(banner_content, "", 80))
  .then(() => runLoopLines(helper, "", 100))
  .then(() => {
    textarea.focus();
  });


window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

const nameField = document.querySelector('.name-field');
const form = document.querySelector('form');
let commandLine = ``;

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const commandLineDiv = document.getElementById('command-line');
  const alias = nameField.value.trim(); // Get the value from the input field and trim any leading/trailing whitespace
  document.documentElement.style.setProperty('--username', `"${alias}"`);

  // Validate the alias
  if (alias === "") {
    console.error("Alias cannot be empty");
    return; // Exit the function if alias is empty
  }

  // Define color codes for different parts of the command line
  const aliasColor = "#a7c2a6";
  const hostnameColor = "#EAECCC";
  const directoryColor = "#c4b787"; 

  // Update the command line template with different colors for each part
  commandLine = `<div class="command-line"><span class="alias" style="color: ${aliasColor};">${alias}</span><span class="hostname" style="color: ${hostnameColor};">@</span><span class="directory" style="color: ${directoryColor};">techvault.show&nbsp\>\>&nbsp;</span></div>`;
  commandLineDiv.innerHTML = commandLine;

  // Update the CSS custom property to reflect the updated command line prefix
  document.documentElement.style.setProperty('--command-line-prefix', `"${commandLine}"`);

  // Clear the input field
  nameField.value = "";

  // Close the modal
  modal.classList.add('closed');
});






function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } 
  else 
  {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(`${commandLine}` + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

const getQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error('Quote data not found');
    }
    const data = await response.json();
    return {
      quote:"Quote: "+`“${data.content}” — ${data.author}`,
    };
  } catch (error) {
    return 'Error fetching quote data.';
  }
};

function getWeather() {
  // Make a request to wttr.in for weather information
  $.ajax({
      url: `https://wttr.in/${args}?format=%C+%t+%w`, // Replace YourCity with your city name
      success: function(response) {
          $('#result').text(response);
      },
      error: function(xhr, status, error) {
          console.error('Error fetching weather:', error);
          $('#result').text('Failed to fetch weather.');
      }
  });
}


function commander(cmd) {
  var commandParts = cmd.split(' '); // Split the command into parts
  
  var primaryCommand = commandParts[0].toLowerCase(); // Extract the primary command
  
  var args = commandParts.slice(1).join(' '); // Extract the arguments (if any)
  
  switch (primaryCommand) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "pass":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:gawandeachal24@gmail.com">gawandeachal24@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "sumfetch":
      loopLines(sumfetch, "", 80);
      break;
    case "getquote":
      addLine("Extracting wisdom from the ethers..", "color2", 0);
      // Call the getQuote function asynchronously
      getQuote().then(quoteData => {
        loopLines(linespace);
        addLine(quoteData.quote, "white", 0);
        loopLines(linespace);
      }).catch(error => {
        addLine('Error fetching quote data.', "error", 0);
      });
      break;

    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      loopLines(linespace, "", 80);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      loopLines(linespace, "", 80);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      loopLines(linespace, "", 80);
      newTab(github);
      break;
    case "resume":
      addLine("Opening resume..", "color2", 0);
      loopLines(linespace, "", 80);
      // Replace 'resume_url.pdf' with the actual URL of your PDF resume
      window.open('resume_url.pdf', '_blank');
      break;
    case "google":
      if (args === "") {
        addLine("You may search what you want after 'google' :)", "error", 0);
      } else {
        addLine("Opening Google..", "color2", 0);
        loopLines(linespace, "", 80);
        window.open(`https://google.com/search?q=${args}`);
      }
      break;
    case "youtube":
      if (args === "") {
        addLine("Please enter search terms after 'youtube'.", "error", 0);
        loopLines(linespace, "", 80);
      } else {
        addLine("Opening YouTube..", "color2", 0);
        loopLines(linespace, "", 80);
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(args)}`);
      }
      break;
    default:
      loopLines(defaulter, "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
