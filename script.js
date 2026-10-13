// Theme Toggle Function (Light / Dark)
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        icon.className = 'fa-solid fa-sun';
        document.body.className = "bg-slate-50 text-slate-900 font-sans antialiased";
    } else {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        icon.className = 'fa-solid fa-moon';
        document.body.className = "bg-slate-950 text-slate-100 font-sans antialiased";
    }
}

// Color Palette Switcher Function
function changePalette(paletteName) {
    document.documentElement.setAttribute('data-palette', paletteName);
}

// Certification Filter Function
function filterCerts(category) {
    const cards = document.querySelectorAll('.cert-card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Interactive Terminal CLI Logic
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');

if (terminalInput) {
    terminalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const cmd = terminalInput.value.trim().toLowerCase();
            appendTerminalOutput(`➜ ~ ${terminalInput.value}`);
            processCommand(cmd);
            terminalInput.value = '';
        }
    });
}

function appendTerminalOutput(text, isHtml = false) {
    const div = document.createElement('div');
    if (isHtml) {
        div.innerHTML = text;
    } else {
        div.textContent = text;
    }
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function processCommand(cmd) {
    switch(cmd) {
        case 'help':
            appendTerminalOutput('Available commands: <span class="text-emerald-400">about, skills, certs, contact, clear</span>', true);
            break;
        case 'about':
            appendTerminalOutput('Mushahid Ali Kazmi: IT Support Specialist, Cybersecurity Analyst & Full-Stack Developer studying at Virtual University of Pakistan[cite: 4].');
            break;
        case 'skills':
            appendTerminalOutput('Skills: IT Support, TCP/IP, Cybersecurity, Fortinet Firewalls, C#/.NET, Systems Diagnostics, Help Desk[cite: 4].');
            break;
        case 'certs':
            appendTerminalOutput('Over 77+ certifications completed from IBM, Google, Microsoft, Cisco, ISC2, and Fortinet!');
            break;
        case 'contact':
            appendTerminalOutput('Email: mushahid.ssaak7610@gmail.com | Phone: +92 340 8825529[cite: 1]');
            break;
        case 'clear':
            terminalBody.innerHTML = '';
            break;
        case '':
            break;
        default:
            appendTerminalOutput(`Command not recognized: ${cmd}. Type 'help' for available commands.`);
    }
}
