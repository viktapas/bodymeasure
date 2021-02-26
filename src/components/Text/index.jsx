import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Txt = ({children}) => {
  return (
      <Text>{children}</Text>
  )
}

function H1({children, style}) {
  return <RootTxt style={[styles.h1, style]}>{children}</RootTxt>
}
function H2({children, style}) {
  return <RootTxt style={[styles.h2, style]}>{children}</RootTxt>
}
function P({children, style}) {
  return <RootTxt style={[styles.p, style]}>{children}</RootTxt>
}
function Overline({children, style}) {
  return <RootTxt style={[styles.overline, style]}>{children}</RootTxt>
}

function RootTxt({children, style}) {
  return <Text style={[styles.root, style]}>{children}</Text>
}

Txt.H1 = H1;
Txt.H2 = H2;
Txt.P = P;
Txt.Overline = Overline;

export default Txt
