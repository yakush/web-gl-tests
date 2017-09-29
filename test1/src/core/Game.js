import { Renderer } from './Renderer'
import { Scene } from './Scene'
import { Camera } from '../Camera'
import { RenderableComponent } from './RenderableComponent'

export class Game {

    constructor(canvasId) {
        this.running = false;

        this.canvas = document.getElementById(canvasId);

        if (!this.canvas) {
            throw new Error("no canvas element found");
        }

        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl) {
            alert('Unable to initialize WebGL. Your browser may not support it.');
            throw new Error("webgl not supported");
        }
        console.log("WEBGL VERSION: ", this.gl.getParameter(this.gl.VERSION));

        this.renderer = new Renderer(this.gl);

        this.lastLoopTime = 0;
        this._scene = null;
        this._camera = null;
    }


    /**
     * @type {Scene} 
     */
    get scene() { return this._scene; }

    /**
     * @type {Scene} 
     */
    set scene(scene) { this._scene = scene; }

    /**
     * @type {Camera} 
     */
    get camera() { return this._camera; }

    /**
     * @type {Camera} 
     */
    set camera(v) { this._camera = v; }

    /**
     * 
     * @param {Renderer} renderer 
     * @param {Number} time
     */
    onLoop(renderer, time) {

        if (this.scene && this.camera) {

            //call update on all (active) componenets (as tree)
            //setup camera
            //render all renderableComponents (as tree)
            _renderTree(this.scene);
        }
    }

    _renderTree(transform) {
        transform.children.forEach(child => {
            child.gameObject.getAllComponenets(RenderableComponent).forEach(component => {
                component.render(renderer);
            });

            this._renderTree(child);
        });
    }

    start() {
        console.log('starting game');

        this.running = true;

        let loop = (time) => {
            if (this.running) {
                let deltaTime = time - this.lastLoopTime;
                this.lastLoopTime = time;
                this.onLoop(this.renderer, deltaTime);
                requestAnimationFrame(loop);
            }
        }

        requestAnimationFrame(loop);
    }

    stop() {
        console.log('stopping game');
        this.running = false;
    }

}