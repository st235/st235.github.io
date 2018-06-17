import React, { Component } from 'react';

import GeneralInfoContainer from './GeneralInfoContainer';
import NotesContainer from './NotesContainer';
import AppsContainer from './AppsContainer';

import DataHelper from '../../data/DataHelper';

const findInArray = (a = [], t) => {
    if (!t) return a;
    return a.find(i => i.toLowerCase() === t.toLowerCase());
}

const findTagInAppsItems = (a, t) => {
    return a.filter(i => findInArray(i.tags, t));
}

export default class CvContainer extends Component {
    constructor(props) {
        super(props);
        this._onTagsFilter = this._onTagsFilter.bind(this);

        this.state = {
            apps: DataHelper.getValue('apps.items'),
            libs: DataHelper.getValue('libs.items'),
            notes:  DataHelper.getValue('notes.items')
        }
    }

    _onTagsFilter(tag) {
        this.setState({
            apps: findTagInAppsItems(DataHelper.getValue('apps.items'), tag),
            libs: findTagInAppsItems(DataHelper.getValue('libs.items'), tag),
            notes: findTagInAppsItems(DataHelper.getValue('notes.items'), tag)
        });
    }

    render() {
        const { apps, libs, notes } = this.state;

        return <div className="container cvcontainer">
                <GeneralInfoContainer onFilter={this._onTagsFilter} />
                <NotesContainer notes={notes} />
                <AppsContainer apps={apps} libs={libs} />
               </div>;
    }
}
