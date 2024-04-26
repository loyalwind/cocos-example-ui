import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestNode')
export class TestNode extends Component {
    @property({type: Number, tooltip: "test 属性"})
    myNum: number = 0;
    start() {

    }

    update(deltaTime: number) {
        
    }
}

