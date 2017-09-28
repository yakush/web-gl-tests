import { vec3 } from 'gl-matrix';

export class Vec3 {

    constructor(x, y, z) {

        if (arguments.length == 0) {
            this._v = vec3.create();
        } else if (arguments.length == 1) {
            this._v = vec3.fromValues(x, x, x);
        } else {
            this._v = vec3.fromValues(x, y, z);
        }
    }

    get x() { return this._v[0] }
    set x(val) { this._v[0] = val; }

    get y() { return this._v[1]; }
    set y(val) { this._v[1] = val; };

    get z() { return this._v[2]; }
    set z(val) { this._v[2] = val; }

    get value() {
        return this._v;
    }
}