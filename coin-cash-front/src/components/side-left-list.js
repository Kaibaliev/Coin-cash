import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';

const useStyles = makeStyles(theme=>({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));


export const LeftSideList = side => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <Button>
                    <ListItemIcon >
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Home page'}/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button>
                    <ListItemIcon>
                        <AccountBalanceWalletIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Balance'}/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button>
                    <ListItemIcon>
                        <FormatIndentIncreaseIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Income'}/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button>
                    <ListItemIcon>
                        <FormatIndentDecreaseIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Expence'}/>
                    </Button>
                </ListItem>
            </List>
        </div>
    )
};