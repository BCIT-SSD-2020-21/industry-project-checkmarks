import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo_checkmarks_vp.svg';
import {
    Box,
    CardMedia,
    Icon,
    Typography,
    Tabs,
    Tab,
    Card,
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

export default function HeaderBanner({ searching }) {
    const classes = useStyles();
    const history = useHistory();

    // const toLanding = () => {
    //     if (!searching) {
    //         history.push('/');
    //     }
    // };

    return (
        <Box className={classes.container}>
            <Icon
                className={classes.imageIcon}
                // onClick={() => toLanding()}
            >
                <img
                    style={{
                        opacity: searching ? 0.5 : 1,
                        transition: 'opacity 1s ease-in-out',
                    }} //searching ? 0.7 : 1 }}
                    className={classes.imageIcon}
                    src={logo}
                />
            </Icon>
        </Box>
    );
}
<Typography></Typography>;
const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: (window.innerHeight * 1) / 3,
        marginTop: '18%',
        ['@media (min-width:768px)']: { marginTop: '12%' },
        ['@media (min-width:1280px)']: { marginTop: '8%' },
    },
    image: {
        paddingTop: '15%',
        cursor: 'pointer',
        width: '85%',
    },
    imageIcon: {
        width: '120px',
        height: '120px',
        ['@media (min-width:768px)']: { width: '140px', height: '140px' },
        ['@media (min-width:1280px)']: { width: '160px', height: '160px' },
    },
}));
