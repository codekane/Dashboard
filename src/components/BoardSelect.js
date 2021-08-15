import store from '../redux/store';


export default function BoardSelect(props) {

  return (
    <div id="BoardSelect" style={{width: "150px", height: "100px", backgroundColor: "teal"}}>
      <ul>
        <li>Personal</li>
        <li>Professional</li>
        <li>Project</li>
        <li>Add New</li>
      </ul>

    </div>

  )

}
