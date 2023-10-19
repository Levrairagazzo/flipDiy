import { useState } from 'react'
import NavBar from '../NavBar'
import ObjectCard from '../ObjectCard'
import Footer from '../Footer'

const mockDB = [
  { 
    glbFileAddress:'src/assets/images/KratkyMilkModele.glb' ,
    name : "Kratky Milk Modele",
    key: 1,
  },
  {
    glbFileAddress: 'src/assets/images/rainCollector.glb' ,
    name : "Rain Collector",
    key: 2,
  }
  ,
  {
    glbFileAddress: 'src/assets/images/greenhouse.glb',
    name : "Green House",
    key: 3,
  }



]

function Home() {

  return (
    <>
      <NavBar/>
      <h1>Nos modèles</h1>
      {
        mockDB.map((object) => <ObjectCard objectName={object.name} glbFile={object.glbFileAddress} key={object.key} />)
      }
      <Footer/>
    </>
  )
}

export default Home;
