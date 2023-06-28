import qrCode from '/public/image-qr-code.png';

function QR_code() {
  return (
    <div className='card'>
      <img src={qrCode} className="card_img" alt="QR_Code_Front-end_Mentor" />
      <p className="card_paragraph_1">Improve your front-end skills by building projects</p>
      <p className="card_paragraph_2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>

  )
}

export default QR_code