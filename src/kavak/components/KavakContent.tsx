import { MyData } from "../interfaces/interfaces"

import pdf from '../../assets/pdfkavak.pdf';

export const KavakContent = (props: MyData) => {
  return (
    <>
         <div className="main__container">
     

            <div className="main__form">
                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Talon de verificación</h2>
                </div>
                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Placa: <span>{(props.tvplaca) ? props.tvplaca: 'Sin datos'}</span></li>
                    <li>Mes: <span>{(props.tvmes) ? props.tvmes: 'Sin datos'}</span></li>
                    <li>Estado: <span>{(props.tvestado) ? props.tvestado: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                
                <div className="card_form">
                    <div className="card_header_form">
                        <i className="fa fa-solid fa-id-card fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Tarjeta de Circulación</h2>
                    </div>
                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                        <li>Placa: <span>{(props.tcplaca) ? props.tcplaca: 'Sin datos'}</span></li>
                        <li>Vin: <span>{(props.tcvin) ? props.tcvin: 'Sin datos'}</span></li>
                        <li>Modelo: <span>{(props.tcmodelo) ? props.tcmodelo: 'Sin datos'}</span></li>
                        <li>Estado: <span>{(props.tcestado) ? props.tcestado: 'Sin datos'}</span></li>
                        <li>Fecha Vigencia: <span>{(props.tcfechavigencia) ? props.tcfechavigencia: 'Sin datos'}</span></li>
                        <li>Edo de Vigencia: <span>{(props.tcedovigente) ? props.tcedovigente: 'Sin datos'}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-sticky fa-2x text-lightblue"></i>
         
                    <h2 className="card_title_form"> Calcomanía de verificación</h2>
                </div>
                <div className="card_inner_form card_list">
                    <ul className="font-bold text-title ">
                    <li>Tipo: <span>{(props.cftipo) ? props.cftipo: 'Sin datos'}</span></li>
                    <li>Placa: <span>{(props.cfplaca) ? props.cfplaca: 'Sin datos'}</span></li>
                    <li>Modelo: <span>{(props.cdmodelo) ? props.cdmodelo: 'Sin datos'}</span></li>
                    </ul>
                    <ul className="font-bold text-title">
                    <li>Año: <span>{(props.cfanio) ? props.cfanio: 'Sin datos'}</span></li>
                    <li>Validez: <span>{(props.cfvalidez) ? props.cfvalidez: 'Sin datos'}</span></li>
                    <li>Código: <span>{(props.cfcodigo) ? props.cfcodigo: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>


                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-list fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Placa Auto </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.paclave) ? props.paclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-list fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Placa Engomado </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.peclave) ? props.peclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                    <h2 className="card_title_form">Similitud en 5 documentos: <span>{(props.c5docs) ? props.c5docs: 'Sin datos'}</span> </h2>
                </div>

                <div className="card_inner_form ">
                    <ul className="font-bold text-title">
                    <li>Repuve</li>
                    <li>Clave: <span>{(props.reclave) ? props.reclave: 'Sin datos'}</span></li>
                    </ul>
                </div>

                </div>

            


            </div>

        </div>

        <div className="container_vin">
            <div className='card_vin'>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-checklist fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin parabrisas </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.vinparabclave) ? props.vinparabclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-checklist fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin carrocería </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.vincarclave) ? props.vincarclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-checklist fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin motor </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.vinmotorclave) ? props.cftipo: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-card-checklist fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin escanner </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.vinescannerclave) ? props.vinescannerclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Coincidencia entre los 4 documentos Vin: <span>{(props.coicniden4docs) ? props.coicniden4docs: 'Sin datos'}</span> </h2>
                </div>
                </div>

                            
                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-speedometer fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> KM Tacometro </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.kmtacometroclave) ? props.kmtacometroclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-speedometer fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> KM Escanner </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{(props.kmescannerclave) ? props.kmescannerclave: 'Sin datos'}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Coincidencia entre los 2 documentos: <span>{(props.coiciden2docs) ? props.coiciden2docs: 'Sin datos'}</span> </h2>
                </div>

            
                </div>

            </div>
        </div>

        <div className="container_repuve">
            

                    <div className="card_repuve">
                    <div className="card_form">
                        <div className="card_header_form">
                        <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"><a href={pdf} target="_blank">Validación portal repuve: <span>{(props.validacionrepuve) ? props.validacionrepuve: 'Sin datos'}</span></a>  </h2>
                        
                        </div>
                    </div>
                    </div>

                <div className="card_repuve">
                    <div className="card_form">
                    <div className="card_header_form">
                        <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Repuve </h2>
                    </div>

                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                            <li>VIN: <span>{(props.repuvevin) ? props.repuvevin: 'Sin datos'}</span></li>
                            <li>Año: <span>{(props.repuveanio) ? props.repuveanio: 'Sin datos'}</span></li>
                            <li>Marca: <span>{(props.repuvemarca) ? props.repuvemarca: 'Sin datos'}</span></li>
                            <li>Modelo: <span>{(props.repuvemodelo) ? props.repuvemodelo: 'Sin datos'}</span></li>
                            <li>Procedencia: <span>{(props.repuveprocedencia) ? props.repuveprocedencia: 'Sin datos'}</span></li>

                        </ul>
                    </div>
                    </div>
                </div>

                
                <div className="card_repuve">
                    <div className="card_form">
                    <div className="card_header_form">
                        <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Documentos </h2>
                    </div>

                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                        <li>VIN: <span>{(props.documentosvin) ? props.documentosvin: 'Sin datos'}</span></li>
                        <li>Año: <span>{(props.documentosanio) ? props.documentosanio: 'Sin datos'}</span></li>
                        <li>Marca: <span>{(props.documentosmarca) ? props.documentosmarca: 'Sin datos'}</span></li>
                        <li>Modelo: <span>{(props.documenrosmodelo) ? props.documenrosmodelo: 'Sin datos'}</span></li>
                        <li>Procedencia: <span>{(props.documentosprocedencia) ? props.documentosprocedencia: 'Sin datos'}</span></li>

                        </ul>
                    </div>
                    </div>
                </div>
                

                
        </div>

        <div className="container_repuve">
            <div className="card_repuve">
            <div className="card_form">


                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li> <a href={pdf} target="_blank">Validación portal FGJ: <span>{(props.FGJ) ? props.FGJ: 'Sin datos'}</span></a> </li>
                    <li> <a href={pdf} target="_blank">Validación portal OCRA: <span>{(props.OCRA) ? props.OCRA: 'Sin datos'}</span></a> </li>
                    <li> <a href={pdf} target="_blank">Validación portal Robo USA/CAN: <span>{(props.USA7CAN) ? props.USA7CAN: 'Sin datos'}</span></a> </li>
                    <li> <a href={pdf} target="_blank">Validación Avisos judiciales: <span>{(props.AVISOSJUDICALES) ? props.AVISOSJUDICALES: 'Sin datos'}</span></a> </li>

                </ul>
                </div>

                
            </div>
            </div>
        </div>
     
        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal RAPI: <span>{props.VALIDACIONRAPI}</span> </h2>
                </div>
            </div>
            </div>

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> RAPI </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>VIN: <span>{(props.RAPIVIN) ? props.RAPIVIN: 'Sin datos'}</span></li>
                    <li>MOTOR: <span>{(props.tcmotor) ? props.tcmotor: 'Sin datos'}</span></li>
                </ul>
                </div>
            </div>
            </div>

            
            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Documentos </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>VIN: <span>{}</span></li>
                </ul>
                </div>
            </div>
            </div>
        

        
        </div>

        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal AMI Reporte de robo: <span>{(props.VALIDACIONAMIREPORTEROBO) ? props.VALIDACIONAMIREPORTEROBO: 'Sin datos'}</span></h2>
                </div>
            </div>
            </div>

          
        

        
        </div>

        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal AMI Seguros: <span>{(props.VALIDACIONamiSEGUROS) ? props.VALIDACIONamiSEGUROS: 'Sin datos'}</span> </h2>
                </div>
            </div>
            </div>

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-bookmark-check fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> AMI </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>Vigencia: <span>{(props.AMIVIGENCIA) ? props.AMIVIGENCIA: 'Sin datos'}</span></li>
                    <li>Póliza: <span>{(props.AMIPOLIZA) ? props.AMIPOLIZA: 'Sin datos'}</span></li>
                    <li>Marca: <span>{(props.AMIMARCA) ? props.AMIMARCA: 'Sin datos'}</span></li>
                </ul>
                </div>
            </div>
            </div>

            
            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-bookmark-check fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Adeudos: <span>{(props.ADEUDOS) ? props.ADEUDOS: 'Sin datos'}</span> </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>Edomex: <span>{(props.ADEUDOEDOMEX) ? props.ADEUDOEDOMEX: 'Sin datos'}</span></li>
                    <li>CDMX: <span>{(props.ADEUDOCDMX) ? props.ADEUDOCDMX: 'Sin datos'}</span></li>

                </ul>
                </div>
            </div>
            </div>
        

        
        </div>

        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="bi bi-check-circle fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> : <span>{}</span> </h2>
                </div>
            </div>
            </div>

        <div className="card_repuve">
            <div className="card_form">
            <div className="card_header_form">
                <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Pesta;a 1 </h2>
            </div>

            <div className="card_inner_form">
                <ul className="font-bold text-title">
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>

                </ul>
            </div>
            </div>
        </div>

        
        <div className="card_repuve">
            <div className="card_form">
            <div className="card_header_form">
                <i className="bi bi-person-lines-fill fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Pesta;a 2 </h2>
            </div>

            <div className="card_inner_form">
                <ul className="font-bold text-title">
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>
                <li>: <span>{}</span></li>
              

                </ul>
            </div>
            </div>
        </div>
        

        
        </div>
    </>
  )
}
