###[sass-snippets](../../../../) > media-queries mixin

####Example usage
```css
p {
    @include desktop {
        font-size: 16px;
    }

    @include tablet {
        font-size: 14px;
    }
}
```

####Output
```css
@media (min-width: 1024px) {
    p {
        font-size: 16px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    p {
        font-size: 14px;
    }
}
```