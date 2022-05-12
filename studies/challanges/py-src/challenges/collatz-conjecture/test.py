
import sys, os
from solution import LongestCollatzConjectureBetween

sys.path.append(os.path.join(sys.path[0]))
sys.path.append(os.path.join(sys.path[0], '../../'))

from helpers.test.test import Test


with Test('Longest Collatz Conjecture Sequence') as test:
  def longest_sequence():
    longest_sequence = LongestCollatzConjectureBetween(2, 1000000)

    test.expect(longest_sequence.longest_sequence).toBe(524)


  test.it('Longest sequence between 2 and a million', longest_sequence)

