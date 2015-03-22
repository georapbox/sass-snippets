###[sass-snippets](../../../) > breakpoint mixin

####Example usage
```css
.page-wrap {
    width: 75%;
    @include breakpoint(large) { width: 60%; }
    @include breakpoint(medium) { width: 80%; }
    @include breakpoint(small) { width: 95%; }
}
```

####Output
```css
.page-wrap {
    width: 75%;
}
@media (min-width: 64.375em) {
    .page-wrap {
        width: 60%;
    }
}
@media (min-width: 50em) {
    .page-wrap {
        width: 80%;
    }
}
@media (min-width: 37.5em) {
    .page-wrap {
        width: 95%;
    }
}
```