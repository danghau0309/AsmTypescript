export interface Product {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
	rating: number;
	quantity: number;
}
const renderCart = () => {
	const cartList = document.getElementById("cartList") as HTMLElement;
	if (cartList !== null) {
		const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
		cartList.innerHTML = "";
		getArrayFromStorage.forEach((product: Product) => {
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
	const deleteItem: NodeListOf<Element> = document.querySelectorAll("#deleteItem");
	deleteItem.forEach((deleteCart: any) => {
		deleteCart.addEventListener("click", (e: EventTarget) => {
			const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
			const cartId = deleteCart.getAttribute("data-id");
			const index = getArrayFromStorage.filter((item: any) => item.id !== cartId);
			console.log(index);
		});
	});
};
const payment = () => {
	const textTotal = document.getElementById("totalPrice") as HTMLHeadingElement;
	const totalAmount = document.getElementById("totalAmount") as HTMLSpanElement;
	if (textTotal !== null && totalAmount !== null) {
		const getArrayFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
		const monneyShip: number = 35;
		getArrayFromStorage.forEach((item: any) => {
			// console.log(item);
		});
		// const total = getArrayFromStorage.reduce((sum: number, index: any) => sum + index.price, 0);
		// //Giá gốc
		// totalAmount.innerHTML = total + " $ ";
		// //Giá cộng ship
		// textTotal.innerHTML = total + monneyShip + " $ ";
		// console.log(total);
	}
};
payment();
const applyCodeBtn = document.getElementById("applyCode") as HTMLButtonElement;

// applyCodeBtn.onclick = (e: Event): void => {
// 	const discount = (document.getElementById("discount") as HTMLInputElement).value;
// 	e.preventDefault();
// 	alert(discount);
// };

export { renderCart };
