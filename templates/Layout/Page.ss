<div class="row">
  <article class="content
                  <% if $Menu(2) %>col-md-9 col-md-push-3 col-lg-10 col-lg-push-2
                  <% else %>col-xs-12<% end_if %>"
           id="content">
    <h1>$Title</h1>
    <div class="typography">$Content</div>
    $Form
    $CommentsForm
  </article>
  <% if $Menu(2) %>
    <aside class="sidebar col-md-3 col-md-pull-9 col-lg-2 col-lg-pull-10" role="complementary">
      <% include SideBar %>
    </aside>
  <% end_if %>
</div>
