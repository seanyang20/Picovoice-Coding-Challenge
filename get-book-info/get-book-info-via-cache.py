from collections import OrderedDict
from functools import cache

# REFERENCE 
# For Python 3, OrderedDict object has the following two functions:
# move_to_end(key, last=True), it moves the key to the right end (last = True), or left end 
# (last = False); popitem(last=True) removes item from right end (last = True), or left end (last = False)

cache = OrderedDict()

# Assume this function is given and to be wrapped 
def get_book_info(isbn):
    return {"The Last Lecture", "Randy Pausch", "English"}


    