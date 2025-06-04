// gatsby-browser.js
export const onRouteUpdate = ({ location, navigate }) => {
    if (location.pathname === '/en/' || location.pathname === '/en') {
      navigate('/');
    }
  };
  