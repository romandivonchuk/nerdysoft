import { Announcement } from './interfaces';
import { Injectable } from '@angular/core';
import { DATA } from './mockData'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  data: Announcement[] = DATA
  constructor() { }

  _edit: Announcement | undefined

  getData() {
    return this.data
  }

  addData(item: any) {
    if (!item.id) {
      item.id = this.data.length+40
    }
    item.data = new Date()
    this.data = [item, ...this.data]
  }

  delete(id:number) {
    this.data = this.data.filter((item) => item.id !== id)
  }

  getDataForEdit(id: number) {
    return this.data.find(item => item.id === id)
  }

  getDataById(id: number) {
    let index: number
    let top: any
    const data = this.data.find((itm, idx) => {
      if (itm.id === id) {
        index = idx
        return true
      } else {
        return false
      }
     })

    top = this.getSimilar(index!)


    return {data, top}
  }

  getSimilar(index: number) {
    const key = new Set([...this.data[index].title.split(' '), ...this.data[index].description.split(' ')])
    let coincidenceCountArr: any = []
    this.data.forEach( (item, idx) => {
      if (index !== idx) {
        const text = " " + item.title + " " + item.description + " "
        let coincidenceCount = 0
        for (let word of key) {
          word = ' '+word+' '
          let rem = new RegExp(word,'gm')
          if (text.match(rem)) {
            coincidenceCount += text.match(rem)!.length
          }
        }
        coincidenceCountArr.push({coincidenceCount, idx})
      }
    })

    let sortArr = coincidenceCountArr.sort((a:any, b:any) => {
      const aC = a.coincidenceCount
      const bC = b.coincidenceCount
      if (aC - bC > 0) {
        return -1
      }
      if (aC -bC < 0) {
        return 1
      }
      return 0
    })
    sortArr= sortArr.slice(0,3)
    this.data[sortArr[0].idx]
    return [this.data[sortArr[0].idx],this.data[sortArr[1].idx] ,this.data[sortArr[2].idx]]

  }

}
