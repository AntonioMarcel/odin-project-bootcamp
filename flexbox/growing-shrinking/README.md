# Flex properties
- flex-grow, flex-basis, flex-shrink, flex: number, should be applied on the flex item. 

# Flex-grow
- Flex-grow applies when the flex item is taking the container width.
- It grows indefinetely according to the container size and setting it to different values makes the flex-item have a different size (higher the number set, higher the flex item size).
- defaults to flex-grow: 0.

# Flex-basis 
- Sets the flex item initial size.
- If all flex items flex-basis sizes sum is higher than the container width and flex-shrink disabled, it will overflow. 
- If not, then flex-shrink will apply.
- If flex-basis sizes different then each other, they will always have different sizes no matter how much the container grows, because flex-grow only shares the extra-space (see example 3).

# Flex-basis and flex-direction 
- When we change the flex-direction to column, flex-basis refers to `height` instead of `width`. 
    - if flex-direction: row, flex-basis refers to width property.
    - flex-direction: column, flex-basis refers to height property.
- Purpose of flex-basis: tweak item size independently of flex-direction property.

# Flex-shrink
- Applied when overflow happens.
- Flex items with higher flex-shrink will shrink more than the others.
- If container not fixed, flex shrink applies as well: https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz.
- defaults to flex-shrink: 1.

# Flex-shrink and min-width 
- Sometimes, even with flex-shrink enabled, the element won't shrink the whole way, because of the element's content.
- When that happens min-width should be enabled as well directly on the flex child, as `min-width: 0px`.
- See section [The minimum size gotcha](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/#the-minimum-size-gotcha-11) for examples.

# Flex-basis auto and 0 
- flex-basis: auto → base size comes from content or width.
- flex-basis: 0% (or flex-basis: 0) → base size is zero, so all growth comes only from flex-grow.

# Flex: number and flex: auto
- flex: 1 -> shorthand for: flex: 1 1 0.
- flex: auto -> flex: 1 1 auto.
- both grow to absorb any free space in the container.

# In practice
- You will probably mostly end up using flex: 1 and flex-shrink: 0.  

# Flex none and flex initial
- flex: none → /* shorthand = 0 0 auto */ “Don’t touch me, I’ll stay my size.”
- flex: initial → /* shorthand = 0 1 auto */ “I won’t grow, but you can shrink me if needed.”
- the browser applies the default value of flex: initial, when you don’t explicitly set the flex property.
