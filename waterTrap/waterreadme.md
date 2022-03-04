Approach
1. Traversing every element in an array
2. Finding higest bars on left and right side
3. Taking smaller height from left and right bar
4. Difference between the smaller height and height of the current element is the amount of water that can be stored in this array element.

Algo
1. Traversing the array from start to end.
2. For each element traversihe array from start to that index and find the maximum height (left) and traverse
    the array from the current index to end, and find the maximum height (right)
3. The amount of water that will be stored is min(left,right)-array[i]
4. Calculating total amount of water stored
