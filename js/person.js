class Person {
    constructor(nombre, identifacion, correo, estilo, instrumento) {
        this._nombre = nombre;
        this.identifacion = identifacion;
        this.correo = correo;
        this.estilo = estilo;
        this.instrumento = instrumento;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get identifacion() {
        return this._identificacion;
    }
    set identifacion(identifacion) {
        this._identificacion = identifacion;
    }
    set correo(correo) {
        this._correo = correo;
    }
    get correo() {
        return this._correo;
    }
    set estilo(estilo) {
        this._estilo = estilo;
    }
    get estilo() {
        return this._estilo
    }
    set instrumento(instrumento) {
        this._instrumento = instrumento;
    }
    get instrumento() {
        return this._instrumento;
    }
}