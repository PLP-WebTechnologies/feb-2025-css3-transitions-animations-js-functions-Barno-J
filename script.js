document.addEventListener('DOMContentLoaded', () => {
  const speedInput = document.getElementById('speed');
  const animImage = document.getElementById('animImage');
  const saveBtn = document.getElementById('savePreference');
  const animateBtn = document.getElementById('animateBtn');

  // Load stored speed on page load
  const savedSpeed = localStorage.getItem('animationSpeed');
  if (savedSpeed) {
    speedInput.value = savedSpeed;
    document.documentElement.style.setProperty('--animation-speed', savedSpeed + 's');
  }

  // Save user speed preference
  saveBtn.addEventListener('click', () => {
    const speed = speedInput.value;
    localStorage.setItem('animationSpeed', speed);
    document.documentElement.style.setProperty('--animation-speed', speed + 's');
    alert('Speed saved!');
  });

  // Animate image on button click
  animateBtn.addEventListener('click', () => {
    animImage.classList.remove('animate'); // Reset animation
    void animImage.offsetWidth; // Trigger reflow
    animImage.classList.add('animate');
  });
});

