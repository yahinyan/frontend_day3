const images = [
    'https://wallpaperswide.com/download/beautiful_nature_10-wallpaper-960x540.jpg',
    'https://cdn.pixabay.com/photo/2020/06/14/01/14/landscape-5296158_960_720.jpg',
    'https://wallpaperswide.com/download/beautiful_nature_13-wallpaper-960x540.jpg',
    'https://www.lakechamplainregion.com/f/styles/inline_image_desktop/public/Story/84091/inline/lake-20champlain-20view-20.    jpg?itok=7uoWL4K6'
];
const slider_image = document.getElementById('slider_image');
const previous_button = document.getElementById('previous_button');
const next_button = document.getElementById('next_button');
let current = 0;
function show_image(index) {
    slider_image.src = images[index];
} 
show_image(current);
previous_button.addEventListener('click', function() {
    current = (current - 1 + images.length) % images.length;
    show_image(current);
});
next_button.addEventListener('click', function() {
    current = (current + 1) % images.length;
    show_image(current);
});