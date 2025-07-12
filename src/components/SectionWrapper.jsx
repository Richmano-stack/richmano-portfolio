import React from 'react';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} style={{ padding: '4rem 1rem' }}>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
