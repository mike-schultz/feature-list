import React, { Component } from 'react';
import FeatureList from './components/FeatureList/FeatureList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
    };
  }
  render() {
    return (
      <div>
        <FeatureList items={this.state.features}/>
      </div>
    );
  }
  async componentDidMount() {
    try { 
      // Fetch the features from the 'api'
      const response = await fetch('/features.json');
      const features = await response.json();
      this.setState({
        features,
      });
      
    } catch(error) {
      // TODO: Out of scope for this exercise, but might pop an error modal to inform the user.
      console.log(error);
    }
  }
}

export default App;
