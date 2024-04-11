import wavesBackground from '../../assets/waves.png'
import './ContainerTitle.css'
const ContainerTitle = () => {
  return (
    <div className='container-title'>
        <div className="box-title">
          <div className="box-two-title">
            <h1 className='title'>Nacionalismo <span className='typer-text'>Brasileiro</span>
            </h1>
          </div>
          <span className='_context'>Colônia, império e republica</span>
        </div>
        <img src={wavesBackground} alt="Waves Image" className="waves-background" />
    </div >
  )
}

export default ContainerTitle