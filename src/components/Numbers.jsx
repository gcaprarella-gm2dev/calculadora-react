import React from "react";
import Button from './Button'
import PropTypes from 'prop-types'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => (
    numbers.map(item => (
        <Button 
            key={item} 
            text={item.toString()} 
            clickHandler={onClickNumber} 
        />
    ))
)

const Numbers = ({ onClickNumber }) => (
    <section className='numbers'>
        {renderButtons(onClickNumber)}
    </section>
);

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;