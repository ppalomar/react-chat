import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Bubble = ({msg}) => {
    const { isMine, isThink, text } = msg;

    const buildCssClasses = () => {
        let classes = ['Bubble__container']
        if(isMine)
            classes.push('mine')
        if(isThink)
            classes.push('think')
        return classes
    }

    return (
        <div className={buildCssClasses().join(' ')}> 
            <span>{text}</span>
        </div>
    );
}

Bubble.propTypes = {
    name: PropTypes.shape({
        isMine: PropTypes.bool.isRequired,
        isThink: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    })
};

export default Bubble;