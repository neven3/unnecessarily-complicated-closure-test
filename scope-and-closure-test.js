const test = 'global';

function fromOutside() {
    console.log(test);
}

function inner() {
    const test = 'inner';

    function first() {
        const test = 'insidefirst';
        console.log(test);

        second();
        third();
        fromOutside();
        fourth();
        fifth();
    }

    function second() {
        console.log(test);
    }

    function willBeThird() {
        const test = 'inside third';
        console.log(test);

        function bla() {
            console.log(test);
        }

        return bla;
    }

    const third = willBeThird();

    function willBeFourth() {
        const test = 'inside fourth';
        console.log(test);

        return fromOutside;
    }

    const fourth = willBeFourth();

    function willBeFifth() {
        const test = 'inside fifth';
        console.log(test);

        return second;
    }

    const fifth = willBeFifth();

    first();
}

// inner(); // Uncomment this line