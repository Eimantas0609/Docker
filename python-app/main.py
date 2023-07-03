import calendar

print('Welcome to Calendar\n')

year = int(input('Please enter year: '))
month = int(input('Enter number of month: '))

print(calendar.month(year, month))

print('Good bye!')