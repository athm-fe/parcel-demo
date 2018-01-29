const fs = require('fs');
const aassetFile = 'build/index/';
const html = aassetFile+"index.html";
const file = fs.readFileSync(html, 'utf-8');

const contentArr = file.split('\n');

const newFile = contentArr.map((line) => {
  const CDN = line.includes('<link rel="stylesheet" href="//') || line.includes('<link rel="stylesheet" href="http') || line.includes('<script src="//') || line.includes('<script src="http');
  if (CDN){
    return line;
  }else if (line.includes('<link rel="stylesheet" href="')) {
    const cssUrl = line.match(/(\d.+css)/);
    const styleFile = fs.readFileSync(aassetFile+cssUrl[0], 'utf-8');
    return `
  <style>
    ${styleFile}
  </style>
    `;
  }
  else if(line.includes('<script src="')){
    const jsUrl = line.match(/(\d.+js)/);
    const jsFile = fs.readFileSync(aassetFile+jsUrl[0], 'utf-8');
    return `
    <script>
      ${jsFile}
    </script>
      `;
  }
  return line;
})

fs.writeFileSync(html, newFile.join('\n'), 'utf-8');