#!/usr/bin/env node

function add_build_time() {
    let yaml = require('js-yaml')
    let fs = require('fs')
    require('x-date');
    let config_orin = '_config-orin.yml'
    let config_file = '_config.yml'
    let buffer = fs.readFileSync(config_orin, 'utf8');
    let config = yaml.load(buffer);

    let build_time = new Date().format('yyyy-mm-dd HH:MM:ss')
    config['build_time'] = build_time
    let res = yaml.dump(config)
    fs.writeFileSync(config_file, res)
    console.log(`config_orin : ${config_orin}`)
    console.log(`add build time : ${build_time} in ${config_file}`)
}

function print(s) {
    process.stdout.write(s)
}

function println(s) {
    console.log(s)
}

async function exec(cmd) {
    const {spawn} = require('child_process');
    println(`exec: ${cmd}`)
    const stream = spawn('bash', ['-c', cmd]);
    stream.stdout.on('data', (data) => {
        print(data.toString());
    });
    stream.stderr.on('data', (data) => {
        print(data.toString());
    });
    return new Promise((resolve, reject) => {
        stream.on('close', (code) => {
            println(`child process exited with code ${code}`);
            println()
            switch (code) {
                case 0:
                    resolve();
                    break
                default:
                    reject()
            }
        });
    })
}

function help() {
    console.log("config all")
}

(async () => {
    const args = process.argv.slice(2)
    switch (args[0]) {
        case "config":
            add_build_time()
            return
        case "all":
            add_build_time()
            await exec("hexo clean --debug")
            await exec("hexo generate --debug")
            break;
        default:
            help()
    }
})()


