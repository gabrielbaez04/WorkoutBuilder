export default ({markup, css}) => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MERN Skeleton</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            a{
              text-decoration: none
            }
        </style>
      </head>
      <body style="margin:0">
        <div id="root">${markup}</div>
        <style id="jss-server-side">${css}</style>
        <script type="text/javascript" src="/dist/bundle.js"></script>
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
            });
          }
        </script>
      </body>
    </html>`
}
