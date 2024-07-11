export default class Cl_programa {
    contructor(){
        this.contPersona = 0
        this.contPersonaMayorEdad = 0
    }
    procesarPersona(p){
        if (edad => 18){
            this.contPersonaMayorEdad++;
        }
    }
    cantPersona(){
        return this.cantPersona;
    }
    cantPersoMayorEdad(){
        return this.contPersonaMayorEdad;
    }
    porcentajeMayorEdad(){
       return (this.cantPersoMayorEdad / this.cantPersona) * 100;
    }
}