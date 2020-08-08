import {ToyReact, Component} from "./ToyReact.js"

// 虚dom实现
class MyComponent extends Component{
    render(){
        return <div>
            <span>hello world!</span>
            <div>
                {this.children}
            </div>
            </div>
    }
}

let a = <MyComponent name="a" id="ida">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
);

//实dom实现
// let a = <div name="a" id="ida">
//             <span>Hello</span>
//             <span>World</span>
//             <span>!</span>
//         </div>

// console.log(a)
// document.body.appendChild(a);