import React from 'react';

const IframeExample = () => {
  return (
    <div
      style={{
        display: 'flex',          // Enables flexbox
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',     // Centers vertically
        height: '100vh',          // Full viewport height for vertical centering
        flexDirection: 'column',  // Stacks elements vertically
      }}
    >
      <h1>Lands</h1>
      <iframe
        src="https://share.streampixel.io/674328acacd66cf1d6d01a06"
        title="Example Website"
        style={{
          width: '500%',           // Adjusted to be responsive
          height: '600px',        // Fixed height
          border: '1px solid #ccc',
        }}
      ></iframe>
    </div>
  );
};

export default IframeExample;
