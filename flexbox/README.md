# Flex-grow
- Flex-grow applies when the flex item is taking the container width.
- It grows indefinetely according to the container size and setting it to different values makes the flex-item have a different size (higher the number set, higher the flex item size).

# Flex-basis 
- Sets the flex item initial size.
- If all flex items flex-basis sizes sum is higher than the container width and flex-shrink disabled, it will overflow. 
- If not, then flex-shrink will apply.
- If flex-basis sizes different then each other, they will always have different sizes no matter how much the container grows, because flex-grow only shares the extra-space (see example 3).

# Flex-shrink
- Applied when overflow happens.
- Flex items with higher flex-shrink will shrink more than the others.