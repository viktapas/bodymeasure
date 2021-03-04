import {StyleSheet} from 'react-native';
import Colors from '../../../commons/colors';

const styles = StyleSheet.create({
  root: {},
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.LIGHT.BORDER,
    borderBottomWidth: 1,
  },
  headerLeftBtn: {marginRight: 'auto'},
  headerRightBtn: {marginLeft: 'auto'},
  headerTitle: {
    marginHorizontal: 'auto',
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
