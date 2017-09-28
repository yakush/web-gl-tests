import { Transform } from './Transform'

export class GameObject {

    constructor(name, ...components) {
        
        this._transform = new Transform(this);
        this._componenets = [];
        
        this.name = name || 'gameObject';
        components.forEach(x=>this.addComponent(x));
    }

    get transform() {
        return this._transform;
    }

    get componenets() {
        return this._componenets;
    }

    addComponent(componenet) {
        this._componenets.push(componenet);
    }

    removeComponent(componenet) {
        let idx = this._componenets.indexOf(componenet);
        if (idx >= 0)
            this._componenets.splice(idx, 1);
    }

    removeComponentsOfType(type) {
        for (var i = this._componenets.length - 1; i >= 0; i--) {
            var item = this._componenets[i];
            if (item instanceof type)
                this._componenets.splice(i, 1);
        }
    }

    getComponenet(type) {
        return this._componenets.find(x => x instanceof type);
    }

    getAllComponenets(type) {
        return this._componenets.filter(x => x instanceof type);
    }

    getComponenetInChildren(type) {
        let res = this.getComponenet(type);
        if (res) {
            return res;
        }

        for (var i = 0; i < _transform.children.length; i++) {
            var item = _transform.children[i].gameObject;
            res = item.getComponenetInChildren(type);
            if (res) {
                return res;
            }
        }
        return undefined;
    }

    getAllComponenetsInChildren(type) {
        let res = [];
        res = res.concat(this.getAllComponenets(type));

        for (var i = 0; i < _transform.children.length; i++) {
            var item = _transform.children[i].gameObject;
            res = res.concat(item.getAllComponenetsInChildren(type));
        }

        return res;
    }

    getComponenetInParent(type) {
        let res = this.getComponenet(type);
        if (res) {
            return res;
        }

        if (transform.parent) {
            res = transform.parent.getComponenetInParent(type);
            if (res) {
                return res;
            }
        }

        return undefined;
    }

    getAllComponenetsInParent(type) {
        let res = [];
        res = res.concat(this.getAllComponenets(type));

        if (transform.parent) {
            res = res.concat(transform.parent.getAllComponenetsInParent(type));
        }

        return res;
    }
}