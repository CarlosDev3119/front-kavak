import './auth.css';
// import logo from '../assets/Kavak.svg'
import sforce from '../assets/sforce-login.png' 
import { useState } from 'react';
import { alerts } from '../config/alerts.adapter';
import { useNavigate } from 'react-router-dom';


export const Auth = () => {

    const [datauser, setDataUser] = useState({
        user: 'admin@smart-force.com',
        password: '********'
    })
    const navigate = useNavigate();
    const handleLogin = () => {
        alerts.alertSuccess('Ingresando al sistema')
        .then((result) => {
            if (result.isConfirmed) {
        
              navigate('/dashboard')
            }
          });
        
    };
    
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login_header">
                    {/* <img src={logo} id='logoKavak' alt="LogoKavak" /> */}
                    <h2>Bienvenido</h2>
                    <img src={sforce} id='logoSforce' alt="LogoSforce" />

                </div>
                <div className="login_Body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Usuario: </label>
                            <input type="text" value={datauser.user} id="username" name="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" value={datauser.password} id="password" name="password" />
                        </div>
                    </form>
                </div>
                <div className="login_footer">

                    <button onClick={handleLogin}>Iniciar Sesión</button>
                </div>
              
            </div>
        </div>
    );
}
