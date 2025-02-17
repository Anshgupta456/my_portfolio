import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import './Contact.css'
import Footer from '../../components/Footer';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = (e) => {
  e.preventDefault();
  
  if( !formData.from_name || !formData.reply_to || !formData.message){
    setNotDone(true);
  }
  else{
    emailjs
      .sendForm(
        "service_7w1xpfn",
        "template_qoaltwy",
        form.current,
        "VoWkB6VBWqbolT4Bw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  }
  
  return (
    <div className='contact-form'>
      <div className='section-title'>Get in Touch</div>
      <div className="section-tagline"><span style={{ color: 'yellow'}}>Contact</span> me</div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className='user' placeholder='Name' onChange={handleChange} />
          <input type="email" name="reply_to" className='user' placeholder='Email' onChange = {handleChange} />
          <textarea name= "message" onChange={handleChange} placeholder="Write your message" className='user' />
          <span className={notDone ? 'not-done' : 'hidden'}> {notDone && "Please, fill all the input fields"}</span>
          <button type='submit' className='button' disabled={done}>Send</button>
          <span className='done'>{done && "Thanks for contacting me, the mail has reached out to me, I'll get back to you, Connect with me on Linkedin"}</span>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
