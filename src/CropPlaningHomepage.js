import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Select, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class CropPlaningHomepage extends Component {
  render() {
    const values = queryString.parse(this.props.location.search)
    return (
      <div>
        Where are {values.name}
        <Modal />
        <Select options={[{ text: 'Moron', value: 'Moron' }]} />
      </div>
    )
  }
};

export default withRouter(CropPlaningHomepage);