import React, { Component } from 'react';
import PropTypes from 'prop-types';

const JOINER = ', ';
const UNSELECTED = -1;

export default class TagsLayout extends Component {
    constructor(props) {
        super(props);
        this._selectItem = this._selectItem.bind(this);

        this.state = {
            selectedItem: UNSELECTED
        }
    }
    render() {
        const { tags, onTagClick = e => {} } = this.props;
        const { selectedItem } = this.state;
    
        return this._obtainTags(tags, selectedItem, onTagClick);
    }

    _selectItem(i) {
        const { selectedItem } = this.state;

        const isUnselect = i == selectedItem;
        const selection = isUnselect ? UNSELECTED : i;

        this.setState({
            selectedItem: selection
        });

        return !isUnselect;
    }

    _obtainTags(tags, selectedItem, clickCallback) {
        return tags.map((e, i) => {
            const tag = this._isLastTag(tags, i) ? e : e + JOINER;
            let className = "tag";

            if (i == selectedItem) className += " selected";

            return <span className={className} onClick={ () => { 
                if (this._selectItem(i)) {
                    clickCallback(e);
                    return;
                }
                clickCallback(null);
            } }>{tag}</span>
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
