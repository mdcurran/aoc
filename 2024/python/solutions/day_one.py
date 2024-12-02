from typing import List, Dict


def part_one() -> None:
    left: List[int] = []
    right: List[int] = []
    total: int = 0

    with open("./solutions/test/day_one_input.txt") as f:
        while line := f.readline():
            l, r = line.split()
            left.append(int(l))
            right.append(int(r))

    left.sort()
    right.sort()

    for i, _ in enumerate(left):
        total += abs_diff(left[i], right[i])

    print(f"Day 1 - Part 1: {total}")


def part_two() -> None:
    left: List[int] = []
    right: Dict[int, int] = {}
    total: int = 0

    with open("./solutions/test/day_one_input.txt") as f:
        while line := f.readline():
            l, r = line.split()
            left.append(int(l))
            if int(r) not in right:
                right[int(r)] = 1
                continue
            right[int(r)] += 1

    for n in left:
        if n not in right:
            continue
        total += n * right.get(n)

    print(f"Day 1 - Part 2: {total}")


def abs_diff(x: int, y: int) -> int:
    if x < y:
        return y - x
    return x - y
