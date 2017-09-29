import { mat4, vec3, quat } from 'gl-matrix';
import { GameObject } from './GameObject'

export class Transform {

    private _rotation: number[];
    private _translation: number[];
    private _scale: number[];
    private _matrix: number[];
    private _worldMatrix: number[];
    private _children: Transform[];
    private parent: Transform;

    constructor(public gameObject: GameObject) {
        this._rotation = vec3.create();
        this._translation = vec3.create();
        this._scale = vec3.fromValues(1, 1, 1);
        this._matrix = mat4.create();

        this._worldMatrix = mat4.create();

        this._children = [];
        this.parent = null;
    }

    get rotation(): number[] { return this._rotation; }
    set rotation(r) { this._rotation = r; this.updateMatrix(); }

    get translation() { return this._translation; }
    set translation(t) { this._translation = t; this.updateMatrix(); }

    get scale() { return this._scale; }
    set scale(s) { this._scale = s; this.updateMatrix(); }

    get matrix() { return this._matrix; }

    get worldMatrix() { return this._worldMatrix; }

    get children() { return this._children; }

    public removeChild(child: Transform) {
        let idx = this.children.indexOf(child);
        if (idx >= 0)
            this.children.splice(idx, 1);

        child.parent = null;
    }

    public addChild(child: Transform, keepWorldPosition = false) {
        if (!child) {
            console.error('no child found..');
            return;
        }

        // if (!(child instanceof Transform)) {
        //     //throw new Error("can't add a non Transform object as child");
        //     console.error("can't add a non Transform object as child");
        //     return;
        // }


        if (child === this) {
            //throw new Error("can't add a Transform to itself as a child");
            console.error("can't add a Transform to itself as a child");
            return;
        }

        if (this._children.indexOf(child) >= 0) {
            return;
        }

        //remove from old parent
        if (child.parent) {
            child.parent.removeChild(child);
        }

        if (keepWorldPosition) {
            // todo: keep world position!
            // child matrix = childMatrix + parentMatrix - newParentMatrix.
            throw new Error("keepWorldPosition not supported...");
        }

        child.parent = this;
        this.children.push(child);
    }

    private updateMatrix() {

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
}