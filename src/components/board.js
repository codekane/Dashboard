import DashCard from './dash-card';

export default function Board(props) {

  const test = "This is a test of the BODY system!!@!!!"

  return(
    <div className="Board">
      <div className="Board-Valid">

        <DashCard background="teal" grid={[31, 2]} title="Dashboard" color="teal" body={test}/>
        <DashCard background="magenta" grid={[42, 3]} title="Stonkk" color="magenta" body={test}/>
        <DashCard background="pink" grid={[1, 0]} title="Ryan Horricks" color="pink" body={test}/>
        <DashCard grid={[1, 1]} title="Potential Job" color="red" body={test}/>
        <DashCard grid={[1, 2]} title="Potential Job" color="red" body={test}/>


      </div>

    </div>


  )
}
