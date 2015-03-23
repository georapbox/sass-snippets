###[sass-snippets](../../../../) > clearfix mixin

####Source code
```sass
@mixin clearfix() {
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
}
```

####Example usage
```sass
.section {
    @include clearfix();
}
```

####Output
```css
.section:before, .section:after {
    content: " ";
    display: table;
}
.section:after {
    clear: both;
}
```