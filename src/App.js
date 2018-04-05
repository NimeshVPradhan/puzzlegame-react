import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var $ = require('jquery');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      x:230,
      y:100
    }
    this.changeHandlerX = this.changeHandlerX.bind(this);
    this.changeHandlerY = this.changeHandlerY.bind(this);
    this.validatePosition = this.validatePosition.bind(this);
  }

  changeHandlerX(event){
    this.setState({
      x: event.target.value
    });
  }

  changeHandlerY(event){
    this.setState({
      y: event.target.value
    });
  }

  componentDidMount(){
    console.log('mounted');
    console.log(this.state);
    console.log($('.doodle').position());
  }

  validatePosition(){
    console.log('--------------------------------------');
  //  console.log(this.state);
    $('.doodle').css('left',this.state.x+"px");
    $('.doodle').css('bottom',this.state.y+"px");
    //console.log($('.doodle').offset());
    //console.log($('.doodle').offset());
    var player_left = $('.doodle').offset().left;
    var player_top = $('.doodle').offset().top;
    var player_right = player_left + $('.doodle').width();
    var player_bottom = player_top + $('.doodle').height();
    var flag = false;
        $('.tile-col').each(function(index){
            //console.log($(this).css(['background']));
            var wall_top = $(this).offset().top;
            var wall_bottom = wall_top + $(this).height();
            var wall_left = $(this).offset().left;
            var wall_right = wall_left + $(this).width();

            if($(this).css(['background']).background.includes('rgb(255, 0, 0)')){
              if(Math.abs(player_left-wall_right)<=5 && player_top>=wall_top &&
                  player_bottom<=wall_bottom){
                    $(this).css({background:'black'});
                    alert('boom');
                    return false;
                  }
              if(Math.abs(player_top-wall_bottom)<=5 && player_left>=wall_left &&
                  player_right<=wall_right){
                    $(this).css({background:'black'});
                    alert('boom');
                    return false;
                  }
              if(Math.abs(player_right-wall_left)<=5 && player_top>=wall_top &&
                  player_bottom<=wall_bottom){
                    $(this).css({background:'black'});
                    alert('boom');
                    return false;
                  }
              if(Math.abs(player_bottom-wall_top)<=5 && player_left>=wall_left &&
                  player_right<=wall_right){
                    $(this).css({background:'black'});
                    alert('boom');
                    return false;
                  }
            }
            if($(this).css(['background']).background.includes('rgb( 0,128, 0)')){
              alert('green')
              var wall_top = $(this).offset().top;
              var wall_bottom = wall_top + $(this).height();
              var wall_left = $(this).offset().left;
              var wall_right = wall_left + $(this).width();

              if(wall_top<=player_top && wall_left<=player_left
                  && wall_right>=player_right && wall_bottom>=player_bottom){
                    alert('success');
                  }
            }
        })
  }


  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Doodle Jump</h1>
        </header>

        <div className="Game-boundry">
          <div className='table-map-container'>
            <table className='table-map'>
              <tbody>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' ></td>
                  <td className='tile-col' style={{background:'green'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col'style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
                <tr className='tile-row'>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col'></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                  <td className='tile-col' style={{background:'red'}}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='doodle'>
          </div>
          <div className="SlidebarX-container">
            <input type="range" min="0" max="500" value={this.state.x} className="slider" id="myRange" onChange={this.changeHandlerX} onMouseUp={this.validatePosition} />
          </div>
          <div className="SlidebarY-container">
            <input type="range" min="0" max="700" value={this.state.y} className="vslider" id="myRange" onChange={this.changeHandlerY} onMouseUp={this.validatePosition}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
