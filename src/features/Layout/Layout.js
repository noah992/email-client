import React from 'react';
import './layout.scss';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Folder from '../Folder/Folder';
import Email from '../Email/Email';
import Item from '../Item/Item';
import store from '../../features/utils/store/store';
import { Grid } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import Setting from '../Setting/Setting';


const Layout = () => {
    const page = useSelector(state => state.page)
    let background = 'white';
    let fontColor = 'black';
    if (store.getState().color == 'black') {
        background = 'rgb(50, 50, 50)';
        fontColor = 'white';
    } else {
        background = 'white';
        fontColor = 'black';
    }
    let content;
    switch (page) {
        case 'main':
            content = <Item></Item>
            break;
        case 'trash':
            content = <Item></Item>
            break;
        default:
            content = <Setting></Setting>
    }
    return (
        <div className='layout'>
            <Header></Header>
            <Nav></Nav>
            <Grid columns={3} style={{margin:'0', backgroundColor:background, color:fontColor}}>
                <Grid.Column  only='computer' computer={3}>
                    <Folder></Folder>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={5}>
                    <Email></Email>
                </Grid.Column>
                <Grid.Column  only='tablet computer' tablet={8} computer={8}>
                    {
                        content
                    }
                </Grid.Column>
            </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Layout;