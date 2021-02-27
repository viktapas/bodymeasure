import {StyleSheet} from 'react-native';
import Colors from '../../../commons/colors';

const styles = StyleSheet.create({
  Profile: {},
  ProfileHeader: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  ProfileUserImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
    borderWidth: 2,
    borderColor: Colors.LIGHT.GRAY_LIGHT,
  },
  ProfileUser: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  ProfileUserName: {
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  ProfileUserJoined: {
    color: Colors.LIGHT.GRAY,
  },
  ProfileUserContent: {},
  ProfileUserChevron: {
    marginLeft: "auto",
  },
  ProfileUserChevronIcon: {
    color: Colors.LIGHT.GRAY,
  },
});

export default styles;
