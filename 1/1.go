package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	regex := regexp.MustCompile(`\D`)
	digits := make([][]string, 0)

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		stringNum := regex.ReplaceAllString(line, "")

		var arr []string

		for i, n := range stringNum {
			if i == 0 || i == len(stringNum)-1 {
				arr = append(arr, string(n))
			}
		}
		digits = append(digits, arr)
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	totalValue := 0
	for _, pair := range digits {
		if len(pair) == 1 {
			pair = append(pair, pair[0])
		}
		num, err := strconv.Atoi(pair[0] + pair[1])
		if err != nil {
			panic(err)
		}
		totalValue += num
	}

	fmt.Println(totalValue)
}
