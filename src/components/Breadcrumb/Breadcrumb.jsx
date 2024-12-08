import React from 'react';

const Breadcrumb = ({ links = [] }) => {
    return (
        <div className="breadcrumb-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb__links">
                            {links.map((link, index) => (
                                <React.Fragment key={index}>
                                    {link.url ? (
                                        <a href={link.url}>
                                            {link.icon && <i className={`fa ${link.icon}`}></i>} {link.label}
                                        </a>
                                    ) : (
                                        <span>{link.label}</span>
                                    )}
                                    {index < links.length - 1 && <span> </span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
