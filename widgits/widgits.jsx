import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});

const App = function() {
  return (
    <div className="everything">
      <Clock />

      <Tabs tabsTitles={tabsTitles} />
    </div>
  );
};

const tabsTitles = [{ title: "Title 1", content: 'Content1' }, { title: "Title 2", content: 'Content2' }, { title: "Title 3", content: 'Content3' }];
