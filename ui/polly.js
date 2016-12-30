function submitForm(event) {
    const text = document.getElementById('text').value;
    new Howl({
        src: [`/audio?text=${text}`],
        format: ['mp3'],
        autoplay: true
    });
    return false;
}