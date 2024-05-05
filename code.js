function countMatchesAsync(arr, key) {
    return new Promise((resolve) => {
        let count = 0;
        arr.forEach(element => {
            if (element === key) { count++; }
        });
        resolve(count);
    });
}