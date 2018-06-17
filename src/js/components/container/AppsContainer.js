import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../presentational/Header';
import App from '../presentational/App';

import DataHelper from '../../data/DataHelper';

export default class AppsContainer extends Component {
    render() {
        const { apps, libs } = this.props;

        return <div className="row">
                {this._obtainSubContainer(DataHelper.getValue('apps.title'), apps)}
                {this._obtainSubContainer(DataHelper.getValue('libs.title'), libs)}
               </div>;
    }

    _obtainSubContainer(title, items = []) {
        return <div className="col-lg-6 col-xs-6 col-md-6 col-s-12 col-xs-12">
                 <div className="col-lg-12 col-md-12  col-s-12 col-xs-12"><Header text={title} size="lg" /></div>
                 <div className="row">
                 {items.map(e => <div className="col-lg-4 col-md-4 col-s-6 col-xs-12"><App title={e.title} icon={e.icon} tags={e.tags} link={e.link}/></div>)}
                 </div>
               </div>;
    }
}

AppsContainer.propTypes = {
    apps: PropTypes.array.isRequired,
    libs: PropTypes.array.isRequired
}
