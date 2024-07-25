const NUM_ELEMENTS = 50; 

function createFallingElements() {
   const container = document.getElementById('falling-container');

   for (let i = 0; i < NUM_ELEMENTS; i++) {

       const element = document.createElement('div');
       element.className = 'falling-element';
       element.style.left = `${Math.random() * 80 + 10}%`; 
       
       element.style.animationDuration =  `${Math.random()*4+2}s`; 
       
       const content = generateRandomContent();
       element.textContent = content;

       element.style.color = "#000000"; //generateRandomColor();

       container.appendChild(element);
   }
}

// Function to generate random content
function generateRandomContent() {
   const symbols = '⚪';
   const sentences = [
       "",
   ];

   const randomIndex = Math.floor(Math.random() * (symbols.length + sentences.length));
   if (randomIndex < symbols.length) {
       return symbols[randomIndex];
   } else {
       return sentences[randomIndex - symbols.length];
   }
}

// Function to generate random color
function generateRandomColor() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

// Initialize falling elements when the page loads
window.onload = function() {
   createFallingElements();
};



function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2,'0')
    var time = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clockText').textContent = time;
}

// Update clock every second
setInterval(updateClock, 1000);



