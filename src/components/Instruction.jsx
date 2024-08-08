import React from 'react';
import instruction_icon from '../assets/Instruction-icon.png'
import traffic_icon from '../assets/traffic.png'
import './CSS/Instruction.css'

const Instruction = () => {
    return(
        <div className='instruction'>
            <div className='inst-left'>
                <img src={instruction_icon} alt="Instruction" />
            </div>
            <div className='inst-right'>
                <img src={traffic_icon} alt="Traffic" />
            </div>
        </div>
    );
};

export default Instruction;