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
- If container not fixed, flex shrink applies as well: https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz.

# Flex-basis auto and 0 
- flex-basis: auto → base size comes from content or width.
- flex-basis: 0% (or flex-basis: 0) → base size is zero, so all growth comes only from flex-grow.

# Flex 1 and flex auto
- flex: 1 -> shorthand for: flex: 1 1 0.
- flex: auto -> flex: 1 1 auto.

# In practice
- You will probably mostly end up using flex: 1 and flex-shrink: 0.  

# Flex none and flex initial
- flex: none → /* shorthand = 0 0 auto */ “Don’t touch me, I’ll stay my size.”
- flex: initial → /* shorthand = 0 1 auto */ “I won’t grow, but you can shrink me if needed.”