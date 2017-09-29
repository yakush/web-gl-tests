import { VertexBuffreObject } from './VertexBuffreObject'

export class ElementsBufferObject {

    public componenetType: any;
    public vbosLocations: {};
    public vbos: {};
    public indicesBuffer: VertexBuffreObject;
    public numElements: number;
    public drawType: any;
    public componenetsPerVertex: any;

    constructor(public gl: WebGLRenderingContext, drawType) {
        this.componenetType = componenetType;
        this.componenetsPerVertex = componenetsPerVertex;
        this.drawType = drawType;
        this.numElements = 0;
        this.indicesBuffer = new VertexBuffreObject(gl, this.gl.ELEMENT_ARRAY_BUFFER, gl.UNSIGNED_SHORT, 3);

        this.vbos = {};
        this.vbosLocations = {};
    }



    destroyAll() {
        this.indicesBuffer.destroy();

        Object.keys(this.vbos).forEach(key => {
            this.vbos[key].destroy();
        });

        this.indicesBuffer = null;
        this.vbos = {};
        this.vbosLocations = {};
    }

    setIndices(indices) {
        let gl = this.gl;
        this.indicesBuffer.setData(indices);
    }

    addArrayBuffer(name, vbo) {
        this.vbos[name] = vbo;
    }

    getArrayBuffer(name) {
        return this.vbos[name];
    }

    getArrayBufferLocation(name) {
        return this.vbosLocations[name];
    }

    setArrayBufferData(name, data) {
        this.vbos[name].setData(data);
    }

    setBufferLocation(name, location) {
        this.vbosLocations[name] = location;
    }

    bindAllForRender() {
        this.indicesBuffer.bind(); //not for render. it doesn't have an attrib!

        Object.keys(this.vbos).forEach(key => {
            this.vbos[key].bindAllForRender(this.vbosLocations[key]);
        });
    }

    unbindAllForRender() {
        this.indicesBuffer.unbind(); //not for render. it doesn't have an attrib!

        Object.keys(this.vbos).forEach(key => {
            this.vbos[key].unbindForRender(this.vbosLocations[key]);
        });
    }

    render(mode) {
        this.bindAllForRender();
        this.gl.drawElements(mode, this.indicesBuffer.numElements, this.gl.UNSIGNED_SHORT, 0);
        this.unbindAllForRender();
    }
}