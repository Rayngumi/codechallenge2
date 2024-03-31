function generateArray(start, end) {
    const length = Math.abs(end - start) + 1;
    const increment = start <= end ? 1 : -1;
    return Array.from({ length }, (_, index) => start + index * increment);
}