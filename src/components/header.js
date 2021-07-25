export default function AppHeader(props) {
  return(
    <header className="App-header">
      <h1>Dashboard</h1>

      <div style={{backgroundColor: "green", margin: "5px auto"}}>
        <h2 >Personal</h2>
      </div>
      <div style={{backgroundColor: "blue", margin: "5px auto"}}>
        <h2>Professional</h2>
      </div>
      <div style={{backgroundColor: "red", margin: "5px auto"}}>
        <h2>Project</h2>
      </div>
    </header>
  )
}
