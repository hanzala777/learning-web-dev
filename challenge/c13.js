function createCard (thumbnail, duration, views, channel, description, monthsOld){
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="image hai bhai">
        <div class="duration">
        ${duration}
        </div>
    </div>
    <div class="description">
        <h1>
        ${description}
        </h1>
        <p>
        ${channel} . ${views} views . ${monthsOld} months ago
        </p>
    </div>
</div>`
document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + html;
}
createCard('rp.jpeg', '10:11', '20K', 'BATMAN', 'Tutorial #1', 3);
createCard('rp.jpeg', '10:00', '21K', 'BATMAN', 'Tutorial #2', 5);
createCard('rp.jpeg', '09j:11', '19K', 'BATMAN', 'Tutorial #3', 4);