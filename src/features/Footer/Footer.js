import React from 'react';
import './footer.scss';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector(state => state.color);
    return (
        <div className='footer' style={{backgroundColor:theme}}>
            <div className='container'>
                <div className='icon-wrapper'>
                    <Icon name='users' inverted color='grey' size='large' style={{flex:'1'}}></Icon>
                    <Icon name='calendar alternate' inverted color='grey' size='large' style={{flex:'1'}}></Icon>
                    <Icon name='globe' inverted color='grey' size='large' style={{flex:'1'}}></Icon>
                </div>
            </div>
        </div>
    )
}

export default Footer;