import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DataHelper from '../../data/DataHelper';

const JOINER = ', ';
const UNSELECTED = -1;

export default class TagsLayout extends Component {
    render() {
        const { tags, classFamily, defaultSelected, onTagClick = e => {} } = this.props;
        const selectedItem = tags.indexOf(defaultSelected);
        return this._obtainTags(tags, classFamily, selectedItem, onTagClick);
    }

    _obtainTags(tags, classFamily, selectedItem, clickCallback) {
        return tags.map((e, i) => {
            const isRef = DataHelper.isReference(e);
            const onClick = event => {
                event.preventDefault();

                if (i != selectedItem) {
                    clickCallback(e);
                    return;
                }
                clickCallback(null);
            }

            const tagValue = isRef ? DataHelper.resolveRefences(e) : e;
            const tag = this._isLastTag(tags, i) ? tagValue : tagValue + JOINER;

            let className = classFamily + " activated";
            if (i == selectedItem) className += " selected";

            return <span className={className} onClick={onClick}>{tag}</span>
        });
    }

    _isLastTag(tags, position) {
        return tags.length === position + 1;
    }
}

TagsLayout.propTypes = {
    classFamily: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    defaultSelected: PropTypes.string,
    onTagClick: PropTypes.func
}
