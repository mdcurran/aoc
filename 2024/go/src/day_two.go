package src

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

func DayTwoFirst() error {
	f, err := os.Open(filepath.Join(DataDirectory, "day_two.txt"))
	if err != nil {
		return err
	}
	defer f.Close()

	var (
		reports [][]int
		total   int
	)

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := strings.Fields(scanner.Text())
		report := []int{}
		for _, s := range line {
			n, err := strconv.Atoi(s)
			if err != nil {
				return err
			}
			report = append(report, n)
		}
		reports = append(reports, report)
	}

	for _, report := range reports {
		if isReportSafe(report) {
			total++
		}
	}

	fmt.Printf("Day 2 - Part 1: %d\n", total)

	return nil
}

func isReportSafe(report []int) bool {
	var (
		ascending bool
		previous  int
	)
	// A report is safe if:
	// - The levels are either all increasing or all decreasing.
	// - Any two adjacent levels differ by at least one and at most three.
	if len(report) == 1 {
		return true
	}
	if report[0] == report[1] {
		return false
	}
	if report[0] < report[1] {
		ascending = true
	}
	previous = report[0]
	for i := 1; i < len(report); i++ {
		if i == len(report)-1 {
			break
		}
		if ascending && previous >= report[i] {
			return false
		}
		if !ascending && previous <= report[i] {
			return false
		}
		if abs(previous, report[i]) > 3 {
			return false
		}
		previous = report[i]
	}
	return true
}
