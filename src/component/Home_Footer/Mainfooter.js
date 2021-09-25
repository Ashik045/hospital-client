import React from 'react';
import Footer from '../Footer/Footer';

const withoutName = [
    { name: 'Emergency Dental Care', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Treatment of Personal Diseases', link: '/emerjency' },
];

const Services = [
    { name: 'Emergency Dental Care', link: '/emerjency' },
    { name: 'Check Up' },
    { name: 'Treatment of Personal Diseases', link: '/emerjency' },
    { name: 'Tooth Extraction', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
];

const OurHelth = [
    { name: 'Emergency Dental Care', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Treatment of Personal Diseases', link: '/emerjency' },
    { name: 'Tooth Extraction', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Emergency Dental Care', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
    { name: 'Treatment of Personal Diseases', link: '/emerjency' },
];

const address = [
    { name: 'New York - 101010', link: '/emerjency' },
    { name: 'Hudson Yards', link: '/emerjency' },
    { name: 'Check Up', link: '/emerjency' },
];

const Mainfooter = () => (
    <footer className="footer-section ">
        <div className="container my-5">
            <footer className="row py-4">
                <Footer key={1} footerTitle="" footerItems={withoutName} />
                <Footer key={2} footerTitle="Our Service" footerItems={Services} />
                <Footer key={3} footerTitle="Our Helth" footerItems={OurHelth} />
                <Footer key={4} footerTitle="Our Address" footerItems={address} />
            </footer>
            <div className="copy-right text-center my-4">
                <p>
                    <b>@Copiright {new Date().getFullYear()} Lorem, ipsum dolor.</b>
                </p>
            </div>
        </div>
    </footer>
);

export default Mainfooter;
