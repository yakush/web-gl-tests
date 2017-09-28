export class Renderer {

    constructor(gl) {
        this.gl = gl;

        this.running = false;
    }

    startLoop() {
        this.running = true;

        let loop = ()=> {
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

}