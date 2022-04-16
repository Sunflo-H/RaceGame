// const button = document.querySelector('button');
const playBtn = document.querySelector('button#play');
const player = document.querySelector('.player');
const main = document.querySelector('main');
//random 거리, random초마다 더하기

function run(player) {
    let distance = Math.round(Math.random()*10+1);
    let time = Math.round(Math.random()*10+1)*100; // 1/1000 sec
    let width = parseInt(player.style.width, 10);
    console.log(typeof(width));
    console.log("런!");
    player.style.width = `${width + distance}px`;
    if(width <1000) {
        let timeId = setTimeout(run, time, player);
    }
}

// 함수한번 실행할때마다 더해
// 모든 플레이어가 완주 할때까지 반복
// 더하려는 player의 width를 알아야해

function makeTrack(color) {
    const track = document.createElement('div');
    const player = document.createElement('div');
    track.classList.add('track');
    player.classList.add('player');
    player.classList.add(color);
    player.style.width = "50px";
    track.append(player);
    main.append(track);
    run(player);
}

function init(num) {
    const color = ["red","green","blue","gray","black","yellow","pink","springgreen"];
    for(let i = 0; i<num; i++){

        makeTrack(color[i]);
    }
}


// button.addEventListener('click', () => {
//     const inputNumber = document.querySelector('input[type=text]');
//     let index = inputNumber.value;
//     console.log(index);
// })
playBtn.addEventListener('click',() => {
    const inputNumber = document.querySelector('input[type=text]');
    let num = inputNumber.value;
    console.log(num);
    init(num);
})