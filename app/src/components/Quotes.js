import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/actions';

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    if(error !== "")
    return (
        <div>
            <h2>{error}</h2>
            <button onClick={getQuote}>Get Ron's Wisdom</button>
        </div>
    );

    if (isFetching) {
        return <h2>One Sec...</h2>
    } else {
        return (
            <div>
                <h2>Ron's Wisdom: {quote}</h2>
                <button onClick={getQuote}>Get More Wisdom</button>
            </div>
        );
    }
};


const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps, {getQuote}
)(Quotes);