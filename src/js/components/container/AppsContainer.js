import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagsLayout from './TagsLayout';
import Header from '../presentational/Header';
import App from '../presentational/App';

import DataHelper from '../../data/DataHelper';

export default class AppsContainer extends Component {
    render() {
        const { apps, libs, onFilter, selectedTag } = this.props;

        return <div className="row">
                {this._obtainSubContainer(DataHelper.getValue('apps.title'), apps, onFilter, selectedTag)}
                {this._obtainSubContainer(DataHelper.getValue('libs.title'), libs, onFilter, selectedTag)}
               </div>;
    }

    _obtainSubContainer(title, items, filterCallback, defaultSelectedTag) {
        return <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><Header text={title} size="lg" /></div>
                 <div className="row">
                 {items.map(e => {
                    const tags = <TagsLayout tags={e.tags} classFamily="extra" defaultSelected={defaultSelectedTag} onTagClick={filterCallback} />
                    return <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                               <App title={e.title} icon={e.icon} tags={tags} link={e.link}/>
                           </div>
                 })}
                 </div>
               </div>;
    }
}

AppsContainer.propTypes = {
    apps: PropTypes.array.isRequired,
    libs: PropTypes.array.isRequired,
    onFilter: PropTypes.func,
    selectedTag: PropTypes.string
}
