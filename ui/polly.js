function submitForm(event) {
    const text = document.getElementById('text').value;
    const voice = document.querySelector('input[name="voice"]:checked').value;
    new Howl({
        src: [`/audio?text=${text}&voice=${voice}`],
        format: ['mp3'],
        autoplay: true
    });
    return false;
}