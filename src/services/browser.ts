
export class Browser {

  constructor() {
    // empty
  }

  public isAndroid(): boolean {
    const check = navigator.userAgent.match(/Android/i);
    return this.resolve(check);
  }

  public isBlackBerry(): boolean {
    const check = navigator.userAgent.match(/BlackBerry/i);
    return this.resolve(check);
  }

  public isiOS(): boolean {
    const check = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    return this.resolve(check);
  }

  public isOpera(): boolean {
    const check = navigator.userAgent.match(/Opera Mini/i);
    return this.resolve(check);
  }

  public isWindows(): boolean {
    const check = navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    return this.resolve(check);
  }

  public isMobile(): boolean {
    return (this.isAndroid() ||
      this.isBlackBerry() ||
      this.isiOS() ||
      this.isOpera() ||
      this.isWindows());
  }

  private resolve(data: RegExpMatchArray | null): boolean {
    let result: boolean;
    if (data === null) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

}
