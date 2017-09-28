import { GlObject } from './GlObject';

export class ShaderProgram extends GlObject {

    constructor(gl) {
        this.program = undefined;

        this.attributes = [];
        this.uniforms = [];

        this.locAttributes = {};
        this.locUniforms = {};

    }

    load() {
    }

    unload() {
    }

    preRender() {

    }

    render() {

    }

    postRender() {

    }

    _compile() {

    }

    _getLocators() {
        this.locAttributes = {};
        this.locUniforms = {};

        this.attributes.forEach(x => {
            this.locAttributes[x] = this.gl.getAttribLocation(program, x);
        });

        this.uniforms.forEach(x => {
            this.locUniforms[x] = this.gl.getUniformLocation(program, x);
        });
    }
}