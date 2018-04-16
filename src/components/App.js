import React from 'react';
import YeomanImage from './YeomanImage';
import Paragraph from './Paragraph/Paragraph.js';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
          <Paragraph/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
