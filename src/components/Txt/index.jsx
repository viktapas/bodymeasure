import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Txt = ({children}) => {
  return (
      <Text>{children}</Text>
  )
}

function H1({children}) {
  return <RootTxt style={styles.h1}>{children}</RootTxt>
}
function H2({children}) {
  return <RootTxt style={styles.h2}>{children}</RootTxt>
}
function H3({children}) {
  return <RootTxt style={styles.h3}>{children}</RootTxt>
}
function P({children}) {
  return <RootTxt style={styles.p}>{children}</RootTxt>
}
function Overline({children}) {
  return <RootTxt style={styles.overline}>{children}</RootTxt>
}

function RootTxt({children, style}) {
  return <Text style={[styles.root, style]}>{children}</Text>
}

Txt.H1 = H1;
Txt.H2 = H2;
Txt.H3 = H3;
Txt.P = P;
Txt.Overline = Overline;

export default Txt
