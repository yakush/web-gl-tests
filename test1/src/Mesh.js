import { RenderableComponent } from './core/RenderableComponent';

export class Mesh extends RenderableComponent {

    constructor(mesh, material) {
        super();
        this.mesh = mesh;
        this.material = material;
    }

    load(renderer) {
    }

    unload(renderer) {
    }


    bind(renderer) {
        material.bind(gl);
        mesh.bind(gl);
    }
    unbind(renderer) {
        material.unbind(gl);
        mesh.unbind(gl);
    }

    update(renderer, deltaTime) {

    }
    render(renderer) {
        material.render();
        mesh.render();
    }
}