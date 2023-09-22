let queue = [];

const addLifts = (totalLifts) => {
    const ground = document.getElementById('groundFloor');

    for (let i = 0; i < totalLifts; i++) {
        const lifts = document.createElement('div');
        const liftDoor1 = document.createElement('span');
        const liftDoor2 = document.createElement('span');

        ground.appendChild(lifts);
        lifts.append(liftDoor1, liftDoor2);

        lifts.setAttribute('class', 'lifts');
        liftDoor1.setAttribute('class', 'liftDoor');
        liftDoor2.setAttribute('class', 'liftDoor');
    }
};

const moveLift = (floor, liftNum, liftPos, isLiftBusy) => {
    const lifts = Array.from(document.querySelectorAll('.lifts'));
    const liftDoor = Array.from(document.querySelectorAll('.liftDoor'));

    isLiftBusy[liftNum] = true;

    let height = document.querySelectorAll('.floor')[0].offsetHeight;

    let time = `${Math.abs(floor - liftPos[liftNum]) * 2}`;

    lifts[liftNum].style.transform = `translateY(-${floor * height / 10}rem)`;
    lifts[liftNum].style.transition = `transform ${time}s ease-in-out 0s`;

    setTimeout(() => {
        console.log(`lift open`);
        liftDoor[2 * liftNum].style.transform = `translateX(-95%)`;
        liftDoor[2 * liftNum].style.transition = `all 2s ease-in-out 1s`;

        liftDoor[2 * liftNum + 1].style.transform = `translateX(95%)`;
        liftDoor[2 * liftNum + 1].style.transition = `all 2s ease-in-out 1s`;
    }, +time * 1000 + 500);

    setTimeout(() => {
        console.log(`lift close`);
        liftDoor[2 * liftNum].style.transform = `translateX(0%)`;
        liftDoor[2 * liftNum].style.transition = `all 2s ease-in-out 1s`;

        liftDoor[2 * liftNum + 1].style.transform = `translateX(0%)`;
        liftDoor[2 * liftNum + 1].style.transition = `all 2s ease-in-out 1s`;

        setTimeout(() => {
            isLiftBusy[liftNum] = false;
        }, 2500);
    }, (+time + 3.5) * 1000);

    liftPos[liftNum] = +floor;
};

function nearestFreeLift(calledFloor, liftPos, isLiftBusy) {
    let diff = [];
    for (let pos of liftPos)
        diff.push(Math.abs(pos - (+(calledFloor)))); // array containing distance from calledFloor

    let mini = 100, ind = -1;
    for (let d = 0; d < diff.length; d++) {
        if (diff[d] < mini && isLiftBusy[d] === false) {
            mini = diff[d];
            ind = d;
        }
    }
    return ind;
}

function callLift(i, totalFloors, liftPos, isLiftBusy) {
    const up_btn = document.querySelectorAll('.up_btn');
    const down_btn = document.querySelectorAll('.down_btn');

    // Hide the "down" button by default
    down_btn[i].style.display = 'none';

    up_btn.forEach((btn, id) => {
        if (i == id) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const calledFloor = `${totalFloors - id}`;

                if (liftPos[0] === 0) {
                    if (isLiftBusy[0] === false)
                        moveLift(calledFloor, 0, liftPos, isLiftBusy);
                } else {
                    let ind = nearestFreeLift(calledFloor, liftPos, isLiftBusy);

                    if (isLiftBusy[ind] === false)
                        moveLift(calledFloor, ind, liftPos, isLiftBusy);
                    else {
                        if (!queue.includes(calledFloor))
                            queue.push(calledFloor);

                        let timeout = setInterval(() => {
                            let BusyLift = isLiftBusy.some((lift) => {
                                return lift === false;
                            });
                            if (BusyLift && queue.length > 0) {
                                let ind = nearestFreeLift(queue[0], liftPos, isLiftBusy);
                                moveLift(queue[0], ind, liftPos, isLiftBusy);
                                queue.shift();
                            }
                        }, 500);
                        if (queue.length === 0)
                            clearInterval(timeout);
                    }
                }

                // Check if any lifts are called above
                const liftsCalledAbove = liftPos.some((pos) => pos < totalFloors - id);
                if (liftsCalledAbove) {
                    // Show the "down" button
                    down_btn[i].style.display = 'block';
                }
            });
        }
    });

    down_btn.forEach((btn, id) => {
        if (i == id) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const calledFloor = `${totalFloors - id}`;

                if (liftPos[0] === 0) {
                    if (isLiftBusy[0] === false)
                        moveLift(calledFloor, 0, liftPos, isLiftBusy);
                } else {
                    let ind = nearestFreeLift(calledFloor, liftPos, isLiftBusy);

                    if (isLiftBusy[ind] === false)
                        moveLift(calledFloor, ind, liftPos, isLiftBusy);
                    else {
                        if (!queue.includes(calledFloor))
                            queue.push(calledFloor);

                        let timeout = setInterval(() => {
                            let lift_queue = isLiftBusy.some((lift) => {
                                return lift === false;
                            });
                            if (lift_queue && queue.length > 0) {
                                let ind = nearestFreeLift(queue[0], liftPos, isLiftBusy);
                                moveLift(queue[0], ind, liftPos, isLiftBusy);
                                queue.shift();
                            }
                        }, 500);
                        if (queue.length === 0)
                            clearInterval(timeout);
                    }
                }
            });
        }
    });
}


