import './index.css'

const Card = props => {
  const {key} = props
  const {name, imgUrl} = props
  console.log(key)
  return (
    <li className="cont-1">
      <img className="imager" src={imgUrl} alt={name} />
      <p className="title">{name}</p>
    </li>
  )
}

export default Card
