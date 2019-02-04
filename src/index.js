
import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('div', {}, {className: 'me'},
    React.createElement('h1', {}, 'an awsome person'),
    React.createElement('p', {}, 'who is learning React'),
    React.createElement('ul', {}, {className: 'my-interests'},
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream')
    )
  )


// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
