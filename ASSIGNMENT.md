Cache

 

In this question, you will have to build a cache module.

 

Cache has no memory limit and should support the following API:

 

 

new Cache()  constructor to create a new cache instance
 

get(key)  key is string. returns either whatever value was set for this key, or **undefined** if none was set.
 

set(key, value) set value for key
 

toObject()     for testing purposes, returns all the cache elements as an object



Solve this after solving the first section:

 

add a new argument to the Cache constructor - maxItems. If you try to add a new item to the cache, and it already has maxItems, it should delete the item which hasn't been used for the longest amount of time (used = single get or set).
 

enhanced - make the solution work as O(1)