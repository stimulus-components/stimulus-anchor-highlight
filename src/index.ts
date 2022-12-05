import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static classes = ['highlight']

  highlightClasses: String
  matchingElement: HTMLElement

  initialize (): void {
    this.onHashChange = this.onHashChange.bind(this)
  }

  connect (): void {
    this.onHashChange()
    window.addEventListener('hashchange', this.onHashChange)
  }

  disconnect (): void {
    window.removeEventListener('hashchange', this.onHashChange)
  }

  onHashChange (): void {
    this.matchingElement?.classList?.remove(...this.highlightClasses)

    if (this.anchorValue) {
      this.matchingElement = this.element.querySelector(`#${this.anchorValue}`)
      this.matchingElement?.classList?.add(...this.highlightClasses)
    }
  }

  get anchorValue (): string {
    return window.location.hash.slice(1)
  }
}
