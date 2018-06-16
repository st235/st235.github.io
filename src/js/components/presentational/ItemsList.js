import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemsList extends Component {
    render() {
        const { jobs } = this.props;
        return <ul className="item-list">{this._transformJobsToJxs(jobs)}</ul>;
    }

    _transformJobsToJxs(jobs) {
        return jobs.map(i => (<li key={`jb_${i}`}>{i}</li>));
    }
};

ItemsList.propTypes = {
    jobs: PropTypes.array.isRequired
};
