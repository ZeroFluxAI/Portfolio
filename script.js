// Theme Toggle Function (Light White/Indigo vs Dark Dark/Green)
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-sun';
        text.textContent = 'Light (Blue)';
    } else {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-moon';
        text.textContent = 'Dark (Green)';
    }
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
            appendTerminalOutput('Available commands: <span class="accent-color font-bold">about, skills, specializations, pm, certs, contact, clear</span>', true);
            break;
        case 'about':
            appendTerminalOutput('Mushahid Ali Kazmi: IT Support Specialist, Cybersecurity Analyst & Full-Stack Developer studying at Virtual University of Pakistan.');
            break;
        case 'skills':
            appendTerminalOutput('Skills: IT Support, TCP/IP, Cybersecurity, Fortinet Firewalls, C#/.NET, Systems Diagnostics, Help Desk.');
            break;
        case 'specializations':
            appendTerminalOutput('Top Specializations: Cyber Incident Response, Full-Stack Developer, IT Support, Cybersecurity Specialist, Network Security.');
            break;
        case 'pm':
            appendTerminalOutput('Project Management: IBM IT Project Manager Professional Certificate, CAPM practice exams, Scrum Master, Agile Development.');
            break;
        case 'certs':
            appendTerminalOutput('Over 77+ verified certifications completed from IBM, Google, Microsoft, Cisco, ISC2, and Fortinet!');
            break;
        case 'contact':
            appendTerminalOutput('Email: mushahid.ssaak7610@gmail.com | Phone: +92 340 8825529');
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
