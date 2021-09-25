import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import FooterRow from '../FooterRow/FooterRow';
import './footer.css';

const footerCol1 = [
    { title: 'Emergency Service', link: '/emergency' },
    { title: 'Check Up', link: '/check' },
    { title: 'Tooth Extraction', link: '/check' },
    { title: 'Treathment of Personal diseases', link: '/check' },
];

const footerCol2 = [
    { title: 'Treathment of Personal diseases', link: '/emergency' },
    { title: 'Helth Tips', link: '/emergency' },
    { title: 'Tooth Extraction For Alult', link: '/emergency' },
    { title: 'Check Up', link: '/emergency' },
    { title: 'Look For Check Up', link: '/emergency' },
    { title: 'Check Up', link: '/emergency' },
];

const footerCol3 = [
    { title: 'Emergency Health Treatment', link: '/check' },
    { title: 'Check Up', link: '/check' },
    { title: 'Tooth Extraction', link: '/check' },
    { title: 'Check Up', link: '/check' },
    { title: 'Treathment of Personal diseases', link: '/check' },
    { title: 'Look For Check Up', link: '/check' },
];

const footerCol4 = [
    { title: 'Dhanmondi 22 road', link: '/check' },
    { title: 'Dhaka', link: '/check' },
];

const Footer = () => (
    <section className="footerSec">
        <div className="footerCol">
            <FooterRow key={1} footerTitle="" footerText={footerCol1} />
            <FooterRow key={2} footerTitle="Services" footerText={footerCol2} />
            <FooterRow key={3} footerTitle="Our Health" footerText={footerCol3} />
            <FooterRow key={4} footerTitle="Our Address" footerText={footerCol4} />
            <div className="icons">
                <ul>
                    <li>
                        <a href="//facebook.com">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="//facebook.com">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href="//facebook.com">
                            <GoogleIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <p className="text-center mt-4 mb-1" style={{ fontWeight: 'bold' }}>
            Copyright {new Date().getFullYear()}. ashik islam
        </p>
    </section>
);

export default Footer;
