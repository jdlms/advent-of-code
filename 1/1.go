package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	digits := make([][]string, 0)

	for scanner.Scan() {
		line := scanner.Text()

		regex := regexp.MustCompile(`\D`)

		stringNum := regex.ReplaceAllString(line, "")

		var arr []string

		for i, n := range stringNum {
			if i == 0 || i == len(stringNum)-1 {
				arr = append(arr, string(n))
			}
		}
		digits = append(digits, arr)
	}

	totalValue := 0

	for _, v := range digits {
		if len(v) == 1 {
			v = append(v, v[0])
		}

		joined := strings.Join(v, "")
		num, err := strconv.Atoi(joined)
		if err != nil {
			panic(err)
		}
		fmt.Println(num)
		totalValue += num
	}

	fmt.Println(totalValue)
}
