import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './buisnessInfo.css';

const infoDetails = [
    {
        id: 1,
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        icon: <AccessTimeFilledIcon sx={{ fontSize: 40 }} />,
        backGround: 'primary',
    },
    {
        id: 2,
        title: 'Visit Our Location',
        description: 'Dhaka, Uttora 23',
        icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
        backGround: 'dark',
    },
    {
        id: 3,
        title: 'Contact With Us',
        description: '+00801722222222',
        icon: <CallIcon sx={{ fontSize: 40 }} />,
        backGround: 'primary',
    },
];

const BuisnessInfo = () => (
    <section className="infoSec">
        {infoDetails.map((info) => (
            <InfoCard key={info.id} info={info} />
        ))}
    </section>
);

export default BuisnessInfo;
