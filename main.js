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



        clone.querySelector('.customer-name').textContent = `${customer.first} ${customer.last}`;
        clone.querySelector('.place').textContent = customer.place;
        clone.querySelector('.message').textContent = customer.message;
        clone.querySelector('.full').textContent = customer.full;


        let buttonMore = clone.querySelector('.details-button');
        let more = clone.querySelector('p');
        let buttonRemove =clone.querySelector('.remove-button');

        buttonMore.addEventListener('click', function () {

            more.classList.toggle('hide');
        });

        buttonRemove.addEventListener('click', function () {

            this.parentElement.remove();
        });

        section.appendChild(clone);
    })

}




loadData(jsonLink);