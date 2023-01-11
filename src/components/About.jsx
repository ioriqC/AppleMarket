import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quia. Sit dolore,
              doloribus dolorem ducimus magnam, provident enim hic dignissimos aliquid at odit minus
              sunt dolores repudiandae amet dicta vitae, velit quae accusamus officiis saepe
              obcaecati. Consequuntur reprehenderit enim, repellendus obcaecati corporis velit
              consectetur dolor fuga? Commodi molestiae perspiciatis nam dicta doloribus vitae
              eveniet minus voluptatem excepturi exercitationem nulla doloremque illo quidem id
              corporis, odio dolor rem cum nemo reiciendis? Architecto atque fuga magni voluptatibus
              nesciunt obcaecati quidem quia quod deleniti sequi. Unde rem aut asperiores.
              Voluptatum, veniam nemo cumque tempore dolorum accusantium id consectetur deleniti
              libero voluptas temporibus alias?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about-us.png" width="500px" height="400px" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
