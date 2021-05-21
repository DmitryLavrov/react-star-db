import './error-indicator.css'
import deathStar from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={deathStar} alt="Death Star"/>
      <span className="boom">Error!</span>
      <span>Something goes wrong...</span>
    </div>
  )
}

export default ErrorIndicator