<% base_tag %>
<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width,initial-scale=1" name="viewport">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
$MetaTags(false)

<%-- Stylesheet must be loaded before respond.js --%>
<link href="{$ThemeDir}/css/main.css" rel="stylesheet">

<%-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --%>
<!--[if lt IE 9]>
	<script src="{$ThemeDir}/thirdparty/html5shiv.min.js"></script>
	<script src="{$ThemeDir}/thirdparty/respond.min.js"></script>
<![endif]-->

<%-- Place favicon.ico and apple-touch-icon.png in the root of your domain and delete these references --%>
<link rel="shortcut icon" href="{$ThemeDir}/icons/favicon.ico">
<link rel="apple-touch-icon" href="{$ThemeDir}/icons/apple-touch-icon.png">