const createFloor = (totalFloors, totalLifts) => {
    let liftDiv = document.getElementById('liftDiv');
    liftDiv.innerHTML = '';
    queue = [];

    let liftPos = Array(+totalLifts).fill(0);
    let isLiftBusy = Array(+totalLifts).fill(false);

    let floorInfo, floorNum, upBtn, downBtn;

    for (var i = 0; i <= totalFloors; i++) {
        let floor = document.createElement('div');

        floorInfo = document.createElement('div');
        floorNum = document.createElement('p');
        upBtn = document.createElement('button');
        downBtn = document.createElement('button');

        floor.setAttribute('class', 'floor');
        floorInfo.setAttribute('class', 'floorInfo');
        upBtn.setAttribute('class', 'up_btn');
        downBtn.setAttribute('class', 'down_btn');

        floorNum.innerHTML = `Floor ${totalFloors - i}`;
         if (i === 0) {
                            // Hide the "down" button for the ground floor
                            downBtn.style.display = 'none';
                        }

                        // Check if it's the last floor
                        if (i === totalFloors) {
                            // Hide the "up" button for the last floor
                            upBtn.style.display = 'none';
                        }
        upBtn.innerHTML = `<button id = upBtn> UP</button>`;
        downBtn.innerHTML = `<button id = downBtn> down</button>`;


        liftDiv.appendChild(floor);
        floor.appendChild(floorInfo);
        floorInfo.append(upBtn, floorNum, downBtn);

        if (i == totalFloors) {
            floor.setAttribute('id', 'groundFloor');
            addLifts(totalLifts);
        }

        callLift(i, totalFloors, liftPos, isLiftBusy);
    }
}

const startButton = document.getElementById('startBtn');
startButton.addEventListener('click', (e) => {
    e.preventDefault();
     startBtn.disabled = true;
    let floorVal = document.getElementById('floorValue').value;
    let liftVal = document.getElementById('liftValue').value;

     if (floorVal === '' || liftVal === '') {
            alert('Please enter the details!');
            startBtn.disabled = false; // Re-enable the button
            return;
    } else if (floorVal < 1 || liftVal < 1) {
        alert('Please enter valid numbers!');
        startBtn.disabled = false;
        return;
    } else if (Number(liftVal) > 10) {
        alert('Number of lifts cannot be greater than 10!');
        startBtn.disabled = false;
        return;
    } else if (Number(liftVal) > Number(floorVal)) {
        alert('Number of lifts cannot be greater than the number of floors!');
        startBtn.disabled = false;
        return;
    } else if (window.innerWidth < 300 && Number(liftVal) > 4) {
        alert('Number of lifts cannot be greater than 4!');
        startBtn.disabled = false;
        return;
    } else if (window.innerWidth < 400 && Number(liftVal) > 5) {
        alert('Number of lifts cannot be greater than 5!');
        startBtn.disabled = false;
        return;
    } else if (window.innerWidth < 500 && Number(liftVal) > 6) {
        alert('Number of lifts cannot be greater than 6!');
        startBtn.disabled = false;
        return;
    }

    createFloor(floorVal, liftVal);
});
