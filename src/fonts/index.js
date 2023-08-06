import BasisGrotesqueProWoff from './BasisGrotesquePro-Regular.woff';
import BasisGrotesqueBoldProWoff from './BasisGrotesquePro-Bold.woff';

export const regular = {
  fontFamily: 'Basis Grotesque Pro',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Basis Grotesque Pro'),
    url(${BasisGrotesqueProWoff})
    format('woff')
  `,
};


export const bold = {
  fontFamily: 'Basis Grotesque Pro Bold',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Basis Grotesque Pro Bold'),
    url(${BasisGrotesqueBoldProWoff})
    format('woff')
  `,
};
// export const regular = {
//   fontFamily: 'Basis Grotesque Pro',
//   fontStyle: 'normal',
//   fontWeight: 'normal',
//   src: `
//     local('Basis Grotesque Pro'),
//     url(${BasisGrotesqueProWoff})
//     format('woff')
//   `,
// };
//
// export const bold = {
//   fontFamily: 'Basis Grotesque Pro Bold',
//   fontStyle: 'normal',
//   fontWeight: 'normal',
//   src: `
//     local('Basis Grotesque Pro Bold'),
//     url(${BasisGrotesqueBoldProWoff})
//     format('woff')
//   `,
// };
