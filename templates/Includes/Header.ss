<header class="header" role="banner">
  <div class="container">
    <nav class="navbar navbar-default">
      <%-- Brand and toggle get grouped for better mobile display --%>
      <div class="navbar-header">
        <button aria-expanded="false"
                class="navbar-toggle collapsed"
                data-target="#nav"
                data-toggle="collapse"
                type="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="$absoluteBaseUrl">$SiteConfig.Title</a>
      </div>

      <%-- Collect the nav links, forms, and other content for toggling --%>
      <div class="collapse navbar-collapse" id="nav">
        <% include Navigation %>
      </div>
    </nav>
  </div>
</header>
