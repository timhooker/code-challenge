import math

def game_board():
    """Intoduction to the game"""
    limit = int(input('Let\'s play a game. \nPlease enter a number greater than 0: '))
    if(limit <= 0):
        raise ValueError(f"{limit} is not greater than 0")
    print(f'Great! Now choose a number between 0 and {limit}.')
    goal = int(math.log2(limit)) + 1
    print(f"I'll get it in {goal} guesses")
    input('When you are ready press enter... ')
    result = number_game(limit)
    print(f"Your number is {result['number']}")
    print(f"{'Success:' if result['guesses'] <= goal else 'Fail:'} It took me {result['guesses']} guesses")
    return True if (input("Play again (y/n)? ") in 'yY') else False

def number_game(limit:int):
    """Setting up game parameters and giving instructions before we start"""
    state = {
        'finished': False,
        'guesses': 0,
        'start': 0,
        'end': limit
    }
    print('Enter h for high, l for low, and c for correct ')
    while(state['finished'] is False):
        state = take_a_guess(state)
    return state


def take_a_guess(state):
    """"logic for guessing numbers and getting feedback"""
    guess = binary_search(state['start'], state['end'])
    state['guesses'] += 1
    if(state['end'] - state['start'] <= 1):
        return update_state(state, guess, 'c')
    guess = binary_search(state['start'], state['end'])
    response = ''
    while(response not in ['h', 'l', 'c']):
        response = input(f"Is your number {guess}? ")
    return update_state(state, guess, response)


def binary_search(start:int, end:int):
    """Utility Function to divide search point"""
    return int(math.ceil((end - start) / 2 + start))

def update_state(state, guess, response):
    """Updating internal state of game based on user response"""
    if(response is 'h'):
        state['end'] = guess
    elif(response is 'l'):
        state['start'] = guess
    elif(response is 'c'):
        state['finished'] = True
        state['number'] = guess
    return state

def init():
    play = True
    while(play):
        play = game_board()

init()
