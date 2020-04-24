
// 宿舍类型
export const DORMITORY_TYPE = [{ name: 'A宿舍楼', value: 'a'}, { name: 'B宿舍楼', value: 'b'}]
// 单元类型
export const UNIT_TYPE = [{ name: '甲单元', value: '1'}, { name: '乙单元', value: '2'}, { name: '丙单元', value: '3'}, { name: '丁单元', value: '4'}]
// 房型类型
export const HOUSE_TYPE = [{ name: '单人间', value: '1', max: 1 }, { name: '双人间', value: '2', max: 2 }, { name: '四人间', value: '3', max: 4 }]
// 房态类型
export const NOWDWELL = { name: '在住', value: '1'}
export const MAINTENANCE = { name: '维修中', value: '2'}
export const FREE = { name: '空闲中', value: '3'}
export const HOUSE_STATUS_TYPE = [NOWDWELL, MAINTENANCE, FREE]
// 性别类型
export const MALE = { name: '男', value: 'male'}
export const WOMAN = { name: '女', value: 'woman'}
export const GENDER_TYPE = [MALE, WOMAN]
// 婚否类型
export const MARRIED = { name: '已婚', value: '1'}
export const DISCOVERTURE = { name: '未婚', value: '0'}
export const MARITAL = [MARRIED, DISCOVERTURE]
