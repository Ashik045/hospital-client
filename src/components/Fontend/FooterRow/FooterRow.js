import React from 'react';
import '../Footer/footer.css';

const FooterRow = ({ footerText, footerTitle }) => (
    <div className="fCols">
        <div className="fHeader">
            <h3 style={{ color: '#12D0D5', margin: '30px 0 30px 30px' }}>{footerTitle || ''}</h3>
        </div>
        <div className="title">
            <ul>
                {footerText.map((textDetails) => (
                    <li>
                        <a href={textDetails.link}>{textDetails.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default FooterRow;
