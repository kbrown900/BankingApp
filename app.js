  function updateRoute() {
    const template = document.getElementById(templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
  }
  updateRoute('dashboard');


