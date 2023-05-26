import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
        <div className="description">
          <h2>John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum auctor tellus a tristique.
            Suspendisse eget eros et quam varius semper. Nulla lobortis odio id pharetra vestibulum. Sed convallis
            sodales tristique. Integer pulvinar felis sit amet tortor facilisis, sed rhoncus turpis faucibus.
          </p>
          <p>
            Sed scelerisque orci ut dolor fringilla aliquam. Duis sit amet commodo nisl, id viverra nisl. Nulla facilisi.
            Nullam varius nulla ac quam fringilla, eu scelerisque turpis tincidunt. In nec sem in enim ultricies
            pulvinar. Quisque nec ex justo. Integer interdum efficitur magna sed sagittis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;