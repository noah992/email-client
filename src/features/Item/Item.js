import React from 'react';
import './item.scss';
import { Container, Header, Divider, Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const Items = () => {
    const openEmail = useSelector(state => state.main);
    return (
        <div className='item'>
            <div className='container'>
                <Container>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header style={{backgroundColor:'inherit', fontSize:'2rem', color:'inherit'}}>{openEmail.name}</Item.Header>
                                <Item.Meta style={{color:'inherit'}}>
                                    <span>{openEmail.email}</span>
                                    <span>2/24/2020</span>
                                </Item.Meta>
                                <Divider></Divider>
                                <Item.Description style={{color:'inherit'}}>
                                    {openEmail.body}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Container>
            </div>
        </div>
    )
}

export default Items;