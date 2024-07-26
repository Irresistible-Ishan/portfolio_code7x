const NUM_ELEMENTS = 300; 

function createFallingElements() {
   const container = document.getElementById('falling-container');

   for (let i = 0; i < NUM_ELEMENTS; i++) {

       const element = document.createElement('div');
       element.className = 'falling-element';
       element.style.left = `${Math.random() * 80 + 10}%`; 
       
       element.style.animationDuration = `${Math.random()*4+2}s`;
       
       
       const content = generateRandomContent();
       element.textContent = content;

       element.style.color = "#000000";

       container.appendChild(element);
   }
}


function generateRandomContent() {
   const symbols = '.•°|';
   const sentences = [
       "🍃",
   ];

   const randomIndex = Math.floor(Math.random() * (symbols.length + sentences.length));
   if (randomIndex < symbols.length) {
       return symbols[randomIndex];
   } else {
       return sentences[randomIndex - symbols.length];
   }
}

function generateRandomColor() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

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


setInterval(updateClock, 1000);

document.getElementById('toggleNightMode').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  if (document.body.classList.contains('night-mode')) {
    this.textContent = '🔆';
  } else {
    this.textContent = '🌙';
  }
});

