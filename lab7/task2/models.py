class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some sound"

    def info(self):
        
        return f"{self.name} is {self.age} years old."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):  
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching a ball."

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        self.lives = lives

    def speak(self): 
        return "Meow!"

    def climb(self):
        return f"{self.name} is climbing a tree."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, lives={self.lives})"