
def fizz_buzz(number):

  if(number % 3 == 0 and number % 5 == 0):
    return 'fizzbuzz'
  
  elif(number % 3 == 0):
    return 'fizz'
  
  elif(number % 5 == 0):
    return 'buzz'

  else:
    return number

def is_valid_int(val):
  try:
    int(val)
    return True
  except:
    return False

def Solution(sequence):
  valid_output = []
  invalid_output = []
  
  for item in sequence:
    if(is_valid_int(item)):
      valid_output.append(str(fizz_buzz(int(item))))
    else:
      invalid_output.append(item)

  return {'valid': valid_output, 'invalid': invalid_output}