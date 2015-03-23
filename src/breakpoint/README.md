###[sass-snippets](../../../../) > breakpoint mixin

####Source code
```sass
@mixin breakpoint($point) {
    @if $point == large {
        @media (min-width: 64.375em) {
            @content;
        }
    } @else if $point == medium {
        @media (min-width: 50em) {
            @content;
        }
    } @else if $point == small {
        @media (min-width: 37.5em)  {
            @content;
        }
    }
}
```

####Example usage
```sass
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