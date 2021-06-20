import React from 'react';
import './folder.scss';
import { List, Icon, Accordion, Divider, Popup } from 'semantic-ui-react';

class Folder extends React.Component {
    state = { activeIndex: [0, 1] }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex.indexOf(index) >= 0 ? activeIndex.filter(i => i !== index) : [index, ...activeIndex]
        this.setState({ activeIndex: newIndex })
    }
    render() {
        return (
            <div className='folder'>
                <div className='container'>
                    <Accordion>
                        <Popup content='1234abcd@xxx.com' 
                        trigger={
                            <Accordion.Title 
                            active={this.state.activeIndex.indexOf(0) >= 0}
                            index={0}
                            onClick={this.handleClick}
                            style={{fontSize:'1.2rem',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                            overflow:'hidden'
                            }}
                            >
                            <Icon name='dropdown'></Icon>1234abcd@xxx.com</Accordion.Title>  
                        } />
                           
                        <Accordion.Content active={this.state.activeIndex.indexOf(0) >= 0}>
                            <List size='big' style={{marginLeft:'3rem'}}>
                                <List.Item icon='envelope outline' content='Inbox'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='archive' content='Archive'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='trash alternate outline' content='Deleted'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='paper plane' content='Sent'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='star' content='Favorite'></List.Item>
                            </List>
                        </Accordion.Content>
                        <Popup content='chocolate.sundae@united.com' 
                        trigger={
                            <Accordion.Title 
                            active={this.state.activeIndex.indexOf(1) >= 0}
                            index={1}
                            onClick={this.handleClick}
                            style={{fontSize:'1.2rem',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                            overflow:'hidden'
                            }}
                            >
                            <Icon name='dropdown'></Icon>chocolate.sundae@united.com</Accordion.Title>  
                        } />
                           
                        <Accordion.Content active={this.state.activeIndex.indexOf(1) >= 0}>
                            <List size='big' style={{marginLeft:'3rem'}}>
                                <List.Item icon='envelope outline' content='Inbox'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='archive' content='Archive'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='trash alternate outline' content='Deleted'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='paper plane' content='Sent'></List.Item>
                                <Divider style={{margin:'0.5rem 0'}}></Divider>
                                <List.Item icon='star' content='Favorite'></List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Folder;