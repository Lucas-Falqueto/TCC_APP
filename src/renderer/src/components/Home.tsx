import { Link } from 'react-router-dom'
import classes from './styles.module.css'
const Home = (): JSX.Element => {
  console.log(window.api['getAlunos'])
  return (
    <>
      <div>Hello world</div>
      <Link to="/login" className={classes.btn}>
        Logar
      </Link>
    </>
  )
}

export default Home
