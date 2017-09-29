export class Renderer {

    /**
     * 
     * @param {WebGLRenderingContext} gl 
     */
    constructor(gl) {
        this.gl = gl;
        this.running = false;
    }

    startLoop() {
        this.running = true;
        
        let loop = () => {
            if (this.running) {
                console.log('loop');
                this.render();
                requestAnimationFrame(loop);
            }
        }

        requestAnimationFrame(loop);
    }

    stopLoop() {
        this.running = false;
    }

    render() {

    }

    render(scene, camera) {
        //setup gl 
        //setup scene (uniforms)
        //setup camera (uniforms)

        //for obj in objs
        //  setup material
        //  setup obj
        //  render

    }

    //-------------------------------------------------------
    // locations

    getAttribLocation(program, name) {
        return this.gl.getAttribLocation(program, name);
    }

    getUniformLocation(program, name) {
        return this.gl.getUniformLocation(program, name);
    }

    //-------------------------------------------------------
    // set uniforms

    uniform1f(location, v) {
        this.gl.uniform1f(location, v);
    }
    uniform1fv(location, [v]) {
        this.gl.uniform1fv(location, [v]);
    }
    uniform2f(location, v0, v1) {
        this.gl.uniform2f(location, v0, v1);
    }
    uniform2fv(location, [v0, v1]) {
        this.gl.uniform2fv(location, [v0, v1]);
    }
    uniform3f(location, v0, v1, v2) {
        this.gl.uniform3f(location, v0, v1, v2);
    }
    uniform3fv(location, [v0, v1, v2]) {
        this.gl.uniform3fv(location, [v0, v1, v2]);
    }
    uniform4f(location, v0, v1, v2, v4) {
        this.gl.uniform4f(location, v0, v1, v2, v4);
    }
    uniform4fv(location, [v0, v1, v2, v4]) {
        this.gl.uniform4fv(location, [v0, v1, v2, v4]);
    }
    uniformMatrix2fv(location, [m0, m1, m2, m3]) {
        this.gl.uniformMatrix2fv(location, false, [m0, m1, m2, m3]);
    }
    uniformMatrix3fv(location, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9]) {
        this.gl.uniformMatrix3fv(location, false, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9]);
    }
    uniformMatrix4fv(location, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15]) {
        this.gl.uniformMatrix4fv(location, false, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15]);
    }
    uniform1i(location, v) {
        this.gl.uniform1i(location, v);
    }
    uniform1iv(location, [v]) {
        this.gl.uniform1iv(location, [v]);
    }
    uniform2i(location, v0, v1) {
        this.gl.uniform2i(location, v0, v1);
    }
    uniform2iv(location, [v0, v1]) {
        this.gl.uniform2iv(location, [v0, v1]);
    }
    uniform3i(location, v0, v1, v2) {
        this.gl.uniform3i(location, v0, v1, v2);
    }
    uniform3iv(location, [v0, v1, v2]) {
        this.gl.uniform3iv(location, [v0, v1, v2]);
    }
    uniform4i(location, v0, v1, v2, v4) {
        this.gl.uniform4i(location, v0, v1, v2, v4);
    }
    uniform4iv(location, [v0, v1, v2, v4]) {
        this.gl.uniform4iv(location, [v0, v1, v2, v4]);
    }

    //-------------------------------------------------------
    // textures
    bindTexture(unit, location, [v]) {
        this.bindTexture(unit, location, [v]);
    }
    bindTexture(location, unit, texture) {
        this.gl.activeTexture(this.gl.TEXTURE0 + unit);
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture)
        this.gl.uniform1i(location, unit);
    }

    unBindTexture(unit, location, v) {
        this.gl.activeTexture(this.gl.TEXTURE0 + unit);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    //-------------------------------------------------------
    // buffers
    bindArrayBuffer(location, buffer, size, type, normalized, stride, offset) {
        this.gl.bindArrayBuffer(location, buffer);
        this.gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
    }

    bindArrayBuffer1f(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 1, gl.FLOAT, false, 0, 0);
    }
    bindArrayBuffer2f(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 2, gl.FLOAT, false, 0, 0);
    }
    bindArrayBuffer3f(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 3, gl.FLOAT, false, 0, 0);
    }
    bindArrayBuffer4f(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 4, this.gl.FLOAT, false, 0, 0);
    }
    bindArrayBuffer1s(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 1, this.gl.SHORT, false, 0, 0);
    }
    bindArrayBuffer2s(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 2, this.gl.SHORT, false, 0, 0);
    }
    bindArrayBuffer3s(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 3, this.gl.SHORT, false, 0, 0);
    }
    bindArrayBuffer4s(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 4, this.gl.SHORT, false, 0, 0);
    }
    bindArrayBuffer1us(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 1, this.gl.UNSIGNED_SHORT, false, 0, 0);
    }
    bindArrayBuffer2us(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 2, this.gl.UNSIGNED_SHORT, false, 0, 0);
    }
    bindArrayBuffer3us(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 3, this.gl.UNSIGNED_SHORT, false, 0, 0);
    }
    bindArrayBuffer4us(location, buffer) {
        this.bindArrayBuffer(locaion, buffer, 4, this.gl.UNSIGNED_SHORT, false, 0, 0);
    }

    bindElementsArrayBuffer(buffer) {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
    }

}