import { Box } from '@chakra-ui/react'
import React from 'react'
//import Score from '../Api/Score'
import styles from "../Styles/Navbar.module.css"
import NoTransitionExample from "../Styles/Corousel"
import Footers from '../Component/Footers'
import Logo from '../Styles/Logo'
const Home = () => {

  const[loading,setLoading]=React.useState(true)
 React.useEffect(() => {
  setTimeout(() => {
   setLoading(false)
  },1000);
  }, [])
  
  return (

<Box className={styles.outer}>


{loading==false?<NoTransitionExample></NoTransitionExample>:<h1 style={{textAlign:"center"}}>...Loading</h1>}


{loading==false?<Logo></Logo>:""}



</Box>
  )
}

export default Home