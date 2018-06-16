import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TRANSPARENT_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default class App extends Component {
    render() {
        const { title, icon, tags } = this.props;

        return <div className="app">
                {(!icon || icon == "") ? <img className="icon" src={TRANSPARENT_IMAGE} /> : <img className="icon" src={icon} />}
                <p className="title">{title}</p>
                <p className="extra">{tags.join(', ')}</p>
               </div>
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    tags: PropTypes.array.isRequired
}
