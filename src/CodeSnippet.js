// src/CodeSnippet.js

import React from 'react';

const CodeSnippet = () => {
  return (
    <div>
      <pre>
        <code>
          {`
            function helloWorld() {
              console.log('Hello, world!');
            }
            
            helloWorld();
          `}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
