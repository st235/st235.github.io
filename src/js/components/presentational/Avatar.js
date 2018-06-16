import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
    render() {
        const { url, altText } = this.props;
        return <img className="avatar" src={url} alt={altText} />
    }
};

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};
