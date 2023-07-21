import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram,FaYoutube,FaTelegramPlane,FaDiscord} from 'react-icons/fa'
import Footer from '../Footer'
const ContactUs = () => {
  return (
   <div>
     <div className=' grid grid-cols-1 lg:grid-cols-2 mx-10'>
      <div className='flex flex-col items-center gap-10'> 
        <h1 className='text-4xl font-bold'>Hi, how can we help?</h1>
        <img className="block w-1/2 mx-auto" src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/1008-travelv13.png?v=1665150506" alt="1008-travelv13.png"></img>
      </div>
      <div>
        <form action="" className='mx:5 md:mx-10 my-5 p-5 md:p-10 flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <label className='f font-input font-medium' htmlFor="name">Your Name*</label>
                <input type="text" className='p-1 border font-input border-gray-400 focus:outline-none focus:ring-0' id='name' placeholder='Type your name'/>
            </div>
            <div className="flex flex-col gap-3">
                <label className='f font-input font-medium' htmlFor="email">Email*</label>
                <input type="email" id='email' className='p-1 border font-input border-gray-400 focus:outline-none focus:ring-0' placeholder='Type your email' />
            </div>
            <div className="flex flex-col gap-3">
                <label className='f font-input font-medium' htmlFor="phone">Phone*</label>
                <input type="number" id='phone' className='p-1 border font-input border-gray-400 focus:outline-none focus:ring-0' placeholder='Type your phone number' />
            </div>
            <div className='flex flex-col gap-3'>
                <label className='f font-input font-medium' htmlFor="message">Message*</label>
                <textarea className='p-1 border font-input border-gray-400 focus:outline-none focus:ring-0 ' name="message" id="message" cols="20" rows="7"></textarea>
            </div>
            <button type='submit' className='p-3 bg-[#87c040] text-white rounded-lg w-24 '>Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    {/* <footer className='bg-black text-white w-screen'>
    <div className='px-10 mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10 '>
    <div className=' items-start flex flex-col gap-5'>
        <img className="h-14 w-24" src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/3412-frame-427321994.png?v=1664187660" alt="3412-frame-427321994.png"/>
        <span className='text-[#fafaf7] text-[14px] font-thin pl-5'>
            PandaMR is a metaverse designed for the needs of businesses and communities
            3D virtual solutions are optimized for companies, educational entities, arts and entertainment industries.
        </span>
        </div>
        <div>
            <h1 className='text-3xl text-white mb-5'>Support</h1>
            <ul className='flex flex-col font-thin text-[#fafaf7] gap-3'>
                <li>
                    <a href="https://www.pandamr.com/contact-us" itemProp='url' data-page-type='pageBlank'>Contact Us</a>
                </li>
                <li>
                    <a href="https://www.pandamr.com/faq" itemProp='url' data-page-type='pageBlank'>FAQ</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 className='text-3xl text-white mb-5'>Resources</h1>
            <ul className='flex flex-col font-thin text-[#fafaf7] gap-3'>
                <li>
                    <a href="https://www.pandamr.com/blog" itemProp='url' data-page-type='pageArticles'>Blog</a>
                </li>
                <li>
                    <a href="ttps://www.pandamr.com/careers" itemProp='url' data-page-type='pageBlank' >Careers</a>
                </li>
                <li>
                    <a href="https://www.pandamr.com/case-studies" itemProp='url' data-page-type='pageBlank'>Case Studies</a>
                </li>
            </ul>
        </div>
        <div>
            <h1 className='text-3xl text-white mb-5'>Legal</h1>
            <ul className='flex flex-col font-thin text-[#fafaf7] gap-3'>
                <li>
                    <a href="https://www.pandamr.com/privacy-policy" itemProp='url' data-page-type='pageBlank'>Privacy Policy</a>
                </li>
                <li>
                    <a href="https://www.pandamr.com/terms-and-conditions" itemProp='url' data-page-type='pageBlank'>Terms and Conditions</a>
                </li>
                <li>
                    <a href="https://www.pandamr.com/cookie-policy" itemProp='url' data-page-type='pageBlank'>Cookie Policy</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='flex flex-col items-center gap-3 justify-center py-10'>
        <ul className='grid grid-cols-7 gap-5' >
            <li>
                <a href="https://www.facebook.com/PandamrMetaverse" target='_blank' aria-label='facebook'><FaFacebookF className='text-2xl text-icon-color '/></a>
            </li>
            <li>
                <a href="https://twitter.com/Metaverse_pmr" target='_blank' aria-label='twitter'><FaTwitter className="text-2xl text-icon-color"/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/pandamr/" target='_blank' aria-label='linkedin'><FaLinkedin className="text-2xl text-icon-color"/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/the_pandamr" target='_blank' aria-label='instagram'><FaInstagram className="text-2xl text-icon-color"/></a>
            </li>
            <li>
                <a href="https://youtube.com/@PandaMR_Metaverse" target='_blank' aria-label='youtube'><FaYoutube className="text-2xl text-icon-color"/></a>
            </li>
            <li>
                <a href="https://t.me/Pandamr_Metaverse" target='_blank' aria-label='telegram'><FaTelegramPlane className="text-2xl text-icon-color"/></a>
            </li>
            <li>
                <a href="https://discord.gg/pmrmetaverse" target='_blank' aria-label='discord'><FaDiscord className="text-2xl text-icon-color"/></a>
            </li>
        </ul>
        <div>
            <p>Copyright PandaMR 2023. All rights reserved</p>
        </div>
    </div>
    </footer> */}
   </div>
  )
}

export default ContactUs