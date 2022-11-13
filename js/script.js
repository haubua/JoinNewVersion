setURL('https://robert-hahn.developerakademie.net/smallest_backend_ever-master');

async function init() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
}

async function deleteBackend() {
    await backend.deleteItem('tasks')
}