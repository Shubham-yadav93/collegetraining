function Test3(){
  function display(){
      alert("Welcome to event concept in ReactJS")
  }
return (
  <div>
      <button onDoubleClick={display}> Click me </button>
  </div>
)
}

export default Test3