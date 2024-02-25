function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

function generateAvatarBlock(data) {
  if (data.avatar) {
    return `
      <div class="article-image">
      <img
        src="${data.avatar}"
        alt="${data.author}"
        width="48"
        height="48"
        style="border-radius: 50%"
      />
    </div>
    `;
  }
  return "";
}

function generateHtml(data, options) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GitHub article Preview</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f6f8fa;
          }
    
          .article {
            width: ${options.width}px;
            aspect-ratio: 1.91 / 1;
            background-color: #fff;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 16px;
            position: relative;
          }
    
          .article-header {
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            .article-name {
              font-size: ${options.headerSize}px;
              font-weight: 600;
              color: ${options.headerColor};
              flex: 1;
            }
    
            .article-image {
              flex: 0 0 10%;
              margin-left: 16px;
    
              img {
                width: 100%;
              object-fit: cover;
              }
            }
          }
    
          .article-description {
            padding: 16px;
            font-size: ${options.descriptionSize}px;
            margin-top: 8px;
            display: flex;
            color: ${options.descriptionColor};
          }
    
          .article-footer {
            padding: 16px;
            border-top: 1px solid #e1e4e8;
            justify-content: space-between;
            align-items: center;
            font-size: ${options.footerSize}px;
            display: flex;
            width: calc(100% - 2 * 16px);
            bottom: 0;
            position: absolute;
            box-sizing: border-box;
            color: ${options.footerColor};
    
            .left {
              align-self: flex-start;
            }
            .right {
              align-self: flex-end;
            }
          }
        </style>
      </head>
      <body>
        <div class="article">
          <div class="article-header">
            <div class="article-name">
              ${data.title}
            </div>
            ${generateAvatarBlock(data)}
          </div>
          <div class="article-description">
            ${data.description}
          </div>
          <div class="article-footer">
            <div class="left">${data.author}</div>
            <div class="right">
              <div class="repo-updated">
                Created on ${formatDate(data.date)}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `;
}

export { generateHtml };
