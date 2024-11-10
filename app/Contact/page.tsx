import Image from "next/image"

function Contact(){
    return (
        <div className="contact">
            <br />
        <div className="contact-heading">
            <p>Contact Details</p>
            <br />
            </div>
            <div className="phone">
                <div className="phone-icon">
                <Image src="/images/download.png" alt="phone" width={80} height={80}/>
                </div>
             <p >&nbsp; 03052192763</p>
            </div>
        <br />
        <div className="email">
            <div className="email-icon">
        <Image src="/images/email.png" alt="phone" width={80} height={80}/>
          </div>
          <p > &nbsp; muskanf217@gmail.com</p>
        </div>
        </div>
    )
}export default Contact