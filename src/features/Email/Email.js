import React from 'react';
import './email.scss';
import { Card, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import store from '../utils/store/store';

const Email = () => {
    const items = useSelector(state => state.email)
    const handleClick = (e, item) => {
        store.dispatch({
            type:'openEmail',
            payload:item
        })
    }
    return (
        <div className='email'>
            <div className='container'>
                <div className='scroll-bar' style={{height:'45rem'}}>
                <Card.Group style={{margin:'0', padding:'1rem'}}>
                    {
                        items.map(i => (
                            <Card fluid style={{margin:'0 1rem'}} key={`email${i.postId}`} onClick={(e) => handleClick(e, i)}>
                                <Card.Header style={{backgroundColor:'white', padding:'1rem'}}>
                                    <Icon name='user' size='big' style={{marginRight:'1rem'}}></Icon>
                                    {i.email}
                                </Card.Header>
                                <Card.Content>{i.name}</Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
                </div>
            </div>
        </div>
    )
}

export default Email;