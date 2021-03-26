document.addEventListener('DOMContentLoaded', function() {
	new Splide( '#image-slider', {
        type: 'loop',
        padding: {
            right: '5rem',
        },
        perPage: 6,
        breakpoints: {
            615: {
                perPage: 2,
            },
            630: {
                perPage: 3,
            },
            1380: {
                perPage: 4,
            },
            1800: {
                perPage: 5,
            }
        }
    }).mount()
} )

