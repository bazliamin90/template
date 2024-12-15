const headerTemplate3 = document.createElement('template');

headerTemplate3.innerHTML = `
<style>
	h1 {
		font-size: 16px;
		text-align: center;
		diplay: flex;
		align-items: center;
		padding: 10px 0;
		border-bottom: 1px solid black;
		background-color: #f7edff;
		margin: 0px auto;
		max-width: 50rem;
		width: 85%;
	}	
	h1 a {
		text-decoration: none;
		color: black;
	}
	@media (max-width: 600px) {
		h1 {
			width: 100%;
			}
		}
</style>
<h1><a href="index.html">Header</a></h1>
`;

class Header3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate3.content.cloneNode(true));
  }
}

customElements.define('header3-component', Header3);
