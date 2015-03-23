###[sass-snippets](../../../../) > z-index mixin

####Example usage
```css
.modal {
    @include z-index(modal);
}

.navigation {
    @include z-index(navigation);
}
```

####Output
```css
.modal {
    z-index: 200;
}

.navigation {
    z-index: 100;
}
```