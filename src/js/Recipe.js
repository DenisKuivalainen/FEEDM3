import React from 'react';
import '../css/App1.css';
import '../css/App2.css';

class Recipe extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: 'Welcome to our cooking book!!!',
        description: 'You can find anu recipe you want using up to 3 ingredients!!! Unfortunaatelly, you can use only 6 ingredients: potato, rice, tomatoes, cream, meat and paprika.',
      }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.refresh !== this.props.refresh) {
            const URL = this.props.url;
            fetch(URL).then(res => res.json()).then(json => {
                this.setState({ name: json[0].Name,  description: json[0].Description,});
            });
        }
    }

    render() {
        return(
            <div class="row"> 
                <div class="col-lg-12 col-12 ">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <p class="lead fatfont">{this.state.name}</p>
                            <p class="lead leadd">{this.state.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recipe;