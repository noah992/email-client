import React from 'react';
import './setting.scss';
import { useSelector } from 'react-redux';

const Setting = () => {
    const header = useSelector(state => state.page)
    console.log(header)
    return (
        <div className='setting'>
            <div className='container'>
                <p>{header}</p>
            </div>
        </div>
    )
}

export default Setting;