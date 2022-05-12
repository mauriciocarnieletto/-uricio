class Solution():

  def decodeString(self, string):
    substr = self.decodeSubstring(string, 0, len(string) - 1)
    return substr

  def decodeSubstring(self, string, start, end):
      opened_bracket = self.findOpeningBracket(string, start, end)

      if opened_bracket == -1:
          return string[start:end + 1]

      closed_bracket = self.findClosingBracket(string, start, end)

      substr = self.decodeSubstring(string, opened_bracket + 1, closed_bracket - 1)

      return string[start:opened_bracket - 1] + int(string[opened_bracket - 1]) * substr + string[closed_bracket + 1:end + 1]

  def findOpeningBracket(self, string, start, end):
      index = start
      while index <= end:
          if string[index] == '[':
              return index
          index += 1
      return -1

  def findClosingBracket(self, string, start, end):
      index = end
      while index >= start:
          if string[index] == ']':
              return index
          index -= 1
      return -1