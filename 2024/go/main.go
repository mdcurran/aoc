package main

import (
	"fmt"
	"os"

	"github.com/mdcurran/aoc/src"
)

func main() {
	err := src.DayOneFirst()
	if err != nil {
		fmt.Printf("error running day one (part one): %s\n", err)
		os.Exit(1)
	}
	err = src.DayOneSecond()
	if err != nil {
		fmt.Printf("error running day one (part two): %s\n", err)
		os.Exit(1)
	}
	err = src.DayTwoFirst()
	if err != nil {
		fmt.Printf("error running day two (part one): %s\n", err)
		os.Exit(1)
	}
	os.Exit(0)
}
