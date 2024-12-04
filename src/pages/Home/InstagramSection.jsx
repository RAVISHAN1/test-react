import React from 'react';
import insta1 from '../../assets/img/instagram/insta-1.jpg';
import insta2 from '../../assets/img/instagram/insta-2.jpg';
import insta3 from '../../assets/img/instagram/insta-3.jpg';
import insta4 from '../../assets/img/instagram/insta-4.jpg';
import insta5 from '../../assets/img/instagram/insta-5.jpg';
import insta6 from '../../assets/img/instagram/insta-6.jpg';

const instagramData = [
  { id: 1, image: insta1, handle: '@ashion_shop' },
  { id: 2, image: insta2, handle: '@ashion_shop' },
  { id: 3, image: insta3, handle: '@ashion_shop' },
  { id: 4, image: insta4, handle: '@ashion_shop' },
  { id: 5, image: insta5, handle: '@ashion_shop' },
  { id: 6, image: insta6, handle: '@ashion_shop' },
];

const InstagramSection = () => {
  return (
    <div className="instagram">
      <div className="container-fluid">
        <div className="row">
          {instagramData.map((item) => (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div className="instagram__item" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <a href="#">{item.handle}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
