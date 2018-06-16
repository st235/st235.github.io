import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MEDIUM_HEADER = 'md';
const LARGE_HEADER = 'lg';

export default class Header extends Component {
    render() {
        const { text, size } = this.props;
        const headerClassName = `header-${size}`;

        if (size == LARGE_HEADER) {
            return <h1 className={headerClassName}>{text}</h1>;
        }

        return <h2 className={headerClassName}>{text}</h2>;
    }
};

Header.propTypes = {
    size: PropTypes.oneOf([MEDIUM_HEADER, LARGE_HEADER]).isRequired,
    text: PropTypes.string.isRequired
};
