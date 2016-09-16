<!DOCTYPE html>

<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
  <head>
    <% include Head %>
  </head>
  <body class="$ClassName" <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>
    <% include Skippy %>
    <% include Header %>
    <main class="main" role="main">
      <div class="container">
        $Layout
      </div>
    </main>
    <% include Footer %>

    <% include Tail %>
  </body>
</html>
