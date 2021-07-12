import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Base from '/src/widgets/base';
import './index.less'

export default class Index extends Base {
  constructor (props) {
		super(props);
	}

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('我是页面');
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
