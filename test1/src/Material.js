import { GlObject } from './GlObject';

export class Material extends GlObject {

    constructor(gl) {
        this.gl = gl;

        this.shaderProgram = undefined;
        this.uniforms = {};
    }

    preRender() {
        //use shader
        //set uniforms
        //set textures
    }
    
    postRender() {
        //unbind textures
    }


}