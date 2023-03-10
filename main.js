const fiyatInput = document.getElementById("fiyat")
const harcamaInput = document.getElementById("harcama")
const btn = document.getElementById("buton");
const liste = document.querySelector(".liste");
const paycheckbox = document.querySelector("#odeme");
const hToplam = document.getElementById("toplam");
const hDüş = document.getElementById("edit");

btn.addEventListener("click", addExpense);

liste.addEventListener("click", handleClick);

let expenses = 0;
function addExpense(event) {
    event.preventDefault();

    if (!fiyatInput.value || !harcamaInput.value) {
        alert("Lütfen Boş Alanları Doldurunuz");
        return
    }

    const itemBox = document.createElement("div");
    itemBox.classList.add("item")
    if (paycheckbox.checked) {
        itemBox.classList.add("odendi");
    } else {
        expenses += Number(fiyatInput.value);
        hToplam.innerText = (expenses);


    }
    itemBox.innerHTML = `
    <h1>${harcamaInput.value}</h1>
    <h2><span>${fiyatInput.value}</span><span>&#8378; </span></h2>
    <div>
    <img id="edit"  src="img/pay.png"  />
    <img id="delete"  src="img/delete.png"  />
    </div>
    `;
    liste.appendChild(itemBox);

    fiyatInput.value = " ";
    harcamaInput.value = " ";

}


function handleClick(e) {
    const element = e.target;
    if (e.target.id == "edit") {
        const ödeme = element.parentElement.parentElement;
        if (!ödeme.classList.contains("odendi")) {
            ödeme.classList.add("odendi")
            const harcama = element.parentElement.parentElement;
            çıkar = (harcama.querySelectorAll("span")[0].innerText);
            expenses -= çıkar
            hToplam.innerText = (expenses);
        }

    } if (e.target.id == "delete") {
        const harcama = element.parentElement.parentElement;
        if (!harcama.classList.contains("odendi")) {
            çıkar = (harcama.querySelectorAll("span")[0].innerText);
            expenses -= çıkar
            hToplam.innerText = (expenses);
        }
        harcama.remove()
    }
}


