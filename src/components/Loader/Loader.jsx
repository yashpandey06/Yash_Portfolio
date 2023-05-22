
import {RotatingTriangles} from 'react-loader-spinner'

const Loader = ({load},{setLoader}) => {
  return (
    
    <div className='loader h-screen w-screen flex justify-center items-center bg-black fixed'>
      <RotatingTriangles
      
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
      />
    </div>
  )
}

export default Loader