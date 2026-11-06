import './index.css'

function App() {
  return (
    <div className="app">
      {/* 首屏基本信息 */}
      <header className="hero">
        <h1>Apple</h1>
        <p className="bio"></p>
        <a href="#education" className="button">查看经历</a>
      </header>

      {/* 教育背景板块 */}
      <section id="education" className="section">
        <h2>教育背景</h2>
        <div className="info-item">深圳大学 — 本科</div>
        <div className="info-item">哈工大 — 硕士</div>
        <div className="info-item">亚利桑那州立大学 — 博士</div>
      </section>

      {/* 工作经历板块 */}
      <section id="work" className="section">
        <h2>工作经历</h2>
        <div className="job-item">
          <span className="job-company">腾讯公司</span>
          <span className="job-date">2011~2018</span>
        </div>
        <div className="job-item">
          <span className="job-company">字节跳动</span>
          <span className="job-date">2018~2023</span>
        </div>
        <div className="job-item">
          <span className="job-company">大疆</span>
          <span className="job-date">2023~2026</span>
        </div>
      </section>

      {/* 项目经验板块 */}
      <section id="projects" className="section">
        <h2>项目与开源</h2>
        <div className="project-card">
          <h3>xxxx 开源项目</h3>
          <p></p>
        </div>
      </section>
    </div>
  )
}

export default App
