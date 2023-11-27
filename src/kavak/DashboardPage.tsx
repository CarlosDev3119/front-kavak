import { Chart } from './components/charts/Chart'
import './styles/dashboard.css'
import logo from '../assets/Kavak.svg'


export const DashboardPage = () => {

    return (
        <main>

        <div className="main_header">
        <div className="main__title">
            <img src={logo} alt="kavak" />
            <div className="main__greeting">
              <h1>Smartforce</h1>
              <p>Bienvenido a tu administrador de información</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
                <h3>Registro de autos</h3>

                <table >
                    <thead>
                        <tr>
                            <th>ID TRAMITE</th>
                            <th>MARCA VEHICULO</th>
                            <th>MODELO</th>
                            <th>PLACAS</th>
                            <th>VIN</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1-20231127</td>
                            <td>NISSAN</td>
                            <td>2018</td>
                            <td>PAV2231</td>
                            <td>3N1CN7AD1JK449726</td>
                            <td><span className='estatus_approved'>Pendiente</span></td>
                        </tr>
                        <tr>
                            <td>2-20231127</td>
                            <td>TOYOTA</td>
                            <td>2019</td>
                            <td>CAV2289</td>
                            <td>412CN7DD1JK449724</td>
                            <td><span className='estatus_pending'>Procesando</span></td>
                        </tr>
                        <tr>
                            <td>3-20231127</td>
                            <td>NISSAN</td>
                            <td>2021</td>
                            <td>CAS2139</td>
                            <td>412CN7DD1JK449724</td>
                            <td><span className='estatus_rejected'>Rechazado</span></td>
                        </tr>
                
                    </tbody>
                </table>
            </div>
          </div>
      </div>
         <div className="dash_container">

            <div className="my-card">
                <h2 className="card-title">Datos Analizados</h2>
                <div className="card-chart">

                    <Chart />
                </div>
                <p className="card-description">Comportamiento de analisis</p>
            </div>

  
            
            
        </div>

            
        </main>
    )
}
