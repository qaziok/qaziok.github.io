---
title: "Functional Programming in Python"
description: "Concepts and Techniques from functional paradigm in Python"
published: 2025/01/30
slug: "functional-python"
---

It's been a while, but I'm back with a new article. This time I want to talk about functional programming in Python. But first, let me tell you a story.

Since I learned about functional programming in college, I've been fascinated by the concepts and techniques it offers. I remember when I had to explain Haskell code to my friends, and I decided to rewrite it in Python to make it more understandable to them. It worked like a charm, but then I forgot about it.

Recently, I started a university course about functional programming, and one of the proposed seminar topics was about functional programming in Python. So I created a presentation about it, and now I'm sharing it with you here in the form of this article.

## So what is functional programming?

Functional programming (FP) is a paradigm that emphasizes immutability, pure functions, and declarative code. And I'm going to stop here because to fully understand it, you would need to read a book or attend a course about it. This article is not about teaching you functional programming but about showing you how to use some of its concepts in Python. But as I mention reading a book, I can recommend you one - "Functional Programming in Python" by David Mertz. It's a great book that covers functional programming concepts and techniques in Python. I've used it as a reference for this article, and I highly recommend it to anyone interested in functional programming.

So let's start with the basics.

## Types

Python is a dynamically typed language, so you don't have to specify the types of variables. However, in version 3.5, type hints were introduced. The main premise of type hints is to improve code readability and enable static type checking (e.g., with `mypy`). Of course, they are optional and not enforced at runtime, so it's possible to declare that a variable is of type `int` and then assign a string to it. The built-in module `typing` provides a set of tools for working with types.

```python
from typing import List, Dict, Tuple

hello: str = "Hello, World!"
names: List[str] = ["Alice", "Bob"]
scores: Dict[str, int] = {"Alice": 100, "Bob": 95}
```

It's also possible to specify types for function arguments and return values:

```python
def say_hello(names: List[str]) -> int:
    for name in names:
        print(f"Hello, {name}!")
    return len(names)
```

Function hints can be accessed using the `__annotations__` attribute:

```python
print(say_hello.__annotations__)  # {'names': List[str], 'return': int}
```

### Type Aliases

Type aliases can make complex type hints more readable and easier to manage. They can be defined using `TypeAlias` or `type`:

```python
from typing import TypeAlias, Tuple

Vector3D: TypeAlias = Tuple[float, float, float]
# Or
type Vector3D = Tuple[float, float, float]

v1: Vector3D = (1.0, 2.4, 3.0)
```

### Immutable Records

In functional programming, immutability is a core principle that helps prevent bugs and side effects. While Python's built-in data structures are mostly mutable (strings and tuples being exceptions), it's possible to create records that are immutable and accessible by name.

In the `collections` module, the `namedtuple` function can be used to create a record based on a tuple with named fields:

```python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
```

Another option is to use the `dataclass` decorator from the `dataclasses` module with the `frozen=True` argument to create an immutable class:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: int
    y: int

p = Point(1, 2)
```

Make note that `dataclass` is more flexible and powerful than `namedtuple`, but it's not bulletproof and can be modified using the `object.__setattr__` trick. It's still Python, after all.

---

## (Avoiding) Flow Control

Functional programming encourages declarative code that avoids explicit loops and conditionals. Python provides several constructs that can help with this.

### Comprehensions

Python's main feature - comprehensions - allows for concise creation of lists, dictionaries, and sets. They are more readable and faster than explicit loops.

For example, we have this loop that filters and modifies data:

```python
collection = []
for datum in data_set :
    if condition(datum):
        collection.append(datum)
    else:
        new = modify(datum)
        collection.append(new)
```

Using comprehensions, we can write this more concisely:

```python
collection = [datum if condition(datum) else modify(datum) for datum in data_set]
```

Here we want to create mapping and set containing first 5 letters of alphabet:

```python
print({chr(65+i):chr(97+i) for i in range(5)})
# {'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e'}

print({chr(65+i) for i in range(5)})
# {'A', 'B', 'C', 'D', 'E'}
```

### Generators

Python also supports generators, which are memory-efficient iterators that use `yield` instead of `return`. They are useful for lazy evaluation and infinite sequences.

Here's an example of a generator that yields letters of the alphabet:

```python
def letters(n):
    for i in range(n):
        yield chr(65+i)

