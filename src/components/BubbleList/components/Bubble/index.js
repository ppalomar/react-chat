import React from 'react';

import './index.css';

const Bubble = ({msg}) => {
    const buildCssClasses = () => {
        let classes = ['Bubble__container']
        if(msg.isMine)
            classes.push('mine')
        return classes
    }

    return (
        <div className={buildCssClasses().join(' ')}> 
            <span>{msg.text}</span>
        </div>
    );
}

export default Bubble;