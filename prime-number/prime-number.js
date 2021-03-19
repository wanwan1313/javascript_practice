let prime_number = []

for (let i = 2; i <= 100; i++) {

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

let a = [3,4]
let b = [5]
let c = a.concat(b)
console.log(c) 


