function millionarie() {

    let nums = [];

    while (nums.length < 6) {

        let numAux = Math.floor(Math.random() * 100) + 1;

        if (numAux > 0 && numAux <= 60 && !nums.includes(numAux)) {
            nums.push(numAux);
        }
    }

    nums.sort();
    console.log(nums);
}

millionarie();