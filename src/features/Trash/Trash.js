import React from 'react';
import './trash.scss';
import { useSelector } from 'react-redux';

const Trash = () => {
    const trash = useSelector(state => state.trash);
    return (
        <div className='trash'>
            <div className='container'>
                <p>EmailManager</p>
            </div>
        </div>
    )
}

export default Trash;