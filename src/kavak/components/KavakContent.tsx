import { MyData } from "../interfaces/interfaces"

export const KavakContent = (props: MyData) => {
  return (
    <>
         <div className="main__container">
     

            <div className="main__form">
                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-check-circle fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Talon de verificación</h2>
                </div>
                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Placa: <span>{props.campo1}</span></li>
                    <li>Mes: <span>{props.campo2}</span></li>
                    <li>Estado: <span>{props.campo3}</span></li>
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
                    <li>Placa: <span>{props.campo4}</span></li>
                    <li>Vin: <span>{props.campo5}</span></li>
                    <li>Modelo: <span>{props.campo6}</span></li>
                    <li>Estado: <span>{props.campo7}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Calcomanía de verificación</h2>
                </div>
                <div className="card_inner_form card_list">
                    <ul className="font-bold text-title ">
                    <li>Tipo: <span>{props.campo8}</span></li>
                    <li>Placa: <span>{props.campo9}</span></li>
                    <li>Modelo: <span>{props.campo10}</span></li>
                    </ul>
                    <ul className="font-bold text-title">
                    <li>Año: <span>{props.campo11}</span></li>
                    <li>Validez: <span>{props.campo12}</span></li>
                    <li>Código: <span>{props.campo13}</span></li>
                    </ul>
                </div>
                </div>


                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Placa Auto </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo14}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Placa Engomado </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo15}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form">Similitud en 5 documentos: <span>{props.campo16}</span> </h2>
                </div>

                <div className="card_inner_form ">
                    <ul className="font-bold text-title">
                    <li>Repuve</li>
                    <li>Clave: <span>{props.campo17}</span></li>
                    </ul>
                </div>

                </div>

            


            </div>

        </div>

        <div className="container_vin">
            <div className='card_vin'>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin parabrisas </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo18}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin carrocería </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo19}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin motor </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo20}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Vin escanner </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo21}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Coincidencia entre los 4 documentos Vin: <span>{props.campo22}</span> </h2>
                </div>
                </div>

                            
                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> KM Tacometro </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo23}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> KM Escanner </h2>
                </div>

                <div className="card_inner_form">
                    <ul className="font-bold text-title">
                    <li>Clave: <span>{props.campo24}</span></li>
                    </ul>
                </div>
                </div>

                <div className="card_form">
                <div className="card_header_form">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <h2 className="card_title_form"> Coincidencia entre los 2 documentos: <span>{props.campo25}</span> </h2>
                </div>

            
                </div>

            </div>
        </div>

        <div className="container_repuve">
            

                    <div className="card_repuve">
                    <div className="card_form">
                        <div className="card_header_form">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Validación portal repuve: <span>{props.campo26}</span> </h2>
                        </div>
                    </div>
                    </div>

                <div className="card_repuve">
                    <div className="card_form">
                    <div className="card_header_form">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Repuve </h2>
                    </div>

                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                        <li>VIN: <span>{props.campo27}</span></li>
                        <li>Año: <span>{props.campo28}</span></li>
                        <li>Marca: <span>{props.campo29}</span></li>
                        <li>Modelo: <span>{props.campo30}</span></li>
                        <li>Procedencia: <span>{props.campo31}</span></li>

                        </ul>
                    </div>
                    </div>
                </div>

                
                <div className="card_repuve">
                    <div className="card_form">
                    <div className="card_header_form">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <h2 className="card_title_form"> Documentos </h2>
                    </div>

                    <div className="card_inner_form">
                        <ul className="font-bold text-title">
                        <li>VIN: <span>{props.campo32}</span></li>
                        <li>Año: <span>{props.campo33}</span></li>
                        <li>Marca: <span>{props.campo34}</span></li>
                        <li>Modelo: <span>{props.campo35}</span></li>
                        <li>Procedencia: <span>{props.campo36}</span></li>

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
                    <li>Validación portal FGJ: <span>{props.campo37}</span></li>
                    <li>Validación portal OCRA : <span>{props.campo38}</span></li>
                    <li>Validación portal Robo USA/CAN : <span>{props.campo39}</span></li>
                    <li>Validación Avisos judiciales: <span>{props.campo40}</span></li>

                </ul>
                </div>

                
            </div>
            </div>
        </div>
     
        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal RAPI: <span>{props.campo41}</span> </h2>
                </div>
            </div>
            </div>

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> RAPI </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>VIN: <span>{props.campo42}</span></li>
                </ul>
                </div>
            </div>
            </div>

            
            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Documentos </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>VIN: <span>{props.campo43}</span></li>
                </ul>
                </div>
            </div>
            </div>
        

        
        </div>

        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal AMI Reporte de robo: <span>{props.campo44}</span></h2>
                </div>
            </div>
            </div>

          
        

        
        </div>

        <div className="container_repuve">
            

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Validación portal AMI Seguros: <span>{props.campo45}</span> </h2>
                </div>
            </div>
            </div>

            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> AMI </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>Vigencia: <span>{props.campo46}</span></li>
                    <li>Póliza: <span>{props.campo47}</span></li>
                    <li>Marca: <span>{props.campo48}</span></li>
                </ul>
                </div>
            </div>
            </div>

            
            <div className="card_repuve">
            <div className="card_form">
                <div className="card_header_form">
                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                <h2 className="card_title_form"> Adeudos: <span>{props.campo49}</span> </h2>
                </div>

                <div className="card_inner_form">
                <ul className="font-bold text-title">
                    <li>Edomex: <span>{props.campo50}</span></li>
                    <li>CDMX: <span>{props.campo51}</span></li>

                </ul>
                </div>
            </div>
            </div>
        

        
        </div>
    </>
  )
}
