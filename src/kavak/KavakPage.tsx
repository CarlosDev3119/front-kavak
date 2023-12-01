import './styles/kavak.css'
import logo from '../assets/Kavak.svg'
import { KavakContent } from './components/KavakContent'
import { ChangeEvent, useEffect, useState } from 'react'
import controlApi from '../api/config'
import LoadingCircle from '../ui/loading/LoadingCircle'
import { MyData, MyDataResponse } from './interfaces/interfaces'


// interface UploadResponse {
//   data: {
//       message: string;
//       data: {
//         dataSaved: { fileName: string }[];
//         missingData: string[];
//       };

//   }
// }
export const initialState: MyData = {
  idkavakpoc: '',
  tvplaca: null,
  tvmes: null,
  tvestado: null,
  tcplaca: null,
  tcvin: null,
  tcmodelo: null,
  tcestado: null,
  cftipo: null,
  cfplaca: null,
  cdmodelo: null,
  cfanio: null,
  cfvalidez: null,
  cfcodigo: null,
  paclave: null,
  peclave: null,
  c5docs: null,
  reclave: null,
  vinparabclave: null,
  vincarclave: null,
  vinmotorclave: null,
  vinescannerclave: null,
  coicniden4docs: null,
  kmtacometroclave: null,
  kmescannerclave: null,
  coiciden2docs: null,
  validacionrepuve: null,
  repuvevin: null,
  repuveanio: null,
  repuvemarca: null,
  repuvemodelo: null,
  repuveprocedencia: null,
  documentosvin: null,
  documentosanio: null,
  documentosmarca: null,
  documenrosmodelo: null,
  documentosprocedencia: null,
  FGJ: null,
  OCRA: null,
  USA7CAN: null,
  AVISOSJUDICALES: null,
  VALIDACIONRAPI: null,
  RAPIVIN: null,
  VALIDACIONAMIREPORTEROBO: null,
  VALIDACIONamiSEGUROS: null,
  AMIVIGENCIA: null,
  AMIPOLIZA: null,
  AMIMARCA: null,
  ADEUDOS: null,
  ADEUDOEDOMEX: null,
  ADEUDOCDMX: null,
  tcfechavigencia: null,
  tcedovigente: null,
  tcmotor: null,
};



export interface DataCampos {
  [key: string]: string;
}
export const KavakPage = () => {

  const [isSaved, setIsSaved ] = useState<boolean>(false);
  // const [missingFiles, setMissingFiles ] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [dataCampos, setDataCampos] = useState<MyData>(initialState);
  const [primerPeticionResuelta, setPrimerPeticionResuelta] = useState(false);


  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const files = event.target.files || [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    try {
      const response = await controlApi.post('/upload/multiple', formData);

      if (response.status === 200) {
        setIsSaved(true);
        setPrimerPeticionResuelta(true)
      }
    } catch (error) {
      console.error('Error al realizar la carga de archivos:', error);
    }
    //   console.log(data)

  } 

  
    useEffect(() => {
      if (!primerPeticionResuelta) {
        return;
      }
      const tiempoLimiteMs = 3 * 60 * 1000;
      const tiempoInicio = Date.now();
      const realizarPeticion = async () => {
        while (Date.now() - tiempoInicio < tiempoLimiteMs) {
          try {
            // Intentar obtener datos
            const data = await controlApi.get<MyDataResponse>('/documents/708085ea-e66a-481a-b063-a4e6c6cb3258');

            if (data.data.message === 'Success') {
              setDataCampos(data.data.data)
              setIsSaved(true);
              break;
            }
          } catch (error) {
            console.error('Error al realizar la petición:', error);
          }

          await esperar(5000);
        }

        setShowLoading(false);
      };

      realizarPeticion();
    }, [isSaved, primerPeticionResuelta]);

    const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



  return (
    <main>

      <div className="main_header">
        <div className="main__title">
            <img src={logo} alt="kavak" />
            <div className="main__greeting">
              <h1>Smartforce</h1>
              <p>Bienvenido al apartadod para cargar documentos de los vehiculos</p>
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
