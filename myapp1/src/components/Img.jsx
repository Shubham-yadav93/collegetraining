import img from '../assets/img.jpg'
const Img = () => {
  return (
    <div>
        <img src={img} height={200} width={400}/>
        <br/>
        <img src={'./src/assets/img.jpg'} height={200} width={400}/>
    </div>
  )
}

export default Img