print(list(letters(5)))  # ['A', 'B', 'C', 'D', 'E']
```

Generators can be written using comprehensions as well:

```python
gen = (chr(65+i) for i in range(5))
```

Yet, it's important to remember that comprehensions and generators are not always the best choice. Sometimes explicit loops are more readable and maintainable.

### Recursion

Functional programming often uses recursion instead of loops. Python supports recursion, but it's not always the best choice due to stack limitations. It's much better to use comprehensions or standard loops in most cases.

A simple iterative version of factorial can be written using a `for` loop:

```python
def factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result
```

We can rewrite it using recursion like this:

```python
def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)
```

---

## Callables

Of course, functional programming is all about functions. They allow us to encapsulate logic and reuse it in different parts of our code. But we need to ensure that our functions are pure, which means they don't have side effects and always return the same output for the same input. It's based on the mathematical concept of functions and, as I mentioned before, it helps to prevent bugs and side effects.

```python
def add(x: int, y: int) -> int:
    return x + y  # No side effects
```

### Lambdas and Closures

In Python, as in other functional languages, we can use lambda functions. They are anonymous functions that can be used where a function is expected. They are useful for simple operations and can be used as arguments for other functions.

```python
def multiplier(factor):
    return lambda x: x * factor

double = multiplier(2)
print(double(5))  # 10
```

Here we can see that we used a lambda to close over the `factor` variable and create a new function that multiplies its argument by `factor`. This is called a closure. Using closures, we can create functions that are more flexible and reusable, allowing us to hide some implementation details.

However, we need to be careful with closures because they can cause unexpected behavior. Let's add 5 adders in a loop and see what happens:

```python
adders = []
for n in range(5):
    adders.append(lambda m: m + n)

print([adder(10) for adder in adders])  # [14, 14, 14, 14, 14]
```

Something went wrong here. All adders return 14, but we expected 10, 11, 12, 13, 14. The problem is that all lambdas close over the same variable `n`, and when we call them, they all access the same memory that holds the value of `n`. To fix this, we can use a default argument:

```python
adders = []
for n in range(5):
    adders.append(lambda m, n=n: m + n)

print([adder(10) for adder in adders])  # [10, 11, 12, 13, 14]
```

This small change makes all lambdas close over different variables, and now they return expected results. However, there is another problem - now we can override the `n` argument. It's not a big deal, but it's something to be aware of.

```python
print(adders[4](10, 100))  # 110
```

### Callable Classes

It may seem weird, but in Python, we can make our classes callable. We just need to implement the `__call__` method. This can be useful when we want to create objects that behave like functions and also store their state.

```python
class Adder:
    def __init__(self, x):
        self.x = x
    def __call__(self, y):
        return self.x + y

add5 = Adder(5)
print(add5(10))  # 15
```

Python doesn't have private methods or variables, but we can use an underscore to indicate that a variable or method is private and should not be accessed from outside of the class. In your example, we can change `x` to `__x`, and it will be treated as private. But remember that it's just a convention, and it's still possible to access it.

### Pattern Matching

Pattern matching is a powerful feature that allows us to match values against patterns and extract data from them. It's widely used in functional languages like Haskell or F#, and it's also available in Python since version 3.10. By using the `match` statement, we can define patterns and extract data from them.

Let's define simple shapes that will help us understand pattern matching.

```python
@dataclass
class Circle:
    radius: float

@dataclass
class Rectangle:
    width: float
    height: float

@dataclass
class Triangle:
    base: float
    height: float
```

Using the previously used `typing` module, we can represent shapes as the `Shape` type:

```python
from typing import Union

Shape = Union[Circle, Rectangle, Triangle]
```

We can now use pattern matching to describe our shapes:

```python
def describe_shape(shape: Shape) -> str:
    match shape:
        case Circle(radius=r):
            return f"A circle with radius {r}."
        case Rectangle(width=w, height=h):
            return f"A rectangle with width {w} and height {h}."
        case Triangle(base=b, height=h):
            return f"A triangle with base {b} and height {h}."
        case _:
            return "Not a valid shape."

