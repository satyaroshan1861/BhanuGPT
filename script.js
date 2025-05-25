document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    
    const rudeResponses = [
        "Abba Roshan, nee questions ki nenu answer ivvala? Sare... Kadhu.",
        "Nijanga ee question aduguthunnava Roshan? Nenu bare cheyyalenu...",
        "Idhi nenu eroju vinna athipedda waste qustion. Nee nunchi chaala expect chesa.",
        
        "Alochisthunna Roshan... Ledhu, answer ivvadaniki naaku baddhakam.",
        "Wow Roshan, em boring question adigavu. Congrats.",
        "Nenu answer isthanu, kaani nenu break lo unna. Eppatiki.",
        "Nenu neeku Google la kanipisthunnana Roshan? Nuvve kanukko.",
        "Ee question naaku thakkuva Roshan. Inka baaga try cheyyali.",
        "Nenu samdhanam ivvagalanu Roshan, kaani nenu chaala busy ga unna",
        "Tharuvatha question Roshan. Lekapothe, inka questionlu aapey.",
        "Oh great, naa boyfriend anukuntunnadu nenu vadi samasyala gurinchi pattinchukuntanu ani.naaku asal interest ledhu.",
        "Neeku sahayam chesthanu Roshan, kaani adhi kashtam. Naaku ishtam ledhu.",
        "Kadhu ani chepthunna Roshan. Enduku ani adagaku, answer ivvadaniki naaku baddhakam.",
        "Hmm, interesting question, Roshan. Just kidding, kaadhu.",
        
        "Nenu answer ivvagalanu Roshan... kaani ivvanu. Daanito adjust avvu.",
        "Inthena neeku Roshan? Chi Chi. konchem manchivi adugu.",
        "Nenu answer ivvadaniki unna Roshan, helpful ga undadaniki kaadhu.",
        "Naaku kallu unte Roshan, ee question nunchi dooranga choose dhaanini."
    ];

    
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.innerHTML = `<p>${escapeHTML(message)}</p>`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        
       
        messageDiv.innerHTML = '<p class="typing-indicator">...</p>';
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        
       
        setTimeout(() => {
            messageDiv.innerHTML = `<p>${message}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000 + Math.random() * 1000); 
    }

    
    function getBotResponse() {
        
        const randomIndex = Math.floor(Math.random() * rudeResponses.length);
        return rudeResponses[randomIndex];
    }

   
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message !== '') {
            addUserMessage(message);
            userInput.value = '';
            
            
            setTimeout(() => {
                const botResponse = getBotResponse();
                addBotMessage(botResponse);
            }, 500);
        }
    }

    
    function escapeHTML(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    
    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    userInput.focus();
});