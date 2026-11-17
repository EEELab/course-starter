import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>示例同学</h1>
        <p>正在学习 AI 协作开发。</p>
        <a href="#projects" className="btn">查看项目</a>

        <section id="projects">
          <h2>我的项目</h2>
          <div className="project-card">
            <h3>学习笔记</h3>
            <p>记录课程练习</p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;