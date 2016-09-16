<article class="search-results" id="content">
  <h1>$Title</h1>

  <% if $Query %>
    <p class="search-query">You searched for &quot;{$Query}&quot;</p>
  <% end_if %>

  <% if $Results %>
    <section id="SearchResults">
      <% loop $Results %>
        <article class="panel panel-default">
          <header class="panel-heading">
            <h2 class="panel-title">
              <a href="$Link"><% if $MenuTitle %>$MenuTitle.XML<% else %>$Title<% end_if %></a>
            </h2>
          </header>
          <% if $Content %>
            <div class="panel-body">
              <p>$Content.LimitWordCountXML</p>
            </div>
          <% end_if %>
          <a href="$Link" title="Read more about &quot;{$Title}&quot;">Read more about &quot;{$Title}&quot; &hellip;</a>
        </article>
      <% end_loop %>
    </section>
  <% else %>
      <p>Sorry, your search query did not return any results.</p>
  <% end_if %>

  <% if $Results.MoreThanOnePage %>
    <nav aria-label="Page navigation" id="PageNumbers" role="navigation">
      <ul class="pagination">
        <% if $Results.NotFirstPage %>
          <li><a aria-label="Previous" class="prev" href="$Results.PrevLink"><span aria-hidden="true">&laquo;</span></a></li>
        <% end_if %>
        <% loop $Results.Pages %>
          <li>
            <% if $CurrentBool %>
                $PageNum
            <% else %>
              <a href="$Link">$PageNum</a>
            <% end_if %>
          </li>
        <% end_loop %>
        <% if $Results.NotLastPage %>
          <li><a aria-label="Next" href="$Results.NextLink"><span aria-hidden="true">&raquo;</span></a></li>
        <% end_if %>
      </ul>
    </nav>
  <% end_if %>

</article>
