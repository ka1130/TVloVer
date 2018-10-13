import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShow } from 'redux/actions/showsActions';

class Show extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShow(id);
  }

  render() {
    const { id, name, image } = this.props.show;

    if (!image) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <figure>
          <img src={image.original} alt={name} />
          <figcaption>
            <h5>{name}</h5>
          </figcaption>
        </figure>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchShow }, dispatch)
);

const mapStateToProps = (state) => ({
  show: state.show.show,
  loading: state.show.loading,
  error: state.show.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
