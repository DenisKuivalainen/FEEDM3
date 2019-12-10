import React from 'react';
import '../css/App1.css';
import '../css/App2.css';
import Logo from '../logo/Logo';
import Main from './Main';

class App extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }

    render() {
        return (
            <div className="App" class="hhrow">
    
                {/* Логотип */}
                <div className="row"> 
                    <div className="col-lg-12 col-12 llogo">
                        <Logo />
                    </div>
                </div>  
        
                {/* Основные поля */}
                <Main />

                {/* Прочая ересь */}
                <div className="row"> 
                    <div class="col-lg-12 col-12 textt">
                        <span class="lead leadd">2019   D.E.V.&#169;</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;