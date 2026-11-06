const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} , you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  const freinds1 = [ 'peter' , 'cech'];


  return (
    <> 
      <h1>Greetings</h1>

      <Hello name = "George" age = {20} />
      <Hello name = "Daisy" age = {10} />

      <>
         <p>{friends[0].name} {friends[0].age}</p>
         <p>{friends[1].name} {friends[1].age}</p>
         <p>{freinds1}</p>
      </>
      
    </>
  )
}

export default App
