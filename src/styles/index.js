import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const header = StyleSheet.create({
  background: {
    width: width,
    flex: 1
  },
  areaMenu: {
    flex: 1,
    backgroundColor: '#424242',
    flexDirection: 'row'
  },
  iconMenu: {
    left: 5,
    top: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 5
  },
  iconCart: {
    alignItems: 'center',
    top: 3
  },
  iconSearch: {
    top: 3
  },
  banner: {
    width: 360,
    height: 128
  },
  description1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  areaButton: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#ff6347',
    width: 100,
    height: 32,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
})

const main = StyleSheet.create({
  background: {
    width: width,
    flex: 1
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333'
  },
  areaProduct: {
    flexDirection: 'row'
  },
  product: {
    width: 85,
    height: 90
  },
  areaModal: {
    backgroundColor: '#c0c0c0aa',
    flex: 1
  },
  modal: {
    width: 180,
    height: 150,
    backgroundColor: 'white',
    top: 210,
    left: 90,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 7
  },
  headerModal: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0'
  },
  mainModal: {
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0'
  },
  footerModal: {
    flex: 1,
    left: 100,
    top: 5
  },
  textModal1: {
    fontSize: 18,
    color: '#333333',
    top: 7,
    left: 7
  },
  textModal2: {
    fontSize: 15,
    color: '#333333',
    top: 12,
    left: 20
  },
  button: {
    width: 70,
    height: 25,
    backgroundColor: '#616161',
    justifyContent: 'center',
    borderRadius: 3
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
})

const footer = StyleSheet.create({
  background: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#9e9e9e'
  },
  description3: {
    color: '#333333',
    textAlign: 'center',
    top: 8,
    fontSize: 13
  },
  store: {
    width: 80,
    height: 122
  },
  description4: {
    color: '#333333',
    textAlign: 'center',
    top: 8,
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export { header, main, footer }
