import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  crearMatriz(){
    let limite = 25;
    let alphabet= 'bcdefghijklmnopqrstuvwxyza';
    let fin=[];
    let inicio=[];

    let resultado=[];

    for (let i = 0; i < limite; i += 1) {
      inicio = alphabet.toString().substr(i);
      fin = alphabet.toString().substr(0, i);
      resultado.push(inicio.concat(fin));
      resultado.map((x)=>{
        return <div>{x}</div>;
      });
    }

    return resultado;


  }



  render() {
    return (
      <div className="container">
        {this.crearMatriz()}
      </div>
    );
  }
}

export default Exercise1;
