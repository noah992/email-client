import React from 'react';
import './header.scss';
import Logo from './Logo/Logo';
import { Input, Icon } from 'semantic-ui-react'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Logo></Logo>
                <div className='input__search-wrapper'>
                    <Input icon='search' placeholder='Search...' className='input__search'/>
                </div>
                <div className='icon-layout'>
                    <div className='icon-wrapper'>
                        <Icon name='clone outline' inverted color='grey' size='big'></Icon>
                        <Icon name='setting' inverted color='grey' size='big'></Icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;