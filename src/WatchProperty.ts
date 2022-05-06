const WatchProperty = (target: any, memberName: string) => {
    let currentValue: any = target[memberName];  
    Object.defineProperty(target, memberName, {
      set(this: any, newValue: any) {
        console.log("watchProperty called on " + memberName + " with value " + newValue);
        currentValue = newValue;
        this.notify(memberName);
      },
      get() {return currentValue;}
    });
  };