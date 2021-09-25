import React from 'react';

const Footer = (props) => {
    const { footerTitle, footerItems, children } = props;
    return (
        <div className="col-sm-3">
            <h4>{footerTitle || ' '}</h4>
            <ul className="list-unstyled">
                {footerItems.map((value, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index} className="text-left text-secondary">
                        {value.name}
                    </li>
                ))}
            </ul>
            {children && children}
        </div>
    );
};

export default Footer;
