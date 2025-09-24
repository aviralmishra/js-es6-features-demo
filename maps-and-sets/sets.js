function demo() {
    const s1 = new Set([1, 2, 3]);
    console.log(s1);

    const s2 = new Set([3, 4, 5]);
    console.log(s2);

    const evens = new Set([2, 4, 6, 8]);
    const squares = new Set([1, 4, 9]);
    console.log(evens.union(squares));
}

demo();
