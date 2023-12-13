/* eslint-disable react/no-unescaped-entities */
import './contactUs.css'

export const ContactUs = () => {
  return (
    <div className='contact-us'>
        <div className='header-box'>
            <h1 className='contact-heading'>What's on your mind?</h1>
        </div>
        <form className='form-box' action="/submit" method="post">
            <label htmlFor="email">Your email</label>
            <input type="text" id="email" name="email"/>

            <label htmlFor='message'>Your message</label>
            <textarea type='text' id="message" name="message" placeholder='Dear insurance company ...'/>
            <div className='form-btn-area'>
            <button type="submit" className='msg-btn'>Send message</button>
            </div>
        </form>
    </div>
  )
}
