import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/actions';
import styled from 'styled-components';

const Text = styled.h2`
    color: #ffe2cc;
    margin-left: 25%;
    margin-top: 5%;
`
const Words = styled.div`
    width:60%;
    display:flex;
    flex-direction: column;
    margin-left: 30%;
    padding-top: 50%; 

`

const Section = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    if(error !== "")
    return (
        <div>
            <Text>{error}</Text>
            <Words>
                <button onClick={getQuote}>Get Ron's Wisdom</button>
            </Words>
        </div>
    );

    if (isFetching) {
        return <Text>One Sec...</Text>
    } else {
        return (
            <Section>
                <div>
                    <Text>{quote}</Text>
                </div>
                <Words>
                    <button onClick={getQuote}>Get Wisdom</button>
                </Words>
            </Section>
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
    mapStateToProps, getQuote
)(Quotes);