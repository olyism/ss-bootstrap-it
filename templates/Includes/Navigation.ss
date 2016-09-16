<ul class="nav navbar-nav">
  <% loop $Menu(1) %>
    <li <% if $LinkOrCurrent == 'current' %>class="active"<% end_if %>>
      <a href="$Link">
        $MenuTitle.XML
        <% if $LinkOrCurrent == 'current' %><span class="sr-only">(current)</span><% end_if %>
      </a>
    </li>
  <% end_loop %>
</ul>
