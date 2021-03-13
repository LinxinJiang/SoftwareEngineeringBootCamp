

#Main Menu

print("Hello, welcome to our arcade! Which of the following games would you like to play?\n")
print("(1)Python Challenge\n\n(2)Text Adventure\n\n(2)Guess my Color\n\n(5)Tic Tac Toe\n\n(5)Exit/Quit\n\n")

ans=int(input("What would you like to do? "))

print(ans)


if ans==1:
    print("\nPython Quiz it is!")
    import pychallenge
    pychallenge.challenge()
elif ans==2:
    print("\nText Adventure it is!")
    import typing
    typing.tyingClub()
elif ans==3:
    import GuessColor
    GuessColor.guess()
elif ans==4:
    import tictactoe
    tictactoe.game()
elif ans==5:
    print("\nGoodbye!")
else:
    print("\nNot Valid Choice Try again")
