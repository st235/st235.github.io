import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagsLayout from './TagsLayout';
import Header from '../presentational/Header';
import Note from '../presentational/Note';

import DataHelper from '../../data/DataHelper';

export default class NotesContainer extends Component {
    render() {
        const { notes, onFilter, selectedTag } = this.props;

        return <section className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><Header text={DataHelper.getValue('notes.title')} size="md" /></div>
                {this._generateNotesAndSpeaks(notes, onFilter, selectedTag)}
               </section>;
    }

    _generateNotesAndSpeaks(items, filterCallback, defaultSelectedTag) {
        return items.map((e, i) => {
            const tags = <TagsLayout classFamily="extra" tags={e.tags} defaultSelected={defaultSelectedTag} onTagClick={filterCallback} />
            return (<div key={`ns_${i}`} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Note 
                        title={e.title} 
                        date={e.date} 
                        tags={tags} 
                        link={e.link} />
                    </div>
            );
    });
    }
}

NotesContainer.propTypes = {
    notes: PropTypes.array.isRequired,
    onFilter: PropTypes.func,
    selectedTag: PropTypes.string
}
