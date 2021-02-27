import {StyleSheet} from 'react-native';
import Colors from '../../../commons/colors';

const styles = StyleSheet.create({
  Root: {},
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderBottomColor: Colors.LIGHT.BORDER,
    borderTopColor: Colors.LIGHT.BORDER,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: Colors.LIGHT.GRAY_LIGHT,
  },
  HeaderLabel: {
    fontWeight: 'bold',
  },
  HeaderBtn: {
    borderRadius: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT.BORDER,
  },
  ItemContainer: {
    // borderBottomColor: Colors.LIGHT.BORDER,
    // borderBottomWidth: 1,
  },
  Item: {
    // paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT.BORDER,
    // backgroundColor: 'red',
  },
  ItemContentLabel: {
    paddingTop: 18,
    flex: 1,
  },
  ItemContentChevron: {
    paddingTop: 18,
  },
  ItemContentChildren: {
    paddingTop: 18,
    marginRight: 10,
  },
  ItemIcon: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: 'tomato',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 42,
  },
});

export default styles;
