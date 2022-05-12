
import time

class CollatzConjecture():
  sequence = []
  initial_value = None
  max_value = None

  def __init__(self, initial_value, max_value = None):
    self.sequence = []
    self.initial_value = initial_value
    self.max_value = max_value
    self.calculate(initial_value)
    pass

  def odd(self, n):
    return int(n * 3 + 1)

  def even(self, n):
    return int(n / 2)
  
  def calculate(self, n):
    self.sequence.append(n)
    while int(n) != 1:
      if(n % 2 == 0):
        n = self.even(n)
      else:
        n = self.odd(n)
      self.sequence.append(n)
    pass

  def print_sequence(self):
    print(self.sequence)
    pass

def test_solution_one():
  bigest_sequence_index = 0
  index = 1

  while index < 1000000:
    sequence = CollatzConjecture(index)
    if(len(sequence.sequence) > bigest_sequence_index):
      bigest_sequence_index = index

    index += 1

  return bigest_sequence_index


class LongestCollatzConjectureBetween():
  cache = []
  max_value = None
  longest_sequence = 0
  longest_sequence_number = 0

  def __init__(self, initial_value = None, max_value = None):
    self.cache = list([None]*max_value)
    self.initial_value = initial_value
    self.max_value = max_value
    self.calculate()
    pass

  def calculate(self):
    i = self.initial_value

    while i < self.max_value:
      length = 0
      n = i
      while n != 1:
        if(n < self.max_value and self.cache[n]):
          length = length + self.cache[n]
          if(length > self.longest_sequence):
            self.longest_sequence_number = i
            self.longest_sequence = length
          break
        if(n % 2 == 0):
          n = int(n / 2)
        else:
          n = int(n * 3 + 1)
        length += 1

      if(length > self.longest_sequence):
        self.longest_sequence_number = i
        self.longest_sequence = length + 1
      self.cache[i] = length
      i += 1
