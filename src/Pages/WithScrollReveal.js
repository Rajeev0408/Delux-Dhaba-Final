// WithScrollReveal.js
import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const WithScrollReveal = (WrappedComponent) => {
 return (props) => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) {
        ScrollReveal().reveal(ref.current, {
          // Your ScrollReveal options here
          duration: 2000,
          interval: 200,
        });
      }
    }, []);

    return <WrappedComponent ref={ref} {...props} />;
 };
};

export default WithScrollReveal;
