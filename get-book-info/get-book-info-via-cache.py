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

# Optimized caching function
def get_book_info_via_cache(isbn):
    # if the requested input exists in the cache then we retrieve it from the cache
    if isbn in cache:
        cache.move_to_end(isbn) # move to last position of LRU for optimization 
        return cache[isbn]  
    else: 
        book = get_book_info(isbn) # call the function to get book info if not cached 
        cache[isbn] = book         # caching book info
        cache.move_to_end(isbn)    # moe to end of cache 
    
        

# Testing 
get_book_info("1")
get_book_info_via_cache("1")
print(cache)     

get_book_info_via_cache("2")
print(cache)
get_book_info_via_cache("3")
print(cache)
get_book_info_via_cache("4")
print(cache)
