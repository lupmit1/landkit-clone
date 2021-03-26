const price = document.getElementById("price");
const swap = document.getElementById("toggle");

swap.addEventListener('click', async function() {
    console.log(swap.checked);
    if (swap.checked) {
        for (let i = 29; i <= 49; i++) {
            price.innerHTML = i;
            await delay(50);
        }
    } else {
        for (let j = 49; j >= 29; j--) {
            price.innerHTML = j;
            await delay(50);
        }
    }
})