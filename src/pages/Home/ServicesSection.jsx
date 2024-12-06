import React from 'react';
import { FaCar, FaMoneyBill, FaHeadset, FaLock } from 'react-icons/fa';

const ServicesSection = () => {
    return (
        <section className="services spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="text-center services__item">
                            <FaCar size={32} />
                            <h6 className='mt-1'>Free Shipping</h6>
                            <p>For all orders over $99</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="text-center services__item">
                            <FaMoneyBill size={32} />
                            <h6 className='mt-1'>Money Back Guarantee</h6>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="text-center services__item">
                            <FaHeadset size={32} />
                            <h6 className='mt-1'>Online Support 24/7</h6>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="text-center services__item">
                            <FaLock size={32} />
                            <h6 className='mt-1'>Payment Secure</h6>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
