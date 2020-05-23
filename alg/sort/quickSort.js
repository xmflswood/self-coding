a = [1, -5, 888, 0, 4, 995, 123, 0, 111, 18, 19, 26, 44, 8]

function quickSort(array, start = 0, end) {
    if (start >= end) return
    let value = array[start]
    let i = start
    let j = end || array.length - 1
    let seq = false
    while(true) {
        if (!seq) {
            if (value > array[j]) {
                swap(array, i, j)
                seq = true
            } else {
                j--
            }
        } else {
            if (value < array[i]) {
                swap(array, i, j)
                seq = false
            } else {
                i++
            }
        }
        if (i === j) break
    }
    quickSort(array, start, i)
    quickSort(array, i + 1, end || array.length)
}
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}
quickSort(a)
console.log(a)