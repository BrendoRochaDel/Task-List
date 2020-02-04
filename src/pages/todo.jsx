import React, { Component } from 'react';
import PageHeader from '../componet/pageHeader';
import TodoForm from '../componet/todoForm';
import TodoList from '../componet/todoList';

export default class Todo extends Component {

  render() {
    return (
      <div>
        <PageHeader name='Tarefas'  small='Cadastro' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }

}