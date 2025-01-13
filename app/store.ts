import { makeAutoObservable } from 'mobx'

class ToolStore {
  selectedToolTitle: string = '全部'
  selectedToolTag: string = 'all' // 新增属性

  constructor() {
    makeAutoObservable(this)
  }

  setSelectedToolTitle(title: string) {
    this.selectedToolTitle = title
  }

  setSelectedToolTag(tag: string) { // 新增方法
    this.selectedToolTag = tag
  }
}

const toolStore = new ToolStore()
export default toolStore
