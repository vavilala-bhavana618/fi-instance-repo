exports.displayHtml = (req, res) => {
  const htmlCode = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>GCP Demo Site</title>
    </head>
    <body>
      <h1>GCP Demo Site</h1>
     <div>Application Demo</div>
    </body>
    </html>
  `;

  res.status(200).send(htmlCode);
};
