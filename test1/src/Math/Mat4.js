import { vec3, mat4 } from 'gl-matrix';

export class Mat4 {

    constructor() {

        if (arguments.length == 0) {
            this._v = mat4.create();
        } else {
            this._v = mat4.fromValues(arguments);
        }        
    }
    
    // -----------------------------------------------------
    
    get value() {
        return this._v;
    }

    //-------------------------------------------------------
    mult(){
        mat4.multiply()
    }
}