function showPage(id) {
  const sections = ['home', 'about', 'survey', 'admin', 'login'];
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      element.classList.add('hidden');
    }
  });

  if (id === 'admin' && !sessionStorage.getItem('isAdmin')) {
    alert('You are not registered as admin');
    return;
  }

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }
}

function handleLogin() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const authKey = document.getElementById('authKey').value;

  if (
    username === 'Mmochi' &&
    email === 'Ilovemikaii18@gmail.com' &&
    password === 'IloveMikaii18' &&
    confirmPassword === 'IloveMikaii18' &&
    authKey === 'mikamylove'
  ) {
    sessionStorage.setItem('isAdmin', true);
    alert('Login successful!');
    showPage('admin');
  } else {
    alert('Incorrect login credentials');
  }
}