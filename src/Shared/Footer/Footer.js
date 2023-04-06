import React from 'react';
import logo from '../../assets/Blue_Modern_Business_Corporate_Logo__2_-removebg-preview.png'
import instaLogo from '../../assets/insta_logo-removebg-preview.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer w-full'>
            <footer class="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img src={logo} style={{ width: '50px' }} alt=''></img>
                    <p>Programming Psycho Ltd.<br />©All rights reserved</p>
                </div>
                <div>
                    <span class="footer-title">Social</span>
                    <div class="grid grid-flow-col gap-4">
                        <a target="_blank" href='https://www.youtube.com/channel/UCzQAGmO5tdYSnpySwS2U5kw'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100090946096286"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <a target="_blank" href="https://www.instagram.com/programmingpsycho1/"><img style={{ width: '30px' }} src={instaLogo} alt=""></img></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;