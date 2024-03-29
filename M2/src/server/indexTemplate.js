export const indexTemplate =(content, token) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<script>
			window.__token__ = '${token}'
		</script>        
        <title>reddit</title>
        <script src="/static/client.js" type="application/javascript"></script>
    </head>
    <body>
        <div id="react_root">${content}</div>
        <div id="modal_root" ref="modal_ref"></div>
    </body>
</html>
`;