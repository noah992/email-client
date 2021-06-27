import React from 'react';
import './email.scss';
import { Card, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import store from '../utils/store/store';

const Email = () => {
    const items = useSelector(state => state.email);
    const trash = useSelector(state => state.trash);
    let contains;
    const activePage = useSelector(state => state.page)
    if (activePage == 'trash') {
        contains = trash;
    } else {
        contains = items;
    }
    const handleClick = (e, item) => {
        store.dispatch({
            type:'openEmail',
            payload:item
        })
        store.dispatch({
            type:'activePage',
            payload:'main'
        })
    }
    const handleDelete = (e, i) => {
        store.dispatch({
            type:'deleteEmail',
            payload:i.key
        })
        store.dispatch({
            type:'trash/delete',
            payload:i
        })
    }
    return (
        <div className='email'>
            <div className='container'>
                <div className='scroll-bar' style={{height:'60rem'}}>
                <Card.Group style={{margin:'0', padding:'1rem', backgroundColor:'inherit'}}>
                    {
                        contains.map(i => (
                            <Card fluid style={{margin:'0 1rem', backgroundColor:'inherit'}} key={i.key} onClick={(e) => handleClick(e, i)}>
                                <Card.Header style={{backgroundColor:'inherit', padding:'1rem', display:'flex'}}>
                                    <Icon name='user' size='big' style={{marginRight:'1rem'}}></Icon>
                                    {i.email}
                                    <Icon name='trash alternate outline' 
                                    style={{flexGrow:'1', display:'flex', flexDirection:'column' , alignItems:'flex-end'}}
                                    onClick={(e)=>handleDelete(e, i)}></Icon>
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