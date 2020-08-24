import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './App.css';

class App extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }

    render() {
        return (
            <div className="App">
                <div className={CLASSES.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                        <Paper className={CLASSES.paper}>xs=12</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                <div class="search-btn" >
                                    Search recipe
                                </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </Grid>
                                <Grid item xs={12}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </Grid>
                                <Grid item xs={12}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <CardItem />
                                </Grid>
                                <Grid item xs={4}>
                                <CardItem />
                                </Grid>
                                <Grid item xs={4}>
                                <CardItem />
                                </Grid>
                                <Grid item xs={4}>
                                <CardItem />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

function CardItem() {
    return (
        <div class="recipe-box" onClick={() => alert("Hello")}>
            Hellooo
        </div>
      );
}

const CLASSES = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  }));

export default App;