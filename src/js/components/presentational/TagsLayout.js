import React, { Component } from 'react';
import PropTypes from 'prop-types';

const JOINER = ', ';

export default class TagsLayout extends Component {
    render() {
        const { tags } = this.props;

        return <p className="tags">{tags.join(JOINER)}</p>
    }
}

TagsLayout.propTypes = {
    tags: PropTypes.array.isRequired
}
