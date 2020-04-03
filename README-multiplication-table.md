# Implement A Multiplication Table

Please read the following requirement:

I want to create a multiplication table. The input should be 2 integers specifying the start and the end of the table:

AC1: The start number must be smaller than or equal to the end number. Or the function will return `null`.

AC2: The start number and the end number can be any number in a range of 1 to 1000 (inclusive).

AC3: The output should be a string represents the multiplication table. Suppose that the start number is *2* and the end number is *4*, the output should be something like the following. Please note that all columns should be aligned properly.

```
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
```

## Acceptance Criteria

* Please draw task diagrams.
* Please define all the methods according to your task diagram.
* Please write down a test case using *given...when...then* pattern for a leaf block. Then implement the block to pass the test.
* Please continue doing this work until all the requirement has been fulfilled.,


## Tasking

check input
* given two numbers, the first number is smaller than second number, when check two number, then return true 
* given two numbers, the first number is equals with second number, when check two number, then return true
* given two numbers, one number is greater than 1000, when check two number, then return false
* given two numbers, one number is smaller than 1, when check two number, then return false

generate sequence between two numbers
* given two numbers, when generate sequence between two numbers, then return sequences  

generate multiple conditions
* given two numbers, when get multiple math conditions, then return string which is two numbers multiple math conditions 

generate multiplication row
* given two numbers, when get multiplication row, then return string which is some multiple math conditions from first number multiple second number to second number multiple second number

generate multiplication table
* given two numbers, when get multiplication table, then return string including multiple multiplication rows

 