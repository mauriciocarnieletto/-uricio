from subprocess import call
import sys
from pathlib import Path

challenge = sys.argv[1] if len(sys.argv) > 1 else None

challenges = {}
for path in Path('./challenges').rglob('test.py'):
  challenges[path.parts[1]] = path

def ask_for_challenge():
  print("You must choose a challenge: ")
  print('\n')
  challanges_list = []
  for index, challenge in enumerate(challenges):
    print(index, ' - ', challenge)
    challanges_list.append(challenge)

  print('\n')

  print('*', ' - ',  'To run all tests')

  print('\n')
  challenge_to_run = input('Type a challenge number:  ')

  if(challenge_to_run == "*"):
    return challenges

  return challenges[challanges_list[int(challenge_to_run)]]


if(challenge == None):
  challenge = ask_for_challenge()

if(isinstance(challenge, dict)):
  for c in challenge:
    call(["python3", str(challenges[c])])
  exit()

call(["python3", str(challenge)])
