
import sys, os
from solution import Solution

sys.path.append(os.path.join(sys.path[0]))
sys.path.append(os.path.join(sys.path[0], '../../'))

from helpers.test.test import Test


with Test('Longest Palindrom Substring') as test: 
  def decode():
    test.expect(Solution().decodeString('2[a2[b]c]')).toBe('abbcabbc')

  test.it('Decode ', decode)
