// Menu data structure
var menuLinks = [
	{ text: "about", href: "/about" },
	{
		text: "catalog",
		href: "#",
		subLinks: [
			{ text: "all", href: "/catalog/all" },
			{ text: "top selling", href: "/catalog/top" },
			{ text: "search", href: "/catalog/search" },
		],
	},
	{
		text: "orders",
		href: "#",
		subLinks: [
			{ text: "new", href: "/orders/new" },
			{ text: "pending", href: "/orders/pending" },
			{ text: "history", href: "/orders/history" },
		],
	},
	{
		text: "account",
		href: "#",
		subLinks: [
			{ text: "profile", href: "/account/profile" },
			{ text: "sign out", href: "/account/signout" },
		],
	},
];
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const head = document.createElement("h1");
head.innerText = "DOM Manipulation";
mainEl.appendChild(head);
head.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

menuLinks.forEach((obj) => {
	let link = document.createElement("a");
	link.setAttribute("href", obj.href);
	link.innerText = obj.text;
	link.style.padding = "0 30px";
	if (obj.subLinks) {
		link.subLinks = obj.subLinks;
	}
	topMenuEl.appendChild(link);
});

topMenuEl.classList.add("flex-ctr");

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
	event.preventDefault();
	if (event.target.tagName !== "A") return;
	console.log(event.target);

	const activeLink = document.querySelector(".active");
	if (activeLink && activeLink !== event.target) {
		activeLink.classList.remove("active");
	}

	event.target.classList.toggle("active");
	if (event.target.classList.contains("active") && event.target.subLinks) {
		console.log("hello");
		subMenuEl.style.top = "100%";
		// Update subMenuEl with subLinks content
		// subMenuEl.innerHTML = ""; // Clear previous sub-links
		event.target.subLinks.forEach((subLink) => {
			let subLinkEl = document.createElement("a");
			subLinkEl.setAttribute("href", subLink.href);
			subLinkEl.innerText = subLink.text;
			subMenuEl.appendChild(subLinkEl);
		});
	} else {
		subMenuEl.style.top = "0";
		subMenuEl.innerHTML = ""; // Clear sub-links when not active
	}
});
