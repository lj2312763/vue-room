import {GENDER_TYPE, DORMITORY_TYPE, UNIT_TYPE, HOUSE_TYPE, HOUSE_STATUS_TYPE} from '@/enum'
const count = 20
const houseList = []
// 生成模拟数据
for (let i = 0; i < count; ++i) {
  const rodm1 = Math.round(Math.random() * 2)
  const rodm2 = Math.round(Math.random() * 2)
  const rodm3 = Math.round(Math.random() * 2)
  const rodm4 = Math.random() > 0.5 ? 1 : 0
  houseList.push({
    id: i, doorplate: 'A-15-' + i,
    dormitoryType: DORMITORY_TYPE[rodm4].value,
    dormitoryTypeStr: DORMITORY_TYPE[rodm4].name,
    type: HOUSE_TYPE[rodm1].value,
    typeStr: HOUSE_TYPE[rodm1].name,
    unit: UNIT_TYPE[rodm2].value,
    unitStr: UNIT_TYPE[rodm2].name,
    nowDwell: rodm3 > 0 ? 1 : 0,
    max: HOUSE_TYPE[rodm1].max,
    status: HOUSE_STATUS_TYPE[rodm3].value,
    statusStr: HOUSE_STATUS_TYPE[rodm3].name,
    rent: '120.00元',
    radix: '120',
    reading: '1208',
    price: '0.52元/度',
    balance: '168.1元',
  })
}
const index = Math.round(Math.random() * count)
const checkInCount = 20
const checkInCountList = []
// 生成模拟数据
for (let i = 0; i < checkInCount; ++i) {
  const rodm4 = Math.random() > 0.5 ? 1 : 0
  checkInCountList.push({
    id: i,
    name: '张' + (i + 1),
    gender: GENDER_TYPE[rodm4].value,
    genderStr: GENDER_TYPE[rodm4].name,
    identityCard: 12345,
    phone: 13812345678,
    department: '技术总工程师',
    number: '123456',
    checkInDate: '2019-04-15',
    // checkOutDate: '2019-04-19',
    status: rodm4,
  })
}
// const checkIndex = Math.round(Math.random() * count)
export default class SimulateData {
  // 获取指定的房屋信息
  getHouse(i = index){
    return houseList[i]
  }
  // 获取房屋列表信息
  getHouseList(){
    return houseList
  }
  // 获取入住列表信息
  getCheckInList(){
    return checkInCountList
  }
}
