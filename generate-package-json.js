'use strict';

const fs = require('fs');

try {
  const raw = fs.readFileSync('package.json');
  const parsed = JSON.parse(raw);

  delete parsed["lint-staged"]
  delete parsed.scripts
  delete parsed.files
  delete parsed["husky"]
  delete parsed.prettier
  delete parsed.devDependencies

  const distPackageJsonPath = 'dist/package.json'

  const newJson = {
    ...parsed,
    "main": "index.js",
    "typings": "index.d.ts",
    "umd:main": "index.js",
    "module": "react-waving-flag.esm.js",
  }

  const newJsonData = JSON.stringify(newJson, null, 2);

  if (fs.existsSync(distPackageJsonPath)) {
    fs.unlinkSync(distPackageJsonPath);
    fs.writeFileSync(distPackageJsonPath, newJsonData);
  } else {
    fs.writeFileSync(distPackageJsonPath, newJsonData);
  }
} catch (err) {
  console.log('package.json generating error')
}
