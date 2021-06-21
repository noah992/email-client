import React from 'react';
import './header.scss';
import Logo from './Logo/Logo';
import { Input, Icon, Dropdown } from 'semantic-ui-react';
import store from '../utils/store/store';
import { useSelector } from 'react-redux';

const Header = () => {
    const handleActivePage = (e, page) => {
        store.dispatch({type:'activePage', payload:page})
    }
    const handleColorTheme = (e, content) => {
        store.dispatch({type:'changeColor', payload:'black'})
        store.dispatch({type:'activePage', payload:content})
    }
    const theme = useSelector(state => state.color);
    return (
        <div className='header' style={{backgroundColor:theme}}>
            <div className='container'>
                <Logo></Logo>
                <div className='input__search-wrapper'>
                    <Input icon='search' placeholder='Search...' style={{width:'30rem'}}/>
                </div>
                <div className='icon-layout'>
                    <div className='icon-wrapper'>
                        <Icon name='clone outline' inverted color='grey' size='big'></Icon>
                        <Dropdown
                        icon={<Icon name='setting' inverted color='grey' size='big'></Icon>}
                        direction='left'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e) => handleActivePage(e, 'setting')}>Setting</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handleActivePage(e, 'profile')}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handleActivePage(e, 'analysis')}>Analysis</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handleActivePage(e, 'usage')}>Usage</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handleColorTheme(e, 'night mode')}>Night mode</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => handleActivePage(e, 'sign out')}>Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;