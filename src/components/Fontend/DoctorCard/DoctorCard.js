import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import '../Doctor/doctor.css';

const DoctorCard = ({ docDetails }) => (
    <div className="doctorCard mb-2">
        <img src={docDetails.imgs} alt={docDetails.title} />

        <h4 className="text-center my-4">{docDetails.name}</h4>
        <h6 className="text-center">{docDetails.title}</h6>

        <div className="contact">
            <PhoneIcon color="secondary" fontSize="small" />
            <p className="ms-2 text-muted">{docDetails.contact}</p>
        </div>
    </div>
);

export default DoctorCard;
