import React from 'react';

export default props => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><i className='fa fa-calendar-check-o'></i>Task List </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
     <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#/todos">Tarefas<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#/about">Sobre</a>
      </li>
     </ul>
    </div>
  </nav>  
)