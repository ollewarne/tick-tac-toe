export function checkVictory(arr, marker) {
    for (let row of arr) {
        const rowSet = new Set(row);
        let arrIndex = arr.indexOf(row)

        if (rowSet.size === 1 && [...rowSet][0] === marker) return { type: "row", row: arrIndex }

        for (let i = 0; i < row.length; i++) {
            if (row[i] !== marker) continue
            if (arrIndex === 0 && arr[arrIndex + 1][i] === row[i] && arr[arrIndex + 2][i] === row[i]) {
                return { type: "column", column: i };
            }
        }

        for (let i = 0; i < row.length; i++) {
            if (row[i] !== marker) continue

            if (arrIndex === 0 && arr[arrIndex + 1][i + 1] === row[i] && arr[arrIndex + 2][i + 2] === row[i]) return {
                type: "diagonal", rowStart: arrIndex, rowEnd: arrIndex + 2, columnStart: i, columnEnd: i + 2
            }

            if (i === 2 && arr[arrIndex + 1][i - 1] === row[i] && arr[arrIndex + 2][i - 2] === row[i]) return {
                type: "reverseDiagonal", rowStart: arrIndex, rowEnd: arrIndex + 2, columnStart: i, columnEnd: i - 2
            }
        }
    }
    return false
}
