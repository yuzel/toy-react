class ElementWapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        console.log("set attribute 1")
    }
    appendChild(vchild){
        vchild.mountTo(this.root);
    }
    mountTo (parent){
        parent.appendChild(this.root)
        console.log("mountTo 1")
    }
}

class TextWrapper{
    constructor(content){
        this.root = document.createTextNode(content)    
    }
    mountTo(parent){
        parent.appendChild(this.root); 
        console.log("mountTo 2");
    }
}

export class Component{
    constructor(){
        this.children = []
    }
    setAttribute(name, value){
        this[name] = value;
        console.log("set attribute 2")
    }
    mountTo(parent){
        let vdom = this.render();
        vdom.mountTo(parent);
        console.log("mountTo 3");
    }
    appendChild(vchild){
        this.children.push(vchild)
    }
}

export let ToyReact = {
    //虚dom实现
    createElement(type, attributes, ...children){
        let element;
        if (typeof type === "string"){
            element = new ElementWapper(type);
        } else {
            element = new type;
        }

        for (let name in attributes){
            element.setAttribute(name, attributes[name]);
        }
        let insertChildren = (children) => {
            for (let child of children){
                if (typeof child === "object" && child instanceof Array) {
                    insertChildren(child);
                }else {
                    if (!(child instanceof Component)
                    && !(child instanceof ElementWapper)
                    && !(child instanceof TextWrapper)) {
                        child = child.toString();
                    }
                    if (typeof child  === "string"){
                        child = new TextWrapper(child);
                    }
                    element.appendChild(child);
                }
            }
        }
        insertChildren(children);
        return element;
    },
    render(vdom, element){
        vdom.mountTo(element);
    }
    // 实dom实现
    // createElement(type, attributes, ...children){
    //     let element = document.createElement(type);
    //     for (let name in attributes){
    //         element.setAttribute(name, attributes[name]);
    //     }
    //     for (let child of children){
    //         if (typeof child === "string"){
    //             child = document.createTextNode(child);
    //         }
    //         element.appendChild(child);
    //     }
    //     return element;
    // }

}