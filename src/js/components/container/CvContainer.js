import React, { Component } from 'react';

import GeneralInfoContainer from './GeneralInfoContainer';
import NotesContainer from './NotesContainer';
import AppsContainer from './AppsContainer';

export default class CvContainer extends Component {
    render() {
        return <div className="container cvcontainer">
                <GeneralInfoContainer />
                <NotesContainer />
                <AppsContainer />
               </div>;
    }
}