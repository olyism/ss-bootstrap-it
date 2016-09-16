<%-- Include SidebarMenu recursively --%>
<% if $LinkOrSection == 'section' %>
  <% if $Children %>
    <% loop $Children %>
      <li<% if $LinkOrCurrent == 'current' %> class="active"<% end_if %>>
        <a href="$Link" title="Go to the $Title.XML page">$MenuTitle.XML</a>

        <% if $Children %>
          <ul class="nav nav-stacked">
            <% include SidebarMenu %>
          </ul>
        <% end_if %>

      </li>
    <% end_loop %>
  <% end_if %>
<% end_if %>
