const renderCart = () => {
    const cartList = document.getElementById("cartList");
    if (cartList !== null) {
        const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        cartList.innerHTML = "";
        getArrayFromStorage.forEach((product) => {
            const { id, title, image, price } = product;
            cartList.innerHTML += `<tr>
								<td><img src="../public/img/${image}" alt="" /></td>
								<td>${title}</td>
								<td>
									<div class="quantity-cart">
									<button class="reduce">-</button>
									<span class="quantity-product">1</span>
									<button class="increase">+</button>
									</div>
								</td>
								<td>Giá : ${price} $</td>
								<td><i data-id='${id}' class="bx bxs-x-circle" id="deleteItem"></i></td>
							</tr>`;
        });
    }
    const deleteItem = document.querySelectorAll("#deleteItem");
    deleteItem.forEach((deleteCart) => {
        deleteCart.addEventListener("click", (e) => {
            const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
            const cartId = deleteCart.getAttribute("data-id");
            const index = getArrayFromStorage.filter((item) => item.id !== cartId);
            console.log(index);
        });
    });
};
const payment = () => {
    const textTotal = document.getElementById("totalPrice");
    const totalAmount = document.getElementById("totalAmount");
    if (textTotal !== null && totalAmount !== null) {
        const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
        const monneyShip = 35;
        getArrayFromStorage.forEach((item) => {
        });
    }
};
payment();
const applyCodeBtn = document.getElementById("applyCode");
export { renderCart };
