import routeImg from '../../../assets/Routing.png'
import web from '../../../assets/website-queryParams.png'
import mpa from '../../../assets/traditionalwebModel-MPA.png'
import reactroute from '../../../assets/reactroute.png'
import reactparams from '../../../assets/routeParams.png'
import nestedOutlets from '../../../assets/nestedOutletRoutes.png'
import navigationNotFound from '../../../assets/navigationNotFound.png'
import spa from '../../../assets/spa.png'


function AboutUs () {
    return(
        <>
        <h2>Routing Conpect</h2>
              <img src={web}></img>
              <img src={routeImg}></img>
              <img src={mpa}></img>
              <img src={spa}></img>
              <img src={reactroute}></img>
              <img src={reactparams}></img>
              <img src={nestedOutlets}></img>
              <img src={navigationNotFound}></img>
        </>
    )
}

export default AboutUs;