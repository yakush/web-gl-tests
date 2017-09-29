import { Component } from './Component';
import { Renderer } from './Renderer';

export class RenderableComponent extends Component {

    /**
     * 
     * @param {Renderer} renderer 
     */
    load(renderer) { }

    /**
     * 
     * @param {Renderer} renderer 
     */
    render(renderer) { }

    /**
     * 
     * @param {Renderer} renderer 
     */
    unload(renderer) { }
}