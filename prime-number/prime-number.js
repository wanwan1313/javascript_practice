let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    let prime_number = []
    let in1 = document.querySelector('#in1').value
    let in2 = document.querySelector('#in2').value
    console.log(in1, in2)

    for (let i = Number(in1); i <= Number(in2); i++) {

        let prime = true　　//先設定都是質數=true

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false　　//一旦會被整除，就判定質數=false
                break
            }
        }

        if (prime == true) {

            prime_number.push(i)

        }

    };

    console.log(prime_number)


    let p = document.querySelector('p')
    p.innerText = prime_number.join(',')
})




let a = [3,4]
let b = [5]
let c = a.concat(b)
console.log(c) 


