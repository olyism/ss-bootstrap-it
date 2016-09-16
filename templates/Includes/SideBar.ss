<% if $Menu(2) %>
  <nav class="secondary">
    <% with $Level(1) %>
      <header class="u-h3">
        $MenuTitle
      </header>
      <ul class="nav nav-stacked">
        <% include SidebarMenu %>
      </ul>
    <% end_with %>
  </nav>
<% end_if %>
