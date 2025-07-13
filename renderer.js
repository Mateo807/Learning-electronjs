const information = document.getElementById('info')

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// Handle the 'ping' IPC call and display the response
const getPingResponse = async () => {
    const response = await window.versions.ping();
    console.log('Ping response:', response);
}

getPingResponse();