print(describe_shape(Circle(5)))
# 'A circle with radius 5.'
print(describe_shape(Rectangle(10, 20)))
# 'A rectangle with width 10 and height 20.'
print(describe_shape(Triangle(8, 6)))
# 'A triangle with base 8 and height 6.'
print(describe_shape(5))
# 'Not a valid shape.'
```

Pattern matching can be used to match values against patterns and extract data from them. In this example, we extracted information about each shape's attributes and used them as normal variables in the returned string.

We can also use pattern matching to process sequences. Using the `*` operator, we can extract the head and tail of a list:

```python
def sum_list(numbers):
    match numbers:
        case []:
            return 0
        case [head, *tail]:
            return head + sum_list(tail)

numbers = [1, 2, 3, 4, 5]
print(sum_list(numbers)) # 15
print(sum_list([])) # 0
```

If you want to learn more about pattern matching in Python, you can read [PEP 634](https://peps.python.org/pep-0634/). It helps to understand how pattern matching works and how to use it in your code.

---

## Higher-Order Functions

In Python, functions are first-class citizens, which means they can be passed as arguments, returned from other functions, and assigned to variables. This allows us - like closures - to create more flexible and reusable code.

```python
def shout(text):
    return text.upper()

def whisper(text):
    return text.lower()

def greet(func):
    return func("Hi, I am created by a function passed as an argument.")

print(greet(shout))
'HI, I AM CREATED BY A FUNCTION PASSED AS AN ARGUMENT.'
print(greet(whisper))
'hi, i am created by a function passed as an argument.'
```

Using HOF, we created the `greet` function that takes another function as an argument and calls it with the given text. Note that those functions could be lambdas or any other callable objects.

### Function Composition

Function composition is a technique that allows us to combine multiple functions into a single function. By chaining functions together, we can create more complex behavior from simpler functions. It's helpful when we want to transform data in multiple steps.

```python
def compose(*funcs):
    def inner(data, funcs=funcs):
        result = data
        for f in reversed(funcs):
            result = f(result)
        return result
    return inner

times2 = lambda x: x*2
minus3 = lambda x: x-3
mod6 = lambda x: x%6
f = compose(mod6, times2, minus3)
print(all(f(i)==((i-3)*2)%6 for i in range(1000000))) # True
```

In this example, we created the `compose` function that takes multiple functions as arguments and returns a new function that applies them in reverse order. We can use it to create a new function that subtracts 3 from the input, multiplies by 2, and then takes modulo 6.

### Decorators

Expanding on the concept of closures, we can use decorators to modify or extend the behavior of functions. Decorators are higher-order functions that take a function as input and return a new function. This allows us to add some additional logic to a function without modifying it, such as logging, caching, or error handling.

```python
def logger(func):
    def wrapper(*args):
        print(f"Calling {func.__name__}")
        return func(*args)
    return wrapper

@logger
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Logs: Calling greet
```

### Useful Built-in Modules

Python's standard library provides several modules that can help with functional programming. A few notable ones are `operator`, `itertools`, and `functools`.

The `operator` module provides functions that correspond to Python's operators. It can be used to avoid writing lambda functions for simple operations like addition or multiplication. Simply import `mul` or `add` and use them in your code. It's often used with two other modules.

The `itertools` module provides iterable utilities such as `accumulate` for partial computations and `chain` for combining multiple iterables. It's useful when we want to work with sequences and perform operations on them. It also includes simple functions like `repeat` or `cycle` that can be used to create sequences.

```python
from itertools import accumulate, repeat

data = [3, 4, 6, 2, 1, 9, 0, 7, 5, 8]

# Partial maximums
print(list(accumulate(data, max)))
# [3, 4, 6, 6, 6, 9, 9, 9, 9, 9]

# Partial products
print(list(accumulate(data, mul)))
# [3, 12, 72, 144, 144, 1296, 0, 0, 0, 0]

