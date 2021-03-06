import * as glMatrix from 'gl-matrix';
import { Renderer } from './core/Renderer';
import { Game } from './core/Game';
import { Scene } from './core/Scene';
import { GameObject } from './core/GameObject';
import { Component } from './core/Component';
import { Transform } from './core/Transform';
import { Vec3 } from './Math/Vec3'


import { Camera } from './Camera';

const mixin = base => class extends base {
    constructor() {
        super();
        this.mixinConst = true;
    }
    mixinMethod() {
        console.log('i am mixin');
    }

}
class SuperClass {
    constructor() {
        this.superConst = true;
    }
}
class SomeClass extends mixin(SuperClass) {
    constructor() {
        super();
        this.regularConst = true;
    }
    regMethod() {
        console.log('i am reg');
    }
}
//Object.assign(SomeClass.prototype, new Mixin());

class A {
    constructor() {
        this.doIt();
    }
    doIt() {
        console.log('doing A');
    }

    snoop() {
        console.log('snooping on A');
    }

    test(a) {
        console.log("just ", a);
    }

    test(a, b) {
        console.log("wow ", a, b);
    }
}

class B extends A {

    constructor(something) {
        super();
        super.snoop();
        this.snoop();
    }
    doIt() {
        console.log('doing B');
    }
}


class App {

    constructor() {

        this.test = new GameObject();

        this.A = A;
        this.B = B;

        this.a = new A();
        this.b = new B();


        window.glMatrix = glMatrix;
        window.app = this;

        window.reg = new SomeClass();

        //window.mixin = new Mixin();

        this.t1 = new Transform();
        this.t2 = new Transform();
        this.t3 = new Transform();
        this.t4 = new Transform();

        this.t1.addChild();
        this.t1.addChild(this);
        this.t1.addChild(this.t1);
        this.t1.addChild(this.t2);
        this.t1.addChild(this.t2);
        this.t1.addChild(this.t3);
        this.t1.addChild(this.t3);

        this.t4.addChild(this.t3);

        window.v = new Vec3(1, 2, 3);
    }

    onLoad() {
        

        let go = new GameObject("me", new Camera());
        let s = new Scene();
        s.transform.addChild(go.transform);

        this.game = new Game('gl-canvas');
        this.game.start();
        this.game.scene = s;
    }

    onUnload() {
        this.game.stop();
    }
}

// ---------------------------------------
// make app global
window.app = new App();

