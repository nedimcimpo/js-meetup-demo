import React, { Component } from 'react';
import WizardForm from './WizardForm';
import showResults from './showResults';

class Index extends Component {
  render() {
    return (
      <div>
        <WizardForm onSubmit={showResults} />
      </div>
    );
  }
}

export default Index;