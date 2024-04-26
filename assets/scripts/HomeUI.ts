import { _decorator, Component, Node, Animation, Enum, Button, Label, Color, UIRenderer } from "cc";
const { ccclass, property } = _decorator;
import { BackPackUI } from "./BackPackUI";
import { ShopUI } from "./ShopUI";
import { ChallengeUI } from "./ChallengeUI";
import { PanelType } from "./PanelType";
import { TestNode } from "./TestNode";

@ccclass
export class HomeUI extends Component {
    @property(Animation)
    menuAnim: Animation = null!;
    @property(BackPackUI)
    backPackUI: BackPackUI = null!;
    @property(ShopUI)
    shopUI: ShopUI = null!;
    @property(ChallengeUI)
    challengeUI: ChallengeUI = null!;
    @property(TestNode)
    testMy: TestNode = null!;

    public curPanel = PanelType.Home;

    // use this for initialization
    onLoad() {
        this.curPanel = PanelType.Home;
        // this.menuAnim.play('menu_reset');
    }

    start() {
        this.backPackUI.init(this);
        this.shopUI.init(this, PanelType.Shop);
        this.challengeUI.init(this);
        this.scheduleOnce(() => {
            this.menuAnim.play('menu_intro');
        }, 0.5);

        // 创建一个新的节点  
        let newNode = new Node('New Node');

        // // 创建一个新的 Sprite 组件，并设置它的纹理（可选）  
        // let sprite = newNode.addComponent(Sprite);
        // sprite.spriteFrame = new cc.SpriteFrame('path_to_your_image.png'); // 替换为你的图片路径  

        // // 将新节点添加到当前节点的子节点列表中  
        // this.node.addChild(newNode);

        // // 如果需要，你可以设置新节点的位置、大小等属性  
        // newNode.setPosition(cc.v2(100, 100));
        // newNode.setSize(cc.size(100, 100));  

        let n = new Node('New Node')
        let lab = n.addComponent(Label)
        lab.string = "hello world"
        lab.color = Color.WHITE
        lab.fontSize = 30
        this.node.addChild(n)
        n.setPosition(0, 0)
        n.setSiblingIndex(2)
    }

    gotoShop() {
        if (this.curPanel !== PanelType.Shop) {
            this.shopUI.show();
        }
    }

    gotoHome() {
        if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
            this.curPanel = PanelType.Home;
        }
    }
}
