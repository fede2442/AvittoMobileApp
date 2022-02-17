import { View, Text, CheckBox } from 'react-native'
import React from 'react'

const DiaCheckbox = ({element, formikProps}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
        <CheckBox onValueChange={nextValue => formikProps.setFieldValue(`dias.${element}`, nextValue)}
                            value={formikProps?.values?.dias?.[element] } />
        <Text>{element}</Text>
    </View>
  )
}

export default DiaCheckbox