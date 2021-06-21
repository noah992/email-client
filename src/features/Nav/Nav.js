import React from 'react';
import './nav.scss';
import { List, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import store from '../utils/store/store';

const Nav = () => {
    let i =  0;
    let theme = useSelector(state => state.color)
    const navItems = ['Edit', 'Archive', 'Like', 'Briefcase', 'Bell', 'folder open outline', 'trash alternate outline']
    const handleTrash = (e) => {
        store.dispatch({type:'activePage', payload:'trash'})
    }
    return (
        <div className='nav'>
            <div className='container'>
                <List horizontal size='huge'>
                    {
                        navItems.map(item => {
                            if (item == 'folder open outline') {
                                return (
                                    <List.Item style={{color:theme}} key={i++}>
                                        <Icon name={item.toLowerCase()}></Icon>
                                        Folder
                                    </List.Item>
                                )
                            } else if (item == 'trash alternate outline') {
                                return (
                                    <List.Item style={{color:theme}} key={i++}
                                    onClick={(e) => handleTrash(e)}>
                                        <Icon name={item.toLowerCase()}></Icon>
                                        Trash
                                    </List.Item>
                                )
                            } else {
                                return (
                                    <List.Item style={{color:theme}} key={i++}>
                                        <Icon name={item.toLowerCase()}></Icon>
                                        {item}
                                    </List.Item>
                                )
                            }
                        })
                    }                    
                </List>
            </div>
        </div>
    )
}

export default Nav;