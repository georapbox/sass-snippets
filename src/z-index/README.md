###[sass-snippets](../../../../) > z-index mixin

####Source code
```sass
/* $z-index SASS maps with some dummy data */
$z-index: (
    modal: 200,
    navigation: 100,
    footer: 90,
    triangle: 60,
    navigation-rainbow : 50,
    share-type: 41,
    share: 40
);

@function z-index($key) {
    @return map-get($z-index, $key);
}

@mixin z-index($key) {
    z-index: z-index($key);
}
```

####Example usage
```sass
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