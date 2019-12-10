import React from 'react';
import './App1.css';
import './App2.css';
import logo from './logo.jpg';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inp1: '',
      inp2: '',
      inp3: '',
      recp: '',
      name: '',
      url: "",
    }
    this.fromServ = this.fromServ.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
  }

  //Лого
  logo() {
    return (
      <img src={logo} alt="Logo" class="pict"/>
    )
  }

  //Запоминаем ингридиенты
  handleUserInput = (e) => {
    const name = e.target.name;
    var value = e.target.value.toLowerCase();
    if (value.length > 15) {
      value = value.substr(0, 15);
    }
    this.setState({[name]: value});
    if (this.state.inp1==='') {this.setState({inp3: '', inp2: ''})};
    if (this.state.inp2==='') {this.setState({inp3: ''})};
  }

  //Выводим рецепт
  fieldRecipe() {
    if (this.state.recp !== '') {
      return(
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <p class="lead fatfont">{this.state.name}</p>
            <p class="lead leadd">{this.state.recp}</p>
          </div>
        </div>
      )
    }
  }

  //Записываем API и обнуляем ингридиенты
  fromServ() {
    let urlstr = "http://185.146.12.243/back.php?ing1=" + this.state.inp1 + "&ing2=" + this.state.inp2 + "&ing3=" + this.state.inp3;
    this.setState({ 
      inp1 : '',
      inp2 : '',
      inp3 : '',
      url : urlstr,
      name : 'Loading...',
      recp : 'TIP: You can use only 6 ingredients: potato, rice, tomatoes, cream, meat and paprika.',
    });
  }
  
  //Вывод рецепта
  componentDidUpdate() {
    if (this.state.url !== '') {
      const urll = this.state.url
      fetch(urll).then(res =>res.json()).then(json => {
        this.setState({ 
          recp: json[0].Description,
          name : json[0].Name,
          url : '',
        });
      }).catch((error) => {console.error(error)})  
    }
  }

  //Выводим форму для ингридиента 2
  fieldOptional1() {
    var stt2
    if (this.state.inp1 !== '') {
      stt2 = "fadein"
    }
    else {
      stt2 = "fadeout"
    }
    return(
      <div class={"col-lg-3 col-12 " + stt2}>
        <input name="inp2" type="text" class="form-control" placeholder="Add ingredient"
          value={this.state.inp2}
          onChange={this.handleUserInput} 
        />
      </div>
    )
  }

  //Выводим форму для ингридиента 3
  fieldOptional2() {
    var stt3
    if (this.state.inp1 !== '' && this.state.inp2 !== '') {
      stt3 = "fadein"
    }
    else {
      stt3 = "fadeout"
    }
    return(
      <div class={"col-lg-3 col-12 " + stt3}>
        <input name="inp3" type="text" class="form-control" placeholder="Add ingredient"
          value={this.state.inp3}
          onChange={this.handleUserInput} 
        />
      </div>
    )
  }

  // Активация по Enter
  keydownHandler(e){
    if(e.keyCode===13) {
      let urlstr = "http://185.146.12.243/back.php?ing1=" + this.state.inp1 + "&ing2=" + this.state.inp2 + "&ing3=" + this.state.inp3;
      this.setState({ 
        inp1 : '',
        inp2 : '',
        inp3 : '',
        url : urlstr,
        recp : 'Loading...'
      });
    }
  }
  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler);
  }

  render() {
    return (
      <div className="App" class="hhrow">

        {/* Логотип */}
        <div class="row"> 
          <div class="col-lg-12 col-12 llogo">
            {this.logo()}
          </div>
        </div>  

        {/* Рецепт */}
        <div class="row  "> 
          <div class="col-lg-12 col-12 ">
            {this.fieldRecipe()}
          </div>
        </div>

        <div class="row  "> 

          {/* Кнопка */}
          <div class="col-lg-3 col-12" >
            <button class="btn btn-outline-secondary " type="button" onClick={this.fromServ}>Search recipe</button>
          </div>

          {/* Поле ввода 1 */}
          <div class="col-lg-3 col-12">
            <input name="inp1" type="text" class="form-control elem" placeholder="Add ingredient"
              value={this.state.inp1}
              onChange={this.handleUserInput} 
            />
          </div>
          
          {/* Поле ввода 2 */}
          {this.fieldOptional1()}

          {/* Поле ввода 3 */}
          {this.fieldOptional2()}

          <div class="border col-0  "/>
        {this.easter()}
        </div>
        
        
        {/* Прочая ересь */}
        <div class="row"> 
          <div class="col-lg-12 col-12 textt">
            <span class="lead leadd">2019   D.E.V.&#169;</span>
          </div>
        </div>
      </div>
    );
  }

  easter() {
    let egg = this.state.inp1 + this.state.inp2 + this.state.inp3;
    if(egg === 'ggggggggggggggggggggggggggggggggggggggggggggg') {window.open('https://github.com/DenisKuivalainen/softdevproj')}
    if(egg === 'diisgodlike') {window.open('https://www.instagram.com/di_is_godlike_/')}
  }
}

export default App;