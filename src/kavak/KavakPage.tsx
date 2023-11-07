import './styles/kavak.css'
import logo from '../assets/Kavak.svg'
import { KavakContent } from './components/KavakContent'
import { ChangeEvent, useEffect, useState } from 'react'
import controlApi from '../api/config'
import { alerts } from '../config/alerts.adapter'
import LoadingCircle from '../ui/loading/LoadingCircle'
import { MyData, MyDataResponse } from './interfaces/interfaces'

const initialState = {
        campo1: '',
        campo2: '',
        campo3: '',
        campo4: '',
        campo5: '',
        campo6: '',
        campo7: '',
        campo8: '',
        campo9: '',
        campo10: '',
        campo11: '',
        campo12: '',
        campo13: '',
        campo14: '',
        campo15: '',
        campo16: '',
        campo17: '',
        campo18: '',
        campo19: '',
        campo20: '',
        campo21: '',
        campo22: '',
        campo23: '',
        campo24: '',
        campo25: '',
        campo26: '',
        campo27: '',
        campo28: '',
        campo29: '',
        campo30: '',
        campo31: '',
        campo32: '',
        campo33: '',
        campo34: '',
        campo35: '',
        campo36: '',
        campo37: '',
        campo38: '',
        campo39: '',
        campo40: '',
        campo41: '',
        campo42: '',
        campo43: '',
        campo44: '',
        campo45: '',
        campo46: '',
        campo47: '',
        campo48: '',
        campo49: '',
        campo50: '',
        campo51: '',
 
}

interface UploadResponse {
  data: {
      message: string;
      data: {
        dataSaved: { fileName: string }[];
        missingData: string[];
      };

  }
}



export interface DataCampos {
  [key: string]: string;
}
export const KavakPage = () => {

  const [isSaved, setIsSaved ] = useState<boolean>(false);
  const [missingFiles, setMissingFiles ] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [dataCampos, setDataCampos] = useState<MyData>(initialState);

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {

    const files = event.target.files || [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    const response = await controlApi.post('/upload/multiple', formData) as UploadResponse;

    if(response.data.data.missingData.length != 0){

      alerts.alertWarning('Faltan Archivos', 'Cargue los documentos faltantes porfavor');
      setMissingFiles( response.data.data.missingData )
      setIsSaved(false)
      setDataCampos(initialState);
    }else{
      setIsSaved(true)
      const response = await controlApi.get<MyDataResponse>('/documents/2');
      const campos = response.data.data as MyData;
      setDataCampos(campos);
    }
      
  } 

  
    useEffect(() => {
      const delay = 15000; // 15 segundos

      if (isSaved) {
        const timer = setTimeout(() => {
          // Ocultar la ventana de carga después del retraso
          setShowLoading(false);
        }, delay);

        return () => {
          clearTimeout(timer);
        };
      }
    }, [isSaved]);


  return (
    <main>

      <div className="main_header">
        <div className="main__title">
            <img src={logo} alt="kavak" />
            <div className="main__greeting">
              <h1>SforceCode</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <div className="card_header">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title"> Carga de evidencias</h2>
              </div>
              <div className="file-input-container">
                <p>Inicia la carga de evidencias dando clic</p>
                <input 
                  type="file" 
                  id="fileInput" 
                  className="custom-file-input" 
                  onChange={handleFiles}
                  multiple
                />
                <label htmlFor="fileInput" className="custom-file-label">Seleccionar archivo</label>
              </div>
            </div>
          </div>
      </div>

      {
        (!isSaved && missingFiles.length != 0) && (

          <div className="main_header">
  
            <div className="main__cards">
              <div className="card">
               
                <div className="file-input-container">
                  <p>Lista de Archivos faltantes</p>

                  <div className="card_form " style={{alignItems: '', justifyContent:'start'}}>
                
                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                        {
                          missingFiles.map((file, index) => (
                            <li key={index}>- {file}</li>
                          ))
                        }
                        </ul>
                    </div>
                  </div>
              
              </div>
              </div>
            </div>
        </div>
        )
      }

      {(showLoading && isSaved) ? (
        <>
          
          <LoadingCircle />
        </>
      ) : (
        // Mostrar KavakContent después de 15 segundos de carga
        isSaved && <KavakContent {...dataCampos}/>
      )}

 

      

    </main>
  )
}
