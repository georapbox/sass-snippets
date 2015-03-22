###[sass-snippets](../../../../) > clearfix mixin

####Example usage
```css
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