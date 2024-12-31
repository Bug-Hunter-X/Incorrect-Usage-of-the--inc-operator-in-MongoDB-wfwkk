# Incorrect Usage of the $inc Operator in MongoDB
This example demonstrates an incorrect usage of the MongoDB `$inc` operator, which is used to increment a numerical field.
The error occurs when attempting to increment a field with a string value instead of a numerical value. 

## Bug
The original code attempts to increment the `incorrectField` using the string value "1". This will cause a type error. 

## Solution
The solution corrects this by using a numerical value (1) to increment the `incorrectField`, ensuring that the operation executes successfully.
