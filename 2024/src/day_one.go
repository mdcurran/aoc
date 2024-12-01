package src

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"slices"
	"strconv"
	"strings"
)

const DataDirectory = "./src/testdata"

func DayOneFirst() error {
	f, err := os.Open(filepath.Join(DataDirectory, "day_one.txt"))
	if err != nil {
		return err
	}
	defer f.Close()

	var (
		left, right []int
		total       int
	)

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := strings.Fields(scanner.Text())
		l, err := strconv.Atoi(line[0])
		if err != nil {
			return err
		}
		r, err := strconv.Atoi(line[1])
		if err != nil {
			return err
		}
		left = append(left, l)
		right = append(right, r)
	}

	slices.Sort(left)
	slices.Sort(right)

	for i := 0; i < len(left); i++ {
		total += abs(left[i], right[i])
	}

	fmt.Println(total)

	return nil
}

func DayOneSecond() error {
	f, err := os.Open(filepath.Join(DataDirectory, "day_one.txt"))
	if err != nil {
		return err
	}
	defer f.Close()

	var (
		left  []int
		total int
	)
	right := map[int]int{}

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := strings.Fields(scanner.Text())
		l, err := strconv.Atoi(line[0])
		if err != nil {
			return err
		}
		r, err := strconv.Atoi(line[1])
		if err != nil {
			return err
		}
		left = append(left, l)
		n, ok := right[r]
		if !ok {
			right[r] = 1
			continue
		}
		right[r] = n + 1
	}

	for _, n := range left {
		x, ok := right[n]
		if !ok {
			continue
		}
		total += n * x
	}

	fmt.Println(total)

	return nil
}

func abs(x, y int) int {
	if x < y {
		return y - x
	}
	return x - y
}
