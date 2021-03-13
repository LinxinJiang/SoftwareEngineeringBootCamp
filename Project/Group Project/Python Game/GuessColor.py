def guess():
    print("\nGuess my Color it is!")
    from random import randint

    colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange']
    generator = randint(0,len(colors)-1)

    guess = input("Please guess a color from the color wheel: ")

    while True: #you want to keep guessing until you actually get it
      if guess != colors[generator]:
        print("Incorrect. Please try again.")
        guess = input("Please guess a color: ").strip()
      elif guess == colors[generator]:
        break

    print("Correct!  The color is " + colors[generator] + ".")


guess()
