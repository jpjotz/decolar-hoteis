const loginBtn = document.getElementById('login-btn');
const loadingDiv = document.getElementById('loading');
loginBtn.addEventListener('click', () => {
    loadingDiv.classList.remove('hidden');

    setTimeout(() => {
    window.location.href = './decolar.html'    
    }, 2000);
});

