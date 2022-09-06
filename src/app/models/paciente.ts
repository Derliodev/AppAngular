export class Paciente{

  public _id: string

  constructor(
    public rut: String,
    public nombre: String,
    public edad: Number,
    public sexo: String,
    public fotoPersonal: String,
    public fechaIngreso: Date,
    public enfermedad: String,
    public revisado: boolean
  ){
    this._id = ''
  }
}
