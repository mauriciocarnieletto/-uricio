 
class Solution:
    def getLongestPalindrom(self, text):
        result = ''
        for i in range(1, len(text)):
            result = self.getPalindroms(text, result, i, i)
            result = self.getPalindroms(text, result, i - 1, i)

        return result

    def getPalindroms(self, text, result, tail, head):
        while head < len(text) and tail >= 0 and text[head] == text[tail]:
            if head - tail > len(result):
                result = text[tail:head + 1]

            head += 1
            tail -= 1

        return result
