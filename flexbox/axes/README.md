# flex-direction
The flex-direction property defines the main axis of a flex container—that is, the direction in which the flex items are laid out.
- applied on the container, not on the item (just like `display: flex`).
- flex-direction: row → main axis = horizontal, cross = vertical.
- flex-direction: column → main axis = vertical, cross = horizontal.
- the default `flex-direction` applied by the browser when setting `display: flex` is `flex-direction: row`.

# justify-content
- Controls alignment along the main axis.
- Values: flex-start, flex-end, center, space-between, space-around, space-evenly.
- Applied in the same class as `display: flex`.

# align-items
- Controls alignment along the cross axis.
- Values: stretch, flex-start, flex-end, center, baseline.
- Applied in the same class as `display: flex`.

# align-self
- It overrides the container’s align-items for a single child.
- `align-self`: auto | flex-start | flex-end | center | baseline | stretch;
- There is no `justify-self` or `justify-items`.

