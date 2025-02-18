
import './App.css'

function App() {
  
 
  const members =['eden','truket','edlawit', 'dagmawit', 'ted', 'eyoab', 'ayenew', 'abenezer', 'fiyorina','eva']
  
  return (
    
    <>
    <h1>group members</h1>
    {
    
    members.map((member, index)=> (<li key={index}>{member}</li>))
    
    }
  
  
    </>
  )
}

export default App

