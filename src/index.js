const helloTitle = document.createElement('h2');
helloTitle.innerText = 'Hello';
document.body.appendChild(helloTitle);
function first() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(Math.floor(Math.random() * Math.floor(10)));
        }, 3000);
    });
    // then((res)=>console.log(res));   
}
first().then(console.log);

function makeAllCaps(stringArr) {

    return new Promise((resolve, reject) => {

        stringArr.forEach((element, index) => {
            if (typeof element !== "string") {
                reject("not a sring");
            }
            else {
                stringArr[index] = element.toUpperCase();
            }
        });

        resolve(stringArr);
    });

}

function sortWords(stringArr) {
    return new Promise((resolve, reject) => {
        stringArr.forEach(element => {
            if (typeof element !== "string") {
                reject("not a sring");
            }
        });
        stringArr.sort();
        console.log(stringArr);
        resolve(stringArr);
    });

}
makeAllCaps(["zzz", "1", "aaa", "bbb"])
    .then(sortWords)
    .catch((error) => {
        console.log(error);
    });

