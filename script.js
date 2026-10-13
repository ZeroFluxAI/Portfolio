// Theme Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fa-solid fa-sun';
        text.textContent = 'Light Mode';
    } else {
        html.classList.add('dark');
        icon.className = 'fa-solid fa-moon';
        text.textContent = 'Dark Mode';
    }
}

// Modal Control for Specialization Certificates
function openCertModal(title, issuer, date) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMeta').textContent = `${issuer} • ${date}`;
    document.getElementById('certModal').classList.remove('hidden');
}

function closeCertModal() {
    document.getElementById('certModal').classList.add('hidden');
}

// Interactive Terminal Logic
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
            appendTerminalOutput('Available commands: <span class="accent-color font-bold">about, skills, specializations, contact, clear</span>', true);
            break;
        case 'about':
            appendTerminalOutput('Mushahid Ali Kazmi: IT Support Specialist, Cybersecurity Analyst & Software Engineer.');
            break;
        case 'skills':
            appendTerminalOutput('Skills: Fortinet Firewalls, Incident Response, Penetration Testing, C#/.NET, TCP/IP, SecOps.');
            break;
        case 'specializations':
            appendTerminalOutput('Specializations: Cyber Incident Response (Infosec), Full-Stack Developer (Microsoft), Cybersecurity Specialist (IBM & ISC2), Fortinet Network Security.');
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
