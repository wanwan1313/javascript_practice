// 建立亂數取值
// Math.floor(Math.random()* x)代表在0~x-1之間亂數取值，+1代表在1~x之間亂數取值
function getRandom(x) {
    return Math.floor(Math.random() * x) + 1
}


function powerStart() {
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

    // 開出順序
    let num_01open = getPowerNum()
    let num01_open = document.querySelectorAll('span.num01')
    for (let i = 0; i < 6; i++) {
        num01_open[i].innerText = num_01open[i]
    }

    // 大小順序
    let num_01sort = num_01.sort(function (a, b) {
        return a - b
    })
    let num01_sort = document.querySelectorAll('span.num01-sort')
    for (let i = 0; i < 6; i++) {
        num01_sort[i].innerText = num_01sort[i]
    }

    // 第二區號碼
    let num02 = document.getElementById('num02')
    num02.innerText = num_02

    let numSpan = document.querySelectorAll('span')
    // console.log(numSpan.length)
    for(let j=0 ; j<numSpan.length ; j++ ){
        numSpan[j].style.color = '#000'
    }

    let title = document.querySelector('h1')
    title.style.color = 'red'
}
