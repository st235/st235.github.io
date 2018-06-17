import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextUtils from '../../utils/TextUtils';

const TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default class App extends Component {
    render() {
        const { title, icon, tags, link } = this.props;
        const app = this._createApp(title, icon, tags);

        if (link && link != '') return <a target="_blank" href={link}>{app}</a>
        return app;
    }

    _createApp(title, icon, tags) {
        return <div className="app">
                {TextUtils.isEmpty(icon) ? <img className="icon" src={TRANSPARENT_IMAGE} /> : <img className="icon" src={icon} />}
                <p className="title">{title}</p>
                {tags}
            </div>
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    tags: PropTypes.element.isRequired,
    link: PropTypes.string
}
