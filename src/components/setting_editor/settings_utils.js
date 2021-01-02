export const languages = [
  {
    lang: 'NodeJs',
    serverName: 'nodejs',
    code: 'javascript',
    versions: [
      { ver: '6.3.1', vi: 0 },
      { ver: '9.2.0', vi: 1 },
      { ver: '10.1.0', vi: 2 },
      { ver: '12.11.1', vi: 3 },
    ],
  },
  {
    lang: 'Java',
    serverName: 'java',
    code: 'java',
    versions: [
      { ver: 'JDK 1.8.0_66', vi: 0 },
      { ver: 'JDK 9.0.1', vi: 1 },
      { ver: 'JDK 10.0.1', vi: 2 },
      { ver: 'JDK 11.0.4', vi: 3 },
    ],
  },
  {
    lang: 'Python 2',
    serverName: 'python2',
    code: 'python',
    versions: [
      { ver: '2.7.11', vi: 0 },
      { ver: '2.7.15', vi: 1 },
      { ver: '2.7.16', vi: 2 },
    ],
  },
  {
    lang: 'Python 3',
    serverName: 'python3',
    code: 'python',
    versions: [
      { ver: '3.5.1', vi: 0 },
      { ver: '3.6.3', vi: 1 },
      { ver: '3.6.5', vi: 2 },
      { ver: '3.7.4', vi: 3 },
    ],
  },
  {
    lang: 'C',
    serverName: 'c',
    code: 'c_cpp',
    versions: [
      { ver: 'GCC 5.3.0', vi: 0 },
      { ver: 'GCC 7.2.0', vi: 2 },
      { ver: 'GCC 8.1.0', vi: 3 },
      { ver: 'GCC 9.1.0', vi: 4 },
    ],
  },
  {
    lang: 'C++',
    serverName: 'cpp',
    code: 'c_cpp',
    versions: [
      { ver: 'GCC 5.3.0', vi: 0 },
      { ver: 'GCC 7.2.0', vi: 2 },
      { ver: 'GCC 8.1.0', vi: 3 },
      { ver: 'GCC 9.1.0', vi: 4 },
    ],
  },
  {
    lang: 'C++ 14',
    serverName: 'cpp14',
    code: 'c_cpp',
    versions: [
      { ver: 'GCC 5.3.0', vi: 0 },
      { ver: 'GCC 7.2.0', vi: 1 },
      { ver: 'GCC 8.1.0', vi: 2 },
      { ver: 'GCC 9.1.0', vi: 3 },
    ],
  },
  {
    lang: 'C++ 17',
    serverName: 'cpp17',
    code: 'c_cpp',
    versions: [{ ver: 'GCC 9.10', vi: 0 }],
  },
];

export const themes = [
  { name: 'Monokai', code: 'monokai' },
  { name: 'github', code: 'github' },
  { name: 'Tomorrow', code: 'tomorrow' },
  { name: 'Kuroir', code: 'kuroir' },
  { name: 'Twilight', code: 'twilight' },
  { name: 'Xcode', code: 'xcode' },
  { name: 'Textmate', code: 'textmate' },
  { name: 'Solarized Dark', code: 'solarized_dark' },
  { name: 'Solarized Light', code: 'solarized_light' },
  { name: 'Terminal', code: 'terminal' },
];

export const tabSizes = [2, 4, 8];

export const getFontsizes = () => {
  let sz = [];
  for (let i = 6; i < 65; i++) {
    if (i % 2 === 0) sz.push(i);
  }
  return sz;
};

export const initialSetting = {
  lang: {
    lang: 'NodeJs',
    serverName: 'nodejs',
    code: 'javascript',
    versions: [
      { ver: '6.3.1', vi: 0 },
      { ver: '9.2.0', vi: 1 },
      { ver: '10.1.0', vi: 2 },
      { ver: '12.11.1', vi: 3 },
    ],
  },
  theme: { name: 'Monokai', code: 'monokai' },
  fsize: 12,
  tsize: 4,
};
