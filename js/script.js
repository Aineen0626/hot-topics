const container = document.getElementById('main-content');
const links = document.querySelectorAll('nav a');
let url = '';

const loadContent = (urlFeed) => {
    fetch(`partials/${urlFeed}.html`)
    .then(response => response.text())
    .then(data => {
        container.innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
};

loadContent('home');

const selectContent = (event) => {
    event.preventDefault();
    const link = event.target;
    const url = link.getAttribute('href');
    loadContent(url);
};

links.forEach(link => {
    link.addEventListener('click', selectContent);
});
