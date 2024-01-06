
const button = document.getElementById('Generate-btn')

const generateCode = () => {

    const url = document.getElementById('link-input').value;
    const Qr_Code = document.getElementById('Qr_Code');


    Qr_Code.innerHTML = ''
    
    var New_QrCode = new QRCode('Qr_Code', {
        text: url,
        width: 128,
        height: 128,
        colorDark: '#000000'
    })   
}

button.addEventListener('click', generateCode)