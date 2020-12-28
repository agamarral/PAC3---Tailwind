/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
let hamburgerFooter = document.getElementById('hamburgerBtnFooter');
let mobileMenuFooter = document.getElementById('mobileMenuFooter');
let closeMenuFooter = document.getElementById('closeMenuBtnFooter');



hamburgerFooter.addEventListener('click', function () {
    hamburgerFooter.classList.add('hidden');
    mobileMenuFooter.classList.remove("hidden");

});

closeMenuFooter.addEventListener('click', function () {
    hamburgerFooter.classList.remove('hidden');
    mobileMenuFooter.classList.add("hidden");

});

let hamburgerHeader = document.getElementById('hamburgerBtnHeader');
let mobileMenuHeader = document.getElementById('mobileMenuHeader');
let closeMenuHeader = document.getElementById('closeMenuBtnHeader');



hamburgerHeader.addEventListener('click', function () {
    hamburgerHeader.classList.add('hidden');
    mobileMenuHeader.classList.remove("hidden");

});

closeMenuHeader.addEventListener('click', function () {
    hamburgerHeader.classList.remove('hidden');
    mobileMenuHeader.classList.add("hidden");

});

// This code is only executed in the "artists" page

if (document.getElementById("collapseAndre") != null) {
    let collapseObjects = new Map();

    collapseObjects.set('Andre', {});
    collapseObjects.set('Daniel', {});
    collapseObjects.set('Joyce', {});
    collapseObjects.set('Matthias', {});
    collapseObjects.set('Casals', {});
    collapseObjects.set('Orfeo', {});

    for (let artistName of collapseObjects.keys()) {
        collapseObjects.set(artistName, {
            collapse: document.getElementById("collapse" + artistName),
            collapsible: document.getElementById("collapsible" + artistName)
        });
        collapseObjects.get(artistName).collapsible.style.display = "none";
        collapseObjects.get(artistName).collapsible.style.maxHeight = null;

        collapseObjects.get(artistName).collapse.addEventListener("click", function () {
            collapseObjects.get(artistName).collapsible.classList.toggle("active");

            if (collapseObjects.get(artistName).collapsible.style.display === "block") {
                collapseObjects.get(artistName).collapsible.style.display = "none";
                collapseObjects.get(artistName).collapsible.style.maxHeight = null;
            } else {
                collapseObjects.get(artistName).collapsible.style.display = "block";
                collapseObjects.get(artistName).collapsible.style.maxHeight = collapseObjects.get(artistName).collapsible.scrollHeight + "px";
            }
        });
    }
}
