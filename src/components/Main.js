import React, { Component } from 'react'
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import { main } from '../styles/index'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  }

  render () {
    return (
      <View style={main.background}>
        <View style={{ flex: 1 }}>
          <Text style={main.subtitle}>Moda Feminina</Text>
          <View style={main.areaProduct}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show1: true }) }}>
                <Image style={main.product} source={require('../images/vestido.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show1}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>vestido</Text>
                        <Text style={main.textModal2}>R$ 60,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show1: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show2: true }) }}>
                <Image style={main.product} source={require('../images/casacoFeminino.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show2}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>casaco</Text>
                        <Text style={main.textModal2}>R$ 90,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show2: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show3: true }) }}>
                <Image style={main.product} source={require('../images/calcaFeminina.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show3}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>calça jeans</Text>
                        <Text style={main.textModal2}>R$ 80,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show3: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, bottom: 3 }}>
          <Text style={main.subtitle}>Moda Masculina</Text>
          <View style={main.areaProduct}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show4: true }) }}>
                <Image style={main.product} source={require('../images/camisaMasculina.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show4}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>camisa</Text>
                        <Text style={main.textModal2}>R$ 65,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show4: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show5: true }) }}>
                <Image style={main.product} source={require('../images/casacoMasculino.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show5}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>casaco</Text>
                        <Text style={main.textModal2}>R$ 75,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show5: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => { this.setState({ show6: true }) }}>
                <Image style={main.product} source={require('../images/calcaMasculina.webp')} />
              </TouchableOpacity>
              <Modal transparent={true} visible={this.state.show6}>
                <View style={main.areaModal}>
                  <View style={main.modal}>
                    <View style={{ flex: 1 }}>
                      <View style={main.headerModal}>
                        <Text style={main.textModal1}>DESCRIÇÃO</Text>
                      </View>
                      <View style={main.mainModal}>
                        <Text style={main.textModal2}>calça jeans</Text>
                        <Text style={main.textModal2}>R$ 90,00</Text>
                      </View>
                      <View style={main.footerModal}>
                        <TouchableOpacity style={main.button} onPress={() => { this.setState({ show6: false }) }}>
                          <Text style={main.textButton}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
