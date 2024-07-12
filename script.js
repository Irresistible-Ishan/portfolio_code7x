const NUM_ELEMENTS = 50; // Number of falling elements

// Function to create and animate falling elements
function createFallingElements() {
   const container = document.getElementById('falling-container');

   for (let i = 0; i < NUM_ELEMENTS; i++) {
       // Create a random falling element
       const element = document.createElement('div');
       element.className = 'falling-element';
       element.style.left = `${Math.random() * 80 + 10}%`; /* Random left position within the 20% on each side */
       element.style.animationDuration = `${Math.random() * 4 + 1}s`; // Randomize animation duration

       // Generate random content
       const content = generateRandomContent();
       element.textContent = content;

       // Random color
       element.style.color = generateRandomColor();

       container.appendChild(element);
   }
}

// Function to generate random content
function generateRandomContent() {
   const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?🖌️♟️🎲🌏🪨🧠💀🧏🤫';
   const sentences = [
       "Hello world!",
       "CODE7X",
       "Mathematics",
       "Science",
       "こんにちは",
       "नमस्ते",
       "Innovation",
       "Ideas",
       "Earth",
       "Peace",
       "Humanity",
       "Art",
       
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