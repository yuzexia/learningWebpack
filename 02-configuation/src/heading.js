export default () => {
	const element = document.createElement("h2");
	element.textContent = "hello webpack";
	element.addEventListener("click", () => {
		console.log("hello webpack");
	})
	return element;
}