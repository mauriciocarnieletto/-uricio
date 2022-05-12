import sys, os
from solution import Solution

sys.path.append(os.path.join(sys.path[0]))
sys.path.append(os.path.join(sys.path[0], '../../'))

from helpers.test.test import Test


with Test('Longest Palindrom Substring') as test:
  def banana_test():
    test.expect(Solution().getLongestPalindrom('banana')).toBe('anana')

  def million_test():
    test.expect(Solution().getLongestPalindrom('million')).toBe('illi')

  test.it('Banana palindrom', banana_test)
  test.it('Mollion palindrom', million_test)
