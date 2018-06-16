import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notes extends Component {
    render() {
        const { title, date, tags } = this.props;

        return <div className="note">
                <p className="title">{title}</p>
                <p className="extra">{`${date} • ${tags.join(', ')}`}</p>
               </div>
    }
}

Notes.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
}
