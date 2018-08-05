import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleInputChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    const { searchGists } = this.props;
    const { search } = this.state;

    searchGists(search);
  }


  render() {
    return (
      <Container className="mb-4">
        <Row>
          <Col md={12}>
            <form name="searchForm" className="search-form" onSubmit={this.handleSumbit}>
              <div className="input-group input-group-lg">
                <input
                  name="search"
                  className="form-control"
                  placeholder="Search..."
                  type="text"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <span role="img" aria-label="Emoji">
                    🔍
                    </span>
                  </button>
                </span>
              </div>
            </form>
            <hr className="taller" />
          </Col>
        </Row>
      </Container>
    );
  }
}

Search.propTypes = {
  searchGists: PropTypes.func.isRequired,
};

export default Search;
