const ButtonReporte = document.getElementById('Reporte');
const ButtonPeticion = document.getElementById('Peticion');
const reportContainer = document.getElementById('reportContainer');
const reportPanel = document.getElementById('reportForm');
const cancelReport = document.getElementById('cancelReport');

function openReport(){
    ButtonPeticion.style.display = 'none';
    ButtonReporte.disabled = true;
    reportPanel.classList.add('show');
    reportContainer.setAttribute('aria-hidden','false');
    document.getElementById('username').focus();
}

function closeReport(){
    ButtonPeticion.style.display = '';
    ButtonReporte.disabled = false;
    reportPanel.classList.remove('show');
    reportContainer.setAttribute('aria-hidden','true');
}

ButtonReporte.addEventListener('click', () => {
    // toggle
    if(reportPanel.classList.contains('show')){
        closeReport();
    } else {
        openReport();
    }
});

cancelReport.addEventListener('click', (e) => {
    e.preventDefault();
    closeReport();
});

reportPanel.addEventListener('submit', (e) => {
    e.preventDefault();
    // placeholder submit handling
    const data = {
        username: document.getElementById('username').value,
        reason: document.getElementById('reason').value,
        issue: document.getElementById('issue').value
    };
    console.log('Reporte enviado (simulado):', data);
    alert('Reporte listo para enviar (simulado).');
    closeReport();
});