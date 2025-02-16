document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to My Personal Homepage!");
  
    // smooth transition
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // randomly fetch pictrue of dogs
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>Random Dog Picture</h2>
      <p>Click the button below to see a random dog picture!</p>
    `;
  
    const button = document.createElement('button');
    button.textContent = 'Get Random Dog Picture';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#f78fb3';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
  
    const img = document.createElement('img');
    img.style.display = 'none';
    img.style.marginTop = '20px';
    img.style.maxWidth = '100%';
  
    section.appendChild(button);
    section.appendChild(img);
    document.body.appendChild(section);
  
    button.addEventListener('click', () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          img.src = data.message;
          img.style.display = 'block';
        })
        .catch(error => console.error('Error fetching dog image:', error));
    });
  });
  