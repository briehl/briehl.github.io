import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default class PortfolioCardDetail extends Component {
    state = {
        isLoading: true,
        source: null,
        loadError: null
    };

    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/assets/${this.props.projectInfo.id}/text.md`)
            .then(result => result.text())
            .then(source => {
                this.setState({
                    isLoading: false,
                    source: source
                });
            })
            .catch(error => this.state = {loadError: error, isLoading: false})
    }

    render() {
        let loading = null;
        if (this.state.isLoading) {
            loading = 'loading.'
        }
        let content = null;
        if (!this.state.isLoading && this.state.source) {
            content = <ReactMarkdown source={this.state.source} />
        }
        let error = null;
        if (this.state.loadError) {
            error = 'error!';
            console.error(this.state.loadError);
        }
        return (
            <div>
                {loading}
                {content}
                {error}
            </div>
        );
    }
}

PortfolioCardDetail.propTypes = {
    projectInfo: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        url: PropTypes.string,
        doi: PropTypes.string,
        blurb: PropTypes.string.isRequired,
        photoRoll: PropTypes.array,
        background: PropTypes.string.isRequired,
        bgImage: PropTypes.string,
    })
}