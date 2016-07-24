import gulp from 'gulp'
import minimist from 'minimist'
import path from 'path'
import del from 'del'
import {taskJs} from './tasks/javascript'

const argv = minimist(process.argv.slice(2))

const settings = {
    // general
    assetBuildFolder: path.join(__dirname, 'build'),

    // js
    jsEntry: path.join(__dirname, 'src', 'main.js'),
    jsBuildDir: path.join(__dirname, 'build'),
    jsBuildFilename: 'main.js',
}

const enabled = {
    // disable maps with --production
    maps: !argv.production,
}

gulp.task('clean', () => del([settings.assetBuildFolder]))

gulp.task('js', taskJs(settings.jsEntry, settings.jsBuildDir, settings.jsBuildFilename, enabled.maps))

gulp.task('watch', ['js'], () => {
    gulp.watch('js/**/*.js', ['js'])
})

gulp.task('default', ['js'])
