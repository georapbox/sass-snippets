###[sass-snippets](../../../../) > text-truncate placeholder

####Example usage
```css
.truncated-a {
    display:block;
    @extend %text-truncate;
}

.truncated-b {
    display: inline-block;
    @extend %text-truncate;
}
```

####Output
```css
.truncated-a,
.truncated-b {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.truncated-a {
    display: block;
}

.truncated-b {
    display: inline-block;
}
```