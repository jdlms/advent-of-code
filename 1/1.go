package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func trebuchet(input []string, puzzle int) int {

	if puzzle != 1 && puzzle != 2 {
		fmt.Println("Please enter numbers 1 or 2")
		return -1
	}

	finalArr := make([]int, 0)
	regex := regexp.MustCompile(`\D`)
	spelledOut := []string{"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"}

	for _, s := range input {
		if puzzle == 2 {
			for i, num := range spelledOut {
				replacement := num + strconv.Itoa(i+1) + num
				s = strings.Replace(s, num, replacement, -1)
			}
		}

		var arr []string
		intString := regex.ReplaceAllString(s, "")
		for i, r := range intString {
			if i == 0 || i == len(intString)-1 {
				toString := string(r)
				arr = append(arr, toString)
			}
		}

		if len(arr) > 1 {
			n, err := strconv.Atoi(string(arr[0]) + string(arr[1]))
			if err != nil {
				fmt.Println(err)
			}
			finalArr = append(finalArr, n)
		} else {
			n, err := strconv.Atoi(string(arr[0] + arr[0]))
			if err != nil {
				panic(err)
			}
			finalArr = append(finalArr, n)
		}
	}
	sum := 0
	for _, arr := range finalArr {
		sum += arr
	}
	fmt.Println(sum)
	return sum
}

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	var input []string

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		input = append(input, line)
	}
	if err := scanner.Err(); err != nil {
		panic(err)
	}
	// enter 1 or 2 for each puzzle solution
	trebuchet(input, 2)
}
