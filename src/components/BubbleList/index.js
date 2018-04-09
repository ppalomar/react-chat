import React from 'react'
import PropTypes from 'prop-types';

import Bubble from './components/Bubble';

import './index.css';

const BubbleList = ({messages}) => {
    return (
        <div className="Message-List">
            {messages.map((msg, index) => <Bubble key={index} msg={msg} />)}
        </div>
        );
}

BubbleList.propTypes = {
    messages: PropTypes.array.isRequired
};

export default BubbleList;