function* sports() {
    yield 'Tennis';
    yield 'Picleball';
    yield 'Football';
}

function demo() {
    let iterator1 = sports();

    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());

    let iterator2 = sports();
    for (let element of iterator2) console.log(element);
}

demo();
