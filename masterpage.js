class MasterLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav>
    <div class="logo">
        <img src="https://media.assettype.com/kizhakkunews/2024-08-22/wvbwdm7s/Screenshot%20(110).png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true">
    </div>

    <ul class="desktop-nav">
          
    <a href="index.html">முகப்புப் பக்கம் (Home)</a>
		<a href="whitepaper.html">வெள்ளை அறிக்கை (TN Finance White Paper)</a>
    <a href="ebwhitepaper.html">Energy-Department-வெள்ளை அறிக்கை</a>
        
    </ul>

    <div class="menu-btn" onclick="openMenu()">☰</div>
</nav>

<!-- Mobile Side Navigation -->
<div id="sideNav" class="side-nav">
    <span class="close-btn" onclick="closeMenu()">×</span>
    
    <a href="index.html">முகப்புப் பக்கம் (Home)</a>
		<a href="whitepaper.html">வெள்ளை அறிக்கை (TN Finance White Paper)</a>
    <a href="ebwhitepaper.html">Energy-Department-வெள்ளை அறிக்கை</a>
        
</div>

    `;
  }
}

// Define the custom HTML tag
customElements.define('master-layout', MasterLayout);
