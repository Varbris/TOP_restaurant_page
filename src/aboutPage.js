export function about() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerText = "";

  contentContainer.innerHTML = `
      <div class="content-header">
    <h1>About</h1>
  </div>
  <div class="content-article">
    <ul class="content-article-list">
    <li>Contact Us</li>

<li class="article-border">
  <ul>
    <li>📍 PIZZARIA MAMMAMIA</li>
    <li>1234 Mozzarella Lane</li>
    <li>Cheesetown, FL 45678</li>
  </ul>
</li>

<li class="article-border">
  <ul>
    <li>📞 Phone: (555) 867-5309</li>
    <li>🌐 Website: www.PIZZARIA-MAMMA.com</li>
    <li>📧 Email: info@PIZZARIA-MAMMA.com</li>
  </ul>
</li>

<li class="article-border">
  <ul>
    <li>📱 Follow Us on Social Media:</li>
    <li>Instagram: @PIZZARIA-MAMMA</li>
    <li>Facebook: facebook.com/PIZZARIA-MAMMA</li>
    <li>Twitter: @PIZZARIA-MAMMA</li>
  </ul>
</li>

<li class="article-border">
  <p style="font-weight: bold; font-style: italic">
    *this contact information is imaginary
  </p>
</li>
    </ul>
  </div>
  `;
}
