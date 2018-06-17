import React, { Component } from 'react';
import PropTypes from 'prop-types';

const JOINER = ', ';

export default class TagsLayout extends Component {
    render() {
        const { tags, onTagClick = e => {} } = this.props;

        return this._obtainTags(tags, onTagClick);
    }

    _obtainTags(tags, clickCallback) {
        return tags.map((e, i) => {
            const tag = this._isLastTag(tags, i) ? e : e + JOINER;
            return <span className="tag" onClick={ () => clickCallback(e) }>{tag}</span>
        });
    }

    _isLastTag(tags, position) {
        return tags.length === position + 1;
    }
}

TagsLayout.propTypes = {
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func
}
