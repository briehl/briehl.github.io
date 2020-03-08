const { promisify } = require('util');
const fs = require('fs');
const copyFile = promisify(fs.copyFile);
// const exec = promisify(require('child_process').exec);
const ghpagesPublish = promisify(require('gh-pages').publish);

async function deploy() {
    await copyFile('./CNAME', './build/CNAME');
    await ghpagesPublish('build', {
        branch: 'master',
    })
    // await exec('gh-pages -b master -d build');
    console.log('Successfully deployed briehl.github.io!');
}

deploy().catch(error => console.error('ERROR WHILE DEPLOYING: ', error));
