import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratorio-02_08-03-2022';
  articulos:any;

  //DIABETES
  pacientes:any;
  resultadoGlucemia:any;
  recomendacionesGlucemia:any;
  nivelGlucemia:any;
  pac={
    cedula:0,
    nombres:"",
    apellidos:"",
    eps:"",
    patologias:"",
    tipo_glucemia:0
  }
   sintomasArray=[
    'Cuadro neurovegetativos',
    'Trastornos de conciencia',
    'Signos de deshidratación',
    'Sepsis',
    'Patologías agudas cardiovascular neurológica'
   ]


   //ANEMIA

   pacienteAnemia:any;
   anemiaResultado:any; 

   pacAnemia={
    nombresA:"",
    apellidosA:"",
    nivel_hemoglobina:0,
    correo:"",
    tipo_edad:"",
    edad:0,
    sexo:"",
    estado_anemia:0
  }

  generoArray= [
    'M',
    'F',
  ]

  generoArray2=[
    {id: 0, text: 'Meses'},
    {id: 1, text: 'Años'},
  ]

  tipoEdadArray = [
    'Meses',
    'Años'
  ]


  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
    this.recuperarTodosAnemia();
  }
  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe((result:any) => this.pacientes = result);
  }

  recuperarTodosAnemia() {
    this.articulosServicio.recuperarTodosAnemia().subscribe((result:any) => this.pacienteAnemia = result);
  }


  alta() {
    this.articulosServicio.alta(this.pac).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  altaAnemia() {
    this.articulosServicio.altaAnemia(this.pacAnemia).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodosAnemia();
      }
    });
  }


  baja(codigo:number) {
    this.articulosServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  modificacion() {
    this.articulosServicio.modificacion(this.pac).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:number) {
    this.articulosServicio.seleccionar(codigo).subscribe((result:any) => this.pac = result[0]);
  }
  hayRegistros() {
    return true;
  }

  calcularNivelGlucemia(nivelGlucemia:number){

    if(nivelGlucemia >= 7.0 && nivelGlucemia < 13.8){

      this.resultadoGlucemia = 'HIPERGLICEMIA AISLADA';
      this.recomendacionesGlucemia = 'Glucemia en ayunas y TGP en pacientes sin diagnóstico. - Si deshidratación, rehidratación oral o EV según las demandas. - Reevaluar conducta terapéutica en diabéticos y cumplimiento de los pilares. - Reevaluar dosis de hipoglucemiantes.';
      this.pac.tipo_glucemia = 1;

    }else if(nivelGlucemia >= 13.8 && nivelGlucemia <= 33){

      this.resultadoGlucemia = 'CETOACIDOSIS DIABÉTICA';
      this.recomendacionesGlucemia = 'Coordinar traslado y comenzar tratamiento. - Hidratación con Solución salina 40 ml/Kg en las primeras 4 horas. 1-2 L la primera hora. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T). - Evitar insulina hasta desaparecer signos de hipopotasemia. - Administrar insulina simple 0,1 U/kg EV después de hidratar';
      this.pac.tipo_glucemia = 2;
    }else if(nivelGlucemia >= 33){

      this.resultadoGlucemia = 'ESTADO HIPEROSMOLAR HIPERGLUCÉMICO NO CETÓSICO';
      this.recomendacionesGlucemia = 'Coordinar traslado y comenzar tratamiento. - Hidratación con Solución Salina 10-15 ml/Kg/h hasta conseguir estabilidad hemodinámica. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T).';
      this.pac.tipo_glucemia = 3;
    }

    this.alta();

  }

  calcularHemoglobina(nivelHemoglobina:number, tipoEdad:String, edad:number, sexo:String){


    console.log(tipoEdad + ' ' + edad + ' ' + sexo)

      if(nivelHemoglobina>=13.0 && nivelHemoglobina<=26.0 && tipoEdad=='Meses' && edad>0 && edad<=1){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
      
      }else if(nivelHemoglobina>=10.0 && nivelHemoglobina<=18.0 && tipoEdad=='Meses' && edad>1 && edad<=6){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';

      }else if(nivelHemoglobina>=11.0 && nivelHemoglobina<=15.0 && tipoEdad=='Meses' && edad>6 && edad<=12){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
        
      }else if(nivelHemoglobina>=11.5 && nivelHemoglobina<=15.0 && tipoEdad=='Años' && edad>1 && edad<=5){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
        
      }else if(nivelHemoglobina>=12.6 && nivelHemoglobina<=15.5 && tipoEdad=='Años' && edad>5 && edad<=10 ){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
        
      }else if(nivelHemoglobina>=12.0 && nivelHemoglobina<=16.0 && sexo=='F' && tipoEdad=='Años' && edad>15){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
        
      }else if(nivelHemoglobina>=14.0 && nivelHemoglobina<=18.0 && sexo=='M' && tipoEdad=='Años' && edad>15){

        this.anemiaResultado = 'Resultado de Anemia: Negativo';
        
      }else{

        this.anemiaResultado = 'Resultado de Anemia: Positivo';
        
      }

      if(this.pacAnemia.tipo_edad=='Meses'){

        this.pacAnemia.tipo_edad="0";

      }else if(this.pacAnemia.tipo_edad=='Años'){

        this.pacAnemia.tipo_edad="1";

      }

      if(this.anemiaResultado=='Resultado de Anemia: Positivo'){

        this.pacAnemia.estado_anemia=1;

      }else if(this.anemiaResultado=='Resultado de Anemia: Negativo'){

        this.pacAnemia.estado_anemia=0;

      }

      
      this.altaAnemia();

  }
}
