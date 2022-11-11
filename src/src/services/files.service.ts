import assert = require("assert")
import { capitallizeFirstLetter, decapitallizeFirstLetter } from "../utils/common"
import { StaticFileServiceI } from "./file.serviceI"

class StaticFileService implements StaticFileServiceI {

  private _titleSmall: string = null
  private _titleCapital: string = null
  private _autoCreate: string = null

  constructor(rawTitle: string, autoCreate: boolean = true) {
    this.throwIfInvalidTitle(rawTitle)
    const title = rawTitle.toLowerCase()
    this.setTitleSmall(title)
    this.setTitleCapital(title)
    if (autoCreate) {
      this.init()
    }
  }

  private init(): void {
    this.createDTO()
    this.createModel()
    this.createDAO()
    this.createService()
    this.createRouter()
  }

  public createDAO(): void {

  }

  public createDTO(): void {

  }

  public createModel(): void {

  }

  public createService(): void {

  }

  public createRouter(): void {

  }

  //   Internal Methods below

  private throwIfInvalidTitle(title: string) {
    assert(title.trim(), new Error("Invalid input"))
  }

  private setTitleSmall(title: string): void {
    this._titleSmall = decapitallizeFirstLetter(title)
  }

  private setTitleCapital(title: string): void {
    this._titleSmall = capitallizeFirstLetter(title)
  }

}