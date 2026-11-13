// Wraps src/game.html (the page body) into a standalone index.html for GitHub Pages.
const fs=require('fs');
const body=fs.readFileSync('src/game.html','utf8').replace('<meta name="claude:viewport-fit-sides" content="cover">\n','');
const m=body.match(/^<title>.*<\/title>\n/);
fs.writeFileSync('index.html',`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Outpost 30: command a Moon or Mars outpost for 30 days. A Junior Astronaut Mission Trainer for the 2026 NASA Space Apps Challenge.">
${m[0]}<style>body{margin:0}[hidden]{display:none!important}</style>
</head>
<body>
${body.slice(m[0].length)}</body>
</html>
`);
