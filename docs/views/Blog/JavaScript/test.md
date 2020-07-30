<div class="summer" ref="summer">summer</div>

<script>
export default {
  mounted () {
		const colors = ['#8e44ad','#e74c3c','#d35400','#f39c12','#f1c40f','#16a085','#b8e994']
		const mask = document.querySelector('.summer');
		let content = [...mask.innerText]
		content.reduce((pre,v,i) => {
			pre == i && (mask.innerText = "");
			let span = document.createElement("span")
			span.innerText = v;
			mask.appendChild(span)
			span.addEventListener("mouseover",() => {
				let index = Math.floor(Math.random() * colors.length)
				span.style.color = colors[index]
				span.classList.add("current")
			})
			span.addEventListener("mouseleave",() => {
				span.style.color = "#000"
				span.classList.remove("current")
			})
		},0)
  }
}
</script>

<style>
	.summer{
		text-align: center;
		font-size: 2rem;
	}

	.current{
		transition: all .5s;
		transform: translateY(-10px);
	}
	.summer span {
		display: inline-block;
		cursor: pointer;
		font-weight: bold;
	}
</style>