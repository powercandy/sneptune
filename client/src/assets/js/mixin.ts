const mixin: Object = {
  filters: {
    addNum (num: string): number {
      return Number(num) + 1
    }
  }
}

export default mixin
