interface Foo {
  [key: string]: string; // all key must be string
}

export default new (class {
  store: Foo = {};
  setItem = (key: string | number, val: string) => (this.store[key] = val);
  getItem = (key: string | number) => this.store[key];
  removeItem = (key: string | number) => {
    delete this.store[key];
  };
  clear = () => (this.store = {});
})();
