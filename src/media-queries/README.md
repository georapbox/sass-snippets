###[sass-snippets](../../../../) > media-queries mixin

####Source code
```sass
// Variables definitions
$mobile-width: 480px;
$tablet-width: 768px;
$desktop-width: 1024px;

// Mixins definitions
@mixin mobile {
    @media (min-width: #{$mobile-width}) and (max-width: #{$tablet-width - 1px}) {
        @content;
    }
}

@mixin tablet {
    @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
        @content;
    }
}

@mixin desktop {
    @media (min-width: #{$desktop-width}) {
        @content;
    }
}

@mixin retina {
    @media
        only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (min--moz-device-pixel-ratio: 2),
        only screen and (-o-min-device-pixel-ratio: 2/1),
        only screen and (min-device-pixel-ratio: 2),
        only screen and (min-resolution: 192dpi),
        only screen and (min-resolution: 2dppx) {
            @content;
        }
}

@mixin print {
    @media print {
        @content;
    }
}
```

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