import { GlObject } from './GlObject';

export class Mesh extends GlObject {

    constructor(mesh, material) {
        this.mesh = mesh;
        this.material = material;
    }

    load(gl) {
    }

    unload(gl) {
    }


    bind(gl) {
        material.bind(gl);
        mesh.bind(gl);
    }
    unbind(gl) {
        material.unbind(gl);
        mesh.unbind(gl);
    }

    update(gl, deltaTime) {

    }
    render() {
        material.render();
        mesh.render();
    }
}