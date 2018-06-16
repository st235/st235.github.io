import React, { Component } from 'react';

import Header from '../presentational/Header';
import App from '../presentational/App';

import DataHelper from '../../data/DataHelper';

export default class AppsContainer extends Component {
    render() {
        return <div className="row">
                {this._obtainSubContainer(DataHelper.getValue('apps.title'), DataHelper.getValue('apps.items'))}
                {this._obtainSubContainer(DataHelper.getValue('libs.title'), DataHelper.getValue('libs.items'))}
               </div>;
    }

    _obtainSubContainer(title, items = []) {
        return <div className="col-lg-6 col-xs-6 col-md-6">
                 <div className="col-lg-12 col-md-12"><Header text={title} size="lg" /></div>
                 <div className="row">
                 {items.map(e => <div className="col-lg-4 col-md-4 col-xs-4"><App title={e.title} icon={e.icon} tags={e.tags} /></div>)}
                 </div>
               </div>;
    }
}