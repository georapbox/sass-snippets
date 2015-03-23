###[sass-snippets](../../../../) > retina-images mixin

####Source code
```sass
@mixin image-2x($image, $width, $height) {
    @media
        only screen and (min--moz-device-pixel-ratio: 1.3),
        only screen and (-o-min-device-pixel-ratio: 2.6/2),
        only screen and (-webkit-min-device-pixel-ratio: 1.3),
        only screen and (min-device-pixel-ratio: 1.3),
        only screen and (min-resolution: 1.3dppx) {
            background-image: url($image);
            background-size: $width $height;
        }
}
```

####Example usage
```sass
.logo {
    background: url(logo.png);
    @include image-2x('logo-2x', 100px, 25px);
}
```

####Output
```css
.logo {
    background: url(logo.png);
}

@media only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6 / 2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx) {
    .logo-alt {
        background-image: url("logo-2x");
        background-size: 100px 25px;
    }
}
```