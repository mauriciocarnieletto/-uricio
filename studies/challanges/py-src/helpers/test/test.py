from time import time
from helpers.log.log import log

class Test:
  initial_time = None
  class expect():
    actual = None
    def __init__(self, actual):
      self.actual = actual

    def toBe(self, expected):
        if (self.actual != expected):
          raise Exception(f"Expecting {log.colors.SUCCESS}{self.actual} {log.colors.ERROR} received {expected}")



  def it(self, title, callback):
    try:
      callback()
      log.success(f"✓ {title}")
    except Exception as e:
      log.error(f"✕ {title}")
      print(e)

  def __init__(self, description):
    log.success(f"{description}")
    self.initial_time = time()
    pass

  def __enter__(self):
    return self

  def __exit__(self, a, b, c):
    log.success(f"{time() - self.initial_time}ms")

