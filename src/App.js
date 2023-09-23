import logo from './logo.svg';
import './App.css';
import Table from './Table';
import React, {Component} from 'react';
import Form from './Form';


class App extends Component {

  state = {
    alunos: [
      /*{
        nome: 'Dudu',
        turma: 'Programação Web',
      },
      {
        nome: 'Paty',
        turma: 'Análise de Algoritmos',
      },
      {
        nome: 'Joãozinho',
        turma: 'Programação Web',
      },
      {
        nome: 'Ju',
        turma: 'Engenharia de Requisitos',
      },*/
    ]
  }
  render(){
    const {alunos} = this.state
    return(
      <div className="container">
        <Table alunos ={alunos}
          removerAluno={this.removerAluno}/>
      </div>
    );
  }
  removerAluno = (index) =>{
    const{alunos}=this.state
    this.setState(
     {
        alunos:alunos.filter((aluno, i)=>{
            return i!==index
     })
     }
    )
  }
  render(){
    const {alunos} = this.state
    return (
      <div className="container">
        <Table  alunos = {alunos}
                removerAluno = {this.removerAluno}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  handleSubmit = (alunoDisc) =>{
    this.setState(
      {
        alunos:[...this.state.alunos, alunoDisc]
      })
  }
}


export default App;