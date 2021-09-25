import React from 'react';
import doctor3 from '../../images/doctors3-removebg-preview (1).png';
import doctor4 from '../../images/doctors4-removebg-preview.png';
import doctor6 from '../../images/doctors6-removebg-preview.png';
import DoctorCard from '../DoctorCard/DoctorCard';
import './doctor.css';

const doctorDetails = [
    {
        id: 1,
        name: 'Dr. Nairobi',
        imgs: doctor4,
        title: 'Dental Expert',
        contact: '0172222222',
    },
    {
        id: 2,
        name: 'Dr. Tokyo',
        imgs: doctor3,
        title: 'Skin Care',
        contact: '0134442222',
    },
    {
        id: 2,
        name: 'Dr. Hensinki',
        imgs: doctor6,
        title: 'Corona Service',
        contact: '013221111111',
    },
];

const Doctor = () => (
    <section className="doctorSec">
        <div className="dHeader text-center my-4">
            <h2>Our Doctors</h2>
        </div>

        <div className="doctorRow">
            {doctorDetails.map((docDetails) => (
                <DoctorCard key={docDetails.id} docDetails={docDetails} />
            ))}
        </div>
    </section>
);

export default Doctor;
