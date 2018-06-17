import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../presentational/Header';
import Note from '../presentational/Note';

import DataHelper from '../../data/DataHelper';

export default class NotesContainer extends Component {
    render() {
        const { notes } = this.props;

        return <section className="row">
                <div className="col-lg-12 col-md-12 col-s-12 col-xs-12"><Header text={DataHelper.getValue('notes.title')} size="md" /></div>
                {this._generateNotesAndSpeaks(notes)}
               </section>;
    }

    _generateNotesAndSpeaks(items) {
        return items.map((e, i) => (
        <div key={`ns_${i}`} className="col-lg-3 col-md-3 col-s-6 col-xs-12">
            <Note title={e.title} date={e.date} tags={e.tags} link={e.link} />
        </div>));
    }
}

NotesContainer.propTypes = {
    notes: PropTypes.array.isRequired
}
