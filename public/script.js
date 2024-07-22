// document.getElementById('qr-form').addEventListener('submit', async (event) => {
//     event.preventDefault();
    
//     const purpose = document.getElementById('purpose').value;
//     const url = document.getElementById('url').value;

//     const qrImage = document.getElementById('qr-image');
//     const downloadLink = document.getElementById('download-link');

//     qrImage.src = `/qr?url=${encodeURIComponent(url)}`;
//     qrImage.style.display = 'inline-block';
//     downloadLink.href = qrImage.src;
//     downloadLink.style.display = 'inline';
//     downloadLink.download = `${purpose}.png`;
// });





// document.getElementById('qr-form').addEventListener('submit', async (event) => {
//     event.preventDefault();
    
//     const purpose = document.getElementById('purpose').value;
//     const url = document.getElementById('url').value;

//     const qrImage = document.getElementById('qr-image');
//     const downloadLink = document.getElementById('download-link');
//     const downloadContainer = document.getElementById('download-container');

//     qrImage.src = `/qr?url=${encodeURIComponent(url)}`;
//     qrImage.style.display = 'block';
//     downloadLink.href = qrImage.src;
//     downloadContainer.style.display = 'block';
//     downloadLink.download = `${purpose}.png`;
// });



document.getElementById('qr-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const purpose = document.getElementById('purpose').value;
    const url = document.getElementById('url').value;

    const qrImage = document.getElementById('qr-image');
    const downloadButton = document.getElementById('download-button');

    qrImage.src = `/qr?url=${encodeURIComponent(url)}`;
    qrImage.style.display = 'block';
    downloadButton.style.display = 'inline-block';
    
    downloadButton.onclick = () => {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = `${purpose}.png`;
        link.click();
    };
});
