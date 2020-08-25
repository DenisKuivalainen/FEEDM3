import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../logo/Logo';
import params from './Styles/Params';

import './App.css';

class App extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }

    render() {
        let screenWidth = params("vw");
        let screenHeight = params("vh");
        return (
            <div className="App">
                <div className={{width: screenWidth, maxWidth: screenWidth, height: screenHeight, maxHeight: screenHeight}}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Logo />
                                </Grid>
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
                        <Grid item xs={12}>
                            <div class="bottom-credentials">
                                <a href="https://github.com/DenisKuivalainen/softdevproj" class="bottom-text">2020   &#169;   Godlike</a>
                            </div>
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

export default App;