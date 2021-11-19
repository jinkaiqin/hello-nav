import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://www.baidu.com/',
  githubUrl: 'https://github.com/baidu',
  imgSrc: requireImg('baidu.png'),
  keyWords: ['百度', 'baidu'],
  label: '百度',
}, {
  url: 'https://www.google.com/',
  githubUrl: 'https://github.com/google',
  imgSrc: requireImg('google.png'),
  keyWords: ['谷歌', 'google'],
  label: 'Google',
}, {
  url: 'https://www.microsoft.com/',
  githubUrl: 'https://github.com/microsoft',
  imgSrc: requireImg('microsoft.png'),
  keyWords: ['微软', 'Microsoft'],
  label: 'Microsoft',
}, {
  url: 'https://about.facebook.com/meta',
  githubUrl: 'https://github.com/facebook',
  imgSrc: requireImg('meta.png'),
  keyWords: ['facebook', 'meta'],
  label: 'Meta',
}, {
  url: 'https://github.com/',
  githubUrl: 'https://github.com/github',
  imgSrc: requireImg('github.png'),
  keyWords: ['github'],
  label: 'GitHub',
}, {
  url: 'https://gitlab.com/',
  imgSrc: requireImg('gitlab.png'),
  keyWords: ['gitlab'],
  label: 'GitLab',
}, {
  url: 'https://git-scm.com/',
  githubUrl: 'https://github.com/git/git',
  imgSrc: requireImg('git.png'),
  keyWords: ['git'],
  label: 'Git',
}, {
  url: 'https://www.npmjs.com/',
  githubUrl: 'https://github.com/npm',
  imgSrc: requireImg('npm.png'),
  keyWords: ['npm'],
  label: 'NPM',
}, {
  url: 'https://yarnpkg.com/',
  githubUrl: 'https://github.com/yarnpkg/yarn',
  imgSrc: requireImg('yarn.png'),
  keyWords: ['yarn'],
  label: 'Yarn',
}, {
  url: 'https://pnpm.io/',
  githubUrl: 'https://github.com/pnpm/pnpm',
  imgSrc: requireImg('pnpm.png'),
  keyWords: ['pnpm'],
  label: 'PNPM',
}, {
  url: 'https://bower.io/',
  githubUrl: 'https://github.com/bower/bower',
  imgSrc: requireImg('bower.png'),
  keyWords: ['bower'],
  label: 'Bower',
}, {
  url: 'https://www.jsdelivr.com/',
  githubUrl: 'https://github.com/jsdelivr/jsdelivr',
  imgSrc: requireImg('jsdelivr.png'),
  keyWords: ['jsdelivr', 'cdn'],
  label: 'JSDelivr',
}, {
  url: 'https://cdnjs.com/',
  githubUrl: 'https://github.com/cdnjs/cdnjs',
  imgSrc: requireImg('cdnjs.png'),
  keyWords: ['cdnjs'],
  label: 'CDNJS',
}, {
  url: 'https://www.bootcdn.cn/',
  githubUrl: 'https://github.com/bootcdn',
  imgSrc: requireImg('bootcdn.png'),
  keyWords: ['bootcdn'],
  label: 'BootCDN',
}, {
  url: 'https://developer.mozilla.org/',
  githubUrl: 'https://github.com/mdn',
  imgSrc: requireImg('mdn.png'),
  keyWords: ['mdn'],
  label: 'MDN',
}, {
  url: 'https://javascript.info/',
  githubUrl: 'https://github.com/javascript-tutorial',
  imgSrc: requireImg('javascript-tutorial.png'),
  keyWords: ['javascript-tutorial', 'js'],
  label: 'JSTutorial',
}, {
  url: 'https://stackoverflow.com/',
  imgSrc: requireImg('stackoverflow.png'),
  keyWords: ['stack overflow'],
  label: 'StackOverflow',
}, {
  url: 'https://www.caniuse.com/',
  githubUrl: 'https://github.com/fyrd/caniuse',
  imgSrc: requireImg('caniuse.png'),
  keyWords: ['caniuse'],
  label: 'Can I use',
}, {
  url: 'https://travis-ci.org/',
  githubUrl: 'https://github.com/travis-ci',
  imgSrc: requireImg('travis.png'),
  keyWords: ['travis', 'ci'],
  label: 'Travis',
}, {
  url: 'https://www.jenkins.io/',
  githubUrl: 'https://github.com/jenkinsci',
  imgSrc: requireImg('jenkins.png'),
  keyWords: ['jenkins', 'ci'],
  label: 'Jenkins',
}, {
  url: 'https://code.visualstudio.com/',
  githubUrl: 'https://github.com/microsoft/vscode',
  imgSrc: requireImg('vscode.png'),
  keyWords: ['vscode'],
  label: 'VSCode',
}, {
  url: 'https://www.jetbrains.com/webstorm/',
  imgSrc: requireImg('webstorm.png'),
  keyWords: ['webstorm'],
  label: 'WebStorm',
}, {
  url: 'http://www.sublimetext.com/',
  imgSrc: requireImg('sublimetext.png'),
  keyWords: ['sublimetext'],
  label: 'SublimeText',
}, {
  url: 'https://stackblitz.com/',
  githubUrl: 'https://github.com/stackblitz/core',
  imgSrc: requireImg('stackblitz.png'),
  keyWords: ['stackblitz'],
  label: 'StackBlitz',
}, {
  url: 'https://codesandbox.io/',
  githubUrl: 'https://github.com/codesandbox/codesandbox-client',
  imgSrc: requireImg('codesandbox.png'),
  keyWords: ['codesandbox'],
  label: 'CodeSandbox',
}, {
  url: 'https://github.com/jsfiddle',
  githubUrl: 'https://jsfiddle.net/',
  imgSrc: requireImg('js-fiddle.png'),
  keyWords: ['js-fiddle'],
  label: 'JSFiddle',
}, {
  url: 'https://codepen.io/',
  imgSrc: requireImg('codepen.png'),
  keyWords: ['codepen'],
  label: 'CodePen',
}, {
  url: 'https://tinypng.com/',
  imgSrc: requireImg('tinypng.png'),
  keyWords: ['tinypng'],
  label: 'TinyPNG',
}, {
  url: 'https://dev.to/',
  imgSrc: requireImg('devto.png'),
  keyWords: ['dev'],
  label: 'DEV',
  darkInvert: true,
}, {
  url: 'https://juejin.im/',
  githubUrl: 'https://github.com/xitu',
  imgSrc: requireImg('juejin.png'),
  keyWords: ['掘金', 'juejin'],
  label: '掘金',
}, {
  url: 'https://segmentfault.com/',
  imgSrc: requireImg('sf.png'),
  keyWords: ['segmentfault', 'sf', '思否', 'sifou'],
  label: '思否',
}, {
  url: 'https://www.zhihu.com/',
  imgSrc: requireImg('zhihu.png'),
  keyWords: ['知乎', 'zhihu'],
  label: '知乎',
}, {
  url: 'https://kb.cnblogs.com/',
  imgSrc: requireImg('cnblogs.png'),
  keyWords: ['博客园', 'cnblogs', 'bokeyuan'],
  label: '博客园',
  darkInvert: true,
}, {
  url: 'https://www.jianshu.com/',
  imgSrc: requireImg('jianshu.png'),
  keyWords: ['简书', 'jianshu'],
  label: '简书',
}]

export default apps