# How balance changes after 10 payments of 90 with 5% interest
update = lambda balance, payment: round(balance * 1.05) - payment
print(list(accumulate(repeat(90, 10), update, initial=1000)))
# [1000, 960, 918, 874, 828, 779, 728, 674, 618, 559, 497]
```

The `functools` module provides `partial`, which allows us to use currying, a common technique in functional languages. This is useful for creating new functions by fixing some arguments of existing ones. The module also includes `reduce`, which applies a function of two arguments cumulatively to the items of an iterable.

Of course, there are many more useful functions in these modules, so it's worth exploring them to see how they can help you in your code. If I were to include all of them, this article would be too long and too boring - I hope it's not already.

---

## The `returns` Library

When doing research and searching for examples of railroad programming in Python, I found the [`returns`](https://returns.readthedocs.io/en/latest/index.html) library. It provides a set of tools for functional error handling and composition. It's based on the concept of container types like `Maybe` and `Result` that can hold values or errors and allow us to work with them in a functional way.

> Make your functions return something meaningful, typed, and safe!

### Maybe

`Maybe` type represents optional values that can be either `Some` or `Nothing`. It's a neat way to handle `None` values and avoid that common line of code (I know everyone has used it at least once) that checks if a value is `None` and then just returns from the function.

So let's define our domain and see how we can use `Maybe` to handle optional values:

```python

@dataclass
class Address:
    street: Optional[str]

@dataclass
class User:
    address: Optional[Address]

@dataclass
class Order:
    user: Optional[User]

```

Note that we used `Optional` from the `typing` module to indicate that the value can be `None`. Now we can create a function that gets the street name from an order:

```python
def get_street_address(order: Order) -> Maybe[str]:
    return Maybe.from_optional(order.user).bind_optional(
        lambda user: user.address,
    ).bind_optional(
        lambda address: address.street,
    )
```

`bind_optional` method allows us to chain operations and not worry about `None` values. If any of them is `None`, the whole chain will return `Nothing`. So now we can test our function:

```python
with_address = Order(User(Address('Some street')))
empty_user = Order(None)
empty_address = Order(User(None))
empty_street = Order(User(Address(None)))

print(get_street_address(with_address))  # <Some: Some street>
print(get_street_address(empty_user))  # <Nothing>
print(get_street_address(empty_address))  # <Nothing>
print(get_street_address(empty_street))  # <Nothing>
```

Maybe can also be used as a decorator for functions that can return `None`, binding them to return a Maybe type.

### Result

Another important type is `Result`, which represents computations that can fail. It can be either `Success` or `Failure`, and it's useful when we want to handle errors in a functional way.

For example, if we want to find a user by ID, we can use `Result` to handle errors:

```python
from returns.result import Result, Success, Failure

def find_user(user_id: int) -> Result['User', str]:
    user = User.objects.filter(id=user_id)
    if user.exists():
        return Success(user[0])
    return Failure('User was not found')

print(find_user(1)) # <Success: User{id: 1, ...}>
print(find_user(0)) # <Failure('User was not found')>
```

`Result` can be used to handle exceptions as well. There is a `safe` decorator that can be used to wrap a function that can raise an exception and return a `Result` instead.

```python
from returns.result import safe

@safe
def divide(x: int, y: int) -> float:
    return x / y

print(divide(4, 2))  # <Success: 2.0>
print(divide(4, 0))  # <Failure : division by zero>
```

### Other additions

The `returns` library includes multiple functional tools that can help you write more robust and maintainable code. It includes the `IO` type that can be used to handle side effects, the `pointfree` submodule that includes `bind` and `map_` functions equivalent to the `bind` and `map` methods in `Maybe` and `Result` types. It also includes `trampolines` that implement tail recursion optimization and `fold` that works like fold from functional languages.

```python
from returns.pipeline import flow, pipe
from returns.pointfree import bind

print(flow(
    1,
    regular_function,
    returns_container,
    bind(also_returns_container),
)) # <Success: '1.0!'>

transaction = pipe(
    regular_function,
    returns_container,
    bind(also_returns_container),
)
print(transaction(1)) # <Success: '1.0!'>
```

As we previously implemented the `compose` function, we can use the `pipe` and `flow` functions from the `returns` library to achieve the same thing. They allow us to chain functions in a more readable way. `flow` takes an initial value as its first argument and then applies functions in order, while `pipe` takes functions as arguments and returns a new function that applies them in order.

## Conclusion

Functional programming is a powerful paradigm that can help you write more robust, maintainable, and readable code. Python is a versatile language that supports many functional programming concepts and techniques. By using type hints, comprehensions, generators, recursion, and higher-order functions, you can write more functional-style code in Python. Remember that functional programming is not about using all those concepts in every line of code, but about using them when they make sense and help you solve your problems.

I hope this long article was helpful and that you've learned something new. If you have any questions or suggestions, feel free to contact me. I'm always happy to help and learn something new.

Happy coding! 🐍
