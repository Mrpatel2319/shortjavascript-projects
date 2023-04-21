function updateNumbers()
{
    let a = Math.floor(Math.random()*10+1);
    let b = Math.floor(Math.random()*10+1);
    correctAns = a*b;
    const btn = document.getElementById('btn');
    document.getElementById('num1').innerHTML =a ;
    document.getElementById('num2').innerHTML =b ;
}
updateNumbers();
function updateScore(event){
    event.preventDefault();
    let ans = +(document.getElementById('input').value);
    console.log(ans);
    let score = +(document.getElementById('score').innerHTML);
    if(correctAns===ans){
        score++;
        document.getElementById('score').innerHTML = score;

    }
    updateNumbers();
    document.getElementById('input').value = '';
}
btn.addEventListener('click', updateScore);


