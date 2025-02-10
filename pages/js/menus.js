let liste = Array.from(document.getElementsByClassName('menu'));

liste.forEach(Element => {
    Element.addEventListener('click', function() {

        event.preventDefault();

        let classliste = Element.getAttribute('class');
        console.log(classliste);
        console.log(Element)

        if(classliste.includes('inactif')){
            Element.classList.remove('inactif');
            Element.classList.add('actif');
        } else{
            Element.classList.remove('actif');
            Element.classList.add('inactif');
        }

    });
});