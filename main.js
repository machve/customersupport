let jsonLink = "https://kea-alt-del.dk/customersupport/index.php";
let template = document.querySelector(".customer-template").content;
let section = document.querySelector('section');




function loadData(link) {
    fetch(link).then(e => e.json()).then(data => show(data));
}





function show(data) {
    console.log(data);
    data.forEach(customer => {



        console.log(customer.first)
        let clone = template.cloneNode(true);
        let dot = clone.querySelector('.dot');
        let linkMore = clone.querySelector('.customers');
        let more = clone.querySelector('.full-info-div');
        let buttonRemove = clone.querySelector('.remove-button');
        let arrow = clone.querySelector('.arrow');

        clone.querySelector('.customer-name').textContent = `${customer.first} ${customer.last}`;
        clone.querySelector('.place').textContent = customer.place;
        clone.querySelector('.message').textContent = customer.message;
        clone.querySelector('p.message-text').textContent = customer.full;
        clone.querySelector('.time').textContent = `${customer.time.day}/${customer.time.month}/${customer.time.year}`

        if (customer.importance >= 70) {
            dot.style.backgroundColor = "#EE5164"
        } else if (customer.importance < 70 && customer.importance > 40) {
            dot.style.backgroundColor = "blue"
        } else {
            dot.style.backgroundColor = "#84fab0";
        }

        linkMore.addEventListener('click', function () {

            more.classList.toggle('hide');
            linkMore.classList.toggle('extra-padding');
            arrow.classList.toggle('collapsed');

        });

        buttonRemove.addEventListener('click', function () {

            more.parentElement.remove();
        });

        section.appendChild(clone);
    });

}




loadData(jsonLink);