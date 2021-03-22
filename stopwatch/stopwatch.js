let countNumber = 1; //起始值
let t; //時間參數

// 建立累加數值的函式
function count(){
    document.getElementById('txt').value = countNumber
    countNumber ++;
}

// 建立開始函式>>每一秒執行一次count()
function startCount(){
    t = setInterval(function(){
        count()
    },1000)
    
    // 按鈕屬性變更
    document.getElementById('btn_start').setAttribute('disabled',true)
    document.getElementById('btn_end').removeAttribute('disabled')
}

//建立停止函式>>清除t變數
function stopCount(){
    
    clearTimeout(t)

    // 按鈕屬性變更
    document.getElementById('btn_end').setAttribute('disabled',true)
    document.getElementById('btn_start').removeAttribute('disabled')
}