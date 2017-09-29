export class VertexBuffreObject {

    /**
     * @param {WebGLRenderingContext} gl
     * @param {Number} componenetType gl.FLAOT | gl.SHORT | gl.UNSIGNED_SHORT | gl.BYTE | gl.UNSIGNED_BYTE
     * @param {Number} componenetsPerVertex i.e x,y,z : 3 components
     * @param {Number} drawType gl.STATIC_DRAW | gl.DYNAMIC_DRAW | gl.STREAM_DRAW
     * @param {[Number]=} data optinal buffer data
     */
    constructor(gl, componenetType, componenetsPerVertex, drawType, data) {
        this.gl = gl;
        this.componenetType = componenetType;
        this.componenetsPerVertex = componenetsPerVertex;
        this.drawType = drawType;
        this.numElements = 0;
        this.buffer = gl.createBuffer();

        if (data)
            setData(gl, data);
    }

    destroy() {
        if (!this.buffer)
            //throw new Error("buffer already created");
            return;

        this.buffer = null;
    }

    /**
     * 
     * @param {[Number]} data 
     */
    setData(data) {
        this._assertBuffer();
        let gl = this.gl;

        this.bind();

        this.numElements data.length/this.componenetsPerVertex;

        if (type == gl.FLOAT)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), drawType);
        else if (type == gl.SHORT)
            gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(data), drawType);
        else if (type == gl.UNSIGNED_SHORT)
            gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(data), drawType);
        else if (type == gl.BYTE)
            gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data), drawType);
        else if (type == gl.UNSIGNED_BYTE)
            gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data), drawType);

        this.unbind();
    }

    bind() {
        let gl = this.gl;

        this._assertBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    }

    unbind() {
        let gl = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    bindForRender(location) {
        this._assertBuffer();
        let gl = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.enableVertexAttribArray(location)
        gl.vertexAttribPointer(location, this.componenetsPerVertex, this.componenetType, false, 0, 0);
    }

    unbindForRender(location) {
        this._assertBuffer();

        let gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.disableVertexAttribArray(location);
    }

    //-------------------------------------------------------
    // helpers

    _assertBuffer() {
        if (!this.buffer)
            throw new Error("buffer was destroyed");
    }
}