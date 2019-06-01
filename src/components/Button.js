import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit = value => {
    return value === 'engligh' ? 'Submit' : 'Voorleggen';
  };
  //   static contextType = LanguageContext;
  render() {
    console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        {value2 => (
          <button className={`ui button ${value2}`}>
            <LanguageContext.Consumer>
              {/* {value => this.renderSubmit(value)} */}
              {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
