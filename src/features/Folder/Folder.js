import React from 'react';
import './folder.scss';
import { List, Icon, Accordion, Divider, Popup } from 'semantic-ui-react';
import Email from '../Email/Email';

class Folder extends React.Component {
    state = { activeIndex: [0, 1] }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex.indexOf(index) >= 0 ? activeIndex.filter(i => i !== index) : [index, ...activeIndex]
        this.setState({ activeIndex: newIndex })
    }
    render() {
        const emails = [{id:0, email:'1234abcd@xxx.com'}, {id:1, email:'chocolate.sundae@united.com'}];
        const folders = [
            ['envelope outline', 'Inbox'],
            ['archive', 'Archive'],
            ['trash alternate outline', 'Deleted'],
            ['paper plane', 'Sent'],
            ['star', 'Favorite']
        ]
        return (
            <div className='folder'>
                <div className='container'>
                    <Accordion>
                        {
                            emails.map(item => (
                                <>
                                    <Popup content={item.email}
                        trigger={
                            <Accordion.Title 
                            active={this.state.activeIndex.indexOf(item.id) >= 0}
                            index={item.id}
                            onClick={this.handleClick}
                            style={{fontSize:'1.2rem',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                            overflow:'hidden',
                            color:'inherit'
                            }}
                            >
                            <Icon name='dropdown'></Icon>{item.email}</Accordion.Title>  
                        } />
                           
                        <Accordion.Content active={this.state.activeIndex.indexOf(item.id) >= 0}>
                            <List size='medium' style={{marginLeft:'3rem'}}>
                                {
                                    folders.map(item => (
                                        <>
                                            <List.Item icon={item[0]} content={item[1]}></List.Item>
                                            <Divider style={{margin:'0.5rem 0'}}></Divider>
                                        </>
                                    ))
                                }
                            </List>
                        </Accordion.Content>
                                </>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Folder;