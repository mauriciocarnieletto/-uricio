
class colors:
  SUCCESS = '\033[92m'
  WARNING = '\033[93m'
  ERROR = '\033[91m'

class log:
  colors = colors
  
  def success(message):
    print(colors.SUCCESS + message)
    
  def error(message):
    print(colors.ERROR + message)

  def warn(message):
    print(colors.WARNING + message)
  