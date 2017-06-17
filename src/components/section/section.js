import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './section.css';

export default class Section extends Component{
	render() {
		return (
			<Grid className='section'>
		    <Row className="show-grid">
		      <Col xs={12}>
		      	<h2>{this.props.sectionTitle}</h2>
		      </Col>
		    </Row>

		    <Row className="show-grid">
		     		{this.props.children}
		     </Row>
		  </Grid>
		)
	}
}