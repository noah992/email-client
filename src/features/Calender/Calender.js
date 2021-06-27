import React from 'react';
import './calender.scss';

const Calender = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = 1;
    return (
        <div className='calender'>
            <div className='container'>
                <header>
                    <h1>July</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            {
                                days.map(day => (
                                    <th>{day}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...new Array(5)].map(item => (
                                <tr>
                                    {
                                        [...new Array(7)].map(item => (
                                            <td>{date++}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calender;