
import sys, os
from solution import Solution, fizz_buzz

sys.path.append(os.path.join(sys.path[0]))
sys.path.append(os.path.join(sys.path[0], '../../'))

from helpers.test.test import Test

with Test('FizzBuzz Function') as test:
  def multiple_of_three():
    test.expect(fizz_buzz(3)).toBe('fizz')
  def multiple_of_five():
    test.expect(fizz_buzz(5)).toBe('buzz')
  def multiple_of_three_and_five():
    test.expect(fizz_buzz(15)).toBe('fizzbuzz')
  def not_multiple():
    test.expect(fizz_buzz(4)).toBe(4)

  test.it('Should print fizz when the input is multiple of 3', multiple_of_three)
  test.it('Should print buzz when the input is multiple of 5', multiple_of_five)
  test.it('Should print fizzbuzz when the input is multiple of 3 and five', multiple_of_three_and_five)
  test.it('Should print the input when the number is not multiple of 3 or and 5', not_multiple)

with Test('FizzBuzz Sequence') as test:

  def receive_a_valid_sequence():
    output = Solution([3, 5, '15', 20, 25, '30', 4])
    test.expect(output['valid']).toBe(['fizz', 'buzz', 'fizzbuzz', 'buzz', 'buzz', 'fizzbuzz', '4'])
    test.expect(len(output['invalid'])).toBe(0)

  def receive_a_sequence_with_invalid_values():
    output = Solution(['banana', 3, 5.3, 'batata', ''])
    test.expect(output['invalid']).toBe(['banana', 'batata', ''])
  

  test.it('Should receive a sequence of valid numbers as intergers or strings and should return an equivalent list as fizzbuzz', receive_a_valid_sequence)
  test.it('Should receive a sequence with valid and invalid numbers and outputs two seperated lists', receive_a_sequence_with_invalid_values)