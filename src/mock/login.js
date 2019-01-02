import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541525075693&di=2ed31dc65b4c3f6405ea254cad73f7f4&imgtype=0&src=http%3A%2F%2Fwww.36588.com.cn%3A8080%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fsmall%2Fe6e49f41-0241-4e7d-9642-3c137588f2c5.png',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541525075693&di=2ed31dc65b4c3f6405ea254cad73f7f4&imgtype=0&src=http%3A%2F%2Fwww.36588.com.cn%3A8080%2FImageResourceMongo%2FUploadedFile%2Fdimension%2Fsmall%2Fe6e49f41-0241-4e7d-9642-3c137588f2c5.png',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
