const data = await Deno.readTextFile("input.txt");

const lines = data.split("\n");

// const arr = ["343   4", "4   3", "2   5", "15   3", "321   9", "3   3"]

const partOne = function (lines: string[]) {
    let total = 0

    const firstArr: number[] = []
    const secondArr: number[] = []

    lines.map((item) => {
        const newArray = item.split(" ").filter(e => e).map(e => Number(e))
        firstArr.push(newArray[0])
        secondArr.push(newArray[1])
        return
    });

    firstArr.sort((a, b) => a - b)
    secondArr.sort((a, b) => a - b)

    firstArr.map((item, i) => {
        if (item > secondArr[i]) {
            const int = item - secondArr[i]
            total += int
            return
        } else if (secondArr[i] > item) {
            const int = secondArr[i] - item
            total += int
        }

    })

    return total
}


console.log(partOne(lines));