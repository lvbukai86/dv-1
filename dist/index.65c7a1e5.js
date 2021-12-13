let html = document.querySelector('#demo');
let style = document.querySelector('style');
let string = `/*你好，我叫小吕
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    color:red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳结合形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 
    0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%);
}
/* 加2个小球 */
#div1::before
{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background:radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 25%);
}
#div1::after
{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
let n = -1;
let step = ()=>{
    setTimeout(()=>{
        if (n < string.length - 1) {
            n = n + 1;
            if (string[n] === "\n") string2 += "<br>";
            else if (string[n] === " ") string2 += "&nbsp";
            else string2 += string[n];
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, 99999);
            html.scrollTo(0, 99999);
            step();
        }
    }, 300);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
