import React from 'react';
import './layout.scss';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Folder from '../Folder/Folder';
import Email from '../Email/Email';
import Item from '../Item/Item';
import store from '../../features/utils/store/store';
import { Segment, Rail, Grid, Sticky } from 'semantic-ui-react';

const Layout = () => {
    return (
        <div className='layout'>
            <Header></Header>
            <Nav></Nav>
            <Grid columns={3}>
                <Grid.Column width={2}>
                    <Folder></Folder>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Email></Email>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Item></Item>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Layout;