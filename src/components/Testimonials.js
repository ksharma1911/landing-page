import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai"
const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">
                What they are saying
            </h1>
            <p className="primary-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis omnis quam asperiores illo cumque officia quia facere voluptate reiciendis distinctio ab sunt voluptatem ipsum cum, debitis, inventore animi quos.
            </p>
        </div>
        <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit ad iusto quos fugiat esse, quidem voluptates doloremque quia pariatur aut cumque dolores ex. Corrupti pariatur aspernatur cum neque debitis quidem, atque iste eveniet expedita, nemo inventore earum.

                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </div>
    </div>
  );
};

export default Testimonials;