import React, { Component } from 'react';

import Avatar from '../presentational/Avatar';
import Header from '../presentational/Header';
import ItemsList from '../presentational/ItemsList';
import TagsLayout from '../presentational/TagsLayout';

import DataHelper from '../../data/DataHelper';

export default class GeneralInfoContainer extends Component {
    render() {
        return <section className="row">
                   {this._obtainInfoSection()}
                   {this._obtainAvatarSection()}
               </section>;
    }

    _obtainInfoSection() {
        return <div className="col-lg-8 col-xs-8">
                <Header text={DataHelper.getValue('general.author.name')} size="lg" />
                <div className="row">
                 <div className="col-lg-4 col-xs-5">
                   <ItemsList jobs={DataHelper.getValue('general.info.jobs')} />
                 </div>
                 <div className="col-lg col-offset-lg-1 col-xs col-offset-xs-1">
                   <TagsLayout tags={DataHelper.getValue('general.info.scills')} />
                 </div>
                </div>
               </div>
    }

    _obtainAvatarSection() {
        return <div className="col-lg col-xs end-xs end-lg end-xs">
                <Avatar 
                    url={DataHelper.getValue('general.author.avatar')}
                    altText={DataHelper.getValue('general.author.avatarAltText')} />
               </div>
    }
}
