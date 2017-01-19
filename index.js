const React = require('react');
const ReactDOM = require('react-dom');

const CoordinatesButton = require('./components/CoordinatesButton');

ReactDOM.render(
  <div>
    <CoordinatesButton />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
