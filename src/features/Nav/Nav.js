import React from 'react';
import './nav.scss';
import { List, Icon } from 'semantic-ui-react'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='container'>
                <List horizontal size='huge'>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='edit'></Icon>
                        Edit
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='archive'></Icon>
                        Archive
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='like'></Icon>
                        Like
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='briefcase'></Icon>
                        Briefcase
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='bell'></Icon>
                        Bell
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='folder open outline'></Icon>
                        Folder
                    </List.Item>
                    <List.Item style={{color:'teal'}}>
                        <Icon name='trash alternate outline'></Icon>
                        Trash
                    </List.Item>
                </List>
            </div>
        </div>
    )
}

export default Nav;