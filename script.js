// script.js — untuk KYEE Hosting

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = services.map(service => `
        <div class="service-card">
            <img src="${service.image}" alt="${service.name}" class="service-img">
            <div class="service-info">
                <h3 class="service-title">${service.name}</h3>
                <p class="service-desc">${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <a href="service.html?id=${service.id}" class="btn-service">Hubungi Kami untuk Harga Spesial!</a>
            </div>
        </div>
    `).join('');
}

// Dark Mode
function initDarkMode() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleBtn.textContent = '🌙';
        }
    });
}