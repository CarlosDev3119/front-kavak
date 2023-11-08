import './auth.css';
import logo from '../assets/Kavak.svg'
import sforce from '../assets/sforce-login.png' 

export const Auth = () => {
    const handleLogin = () => {
        // Lógica de inicio de sesión aquí
      };
    
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login_header">
                    <img src={logo} id='logoKavak' alt="LogoKavak" />
                    <h2>Bienvenido</h2>
                    <img src={sforce} id='logoSforce' alt="LogoSforce" />

                </div>
                <div className="login_Body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Usuario: </label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" id="password" name="password" />
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
