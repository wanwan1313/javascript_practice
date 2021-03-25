function getRandom(x) {
    return Math.floor(Math.random() * x) + 1
}

let btn = document.querySelector('button')
let div_num = document.querySelector('div.num')
btn.addEventListener('click', function () {

    let num_01 = [];
    let num_02 = '0' + getRandom(8);


    function getPowerNum() {
        for (let i = 0; i < 6; i++) {
            let num = getRandom(38) //1~38亂數取一值
            if (num_01.indexOf(num) > -1) {
                // 檢測有沒有重複
                i--;　//重作
                continue
            }
            else {
                if (num < 10) {
                    num = '0' + num
                }
                num_01.push(num)
            }
        }
        return num_01
    }

    // 產生標題
    let title_01 = document.createElement('p')
    let title_02 = document.createElement('p')
    let title_03 = document.createElement('p')
    let title_01_text = document.createTextNode('第一區號碼開出：')
    let title_02_text = document.createTextNode('第一區號碼大小：')
    let title_03_text = document.createTextNode('第二區號碼開出：')
    title_01.appendChild(title_01_text)
    title_02.appendChild(title_02_text)
    title_03.appendChild(title_03_text)
    div_num.insertBefore(title_01, btn)
    div_num.insertBefore(title_02, btn)
    div_num.insertBefore(title_03, btn)

    // 開出順序
    let num_01open = getPowerNum()
    for (let i = 0; i < num_01open.length; i++) {
        let num_01open_span = document.createElement('span')
        num_01open_span.style.border = ' 0.5px solid #ccc'
        num_01open_span.style.padding = '5px 10px'
        let num_01open_span_text = document.createTextNode(num_01open[i])
        num_01open_span.appendChild(num_01open_span_text)
        title_01.appendChild(num_01open_span)
    }

    // 大小順序
    let num_01sort = num_01.sort(function (a, b) {
        return a - b
    })
    for (let i = 0; i < num_01sort.length; i++) {
        let num_01sort_span = document.createElement('span')
        num_01sort_span.style.border = ' 0.5px solid #ccc'
        num_01sort_span.style.padding = '5px 10px'
        let num_01sort_span_text = document.createTextNode(num_01sort[i])
        num_01sort_span.appendChild(num_01sort_span_text)
        title_02.appendChild(num_01sort_span)
    }

    // 第二區
    let num_02_span = document.createElement('span')
    num_02_span.style.border = ' 0.5px solid #ccc'
    num_02_span.style.padding = '5px 10px'
    let num_02_span_text = document.createTextNode(num_02)
    num_02_span.appendChild(num_02_span_text)
    title_03.appendChild(num_02_span)


    // 大標
    let title = document.querySelector('h1')
    title.style.color = 'red'

    // 刪除前一次的DOM元素
    if ( document.querySelectorAll('p').length > 3 ) {
        let previousTitle_1 = document.querySelectorAll('p')[0]
        let previousTitle_2 = document.querySelectorAll('p')[1]
        let previousTitle_3 = document.querySelectorAll('p')[2]
        div_num.removeChild(previousTitle_1)
        div_num.removeChild(previousTitle_2)
        div_num.removeChild(previousTitle_3)
    }
})
