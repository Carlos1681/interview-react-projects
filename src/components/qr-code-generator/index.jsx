import { useState } from 'react'
import QRCode from 'react-qr-code'
import './styles.css'

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }

    return (<div>
        <h1>Gerador de QR Code</h1>
        <div className='input-btn'>
            <input onChange={(e) => setInput(e.target.value)}
                type='text'
                name='qr-code'
                placeholder="Insira texto ou url"
                value={input} />
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Gerar</button>
        </div>
        <div>
            <QRCode
                id='qr-value'
                value={qrCode}
                size={400}
                bgColor='#ffffff'
            />
        </div>
    </div>)

}