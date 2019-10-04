
const data = JSON.parse(localStorage.getItem("mifei"));


// 点击事件
let click = (el)=>{
    let lis = [...document.querySelectorAll(".item")];
    lis.forEach((item,i)=>{
        item.onclick = ()=>{
            localStorage.setItem("indexMi",i);
            location.href = "details.html";
        }
    })
}
// 渲染
let render = (res) =>{
    if(res){
        let str = "";
        res.forEach((s,i)=>{
            str += `<div class="item">
                    <p>${s.name}</p>
                    <p><span>${s.num}</span> /个</p>
                </div>`
        })
        $(".content").innerHTML = str;
        click();
    }
}

// 使用渲染
render(data);


// 添加商品
$(".footer").onclick = ()=>{
    location.href = "add.html";
}