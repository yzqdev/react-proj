//有三种基本的数据类型 number string boolean
//一个特殊的类别: any
let myName: string = "alice";
//or
let myNma = "alice";

// ?修饰符用来表示可有可没有
function printName(obj: { first: string; last?: string }) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//type alias

type Point = {
    x: number;
    y: number;
};
// 也可以这样使用
type ID = number | string;
// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
