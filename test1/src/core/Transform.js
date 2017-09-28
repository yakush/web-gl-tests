import { mat4, vec3, quat } from 'gl-matrix';

export class Transform {

    constructor(gameObject) {

        this._gameObject = gameObject;

        this._rotation = vec3.create();
        this._translation = vec3.create();
        this._scale = vec3.fromValues(1, 1, 1);
        this._matrix = mat4.create();

        this._worldMatrix = mat4.create();

        this.children = [];
        this.parent = null;
    }

    get gameObject() {
        return this._gameObject;
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(r) {
        this._rotation = r;
        this._updateMatrix();
    }

    get translation() {
        return this._translation;
    }
    set translation(t) {
        this._translation = t;
        this._updateMatrix();
    }

    get scale() {
        return this._scale;
    }
    set scale(s) {
        this._scale = s;
        this._updateMatrix();
    }

    get matrix() {
        return this._matrix;
    }

    get worldMatrix() {
        return this._worldMatrix;
    }

    _updateMatrix() {

        //rest
        mat4.identity(this._matrix);

        //R -> T -> S

        mat4.rotateX(this._matrix, this._matrix, this._rotation[0]);
        mat4.rotateY(this._matrix, this._matrix, this._rotation[1]);
        mat4.rotateZ(this._matrix, this._matrix, this._rotation[2]);

        mat4.translate(this._matrix, this._matrix, this._translation);

        mat4.scale(this._matrix, this._matrix, this._scale);

        //world matrix
        if (parent)
            this._worldMatrix = mat4.multiply(this._worldMatrix, this.parent.worldMatrix, this.matrix);
        else
            this._worldMatrix = this.matrix;
    }

    addChild(transfrom, keepWorldPosition) {
        keepWorldPosition = !!keepWorldPosition;

        if (!transfrom) {
            console.error('no child found..');
            return;
        }

        if (!(transfrom instanceof Transform)) {
            //throw new Error("can't add a non Transform object as child");
            console.error("can't add a non Transform object as child");
            return;
        }

        if (transfrom === this) {
            //throw new Error("can't add a Transform to itself as a child");
            console.error("can't add a Transform to itself as a child");
            return;
        }

        if (this.children.includes(transfrom)) {
            return;
        }

        //remove from old parent
        if (transfrom.parent) {
            transfrom.parent.children.pop(transfrom);
            transfrom.parent = null;

        }

        if (keepWorldPosition) {
            // todo: keep world position!
            // child matrix = childMatrix + parentMatrix - newParentMatrix.
            throw new Error("keepWorldPosition not supported...");
        }

        transfrom.parent = this;
        this.children.push(transfrom);
    }
}